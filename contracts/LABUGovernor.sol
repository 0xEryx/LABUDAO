// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title LABUGovernor
 * @notice 轻量治理合约：propose / castVote / execute
 * @dev 投票权重 = castVote 时刻 LABU 余额（无历史快照，生产环境建议升级为快照/Checkpoint 版本）
 */
interface ILABU {
    function balanceOf(address account) external view returns (uint256);
    function totalSupply() external view returns (uint256);
}

contract LABUGovernor {
    // ====== Config ======
    ILABU public immutable token;

    // 以"区块数"为单位的投票期（可按需改或做 setter）
    uint256 public votingPeriod;

    // 法定人数 quorum = totalSupply * quorumBps / 10000（例如 400 = 4%）
    uint256 public quorumBps;

    // ====== Data ======
    struct Proposal {
        address proposer;
        address target;
        uint256 value;
        bytes data;
        string description;

        uint256 startBlock;
        uint256 endBlock;

        uint256 forVotes;
        uint256 againstVotes;
        uint256 abstainVotes;

        bool executed;
    }

    Proposal[] private _proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    // ====== Events ======
    event ProposalCreated(
        uint256 indexed proposalId,
        address indexed proposer,
        address indexed target,
        uint256 value,
        uint256 startBlock,
        uint256 endBlock,
        string description
    );

    // support: 0=Against, 1=For, 2=Abstain
    event VoteCast(uint256 indexed proposalId, address indexed voter, uint8 support, uint256 weight);

    event ProposalExecuted(uint256 indexed proposalId);

    // ====== Errors ======
    error InvalidProposal();
    error InvalidSupport();
    error VotingNotActive();
    error AlreadyVoted();
    error AlreadyExecuted();
    error ProposalNotSucceeded();
    error ExecutionFailed();

    constructor(address tokenAddress, uint256 _votingPeriod, uint256 _quorumBps) {
        require(tokenAddress != address(0), "token=0");
        token = ILABU(tokenAddress);

        votingPeriod = _votingPeriod; // e.g. 1000
        quorumBps = _quorumBps;       // e.g. 400 = 4%
    }

    // 如果你要执行带 value 的提案（转 ETH），需要合约能收款
    receive() external payable {}

    // ====== Proposals ======
    function proposalCount() external view returns (uint256) {
        return _proposals.length;
    }

    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        if (proposalId >= _proposals.length) revert InvalidProposal();
        return _proposals[proposalId];
    }

    function propose(
        address target,
        uint256 value,
        bytes calldata data,
        string calldata description
    ) external returns (uint256 proposalId) {
        if (target == address(0)) revert InvalidProposal();

        uint256 startBlock = block.number;
        uint256 endBlock = startBlock + votingPeriod;

        proposalId = _proposals.length;
        _proposals.push(
            Proposal({
                proposer: msg.sender,
                target: target,
                value: value,
                data: data,
                description: description,
                startBlock: startBlock,
                endBlock: endBlock,
                forVotes: 0,
                againstVotes: 0,
                abstainVotes: 0,
                executed: false
            })
        );

        emit ProposalCreated(proposalId, msg.sender, target, value, startBlock, endBlock, description);
    }

    // ====== Voting ======
    function castVote(uint256 proposalId, uint8 support) external returns (uint256 weight) {
        if (proposalId >= _proposals.length) revert InvalidProposal();
        if (support > 2) revert InvalidSupport();

        Proposal storage p = _proposals[proposalId];

        // active if startBlock <= now <= endBlock
        if (block.number < p.startBlock || block.number > p.endBlock) revert VotingNotActive();
        if (hasVoted[proposalId][msg.sender]) revert AlreadyVoted();

        weight = token.balanceOf(msg.sender);
        hasVoted[proposalId][msg.sender] = true;

        if (support == 0) {
            p.againstVotes += weight;
        } else if (support == 1) {
            p.forVotes += weight;
        } else {
            p.abstainVotes += weight;
        }

        emit VoteCast(proposalId, msg.sender, support, weight);
    }

    // ====== Quorum & State ======
    function quorum() public view returns (uint256) {
        return (token.totalSupply() * quorumBps) / 10000;
    }

    /**
     * 状态码：
     * 0 = Invalid（不存在）
     * 1 = Active（投票中）
     * 2 = Succeeded（通过）
     * 3 = Defeated（未通过/未达 quorum）
     * 4 = Executed（已执行）
     */
    function state(uint256 proposalId) public view returns (uint8) {
        if (proposalId >= _proposals.length) return 0;

        Proposal storage p = _proposals[proposalId];

        if (p.executed) return 4;

        // 仍在投票期内：Active
        if (block.number <= p.endBlock) return 1;

        // 投票结束后判断是否达标
        uint256 totalVotes = p.forVotes + p.againstVotes + p.abstainVotes;

        // 未达 quorum：Defeated
        if (totalVotes < quorum()) return 3;

        // For 必须严格大于 Against 才算通过
        if (p.forVotes <= p.againstVotes) return 3;

        return 2;
    }

    // ====== Execute ======
    function execute(uint256 proposalId) external {
        if (proposalId >= _proposals.length) revert InvalidProposal();

        Proposal storage p = _proposals[proposalId];

        if (p.executed) revert AlreadyExecuted();
        if (state(proposalId) != 2) revert ProposalNotSucceeded();

        p.executed = true;

        (bool ok, ) = p.target.call{value: p.value}(p.data);
        if (!ok) revert ExecutionFailed();

        emit ProposalExecuted(proposalId);
    }

    // ====== Admin (optional) ======
    function setVotingPeriod(uint256 newVotingPeriod) external {
        votingPeriod = newVotingPeriod;
    }

    function setQuorumBps(uint256 newQuorumBps) external {
        require(newQuorumBps <= 10000, "bps>10000");
        quorumBps = newQuorumBps;
    }
}
