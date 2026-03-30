# LABUDAO Frontend

这是一个纯静态前端原型，包含：

- 钱包连接（MetaMask / EIP-1193）
- `freeMint(uint256 amount)` 的 Mint 功能
- 基于 OpenZeppelin Governor 的提案与投票组件
- Vanta Clouds 背景

如果治理合约或代币合约的 ABI 与当前假设不一致，请修改 `frontend/app.js` 中的 ABI。
