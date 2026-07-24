# LABUDAO

> One protocol. Every collectible.<br>
> 一个协议，连接所有值得被记住的藏品。

[English](#english) · [中文](#中文) · [Live Portal](https://labudao.vercel.app/) · [Protocol](https://labudao.vercel.app/protocol.html)

---

<a id="english"></a>

## English

### What is LABUDAO?

LABUDAO is building a universal onchain protocol for art, designer objects, cultural artifacts and other valuable physical collectibles.

An artwork is more than material. A collectible is more than a price. Every meaningful object carries authorship, scarcity, custody, affection and the decisions of everyone who has protected it. Yet the object often outlives the systems that describe it: certificates remain in drawers, exhibition rights live in emails, custody becomes a promise and context disappears whenever ownership changes.

LABUDAO exists to give the object, its rights and its history one continuous source of truth.

Labubu is the first live pilot—not the limit of the protocol.

### Product Thesis

LABUDAO is not designed to wrap every object in a speculative token. Its target architecture connects five layers to the same evolving collectible record:

| Protocol idea | What it means | Status |
|---|---|---|
| **Living Passport** | Provenance accumulates instead of resetting whenever an object changes hands | Proposed |
| **Physical Truth** | Custodian attestations connect onchain state to the real object | Proposed |
| **Composable Rights** | Exhibition, access, lending, governance, transfer and redemption become legible rights | Proposed |
| **Collective Memory** | Community decisions become part of the collectible’s history | Pilot live |
| **Open Standard** | Art, design and culture share one lifecycle without rebuilding the same trust layer | Target |

### The Collectible Lifecycle

```text
Physical Object
      ↓
Asset Passport
      ↓
Custody Proof
      ↓
Rights & Governance
      ↓
Verified Transfer or Redemption
```

1. **Register** — Create an Asset Passport for origin, attributes and rights.
2. **Verify** — Record custody attestations linking the onchain record to the physical object.
3. **Steward** — Govern exhibition, access, lending, transfer and other rights.
4. **Redeem** — Close the loop through verified delivery, transfer or retirement of the claim.

### Beyond Ownership

LABUDAO treats ownership as one relationship among many:

- **View** — Experience the object.
- **Exhibit** — Bring it into public culture.
- **Lend** — Share custody without losing history.
- **Govern** — Shape what happens next.
- **Transfer** — Move rights with context intact.
- **Redeem** — Reconnect the onchain record and the physical object.

### Live Pilot vs Target Protocol

| Layer | Labubu Pilot — live today | Universal Protocol — target |
|---|---|---|
| Identity | `$LABU` ERC-20 participation token | Unique Asset Passport for each collectible |
| Custody | Offchain project process | Verifiable, time-bound custodian attestations |
| Governance | Lightweight onchain governor | Snapshot-safe, role-aware, asset-specific governance |
| Rights | Token-weighted participation | Explicit exhibition, access, lending, transfer and redemption rights |
| Redemption | Product concept only | Request → lock → approve → deliver → confirm state machine |
| Asset scope | Labubu proving ground | Art, design, culture and valuable collectibles |

The current contracts are a public prototype. `$LABU` is not proof of ownership of a specific physical collectible.

### Live Product

| Page | Purpose |
|---|---|
| [Overview](https://labudao.vercel.app/) | Six-chapter product narrative and protocol vision |
| [Protocol](https://labudao.vercel.app/protocol.html) | Target architecture, lifecycle and participant roles |
| [Labubu Pilot](https://labudao.vercel.app/mint.html) | Connect a wallet and use the live `$LABU` mint |
| [Governance](https://labudao.vercel.app/dao.html) | Create proposals and cast onchain votes |
| [Activity](https://labudao.vercel.app/dashboard.html) | Review pilot governance activity |
| Member Pass | Open the homepage **Pass** control to present a balance-tiered physical-rights credential |

### Ethereum Mainnet

| Contract | Address |
|---|---|
| `$LABU` Token | [`0x45ae2750347DBf7d5bfB421698c1712e87481616`](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616) |
| `LABUGovernor` | [`0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e`](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e) |

- **Network:** Ethereum Mainnet
- **Chain ID:** `1`
- **Token standard:** ERC-20
- **Maximum supply:** `10,000,000 LABU`

### Current Contract Boundaries

The deployed contracts are unaudited prototypes and do not yet implement the full universal protocol:

- `freeMint` is permissionless until the maximum supply is reached.
- Voting power uses the wallet balance at vote time; historical snapshots are not implemented.
- Any address can create a proposal.
- Governance parameters can currently be changed by any caller.
- Asset Passport, custody registry and enforced redemption contracts are not deployed.

Do not use the current pilot as a production custody, title or redemption system.

### Technology

| Layer | Technology |
|---|---|
| Network | Ethereum Mainnet |
| Contracts | Solidity `^0.8.19` |
| Web3 | ethers.js v6 |
| Frontend | Semantic HTML, JavaScript, React + Vite member-pass module |
| Visual identity | Three.js particle field, React Three Fiber Lanyard, Manrope, IBM Plex Mono |
| Wallet | MetaMask and EIP-1193 injected providers |
| Hosting | Vercel |

### Repository

```text
LABUDAO/
├── contracts/
│   ├── LABU.sol
│   └── LABUGovernor.sol
├── docs/
│   └── PROTOCOL-VISION.md
├── frontend/
│   ├── index.html
│   ├── pass/
│   ├── protocol.html
│   ├── mint.html
│   ├── dao.html
│   ├── dashboard.html
│   ├── particle-labubu.html
│   ├── styles.css
│   └── app.js
├── pass-src/
│   └── src/
│       ├── App.jsx
│       └── components/Lanyard.jsx
├── package.json
├── vite.config.js
├── design-qa.md
└── README.md
```

### Run Locally

```bash
npm install
npm run build:pass
cd frontend
python3 -m http.server 8080
```

Open `http://localhost:8080`.

### Build Sequence

1. **Live Pilot** — `$LABU`, lightweight governance and activity explorer.
2. **Identity + Custody** — One real collectible with an Asset Passport and custodian attestations.
3. **Governance + Redemption** — Snapshot-safe voting, role controls and a complete physical redemption state machine.
4. **Universal Protocol** — Asset-agnostic templates and integration interfaces for creators, custodians, collectors and marketplaces.

The immediate proof is deliberately narrow: move one sealed Labubu through Passport → Custody → Governance → verified Redemption before expanding to many collections.

For the full product model, success criteria and non-scope, read [docs/PROTOCOL-VISION.md](docs/PROTOCOL-VISION.md).

### Disclaimer

LABUDAO originated as an HKU Capstone project with support from RWA.ltd. The current smart contracts are experimental and unaudited. `$LABU` does not represent securities, investment advice, guaranteed returns or ownership of a specific physical collectible. Interact with the contracts at your own risk.

---

<a id="中文"></a>

## 中文

### LABUDAO 是什么？

LABUDAO 正在构建一个面向艺术品、设计作品、文化物件及其他有价值实体藏品的通用链上协议。

艺术品不只是一种材料，藏品也不只是一个价格。每件有意义的物件都承载着创作者、稀缺性、托管关系、情感，以及所有曾经保护过它的人所作出的决定。然而，物件往往比描述它的系统存在得更久：证书留在抽屉里，展览权存在邮件里，托管只能依赖承诺，每次所有权转移都可能让原有语境消失。

LABUDAO 希望让藏品、权利与历史始终连接在同一个连续、可验证的事实记录中。

Labubu 是第一个已上线的 Pilot，而不是协议的边界。

### 产品主张

LABUDAO 的目标不是把所有物件包装成投机代币。目标协议将五个层次连接到同一份持续演化的藏品记录：

| 协议亮点 | 含义 | 当前状态 |
|---|---|---|
| **Living Passport / 活的资产护照** | 藏品转手时，来源历史继续累积，而不是重新开始 | 规划中 |
| **Physical Truth / 实物证明** | 托管证明将链上状态与真实物件连接起来 | 规划中 |
| **Composable Rights / 可组合权利** | 展览、访问、借展、治理、转移和兑换成为清晰权利 | 规划中 |
| **Collective Memory / 集体记忆** | 社区决策成为藏品历史的一部分 | Pilot 已上线 |
| **Open Standard / 开放标准** | 艺术、设计与文化共享生命周期，无需重复建设信任基础设施 | 长期目标 |

### 藏品生命周期

```text
实体藏品
   ↓
Asset Passport / 资产护照
   ↓
Custody Proof / 托管证明
   ↓
Rights & Governance / 权利与治理
   ↓
Verified Transfer or Redemption / 验证转移或兑换
```

1. **登记** — 为来源、属性与权利创建 Asset Passport。
2. **验证** — 记录托管证明，将链上记录与实体藏品连接起来。
3. **共治** — 围绕展览、访问、借展、转移和其他权利作出决定。
4. **兑换** — 通过验证交付、转移或注销完成链上与实物闭环。

### 所有权之外

LABUDAO 将所有权视为人与藏品之间的多种关系之一：

- **观看** — 体验藏品。
- **展览** — 让藏品进入公共文化空间。
- **借展** — 在不丢失历史的情况下共享托管。
- **治理** — 决定藏品接下来会发生什么。
- **转移** — 在保留完整语境的同时转移权利。
- **兑换** — 重新连接链上记录与真实物件。

### 已上线 Pilot 与目标协议

| 层级 | 当前 Labubu Pilot | 目标通用协议 |
|---|---|---|
| 身份 | `$LABU` ERC-20 参与代币 | 每件藏品独立 Asset Passport |
| 托管 | 项目方线下流程 | 可验证、有时效的托管方证明 |
| 治理 | 轻量链上 Governor | 基于快照、角色与具体资产的治理 |
| 权利 | 基于代币余额的参与权 | 明确的展览、访问、借展、转移与兑换权 |
| 兑换 | 当前仅为产品概念 | 请求 → 锁定 → 审批 → 交付 → 确认状态机 |
| 资产范围 | Labubu 验证场 | 艺术、设计、文化与其他有价值藏品 |

当前主网合约属于公开原型。`$LABU` 并不代表某件特定实体藏品的所有权。

### 已上线产品

| 页面 | 功能 |
|---|---|
| [首页](https://labudao.vercel.app/) | 六章产品叙事与协议愿景 |
| [协议](https://labudao.vercel.app/protocol.html) | 目标架构、生命周期与参与角色 |
| [Labubu Pilot](https://labudao.vercel.app/mint.html) | 连接钱包并使用已上线的 `$LABU` Mint |
| [治理](https://labudao.vercel.app/dao.html) | 创建提案并进行链上投票 |
| [动态](https://labudao.vercel.app/dashboard.html) | 查看 Pilot 治理活动 |
| 实体权益卡 | 在首页点击 **Pass**，展示根据 LABU 余额自动分级的线下权益凭证 |

### 以太坊主网

| 合约 | 地址 |
|---|---|
| `$LABU` 代币 | [`0x45ae2750347DBf7d5bfB421698c1712e87481616`](https://etherscan.io/address/0x45ae2750347DBf7d5bfB421698c1712e87481616) |
| `LABUGovernor` | [`0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e`](https://etherscan.io/address/0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e) |

- **网络：** Ethereum Mainnet
- **Chain ID：** `1`
- **代币标准：** ERC-20
- **最大供应量：** `10,000,000 LABU`

### 当前合约边界

已部署合约属于未经审计的原型，尚未实现完整通用协议：

- `freeMint` 在达到最大供应量前完全自由铸造。
- 投票权重使用投票时的钱包余额，尚未实现历史快照。
- 任何地址都可以创建提案。
- 当前任何调用者都可以修改治理参数。
- Asset Passport、托管登记和强制兑换合约尚未部署。

请勿将当前 Pilot 用作生产级托管、产权或实物兑换系统。

### 技术栈

| 层级 | 技术 |
|---|---|
| 网络 | Ethereum Mainnet |
| 智能合约 | Solidity `^0.8.19` |
| Web3 | ethers.js v6 |
| 前端 | 语义化 HTML、JavaScript、React + Vite 权益卡模块 |
| 视觉系统 | Three.js 粒子场、React Three Fiber Lanyard、Manrope、IBM Plex Mono |
| 钱包 | MetaMask 与 EIP-1193 注入式钱包 |
| 部署 | Vercel |

### 仓库结构

```text
LABUDAO/
├── contracts/
│   ├── LABU.sol
│   └── LABUGovernor.sol
├── docs/
│   └── PROTOCOL-VISION.md
├── frontend/
│   ├── index.html
│   ├── pass/
│   ├── protocol.html
│   ├── mint.html
│   ├── dao.html
│   ├── dashboard.html
│   ├── particle-labubu.html
│   ├── styles.css
│   └── app.js
├── pass-src/
│   └── src/
│       ├── App.jsx
│       └── components/Lanyard.jsx
├── package.json
├── vite.config.js
├── design-qa.md
└── README.md
```

### 本地运行

```bash
npm install
npm run build:pass
cd frontend
python3 -m http.server 8080
```

打开 `http://localhost:8080`。

### 实施顺序

1. **已上线 Pilot** — `$LABU`、轻量治理与活动页面。
2. **身份与托管** — 为一件真实藏品建立 Asset Passport 与托管证明。
3. **治理与兑换** — 引入快照投票、角色权限和完整的实体兑换状态机。
4. **通用协议** — 提供与具体资产无关的模板，以及面向创作者、托管方、收藏者和市场的集成接口。

现阶段最重要的验证目标非常具体：先让一只密封 Labubu 完成 Asset Passport → 托管 → 治理 → 验证兑换的完整闭环，再扩展到更多藏品。

完整产品模型、成功标准与明确不做的范围见 [docs/PROTOCOL-VISION.md](docs/PROTOCOL-VISION.md)。

### 免责声明

LABUDAO 起源于香港大学 HKU Capstone 项目，并获得 RWA.ltd 支持。当前智能合约属于实验性、未经审计的原型。`$LABU` 不构成证券、投资建议、收益承诺，也不代表某件特定实体藏品的所有权。与合约交互需自行承担风险。
