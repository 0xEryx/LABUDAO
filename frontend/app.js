/* ============================================================
   LABUDAO – Mainnet Frontend  (ethers v6)
   ============================================================ */

// ---- Contract addresses (Ethereum Mainnet) ----
const TOKEN_ADDR = "0x45ae2750347DBf7d5bfB421698c1712e87481616";
const GOV_ADDR   = "0xd12c73c1f0b4368498f4315adcd3a53bfb922f8e";

// ---- Minimal ABIs (matching actual deployed contracts) ----
const TOKEN_ABI = [
  "function freeMint(uint256 amount) external returns (bool)",
  "function balanceOf(address) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function MAX_SUPPLY() view returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
];

const GOV_ABI = [
  "function propose(address target, uint256 value, bytes data, string description) external returns (uint256)",
  "function castVote(uint256 proposalId, uint8 support) external returns (uint256)",
  "function execute(uint256 proposalId) external",
  "function proposalCount() view returns (uint256)",
  "function getProposal(uint256 proposalId) view returns (tuple(address proposer, address target, uint256 value, bytes data, string description, uint256 startBlock, uint256 endBlock, uint256 forVotes, uint256 againstVotes, uint256 abstainVotes, bool executed))",
  "function state(uint256 proposalId) view returns (uint8)",
  "function quorum() view returns (uint256)",
  "function votingPeriod() view returns (uint256)",
  "function hasVoted(uint256 proposalId, address voter) view returns (bool)",
];

const STATE_LABELS = ["Invalid", "Active", "Succeeded", "Defeated", "Executed"];
const STATE_COLORS = ["#8c8a84", "#9bacc0", "#aeb8c4", "#b9827f", "#e6e8eb"];

// ---- Global state ----
let provider = null;
let signer   = null;
let token    = null;
let governor = null;
let userAddr = null;

// ---- DOM helpers ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function setText(sel, value) {
  const el = $(sel);
  if (el) el.textContent = value;
}

function truncAddr(addr) {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

function fmt(wei, dec = 18) {
  return parseFloat(ethers.formatUnits(wei, dec)).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}

function showStatus(el, msg, type) {
  el.style.display = "block";
  el.className = "tx-status tx-" + type;
  el.textContent = msg;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---- Wallet ----
async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask or another Web3 wallet.");
    return;
  }

  try {
    provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    userAddr = accounts[0];

    token    = new ethers.Contract(TOKEN_ADDR, TOKEN_ABI, signer);
    governor = new ethers.Contract(GOV_ADDR, GOV_ABI, signer);

    setText("#connectBtn", truncAddr(userAddr));
    $("#connectBtn")?.classList.add("connected");
    setText("#heroConnectBtn", "Wallet connected");

    await refreshWalletInfo();
    await loadProposals();
    await loadGovernanceInfo();
  } catch (err) {
    console.error("Connect failed:", err);
    alert("Failed to connect wallet: " + (err.message || err));
  }
}

async function refreshWalletInfo() {
  if (!token || !userAddr) return;

  try {
    const [balance, supply, network] = await Promise.all([
      token.balanceOf(userAddr),
      token.totalSupply(),
      provider.getNetwork(),
    ]);

    const balStr = fmt(balance);
    const supStr = fmt(supply);

    setText("#walletAddress", truncAddr(userAddr));
    setText(
      "#walletNetwork",
      Number(network.chainId) === 1 ? "Ethereum" : "Chain " + network.chainId
    );
    setText("#labuBalance", balStr + " LABU");
    setText("#totalSupplyDisplay", supStr);
    setText("#mintTotalSupply", supStr + " LABU");
    setText("#mintYourBalance", balStr + " LABU");
  } catch (err) {
    console.error("Failed to refresh wallet info:", err);
  }
}

// ---- Mint ----
async function handleMint() {
  if (!signer) {
    alert("Please connect your wallet first.");
    return;
  }

  const statusEl = $("#mintStatus");
  const amount = parseInt($("#mintAmount").value, 10);
  if (!amount || amount <= 0) {
    showStatus(statusEl, "Please enter a valid amount.", "error");
    return;
  }

  try {
    showStatus(statusEl, "Sending transaction...", "info");
    const tx = await token.freeMint(amount);
    showStatus(
      statusEl,
      "Tx sent: " + truncAddr(tx.hash) + " — waiting for confirmation...",
      "info"
    );

    await tx.wait();
    showStatus(statusEl, "Minted " + amount + " LABU successfully!", "success");
    await refreshWalletInfo();
  } catch (err) {
    console.error("Mint error:", err);
    showStatus(statusEl, err.reason || err.message || "Transaction failed", "error");
  }
}

// ---- Governance ----
async function loadGovernanceInfo() {
  if (!governor || !$("#quorumDisplay")) return;
  try {
    const [q, vp] = await Promise.all([
      governor.quorum(),
      governor.votingPeriod(),
    ]);
    $("#quorumDisplay").textContent = fmt(q) + " LABU";
    $("#votingPeriodDisplay").textContent = vp.toString() + " blocks";
  } catch (err) {
    console.error("Failed to load governance info:", err);
  }
}

