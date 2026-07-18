# Gura Humorului Design System

A brand and UI design system for **Gura Humorului Tourism** — the fictional
tourism office for Gura Humorului, a real gateway town to the painted
monasteries of Southern Bucovina, Romania. The brand sells heritage,
craft, and quiet landscape to cultural travellers, not spectacle.

## Sources

This system was built from three concept mockups (no production codebase,
Figma file, or brand guideline PDF was attached):

- `Tourist website color scheme/Gura Humorului Brand Identity.dc.html` — brand essence, logo lockup, colour, type
- `Tourist website color scheme/Gura Humorului Color System.dc.html` — full colour ramps + type + applied example
- `Tourist website color scheme/Gura Humorului Homepage.dc.html` — a full homepage layout (header, hero, intro, experience cards, quote, two-up info panel, CTA, footer)

These three files are the *only* ground truth. Everything in this design
system — tokens, components, UI kit — is derived directly from their
markup and inline styles: no values were invented or rounded to a
framework default.

## Intentional additions

The source is a single homepage mockup, not a component library — so the
component inventory below was extracted from every repeating visual
pattern actually present in that mockup (buttons, the eyebrow+heading
pattern, the pill chip, experience cards, the pull-quote block, nav
links). Nothing was added beyond what the mockup demonstrates.

## Index

- `styles.css` — root stylesheet, `@import`s everything below
- `tokens/colors.css` — base colour ramps + semantic aliases
- `tokens/typography.css` — Fraunces/Inter type scale, `@font-face`
- `tokens/spacing.css` — spacing scale, container widths
- `tokens/effects.css` — radius, border, shadow, motion, scrim tokens
- `components/core/` — `Button`, `Badge`
- `components/navigation/` — `NavLink`
- `components/content/` — `SectionHeading`, `Card`, `Quote`
- `ui_kits/tourism-website/` — homepage, experience detail, and plan-your-visit screens, click-through
- `guidelines/` — foundation specimen cards shown in the Design System tab
- `assets/` — none (see Iconography/Logo below)
- `SKILL.md` — Claude-Code-portable skill wrapper

## Content fundamentals

