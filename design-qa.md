# LABUDAO Design QA

## Comparison target

- Source visual truth: the generated LABUBU-native home and proof-based roadmap concepts, interpreted through the established LABUDAO black, ivory and cool-silver visual system.
- Implementation: `http://127.0.0.1:8766/index.html`
- Implementation screenshot: `docs/design/labudao-labubu-native-home-implementation.jpg`
- Viewport: 1422 × 800 CSS px, device scale factor 1.
- Source pixels: 1422 × 800 at the same desktop viewport.
- Implementation pixels: 1422 × 800 at the same desktop viewport.
- State: desktop, unauthenticated wallet, particle animation active.

## Full-view comparison evidence

The revised home, Protocol and Roadmap pages were reviewed at desktop and mobile widths. The black, ivory, cool-silver and animated particle direction remains intact. The current narrative is LABUBU-native first, with a general open-source collector protocol presented only as the future outcome of proven community work.

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

3. **P1 — The relationship between LABUBU and the future protocol was unclear.**
   - Evidence: earlier copy alternated between treating LABUBU as the whole product and treating it as a replaceable generic pilot.
   - Fix: made LABUBU the DAO’s origin, cultural focus and first responsibility; the general protocol is now an open-source public good released only after the community proves one complete physical loop.
   - Post-fix evidence: Overview, Protocol, Roadmap, README and the product vision document state the same LABUBU-first boundary.

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

## LABUBU-native Narrative + Proof Roadmap — July 2026

- Home concept: `docs/design/labudao-labubu-native-home-concept.png`
- Home implementation: `docs/design/labudao-labubu-native-home-implementation.jpg`
- Roadmap concept: `docs/design/labudao-roadmap-concept.png`
- Roadmap implementation: `docs/design/labudao-roadmap-implementation.jpg`
- Roadmap mobile implementation: `docs/design/labudao-roadmap-mobile-implementation.jpg`
- Final concept prompts: `docs/design/labudao-narrative-concept-prompts.md`
- Browser verification: built-in browser at native `1422 × 800`; mobile override rendered at `433 × 938`
- Routes verified: `index.html`, `protocol.html`, `dao.html`, `redeem.html`, `roadmap.html`

### Fidelity ledger

1. **Narrative thesis:** the implemented hero preserves the concept’s exact LABUBU-first headline, non-profit mission line, two calls to action and three-part project summary.
2. **Navigation:** Overview, Protocol, Governance, Redeem and Roadmap appear consistently across all five primary routes. The mobile menu opens with exactly the same five links.
3. **Home composition:** the code retains the large left-aligned editorial headline, quiet fixed header, square calls to action and cool-silver LABUBU particle silhouette.
4. **Roadmap structure:** all five proof-based phases render in one horizontal desktop rail. Each phase contains a purpose and an explicit Proof / Exit condition instead of speculative dates or percentages.
5. **Open-source pledge:** the collector-community categories and “Success means giving the tools away” section preserve the concept’s transition from one LABUBU experiment to a public protocol.
6. **Palette and typography:** near-black, ivory and cool silver-blue remain dominant. Manrope is used for editorial/UI copy and IBM Plex Mono for metadata. No fluorescent green, yellow or gold was introduced.
7. **Responsive behavior:** neither Overview nor Roadmap has document-level horizontal overflow. The Roadmap phase rail alone scrolls horizontally on mobile, while the hero, navigation and pledge stack normally.
8. **Truth and independence:** “non-profit by mission” avoids implying an unverified legal status; the footer states that the project is an independent community initiative with no implied POP MART or LABUBU-brand-owner endorsement.

### Copy diff

The implementation preserves the generated concepts’ primary copy:

- “For LABUBU. By its community.”
- “A non-profit experiment in collective stewardship, culture and open protocol.”
- “Prove it with LABUBU. Open it to everyone.”
- “We will not generalize the protocol before one community can prove the complete loop.”
- The five named roadmap phases and “Success means giving the tools away.”

The production pages add the longer six-chapter homepage narrative, explicit current/proposed boundaries, the independence disclaimer and the existing Pass / Connect controls. These additions explain the product without changing the concept hierarchy.

### Intentional deviations

- The concept places the particle collectible mainly on the right. The implementation keeps the existing fixed particle HTML as one continuous full-viewport background because the user explicitly requested a single long homepage background.
- The Roadmap concept uses a line-art object. The implementation reuses the approved monochrome archive collectible image so the route remains consistent with Redeem and avoids inventing an official product photograph.
- The wording is “non-profit by mission,” not “registered non-profit,” until a verified legal entity exists.
- Roadmap phases use proof conditions rather than dates because readiness depends on community evidence, audits and physical lifecycle verification.

### Browser verification

- Native viewport: `1422 × 800`; mobile override: `433 × 938`.
- Desktop Roadmap rendered five phases at equal widths in one row with no document overflow.
- Mobile Roadmap retained a 416 px document width and a separate 1,325 px scrollable phase rail.
- Mobile Overview retained a 416 px document width; headline text and both full-width calls to action fit within the content bounds.
- Mobile navigation opened and exposed exactly Overview, Protocol, Governance, Redeem and Roadmap.

### Final result

final result: passed