async function loadProposals() {
  if (!governor) return;
  const listEl = $("#proposalsList");
  if (!listEl) return;

  try {
    const count = await governor.proposalCount();
    const n = Number(count);

    if (n === 0) {
      listEl.innerHTML =
        '<p class="muted-text">No proposals yet. Be the first to create one!</p>';
      return;
    }

    listEl.innerHTML = "";

    // Load latest 10 proposals
    const start = Math.max(0, n - 10);
    for (let i = n - 1; i >= start; i--) {
      const [proposal, st] = await Promise.all([
        governor.getProposal(i),
        governor.state(i),
      ]);

      const card = document.createElement("div");
      card.className = "proposal-card";

      const stateNum = Number(st);
      const stateLabel = STATE_LABELS[stateNum] || "Unknown";
      const stateColor = STATE_COLORS[stateNum] || "#999";

      card.innerHTML = `
        <div class="proposal-header">
          <span class="proposal-id">#${i}</span>
          <span class="proposal-state" style="background:${stateColor}">${stateLabel}</span>
        </div>
        <p class="proposal-desc">${escapeHtml(proposal.description)}</p>
        <div class="proposal-meta">
          <span>Proposer: ${truncAddr(proposal.proposer)}</span>
          <span>Target: ${truncAddr(proposal.target)}</span>
        </div>
        <div class="proposal-votes">
          <span class="vote-for">For: ${fmt(proposal.forVotes)}</span>
          <span class="vote-against">Against: ${fmt(proposal.againstVotes)}</span>
          <span class="vote-abstain">Abstain: ${fmt(proposal.abstainVotes)}</span>
        </div>
        ${stateNum === 2 ? `<button class="btn btn-primary btn-sm execute-btn" data-id="${i}">Execute</button>` : ""}
      `;

      listEl.appendChild(card);
    }

    // Attach execute handlers
    listEl.querySelectorAll(".execute-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = parseInt(btn.dataset.id, 10);
        try {
          btn.textContent = "Executing...";
          btn.disabled = true;
          const tx = await governor.execute(id);
          await tx.wait();
          btn.textContent = "Executed!";
          await loadProposals();
        } catch (err) {
          console.error("Execute error:", err);
          btn.textContent = "Failed";
          alert(err.reason || err.message || "Execution failed");
        }
      });
    });
  } catch (err) {
    console.error("Failed to load proposals:", err);
    listEl.innerHTML = '<p class="muted-text">Failed to load proposals.</p>';
  }
}

async function handlePropose() {
  if (!signer) {
    alert("Please connect your wallet first.");
    return;
  }

  const statusEl = $("#proposeStatus");
  const target = $("#proposalTarget").value.trim();
  const valueEth = $("#proposalValue").value || "0";
  const calldata = $("#proposalCalldata").value.trim() || "0x";
  const description = $("#proposalDescription").value.trim();

  if (!ethers.isAddress(target)) {
    showStatus(statusEl, "Invalid target address.", "error");
    return;
  }
  if (!description) {
    showStatus(statusEl, "Please enter a description.", "error");
    return;
  }

  try {
    showStatus(statusEl, "Sending proposal transaction...", "info");
    const valueWei = ethers.parseEther(valueEth);
    const tx = await governor.propose(target, valueWei, calldata, description);
    showStatus(
      statusEl,
      "Tx sent: " + truncAddr(tx.hash) + " — waiting...",
      "info"
    );

    await tx.wait();
    showStatus(statusEl, "Proposal created successfully!", "success");
    await loadProposals();
  } catch (err) {
    console.error("Propose error:", err);
    showStatus(statusEl, err.reason || err.message || "Proposal failed", "error");
  }
}

async function handleVote(support) {
  if (!signer) {
    alert("Please connect your wallet first.");
    return;
  }

  const statusEl = $("#voteStatus");
  const proposalId = parseInt($("#voteProposalId").value, 10);

  if (isNaN(proposalId) || proposalId < 0) {
    showStatus(statusEl, "Please enter a valid Proposal ID.", "error");
    return;
  }

  const supportLabels = ["Against", "For", "Abstain"];

  try {
    showStatus(statusEl, "Casting vote (" + supportLabels[support] + ")...", "info");
    const tx = await governor.castVote(proposalId, support);
    showStatus(statusEl, "Tx sent: " + truncAddr(tx.hash) + " — waiting...", "info");

    await tx.wait();
    showStatus(statusEl, "Vote cast: " + supportLabels[support] + "!", "success");
    await loadProposals();
  } catch (err) {
    console.error("Vote error:", err);
    showStatus(statusEl, err.reason || err.message || "Vote failed", "error");
  }
}

// ---- Scroll helpers ----
function initScrollButtons() {
  $$("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = $(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ---- Responsive navigation ----
function initNavigation() {
  const toggle = $(".nav-toggle");
  const nav = $("#primaryNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    nav.classList.toggle("open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("open");
    });
  });
}

// ---- Account / chain change listeners ----
function initListeners() {
  if (!window.ethereum) return;

  window.ethereum.on("accountsChanged", (accounts) => {
    if (accounts.length === 0) {
      userAddr = null;
      setText("#connectBtn", "Connect");
      $("#connectBtn")?.classList.remove("connected");
      setText("#heroConnectBtn", "Connect & mint");
      return;
    }
    userAddr = accounts[0];
    refreshWalletInfo();
    loadProposals();
  });

  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });
}

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
  initScrollButtons();
  initNavigation();
  initListeners();

  // Wallet
  $("#connectBtn")?.addEventListener("click", connectWallet);
  $("#heroConnectBtn")?.addEventListener("click", async () => {
    await connectWallet();
    if (userAddr) window.location.href = "mint.html";
  });

  // Mint
  $("#mintBtn")?.addEventListener("click", handleMint);

  // Governance
  $("#createProposalBtn")?.addEventListener("click", handlePropose);
  $("#refreshProposalsBtn")?.addEventListener("click", loadProposals);

  // Vote buttons
  $$("[data-vote]").forEach((btn) => {
    btn.addEventListener("click", () => {
      handleVote(parseInt(btn.dataset.vote, 10));
    });
  });

  // Auto-connect if already authorized
  if (window.ethereum) {
    window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
      if (accounts.length > 0) connectWallet();
    });
  }
});
