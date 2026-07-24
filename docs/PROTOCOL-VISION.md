# LABUDAO Protocol Vision

## Product Thesis

LABUDAO is a universal coordination protocol for physical objects that carry artistic, cultural or collectible value.

It gives every object a durable onchain identity and lets trusted actors coordinate custody, rights, governance and redemption without forcing every collection to invent a new system.

Labubu is the first proving ground. The protocol must remain asset-agnostic.

## Smallest Complete Loop

`Object → Asset Passport → Custody Proof → Rights Governance → Verified Transfer or Redemption`

The first complete release should prove this loop for one sealed Labubu before expanding to other collections.

## Core Modules

### 1. Asset Passport

- Unique identifier for one physical object
- Creator, collection, edition and provenance metadata
- Rights and restrictions attached to the object
- Append-only lifecycle events

### 2. Custody Registry

- Approved custodians issue time-bound attestations
- Custody changes create a new signed event
- Public verification without exposing sensitive storage details
- Dispute and expired-attestation states

### 3. Rights Governor

- Snapshot-safe voting power
- Asset-specific proposals
- Role separation for owner, custodian and community
- Timelocked execution for material actions

### 4. Redemption Escrow

- Request → lock → approve → ship → confirm → close
- Prevents simultaneous onchain transfer and physical delivery
- Records delivery evidence without publishing personal data
- Supports cancellation and dispute paths

## Product Roles

| Role | Primary job |
|------|-------------|
| Creator / Issuer | Registers origin, edition and initial rights |
| Custodian | Safeguards the object and attests its condition |
| Collector | Holds rights, transfers them or requests redemption |
| Community | Governs shared access, exhibition and treasury decisions |
| Redeemer | Completes the physical claim and closes the onchain state |

## Current Reality

The live Ethereum contracts only provide:

- A permissionless `$LABU` ERC-20 mint capped at 10,000,000 tokens
- A lightweight propose, vote and execute governor

They do not provide an Asset Passport, verified custody or enforceable physical redemption. Vote weight is not snapshot-based, proposal creation is permissionless and governance parameters lack access control. These contracts should be treated as a public pilot.

## Build Sequence

### Phase 0 — Live Pilot

- Keep `$LABU` mint, governance and activity transparent
- Clearly label all live surfaces as the Labubu Pilot
- Do not imply ownership of a specific physical object

### Phase 1 — Identity + Custody

- Deploy one Asset Passport for one sealed Labubu
- Add signed custodian attestations and public status verification
- Publish an event timeline for the object

### Phase 2 — Governance + Redemption

- Replace balance-at-vote logic with historical snapshots
- Add role and access controls
- Implement the redemption escrow state machine
- Complete one end-to-end physical delivery

### Phase 3 — Universal Protocol

- Create collection templates without hard-coded Labubu assumptions
- Support artworks, designer objects, rare collectibles and cultural artifacts
- Publish integration interfaces for creators, custodians and marketplaces

## Success Measures

- One collectible completes the full protocol loop
- Passport and custody state can be verified by an independent observer
- No double claim exists during transfer or redemption
- A second, non-Labubu collection can integrate without changing core contracts
- Governance actions are snapshot-safe and access-controlled

## Explicit Non-Scope

Until the full loop works, LABUDAO should not prioritize:

- A speculative marketplace
- Staking, yield or APY products
- Multi-chain expansion
- AI price prediction
- Large-scale collection onboarding

The product earns the right to scale only after one physical object can move safely from registration to verified redemption.
