[English](#english) | [中文](#中文)

---

<a id="english"></a>

# LABUDAO

> DAO-Governed Tokenization of Collectible Assets
> HKU Capstone x RWA.ltd

## Project Introduction

LABUDAO is a DAO-governed prototype system for the tokenization of non-financial Real World Assets (RWAs), developed as a University of Hong Kong (HKU) Capstone project and fully supported by RWA.ltd. It explores how blockchain technology can bring liquidity, transparency, and community governance to physical assets such as cultural collectibles and limited-edition designer toys.

**Core Concepts:**

- **DAO Governance** — Governance rules are encoded as transparent, immutable smart contracts on the blockchain, enabling collective decision-making without centralized control
- **Non-Financial RWA Tokenization** — Focuses on asset representation and usage rights management rather than securitization. Maps physical assets to on-chain tokens to build a verifiable, traceable, and interactive system
- **Redeem Mechanism** — On-chain token redemption for physical collectible delivery, powered by RWA.ltd global logistics
- **Base Asset** — Labubu Series Blind Box (Hidden Version) — a representative collectible in the designer toy and pop-culture market with scarcity, secondary market value, and cultural recognition

## Mainnet Deployment

| Contract | Address |
|----------|---------|
| $LABU Token (ERC-20) | [`0x45ae2750347DBf7d5bfB421698c1712e87481616`](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616) |
| LABUGovernor (DAO) | [`0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e`](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e) |

**Network:** Ethereum Mainnet (Chain ID: 1)

**Official Portal:** https://labudao.vercel.app/

## $LABU Token

### Token Parameters

| Attribute | Details |
|-----------|---------|
| Name / Ticker | $LABU |
| Blockchain | Ethereum Mainnet |
| Standard | ERC-20 |
| Decimals | 18 |
| Max Supply | 10,000,000 $LABU |

### Allocation (Whitepaper Design)

| Category | Ratio |
|----------|-------|
| Public Sale | 60% |
| Team & Advisors | 15% |
| Ecosystem & Marketing | 10% |
| Liquidity Pool | 10% |
| Treasury Reserve | 5% |

## Contract Overview & Functions

### LABU Contract (`contracts/LABU.sol`)

Standard ERC-20 token contract with free mint capability.

**ERC-20 Standard Implementation:**
- **Metadata**: `name`, `symbol`, `decimals` (18)
- **Supply**: `totalSupply`, `MAX_SUPPLY = 10_000_000 * 1e18`
- **Balances & Allowances**: `balanceOf`, `allowance` mappings
- **Standard Interface**: `transfer`, `approve`, `transferFrom`

**Events & Errors:**
- **Events**: `Transfer`, `Approval` (ERC-20 compliant)
- **Custom Errors**: `ZeroAddress`, `InsufficientBalance`, `InsufficientAllowance`, `MaxSupplyReached` (gas-optimized)

**Free Mint:**
```solidity
function freeMint(uint256 amount) external returns (bool)
```
- `amount` is whole token count, e.g. 100 = 100 $LABU (internally × 1e18)
- Total supply capped at MAX_SUPPLY; first-come-first-served
- No admin control; fully permissionless

### LABUGovernor Contract (`contracts/LABUGovernor.sol`)

Lightweight on-chain governance: propose / castVote / execute.

**Core Functions:**
```solidity
function propose(address target, uint256 value, bytes data, string description) external returns (uint256)
function castVote(uint256 proposalId, uint8 support) external returns (uint256)
function execute(uint256 proposalId) external
```

**View Functions:**
- `proposalCount()` — Total number of proposals
- `getProposal(uint256 id)` — Full proposal details
- `state(uint256 id)` — Proposal state: 0=Invalid, 1=Active, 2=Succeeded, 3=Defeated, 4=Executed
- `quorum()` — Required vote threshold
- `votingPeriod()` — Voting window in blocks
- `hasVoted(uint256 id, address voter)` — Check if address has voted

**Technical Features:**
- Voting weight = LABU balance at time of `castVote`
- Quorum = totalSupply × quorumBps / 10000
- For votes must strictly exceed Against votes to pass
- Gas-optimized with `unchecked` blocks and custom errors

## Governance Framework

| Aspect | Details |
|--------|---------|
| **Voting** | Token-weighted voting by $LABU holdings |
| **Proposals** | Any holder may submit; quorum and majority rules apply |
| **Vote Options** | For (1), Against (0), Abstain (2) |
| **Lifecycle** | Propose → Vote (within votingPeriod blocks) → Execute |
| **Transparency** | All governance actions recorded on-chain, auditable and traceable |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Blockchain | Ethereum Mainnet |
| Smart Contracts | Solidity ^0.8.19 |
| Web3 Library | ethers.js v6 |
| Frontend | HTML5, JavaScript (ES2020+) |
| Styling | Tailwind CSS, Google Fonts (Manrope + Inter), Material Symbols |
| Wallet | MetaMask (injected provider) |
| Deployment | Vercel (auto-deploy on push) |
| Version Control | GitHub |
| Visual Effects | Vanta.js + Three.js (clouds) |

## Repository Structure

```text
LABUDAO/
├── contracts/
│   ├── LABU.sol                # ERC-20 token contract
│   └── LABUGovernor.sol        # DAO governance contract
├── frontend/
│   ├── index.html              # Main SPA (Tailwind CSS + ethers.js)
│   ├── labubu.webp             # Hero image asset
│   └── app.js                  # Web3 interaction logic
├── assets/
│   └── logos/                  # Tech stack logos (SVG + PNG)
└── README.md
```

## Frontend

The frontend is a single-page application built with Tailwind CSS and ethers.js v6. Features:

- **Wallet Connection** — MetaMask and injected wallet support, auto-reconnect
- **Mint $LABU** — Free mint interface with real-time supply tracking
- **DAO Governance** — Create proposals, cast votes (For/Against/Abstain), execute succeeded proposals
- **Proposal Dashboard** — Dynamic loading of latest proposals with vote progress bars and state labels
- **Physical Redemption** — Information flow for burning tokens and receiving physical collectibles
- **Responsive** — Mobile and desktop layouts
- **Toast Notifications** — Real-time transaction status feedback
- **Vanta.js** — Animated cloud background effects

## Deployment Guide

### Contract Deployment

#### Prerequisites

1. Install [Foundry](https://book.getfoundry.sh/getting-started/installation) or [Hardhat](https://hardhat.org/)
2. Configure Mainnet RPC and private key

#### Using Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup

forge build

forge create contracts/LABU.sol:LABU \
  --rpc-url $RPC_URL \
  --private-key $PRIVATE_KEY
```

#### Using Hardhat

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
npx hardhat run scripts/deploy.js --network mainnet
```

#### Recommended Compiler Settings

- **Solidity Version**: ^0.8.19
- **Optimizer**: 200 runs
- **EVM Target**: Shanghai

### Frontend Deployment

```bash
cd frontend

# Local development — any static file server:
npx serve .
# or
python3 -m http.server 8080

# Production — deployed via Vercel (auto-deploy on git push to main)
```

## Risk & Disclaimer

1. **Academic Origin**: This project originated as an academic prototype from the HKU Capstone program. It has since been deployed to Ethereum Mainnet with support from RWA.ltd.
2. **No Investment Advice**: $LABU and related on-chain records do not constitute securities or investment instruments. Project content does not constitute legal, tax, financial, or investment advice.
3. **Risk Assumption**: By using this system, you acknowledge and accept risks including smart contract vulnerabilities, network risks, governance failure, and related risks.
4. **No Guarantee**: No returns or asset appreciation are promised. Users interact with smart contracts at their own risk.

## References

- **Whitepaper**: *DAO-Governed Tokenization of Collectible Assets* (HKU Capstone)
- **Official Portal**: https://labudao.vercel.app/
- **Token Contract**: [Etherscan](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616)
- **Governor Contract**: [Etherscan](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e)

---

<a id="中文"></a>

# LABUDAO

> DAO 治理的收藏品资产代币化
> HKU Capstone x RWA.ltd

## 项目简介

LABUDAO 是一个基于 DAO 治理的非金融实物资产（RWA）代币化系统，由香港大学 Capstone 项目推出，RWA.ltd 公司全力扶持。旨在探索区块链技术如何为实体资产（如文化收藏品、限量版潮玩）注入流动性、透明度和社区治理能力。

**核心概念：**

- **DAO 治理** — 治理规则以透明、不可篡改的智能合约形式编码于区块链，实现无需中心化控制的集体决策
- **非金融 RWA 代币化** — 聚焦于资产表示与使用权管理，而非证券化。通过将实体资产映射到链上代币，构建可验证、可追溯、可交互的系统
- **Redeem 兑换机制** — 链上代币兑换实物收藏品，由 RWA.ltd 全球物流网络提供支持
- **基础资产** — Labubu 系列盲盒（隐藏款）— 设计师玩具与潮玩市场中具有稀缺性、二级市场与文化认可度的代表性收藏品

## 主网部署

| 合约 | 地址 |
|------|------|
| $LABU 代币 (ERC-20) | [`0x45ae2750347DBf7d5bfB421698c1712e87481616`](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616) |
| LABUGovernor (DAO 治理) | [`0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e`](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e) |

**网络：** 以太坊主网 (Chain ID: 1)

**官方门户：** https://labudao.vercel.app/

## $LABU 代币

### 代币参数

| 属性 | 详情 |
|------|------|
| 名称 / 代号 | $LABU |
| 区块链 | 以太坊主网 |
| 标准 | ERC-20 |
| 精度 | 18 |
| 最大供应量 | 10,000,000 $LABU |

### 分配结构（白皮书设计）

| 类别 | 比例 |
|------|------|
| 公开发售 | 60% |
| 团队与顾问 | 15% |
| 生态与营销 | 10% |
| 流动性池 | 10% |
| 金库储备 | 5% |

## 合约概述与功能

### LABU 合约 (`contracts/LABU.sol`)

标准 ERC-20 代币合约，支持自由铸造。

**ERC-20 标准实现：**
- **元数据**：`name`、`symbol`、`decimals` (18)
- **供应**：`totalSupply`、`MAX_SUPPLY = 10_000_000 * 1e18`
- **余额与授权**：`balanceOf`、`allowance` 映射
- **标准接口**：`transfer`、`approve`、`transferFrom`

**事件与错误：**
- **事件**：`Transfer`、`Approval`（ERC-20 标准）
- **自定义错误**：`ZeroAddress`、`InsufficientBalance`、`InsufficientAllowance`、`MaxSupplyReached`（Gas 优化）

**自由铸造：**
```solidity
function freeMint(uint256 amount) external returns (bool)
```
- `amount` 为整币数量，如 100 表示铸造 100 $LABU（合约内部 × 1e18）
- 总量不超过 MAX_SUPPLY，先到先得
- 无管理员控制，完全无许可

### LABUGovernor 合约 (`contracts/LABUGovernor.sol`)

轻量链上治理：提案 / 投票 / 执行。

**核心函数：**
```solidity
function propose(address target, uint256 value, bytes data, string description) external returns (uint256)
function castVote(uint256 proposalId, uint8 support) external returns (uint256)
function execute(uint256 proposalId) external
```

**查询函数：**
- `proposalCount()` — 提案总数
- `getProposal(uint256 id)` — 提案详情
- `state(uint256 id)` — 提案状态：0=无效, 1=投票中, 2=通过, 3=未通过, 4=已执行
- `quorum()` — 法定投票门槛
- `votingPeriod()` — 投票窗口（区块数）
- `hasVoted(uint256 id, address voter)` — 查询是否已投票

**技术特性：**
- 投票权重 = 调用 `castVote` 时刻的 LABU 余额
- 法定人数 = totalSupply × quorumBps / 10000
- 赞成票必须严格多于反对票才算通过
- 使用 `unchecked` 块和自定义错误进行 Gas 优化

## 治理框架

| 维度 | 详情 |
|------|------|
| **投票机制** | 按 $LABU 持有量加权投票 |
| **提案流程** | 任何持有者可提交提案，满足法定人数和多数规则后执行 |
| **投票选项** | 赞成 (1)、反对 (0)、弃权 (2) |
| **生命周期** | 创建提案 → 投票（在 votingPeriod 区块内）→ 执行 |
| **透明度** | 所有治理行为记录于链上，可审计、可追溯 |

## 技术栈

| 层级 | 技术 |
|------|------|
| 区块链 | 以太坊主网 |
| 智能合约 | Solidity ^0.8.19 |
| Web3 库 | ethers.js v6 |
| 前端 | HTML5、JavaScript (ES2020+) |
| 样式 | Tailwind CSS、Google Fonts (Manrope + Inter)、Material Symbols |
| 钱包 | MetaMask（注入式提供者）|
| 部署 | Vercel（推送自动部署）|
| 版本控制 | GitHub |
| 视觉效果 | Vanta.js + Three.js（云层动画）|

## 仓库结构

```text
LABUDAO/
├── contracts/
│   ├── LABU.sol                # ERC-20 代币合约
│   └── LABUGovernor.sol        # DAO 治理合约
├── frontend/
│   ├── index.html              # 单页应用 (Tailwind CSS + ethers.js)
│   ├── labubu.webp             # Hero 区域图片
│   └── app.js                  # Web3 交互逻辑
├── assets/
│   └── logos/                  # 技术栈 Logo (SVG + PNG)
└── README.md
```

## 前端

前端为单页应用，使用 Tailwind CSS 和 ethers.js v6 构建。功能包括：

- **钱包连接** — 支持 MetaMask 及其他注入式钱包，自动重连
- **铸造 $LABU** — 免费铸造界面，实时供应量追踪
- **DAO 治理** — 创建提案、投票（赞成/反对/弃权）、执行通过的提案
- **提案仪表盘** — 动态加载最新提案，含投票进度条和状态标签
- **实物兑换** — 销毁代币并获取实物收藏品的信息流程
- **响应式设计** — 适配桌面端与移动端
- **Toast 通知** — 交易状态实时反馈
- **Vanta.js** — 动态云层背景效果

## 部署指南

### 合约部署

#### 环境准备

1. 安装 [Foundry](https://book.getfoundry.sh/getting-started/installation) 或 [Hardhat](https://hardhat.org/)
2. 配置主网 RPC 与私钥

#### 使用 Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup

forge build

forge create contracts/LABU.sol:LABU \
  --rpc-url $RPC_URL \
  --private-key $PRIVATE_KEY
```

#### 使用 Hardhat

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
npx hardhat run scripts/deploy.js --network mainnet
```

#### 推荐编译参数

- **Solidity 版本**：^0.8.19
- **优化器**：200 runs
- **EVM 目标**：Shanghai

### 前端部署

```bash
cd frontend

# 本地开发 — 任意静态文件服务器：
npx serve .
# 或
python3 -m http.server 8080

# 生产环境 — 通过 Vercel 部署（推送到 main 分支自动部署）
```

## 风险与免责声明

1. **学术背景**：本项目源自香港大学 Capstone 学术项目，已在 RWA.ltd 支持下部署至以太坊主网。
2. **非投资建议**：$LABU 及相关链上记录不构成证券或投资工具。项目内容不构成法律、税务、金融或投资建议。
3. **风险承担**：使用本系统即表示知晓并接受智能合约漏洞、网络风险、治理失败等相关风险。
4. **无收益保证**：不承诺任何收益或资产增值。用户自行承担与智能合约交互的风险。

## 参考

- **白皮书**：*DAO-Governed Tokenization of Collectible Assets*（HKU Capstone）
- **官方门户**：https://labudao.vercel.app/
- **代币合约**：[Etherscan](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616)
- **治理合约**：[Etherscan](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e)
