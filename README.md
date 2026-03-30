[English](#english) | [中文](#中文)

---

<a id="english"></a>

# LABUDAO

> RWA + DAO infrastructure for collectible assets
> Collectible RWA Standard — HKU Capstone x RWA.ltd

## Overview

LABUDAO is a Web3 standard framework for collectibles with financial attributes — such as LABUBU, BE@RBRICK, and limited-edition designer toys. It provides:

- **ERC-20 Issuance** — Standardized token issuance for collectible assets, series, or equity pools
- **DAO Governance** — On-chain proposal, voting, and treasury management
- **Redeem Mechanism** — Exchange on-chain tokens for physical collectibles
- **Collectible RWA Standard** — Designed for non-traditional financial collectible assets

Launched as an HKU Capstone project, fully supported by RWA.ltd.

## Mainnet Deployment

| Contract | Address |
|----------|---------|
| $LABU Token (ERC-20) | [`0x45ae2750347DBf7d5bfB421698c1712e87481616`](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616) |
| LABUGovernor (DAO) | [`0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e`](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e) |

**Network:** Ethereum Mainnet (Chain ID: 1)

## Token Details

- **Name:** LABU
- **Symbol:** LABU
- **Decimals:** 18
- **Max Supply:** 10,000,000 LABU
- **Mint:** Free mint — anyone can call `freeMint(amount)` until max supply is reached

## Governance

- **Voting weight:** Based on LABU token balance at the time of voting
- **Proposal lifecycle:** Propose → Vote → Execute
- **Vote options:** For (1), Against (0), Abstain (2)
- **Quorum:** Configurable (totalSupply × quorumBps / 10000)

## Repository Structure

```text
LABUDAO/
├── contracts/
│   ├── LABU.sol              # ERC-20 token contract
│   └── LABUGovernor.sol      # DAO governance contract
├── frontend/
│   ├── index.html            # Main frontend page (Tailwind CSS)
│   ├── labubu.webp           # Hero image asset
│   └── app.js                # Web3 logic (ethers.js v6)
└── README.md
```

## Frontend

The frontend is a single-page application built with Tailwind CSS and ethers.js v6. Features:

- **Wallet Connection** — MetaMask and injected wallet support
- **Mint $LABU** — Free mint interface with real-time supply tracking
- **DAO Governance** — Create proposals, cast votes, execute succeeded proposals
- **Responsive** — Mobile and desktop layouts
- **Toast Notifications** — Real-time transaction feedback

### Run Locally

```bash
cd frontend
# Any static file server works:
npx serve .
# or
python3 -m http.server 8080
```

## Tech Stack

- Solidity ^0.8.19
- ethers.js v6 (CDN)
- Tailwind CSS (CDN)
- Google Fonts (Manrope + Inter)

---

<a id="中文"></a>

# LABUDAO

> 收藏品资产的 RWA + DAO 标准层
> 收藏品 RWA 标准 — HKU Capstone x RWA.ltd

## 项目概述

LABUDAO 是一个面向具有金融属性的收藏品的 Web3 标准框架，例如 LABUBU、暴力熊、限量潮玩与艺术衍生收藏。它提供：

- **ERC-20 发行** — 为收藏品资产、系列或权益池建立标准化的代币发行接口
- **DAO 治理** — 链上提案、投票与金库管理
- **Redeem 兑换** — 链上代币兑换线下实物收藏品
- **收藏品 RWA 标准** — 面向非传统金融资产的收藏品类别

由 HKU Capstone 项目推出，RWA.ltd 公司全力扶持。

## 主网部署

| 合约 | 地址 |
|------|------|
| $LABU 代币 (ERC-20) | [`0x45ae2750347DBf7d5bfB421698c1712e87481616`](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616) |
| LABUGovernor (DAO 治理) | [`0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e`](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e) |

**网络：** 以太坊主网 (Chain ID: 1)

## 代币信息

- **名称：** LABU
- **符号：** LABU
- **精度：** 18
- **最大供应量：** 10,000,000 LABU
- **铸造方式：** 免费铸造 — 任何人均可调用 `freeMint(amount)`，先到先得，铸满为止

## 治理机制

- **投票权重：** 基于投票时刻的 LABU 代币余额
- **提案生命周期：** 创建提案 → 投票 → 执行
- **投票选项：** 赞成 (1)、反对 (0)、弃权 (2)
- **法定人数：** 可配置 (totalSupply × quorumBps / 10000)

## 仓库结构

```text
LABUDAO/
├── contracts/
│   ├── LABU.sol              # ERC-20 代币合约
│   └── LABUGovernor.sol      # DAO 治理合约
├── frontend/
│   ├── index.html            # 前端主页面 (Tailwind CSS)
│   ├── labubu.webp           # Hero 区域图片
│   └── app.js                # Web3 逻辑 (ethers.js v6)
└── README.md
```

## 前端

前端为单页应用，使用 Tailwind CSS 和 ethers.js v6 构建。功能包括：

- **钱包连接** — 支持 MetaMask 及其他注入式钱包
- **铸造 $LABU** — 免费铸造界面，实时供应量追踪
- **DAO 治理** — 创建提案、投票、执行通过的提案
- **响应式设计** — 适配桌面端与移动端
- **Toast 通知** — 交易状态实时反馈

### 本地运行

```bash
cd frontend
# 任意静态文件服务器均可：
npx serve .
# 或
python3 -m http.server 8080
```

## 技术栈

- Solidity ^0.8.19
- ethers.js v6 (CDN)
- Tailwind CSS (CDN)
- Google Fonts (Manrope + Inter)
