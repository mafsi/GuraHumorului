# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository status

This repository currently contains **no application source code** — no
package.json, build tooling, or framework scaffolding exists yet. It holds
design exploration artifacts for a tourism website for **Gura Humorului**
(a real gateway town to the painted monasteries of Southern Bucovina,
Romania). Treat this as the pre-development / design phase of the project:
there is nothing to build, lint, or test yet.

## What's in `design-specs/`

- `Tourist website color scheme/` — three standalone `.dc.html` mockup
  files (Claude-generated design concepts, viewable directly in a browser):
  `Gura Humorului Brand Identity.dc.html`, `Gura Humorului Color System.dc.html`,
  `Gura Humorului Homepage.dc.html`. These are the **only ground-truth
  source** the rest of the design system was derived from — no Figma file
  or brand PDF exists. `support.js` and `image-slot.js` are shared runtime
  helpers these mockups depend on; don't edit them when just tweaking a
  mockup's content.
- `Website mockup for tourists/` — a second-generation mockup
  (`Homepage.dc.html`, `Experiences.dc.html`) that consumes a real design
  system instead of inline styles, under:
  `_ds/gura-humorului-design-system-d0ed22b7-782a-4010-bd57-851adbf81c1b/`.

## The design system

`_ds/gura-humorului-design-system-d0ed22b7-782a-4010-bd57-851adbf81c1b/readme.md`
is the authoritative spec — **read it before designing or generating any
new page/component for this brand.** It documents voice/tone, color,
type, spacing, motion, and layout rules extracted directly from the three
source mockups (nothing invented or rounded to a framework default). Key
points to internalize:

- **Brand voice**: warm, unhurried, precise, third person, sentence case
  (except uppercase-tracked eyebrow labels), no exclamation points, no
  emoji, specificity over hype ("old-money quiet confidence").
- **Color**: deep navy `#1C2A4A` (authority — header/footer/buttons),
  cream `#F7F2E7` (page background), one antique gold `#9C7B2E` accent per
  view. No other bright colors; semantic colors are desaturated/brand-tinted.
- **Type**: Fraunces (serif, headlines/quotes) + Inter (everything else),
  loaded from Google Fonts CDN.
- **No shadows, no icon system, no logo mark** — wordmark-led branding
  only ("Gura Humorului" in Fraunces 600 + tracked tagline). Do not invent
  icons or a logo mark without checking the readme's caveats first.

Tokens live in `tokens/` (`colors.css`, `typography.css`, `spacing.css`,
`effects.css`) and are imported via `styles.css`. The manifest
(`_ds_manifest.json`) and bundle (`_ds_bundle.js`) reference component
source paths (`components/core/Button.jsx`, `components/content/Card.jsx`,
`components/content/Quote.jsx`, `components/content/SectionHeading.jsx`,
`components/navigation/NavLink.jsx`) that are packed inside `_ds_bundle.js`
rather than present as standalone files on disk.

## Working in this repo

- There is no build/lint/test command to run — verify changes to `.dc.html`
  mockups by opening the file directly in a browser.
- If asked to start real implementation (a production website/app), that
  will require scaffolding a new project from scratch; check with the user
  on framework choice rather than assuming one, since none is established
  here.
- When extending the mockups or design system, stay inside the constraints
  documented in the readme's "Caveats" section (no dark mode/mobile
  layout/motion spec was in the source — anything added there is an
  inferred extrapolation, not literal ground truth) and flag new
  assumptions the same way the existing readme does.
