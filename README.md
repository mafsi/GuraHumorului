# Gura Humorului — tourism website

A static, bilingual (Romanian / English) tourism website for **Gura
Humorului**, a real gateway town to the painted monasteries of Southern
Bucovina, Romania. Built as a plain HTML/CSS/JS site — no framework, no
build step.

## Repository layout

```
design-specs/     Design exploration artifacts (Claude-generated mockups
                   and the extracted design system). Ground truth for the
                   brand voice, color, type, and component styling used
                   throughout site/. See design-specs/Website mockup for
                   tourists/_ds/.../readme.md for the full design spec.

site/              The actual website. This is what gets deployed.
  index.html         Homepage (Romanian, default)
  experiente.html     Experiences / events calendar (Romanian)
  planifica-vizita.html  Plan Your Visit (Romanian)
  oferte-ghid.html    Guide packages / booking (Romanian)
  en/
    index.html          Homepage (English)
    experiences.html     Experiences / events calendar (English)
    plan-your-visit.html  Plan Your Visit (English)
    book-guide.html       Guide packages / booking (English)
  assets/
    css/   tokens.css (design tokens), components.css, layout.css
    js/    main.js (nav), homepage.js (quote carousel), experiences.js (tabs)

.planning/          Hidden project-tracking folder — see PRD.md for what's
                     built vs. what's still needed.
```

## Running locally

No build step — open the files directly, or serve them so relative paths
and `fetch`-free JS behave exactly like production:

```sh
cd site
python3 -m http.server 8000
# then open http://localhost:8000/index.html (Romanian)
# or      http://localhost:8000/en/index.html (English)
```

## Languages

Romanian is the default language, served at the site root. English lives
under `en/`. Every page carries a language switcher (header + footer) and
`hreflang` alternate tags. **Page slugs differ per language** on purpose
(e.g. `experiente.html` / `experiences.html`) — except `index.html`, which
must stay `index.html` in both language folders since it's the directory's
default document.

## Contact / booking

The site has no backend. All "contact" and "booking" actions are WhatsApp
deep links (`wa.me/<number>?text=<prefilled message>`) pointing at the
site owner's number, **+40 721 630 640**. This covers:
- Tourists booking a guide package (`oferte-ghid.html` / `book-guide.html`)
- General trip-planning inquiries (header "Book a Guide" CTA)
- Accommodation owners requesting a paid listing (Plan Your Visit page)

There is no free accommodation listing on this site by design — see
`.planning/PRD.md` for the reasoning and what a paid-listing flow would
require.

## Images

All photography is currently a styled placeholder block (`.gh-placeholder`)
with a caption describing what should go there, not a real photo. No
licensing/sourcing has happened yet.

## Design system

`design-specs/.../readme.md` is the authoritative source for voice, color,
type, spacing, and component rules. Read it before adding or restyling
anything — the tokens in `site/assets/css/tokens.css` were ported from it
1:1, and new UI should stay inside its documented constraints rather than
inventing new patterns.
