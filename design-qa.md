# LABUDAO Design QA

## Comparison target

- Source visual truth: the established LABUDAO black, ivory and cool-silver visual system, extended for the universal protocol positioning.
- Implementation: `http://127.0.0.1:8765/index.html`
- Implementation screenshot: `/tmp/labudao-paginated-home.png`
- Viewport: 1422 × 800 CSS px, device scale factor 1.
- Source pixels: 1422 × 800 at the same desktop viewport.
- Implementation pixels: 1422 × 800 at the same desktop viewport.
- State: desktop, unauthenticated wallet, particle animation active.

## Full-view comparison evidence

The revised home and Protocol page were reviewed at desktop and mobile widths. The black, ivory, cool-silver and animated particle direction remains intact. The intentional changes are the universal collectible protocol narrative, a dedicated Protocol route, and explicit separation between proposed architecture and the live Labubu Pilot.

## Focused evidence

No separate crop was required because the header, headline, CTAs, particle asset, and active navigation are clearly readable in the full-view screenshot. Additional browser checks covered the Mint and Governance pages at desktop width and the home/menu/Activity flow at a mobile width. DOM snapshots confirmed semantic headings, labels, links, page titles, and active navigation states.

## Comparison history

1. **P1 — Typography felt overly compressed and visually harsh.**
   - Evidence: the previous Anton/Archivo Black display system dominated the interface and made the one-page layout feel denser.
   - Fix: replaced it with Manrope at moderate optical weights, retained IBM Plex Mono only for metadata and chain details, and reduced aggressive tracking.
   - Post-fix evidence: the revised 1422 × 800 screenshot shows a more natural headline shape with a clear display/UI type split.

2. **P1 — Core actions were crowded into one continuous page.**
   - Evidence: Mint, proposal creation, voting, activity, and redemption all followed the hero in one long document.
   - Fix: created focused product routes and later consolidated Pilot, proposals and Activity into one Governance workspace; the primary navigation now exposes Overview, Protocol, Governance and Redeem.
   - Post-fix evidence: desktop and mobile navigation expose all four primary routes without horizontal overflow.

3. **P1 — Product scope was constrained to one collectible.**
   - Evidence: previous copy positioned `$LABU` and Labubu as the product rather than the first proof.
   - Fix: reframed LABUDAO as an asset-agnostic protocol with Passport, Custody, Governance, and Redemption stages; marked Labubu as the live Pilot.
   - Post-fix evidence: the Protocol page distinguishes live and proposed layers, while README and the product vision document state the same boundary.

4. **P2 — Mobile particle stage extended past the viewport.**
   - Evidence: the first mobile pass reported document overflow wider than the viewport.
   - Fix: constrained the mobile particle stage to the viewport edge and reduced its width.
   - Post-fix evidence: the revised mobile pass reported no horizontal overflow on both Overview and Activity.

5. **User-directed background expansion.**
   - Evidence: the particle HTML previously occupied only the hero's right-hand column.
   - Fix: moved it into a fixed, full-viewport background layer used only by the Overview page, with translucent content surfaces above it.
   - Post-fix evidence: browser checks confirmed the background remains fixed at the top of the viewport while the 1,981 px homepage scrolls through the route cards and footer without horizontal overflow.

## Required fidelity surfaces

### Fonts and typography

Passed. Manrope provides a cleaner contemporary display voice without the previous poster-like compression. IBM Plex Mono remains limited to metadata, labels, and contract information. Headline weight, line height, wrapping, and tracking are readable at desktop and mobile sizes.

### Spacing and layout rhythm

Passed. The home hero now has one primary message, two actions, and a dedicated particle field. Functional tools live on separate pages with consistent page introductions, measured form widths, and clear next-step links. Desktop and mobile layouts have no horizontal overflow.

### Colors and visual tokens

Passed. Following user feedback, the palette is now near-black, ivory, and cool silver-gray. Fluorescent green and yellow were removed from interface tokens, state colors, and the particle renderer. Borders remain restrained and no new shadows, gradients, or generic card surfaces were introduced.

### Image quality and asset fidelity

Passed. The supplied WebGL particle Labubu remains the real animated asset. It now fills the homepage viewport and stays continuous behind the hero, route cards, and footer while remaining upright and recognizable.

### Copy and content

Passed. The home now carries a six-chapter editorial narrative: belief, market fracture, protocol distinction, rights model, collectible lifecycle and long-term horizon. Proposed capabilities are visibly labelled Proposed or Target, while the existing governor is labelled Pilot live. The Protocol page retains the compact technical model, while Pilot participation, proposals and activity now live inside one task-focused Governance workspace.

### Icons and controls

Passed. Material Symbols remain consistent across wallet, route, proposal, voting, refresh, and directional controls. Primary actions are visually distinct and focusable.

### Interaction and responsiveness

Passed. Desktop navigation, active-page states, contextual next links, mobile menu open/close state, and mobile route navigation were verified. Wallet and contract action bindings remain connected; no transaction was submitted during QA.

### Accessibility

