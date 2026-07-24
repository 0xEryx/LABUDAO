# LABUDAO Frontend

这是一个纯静态、多页面的产品前端，包含：

- 通用收藏品协议介绍与 Labubu Pilot 边界
- 钱包连接（MetaMask / EIP-1193）
- 在统一 Governance 页面中提供 `freeMint(uint256 amount)`、提案、投票与动态组件
- 完整的 Redeem 前端原型：请求、锁定、审核、交付、确认与进度时间线
- 全屏 Three.js Labubu 粒子背景
- React Three Fiber 物理吊牌权益卡，可根据钱包中的 LABU 余额切换 Archive、Alloy、Obsidian、Patron 四个等级
- 可用于线下活动核验的二维码凭证视图
- 桌面端与移动端响应式导航

权益卡源码位于 `../pass-src/`，生产构建输出到 `frontend/pass/`。修改卡片后运行：

```bash
npm install
npm run build:pass
```

如果治理合约或代币合约的 ABI 与当前假设不一致，请修改 `frontend/app.js` 中的 ABI。

当前主网合约只代表公开 Pilot，并不包含 Asset Passport、托管证明或实物兑换状态机。产品愿景与实施边界见 [`../docs/PROTOCOL-VISION.md`](../docs/PROTOCOL-VISION.md)。

`redeem.html` 只模拟界面状态，不会请求钱包签名、锁定代币、联系托管方或写入链上。旧的 `mint.html` 与 `dashboard.html` 会分别跳转至 Governance 的 Participate 与 Activity 区域。