**Voice.** Warm, unhurried, precise — never exclamatory. Copy reads like
a knowledgeable local host, not an ad. Sentences are declarative and
often long-ish with a comma turn ("A UNESCO landscape of frescoed walls,
beech woodland, and centuries of Bucovinian tradition — one valley,
endless ways to discover it.").

**Person.** Third person / "your" — never "I". Direct address is reserved
for CTAs ("Plan your visit", "Watch the film", "Browse places to stay").

**Casing.** Sentence case throughout — headlines, buttons, nav labels.
Eyebrow labels (the small tracked overline above a heading) are the one
exception: uppercase with wide letter-spacing ("SOUTHERN BUCOVINA",
"WELCOME", "GETTING HERE").

**Punctuation.** Em dashes do real work, joining a place-fact to its
feeling: *"the 'Sistine Chapel of the East' — famed for its cobalt-blue
exterior frescoes…"*. No exclamation points anywhere in the mockup.

**Emoji.** None. Explicitly ruled out ("No emoji, no bright primary
colours, no crowded layouts" — Brand Essence, "Not this").

**Specificity over hype.** Copy names real things — Voroneț Monastery,
Obcinele Bucovinei, egg painting, wool weaving — instead of generic
adjectives. Superlatives are earned and rare ("Sistine Chapel of the
East" is a borrowed nickname, not a coined one).

**Vibe.** "Old-money quiet confidence — the restraint of a place that
doesn't need to shout about what it has kept for six hundred years."
Cultural-traveller audience; the brand explicitly avoids competing with
louder, spectacle-driven tourism marketing.

## Visual foundations

**Colour.** Deep navy (`#1C2A4A`) carries authority — header, footer,
dark section backgrounds, primary buttons. Cream (`#F7F2E7`) and white
carry the page. A single antique gold (`#9C7B2E`) is the one accent per
view — an eyebrow label, a link underline, a chip. Gold text is never
set on cream at small sizes (contrast). No secondary bright colours
exist; semantic success/warning/error/info colours are desaturated,
brand-tinted (olive green, gold, brick red, slate blue) rather than
stock traffic-light hues.

**Type.** Two families only. **Fraunces** (serif, optical-size variable,
weight 500 italic / 600 roman) for every headline and pull-quote — it
carries the "heritage storytelling" warmth. **Inter** for everything
else: nav, buttons, body copy, eyebrows. Display sizes run large (56px
hero headline down to 26px card title); body copy sits at 15–17px with
generous 1.6–1.7 line-height. Eyebrows are 12–13px, semibold, uppercase,
tracked at .14em–.24em.

**Spacing.** Generous and airy — section vertical padding runs
96–120px, card padding 26–64px. A single `1180px` centred container
governs every section. Grids use small `2px` gaps between colour/image
blocks (so backgrounds nearly kiss, reading as one seamed surface) but
large `24–72px` gaps between content columns and cards.

**Backgrounds.** One full-bleed hero photo per page draped with a
top-to-bottom navy scrim (`rgba(10,15,30,.15)→.65`) for text legibility
— the only place transparency/blur appears (a `backdrop-filter: blur(6px)`
glass chip sits on that hero photo). No patterns, textures, or
illustration; alternating flat navy / cream / ivory blocks are the only
"background" device elsewhere. No gradients outside that one hero scrim.

**Animation.** None specified in the source. Treat all transitions as
understated: colour/opacity changes only, `--duration-standard: 250ms`
with a standard ease-out curve — never a bounce or spring. This is an
inferred, conservative default matching the brand's "unhurried" voice,
not something demonstrated in the mockup.

**Hover states.** Links: navy → gold. Nav links on navy: 85% opacity →
100% opacity (colour stays cream). No underline is added on hover
(underlines are static, used as a persistent affordance on inline text
links, not a hover effect).

**Press states.** Not demonstrated in the source; treat as a very slight
opacity dip (fits the "unhurried" restraint — no scale/shrink effects
appear anywhere in the brand).

**Borders.** Hairline `1px` in `--border-default` (`#E6DCC6`, ivory) used
to separate a light card from a `--surface-page` cream background, e.g.
the plain wordmark lockup frame. Buttons and chips are borderless except
the "secondary" outline button, which uses a `1.5px` border.

**Shadows.** None. The brand uses flat colour blocks and hairline
borders, never drop shadow, on standard cards. `--shadow-float` exists
only for a true floating/overlay element (a dropdown, a toast) should one
be needed — not used by any card in the source.

**Radius.** Consistently soft-rectangular, never a full pill except on
chips/badges and CTA-shaped nav buttons: `10px` (buttons), `12–16px`
(cards, framed panels), `20px` (large applied-example panels), `100px`
(pill chips + "Book a Guide" nav button).

**Layout rules.** Header is a static (non-fixed) top bar in every mockup
— navy background, wordmark left, nav + primary CTA right. Sections
strictly alternate three background tones — cream (`page`), white
(`raised` cards/panels), ivory/sunken (`#EFE6D0`, the "Explore" and
final CTA sections) — never more than these three plus the one navy
"authority" band per page.

**Transparency & blur.** Used exactly once in the source: the glass
"Southern Bucovina" chip over the hero photo (`rgba(247,242,231,.15)` +
`blur(6px)`). Elsewhere all surfaces are fully opaque.

**Imagery vibe.** Not photographed yet in the source (all image
placements are `<image-slot>` placeholders) — but captions specify warm,
earthy heritage subjects: cobalt-blue monastery frescoes, beech forest
trails, hand-painted eggs and wool-weaving craft. Expect warm, natural
light, no desaturation/B&W treatment, no heavy grain — the palette
itself (navy/gold/cream) supplies the "old-money" cool-warm balance, so
photography should read naturally, not be colour-graded to match.

**Cards.** No shadow, no border on photo-led experience cards (`Card` in
this system) — just a `16px`-radius clipped container: photo on top,
white body below. The lighter framed panels (logo lockup, "Getting
Here"/"Where to Stay") use a hairline ivory border instead of a shadow.

## Iconography

The source mockup uses **no icon system at all** — no icon font, no SVG
icon set, no emoji, no unicode glyphs standing in for icons. The single
piece of "iconographic" content is a literal `"` (opening quote mark) set
in Fraunces at 64px to head the testimonial block. `assets/` is
intentionally empty for icons; if a future screen needs one (e.g. a map
pin, a search glyph), match stroke weight 1.5–2px and the brand's
restraint — do not introduce a filled, colourful, or novelty icon style.
No CDN icon set has been linked since none was in the source and none
was yet needed by the UI kit screens built here.

## Logo

There is no separate logo mark in the source — brand identity is
**wordmark-led only**: "Gura Humorului" set in Fraunces 600 with a
tracked "Bucovina · Romania" tagline underneath, in the brand's fixed
colour pairs (cream-on-navy / ink-on-white). No mark, icon, or
monogram was provided or should be invented. `assets/` contains no logo
file; every place a mark would go, the wordmark type treatment renders
in its place (see `guidelines/logo.html` and the `Wordmark` component
usage inside `Header`/`Footer` in the UI kit).

## Caveats

- Fonts are served from the Google Fonts CDN (Fraunces + Inter), matching
  the source mockups exactly — no local webfont files were provided, so
  none needed substitution.
- No product code, Figma file, or additional pages beyond the one
  homepage mockup were provided — the UI kit's second and third screens
  (experience detail, plan-your-visit) extend the established system to
  plausible next pages but are not literal recreations of an existing
  screen. Flagged here for visibility; happy to revise once a real
  screen or additional mockups are available.
- No dark mode, mobile layout, or motion spec was present in the source;
  spacing/type here targets the same desktop widths as the mockups.