Passed. Pages retain semantic headings, landmarks, form labels, focus states, reduced-motion support, skip links, accessible navigation labels, and practical mobile targets.

## Remaining P3 notes

- Particle brightness changes naturally during rotation, so the exact silhouette varies between captures.
- The compact mobile header uses icon-only wallet access to preserve space.

## Final result

final result: passed

## Physical Rights Member Pass — July 2026

- Concept: `docs/design/labudao-member-pass-concept.png`
- Desktop render: `docs/design/labudao-member-pass-desktop.png`
- Mobile card render: `docs/design/labudao-member-pass-mobile.png`
- Mobile panel render: `docs/design/labudao-member-pass-mobile-panel.png`
- Browser verification: built-in browser at `1422 × 800` and mobile `433 × 938`

### Fidelity ledger

1. **Product hierarchy:** the first 3D pass was too small compared with the concept. The model scale and camera distance were adjusted until the credential became the dominant object.
2. **Palette:** the implementation preserves near-black, graphite, cool silver and restrained cobalt edges; no fluorescent green, yellow or gold was introduced.
3. **Material tiers:** Archive uses pearl matte, Alloy uses brushed metal, Obsidian uses smoked glass and Patron uses violet ceramic parameters.
4. **Typography:** card and verification text use the existing Manrope and IBM Plex Mono system, with code-native labels and controls.
5. **Responsive layout:** desktop retains the lanyard/panel split; mobile centers the complete card before a vertically scrollable rights panel with no horizontal document overflow.
6. **Interaction:** the homepage Pass control, modal, physics-driven dragging, wallet data sync, balance-to-tier thresholds and QR open/close flow were verified.

### Copy diff

The implemented pass preserves the approved concept language: `LABU/DAO`, `PHYSICAL RIGHTS PASS`, `Member Pass`, the four tier names, current LABU balance, holder, event reference and credential action. The intentional addition is concise Chinese verification guidance for event use.

### Remaining intentional deviations

- The concept shows a static Obsidian example. The live homepage correctly falls back to Archive at zero balance and changes tier after the connected wallet balance is read.
- The card moves under physics, so its angle and exact position vary between captures.

## Redeem Prototype + Unified Governance — July 2026

- Request-state concept: `docs/design/labudao-redeem-request-concept.png`
- Tracking-state concept: `docs/design/labudao-redeem-tracking-concept.png`
- Request implementation: `docs/design/labudao-redeem-request-implementation.jpg`
- Tracking implementation: `docs/design/labudao-redeem-tracking-implementation.jpg`
- Mobile implementation: `docs/design/labudao-redeem-mobile-implementation.jpg`
- Generated collectible asset: `frontend/redeem-object.png`
- Browser verification: built-in browser at native `1422 × 800`; the mobile override rendered at `433 × 938`
- Routes verified: `redeem.html`, `dao.html`, `index.html`, plus legacy redirects from `mint.html` and `dashboard.html`

### Fidelity ledger

1. **Information architecture:** Pilot, proposal tools and Activity were removed from the primary navigation and consolidated under one Governance route with a low-profile Participate / Proposals / Activity index.
2. **Redeem hierarchy:** the request view follows the approved three-column concept—eligible right, selected object and request summary—followed by a five-stage lifecycle rail.
3. **Tracking state:** creating a prototype request reveals the request ledger, current-stage explanation, checklist, activity timeline and simulated stage progression through Confirm.
4. **Palette:** near-black, ivory and cool silver remain the only dominant colors. No fluorescent green, yellow or gold was added.
5. **Typography:** Manrope remains the display and interface face; IBM Plex Mono is limited to metadata, IDs, stages and ledger values.
6. **Responsive behavior:** desktop retains the operational grid. Mobile stacks panels, keeps the stage rail horizontally scrollable and reports no document-level horizontal overflow.
7. **Safety boundary:** every Redeem state is local interface state. The page explicitly states that it does not request a signature, lock tokens, contact a custodian or submit anything onchain.

### Copy diff

The implementation preserves the concepts’ core language: “Bring the object home,” “Eligible rights,” “Selected object,” “Request summary,” the five lifecycle stages, “Prototype request created,” “Simulate next stage” and “Nothing has been submitted onchain.” The implementation adds destination/contact options, an explicit no-signature note and production-boundary copy at the Confirm stage.

### Browser verification

- Request button remains disabled until both required selects are completed.
- A request carries the selected jurisdiction and contact route into the tracking ledger.
- Three simulated advances reach `05 / Confirm`, disable the advance button and produce five total timeline events.
- Cancel returns to the request view without a network or wallet action.
- The mobile navigation opens with exactly four primary links.
- `mint.html` redirects to `dao.html#participation`; `dashboard.html` redirects to `dao.html#activity`.

### Remaining intentional deviations

- The generated collectible is a neutral, archive-style pilot object rather than a branded product photograph, keeping the prototype legally and visually generic.
- The request ID and timestamps are deterministic interface copy rather than server-issued records.
- No address collection or shipping form is included because the user requested a non-functional front end and those fields would imply real fulfillment.

### Final result

final result: passed
