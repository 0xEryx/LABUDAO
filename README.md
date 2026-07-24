# LABUDAO

> For LABUBU. By its community.<br>
> 为 LABUBU 而生，由社区共同拥有。

[English](#english) · [中文](#中文) · [Live Portal](https://labudao.vercel.app/) · [Protocol](https://labudao.vercel.app/protocol.html)

---

<a id="english"></a>

## English

### What is LABUDAO?

LABUDAO is a LABUBU-native, community-owned experimental DAO with a non-profit mission.

It was created specifically for the people, objects, stories and collector culture around LABUBU. The organization is not an investment fund, a speculative marketplace or an attempt to extract value from fandom. It is a community commons: a place to preserve provenance, coordinate custody, share cultural access and make accountable decisions about what the community protects.

LABUBU is therefore not a replaceable “pilot asset.” It is the origin, focus and first responsibility of the DAO.

The wider protocol vision comes after proof. If the LABUBU community can complete one trustworthy loop from Asset Passport → Custody → Governance → verified Redemption, LABUDAO will release the protocol, technical foundation, documentation and reference implementation as open-source public infrastructure for collector communities everywhere.

LABUDAO is an independent community initiative. No official affiliation with or endorsement by POP MART or the owners of the LABUBU brand is implied.

### Product Thesis

LABUDAO uses one real collector culture to prove a more accountable way to steward meaningful objects together:

| Protocol idea | What it means | Status |
|---|---|---|
| **Living LABUBU Passport** | One physical LABUBU accumulates origin, condition and lifecycle evidence | Proposed |
| **Verifiable Custody** | Custodian attestations connect the community record to the real object | Proposed |
| **Community Rights** | Exhibition, access, lending, governance, transfer and redemption become legible responsibilities | Proposed |
| **Transparent Decisions** | Community proposals and votes become accountable cultural memory | Pilot live |
| **Open-source Future** | The proven protocol and technical foundation are released for other collector communities | Pledged |

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

### Current LABUBU Experiment vs Open-source Future

| Layer | LABUBU experiment — today | Open-source protocol — after proof |
|---|---|---|
| Identity | `$LABU` ERC-20 participation token | Unique Asset Passport for each collectible |
| Custody | Offchain project process | Verifiable, time-bound custodian attestations |
| Governance | Lightweight onchain governor | Snapshot-safe, role-aware, asset-specific governance |
| Rights | Token-weighted participation | Explicit exhibition, access, lending, transfer and redemption rights |
| Redemption | Product concept only | Request → lock → approve → deliver → confirm state machine |
| Asset scope | LABUBU community and one complete object loop | Open-source infrastructure other collector communities can fork |

The current contracts are a public prototype. `$LABU` is not proof of ownership of a specific physical collectible.

### Live Product

| Page | Purpose |
|---|---|
| [Overview](https://labudao.vercel.app/) | Six-chapter product narrative and protocol vision |
| [Protocol](https://labudao.vercel.app/protocol.html) | Target architecture, lifecycle and participant roles |
| [Governance](https://labudao.vercel.app/dao.html) | Mint `$LABU`, create proposals, vote and review activity in one workspace |
| [Redeem](https://labudao.vercel.app/redeem.html) | Preview the complete request → lock → review → delivery → confirm experience without submitting a real transaction |
| [Roadmap](https://labudao.vercel.app/roadmap.html) | Proof-based path from a LABUBU community experiment to an open-source collector protocol |
| Member Pass | Open the homepage **Pass** control to present a balance-tiered physical-rights credential |

The Redeem page is intentionally interface-only. It does not lock tokens, request a wallet signature, contact a custodian or create an onchain redemption record.

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

The deployed contracts are unaudited prototypes and do not yet implement the full planned protocol:

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
│   ├── dao.html
│   ├── redeem.html
│   ├── roadmap.html
│   ├── redeem-object.png
│   ├── mint.html          # Legacy redirect → Governance / Participate
│   ├── dashboard.html     # Legacy redirect → Governance / Activity
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

### Proof-based Roadmap

1. **Community Ground** — Publish the public charter, non-profit commitment, contribution rules and accountable governance process.
2. **One Object, Full Loop** — Move one LABUBU through Passport → Custody → Governance → verified Redemption.
3. **Cultural Commons** — Use the proven loop for exhibitions, loans, shared stories and public-interest programs.
4. **Open Protocol** — Release audited contracts, documentation, SDK and reference implementation under an open-source license.
5. **Collector Federation** — Let independent sports-card, anime-figure, goods, Nendoroid, art-toy and rare-object communities fork and govern their own versions.

These are proof gates rather than invented calendar promises. LABUDAO advances only when each milestone leaves public, verifiable evidence.

For the full product model, success criteria and non-scope, read [docs/PROTOCOL-VISION.md](docs/PROTOCOL-VISION.md).

### Disclaimer

LABUDAO originated as an HKU Capstone project with support from RWA.ltd. It is an independent community initiative and is not affiliated with or endorsed by POP MART or the owners of the LABUBU brand.

“Non-profit” describes the project’s mission and governance commitment. Unless and until a legally registered non-profit entity is established, it should not be read as a claim of formal charitable status.

The current smart contracts are experimental and unaudited. `$LABU` does not represent securities, investment advice, guaranteed returns or ownership of a specific physical collectible. Interact with the contracts at your own risk.

---

<a id="中文"></a>

## 中文

### LABUDAO 是什么？

LABUDAO 是一个为 LABUBU 收藏文化专门建立、由社区共同拥有、以非营利为使命的实验性 DAO。

它服务的是围绕 LABUBU 形成的人、藏品、故事与收藏文化。LABUDAO 不是投资基金，不是投机市场，也不是从爱好者身上抽取价值的工具。它更接近一个社区公地：共同保存来源历史、协调托管、分享文化体验，并以公开治理的方式决定社区要保护什么。

因此，LABUBU 不是一个随时可以被替换掉的“试验资产”，而是这个 DAO 的起点、核心服务对象与第一份责任。

更大的 Protocol 愿景建立在成功验证之后。只有当 LABUBU 社区真正完成 Asset Passport → 托管 → 治理 → 验证兑换的可信闭环，LABUDAO 才会把协议、技术底层、文档和参考实现完整开源，成为全世界收藏社群都能使用、修改与自治的公共基础设施。

LABUDAO 是独立社区项目，不暗示与 POP MART 或 LABUBU 品牌权利方存在官方隶属、授权或背书关系。

### 产品主张

LABUDAO 用一个真实收藏文化，验证人们能否用更公开、更负责任的方式共同守护有意义的物件：

| 协议亮点 | 含义 | 当前状态 |
|---|---|---|
| **Living LABUBU Passport / 活的 LABUBU 护照** | 一件真实 LABUBU 持续累积来源、状态与生命周期证据 | 规划中 |
| **Verifiable Custody / 可验证托管** | 托管证明把社区记录与真实物件连接起来 | 规划中 |
| **Community Rights / 社区权利** | 展览、访问、借展、治理、转移和兑换成为清晰责任 | 规划中 |
| **Transparent Decisions / 公开决策** | 提案与投票成为可追责的社区文化记忆 | Pilot 已上线 |
| **Open-source Future / 开源未来** | 将验证成功的协议和技术底层交给其他收藏社群 | 公开承诺 |

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

### 当前 LABUBU 实验与开源未来

| 层级 | 当前 LABUBU 实验 | 完成验证后的开源协议 |
|---|---|---|
| 身份 | `$LABU` ERC-20 参与代币 | 每件藏品独立 Asset Passport |
| 托管 | 项目方线下流程 | 可验证、有时效的托管方证明 |
| 治理 | 轻量链上 Governor | 基于快照、角色与具体资产的治理 |
| 权利 | 基于代币余额的参与权 | 明确的展览、访问、借展、转移与兑换权 |
| 兑换 | 当前仅为产品概念 | 请求 → 锁定 → 审批 → 交付 → 确认状态机 |
| 资产范围 | LABUBU 社区与一件藏品的完整闭环 | 可由其他收藏社群独立分叉的开源基础设施 |

当前主网合约属于公开原型。`$LABU` 并不代表某件特定实体藏品的所有权。

### 已上线产品

| 页面 | 功能 |
|---|---|
| [首页](https://labudao.vercel.app/) | 六章产品叙事与协议愿景 |
| [协议](https://labudao.vercel.app/protocol.html) | 目标架构、生命周期与参与角色 |
| [治理](https://labudao.vercel.app/dao.html) | 在同一个工作区完成 `$LABU` Mint、提案、投票与治理动态查看 |
| [兑换](https://labudao.vercel.app/redeem.html) | 预览请求 → 锁定 → 审核 → 交付 → 确认的完整体验，不提交真实交易 |
| [路线图](https://labudao.vercel.app/roadmap.html) | 从 LABUBU 社区实验走向全球开源收藏协议的证据式路线图 |
| 实体权益卡 | 在首页点击 **Pass**，展示根据 LABU 余额自动分级的线下权益凭证 |

Redeem 页面刻意保持为纯前端原型：不会锁定代币、请求钱包签名、联系托管方，也不会创建链上兑换记录。

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
│   ├── dao.html
│   ├── redeem.html
│   ├── roadmap.html
│   ├── redeem-object.png
│   ├── mint.html          # 旧链接跳转至 Governance / Participate
│   ├── dashboard.html     # 旧链接跳转至 Governance / Activity
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

### 证据式路线图

1. **Community Ground / 社区地基** — 发布公开章程、非营利承诺、贡献规则与可追责治理流程。
2. **One Object, Full Loop / 一件藏品完整闭环** — 让一件 LABUBU 完成 Passport → 托管 → 治理 → 验证兑换。
3. **Cultural Commons / 文化公地** — 将闭环用于展览、借展、故事保存和公共文化项目。
4. **Open Protocol / 开放协议** — 以开源许可证发布审计后的合约、技术文档、SDK 与参考实现。
5. **Collector Federation / 收藏社群联邦** — 让球星卡、动漫手办、谷子、粘土人、潮流玩具和稀有物件社群独立分叉并治理自己的版本。

这些阶段是“证据门槛”，而不是虚构的年份承诺。只有当前一阶段留下公开、可验证的成果，LABUDAO 才进入下一阶段。

完整产品模型、成功标准与明确不做的范围见 [docs/PROTOCOL-VISION.md](docs/PROTOCOL-VISION.md)。

### 免责声明

LABUDAO 起源于香港大学 HKU Capstone 项目，并获得 RWA.ltd 支持。它是独立社区项目，与 POP MART 或 LABUBU 品牌权利方不存在官方隶属或背书关系。

“非营利”描述的是项目使命与治理承诺；在正式完成非营利法律实体注册之前，不应将其理解为已经取得法定慈善或非营利机构资格。

当前智能合约属于实验性、未经审计的原型。`$LABU` 不构成证券、投资建议、收益承诺，也不代表某件特定实体藏品的所有权。与合约交互需自行承担风险。
