// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract LABU {
    // ERC20 metadata
    string public constant name = "LABU";
    string public constant symbol = "LABU";
    uint8  public constant decimals = 18;

    // Supply
    uint256 public totalSupply;
    uint256 public constant MAX_SUPPLY = 10_000_000 * 1e18;

    // Balances & allowances
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    // Events (ERC20 standard)
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // Errors (smaller than revert strings)
    error ZeroAddress();
    error InsufficientBalance();
    error InsufficientAllowance();
    error MaxSupplyReached();

    // --- ERC20 core ---
    function transfer(address to, uint256 value) external returns (bool) {
        _transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) external returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) external returns (bool) {
        uint256 allowed = allowance[from][msg.sender];
        if (allowed < value) revert InsufficientAllowance();

        if (allowed != type(uint256).max) {
            unchecked { allowance[from][msg.sender] = allowed - value; }
            emit Approval(from, msg.sender, allowance[from][msg.sender]);
        }

        _transfer(from, to, value);
        return true;
    }

    function _transfer(address from, address to, uint256 value) internal {
        if (to == address(0)) revert ZeroAddress();
        uint256 bal = balanceOf[from];
        if (bal < value) revert InsufficientBalance();

        unchecked {
            balanceOf[from] = bal - value;
            balanceOf[to] += value;
        }
        emit Transfer(from, to, value);
    }

    // --- Free mint: user chooses amount, first-come-first-served ---
    // amount 是"整币数量"，比如 amount=123 表示 mint 123 LABU
    function freeMint(uint256 amount) external returns (bool) {
        uint256 mintAmount = amount * 1e18;
        if (totalSupply + mintAmount > MAX_SUPPLY) revert MaxSupplyReached();

        unchecked {
            totalSupply += mintAmount;
            balanceOf[msg.sender] += mintAmount;
        }
        emit Transfer(address(0), msg.sender, mintAmount);
        return true;
    }
}
