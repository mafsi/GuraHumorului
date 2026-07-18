# Gura Humorului site — PRD / roadmap

This tracks what's actually implemented in `site/` versus what a real,
production-ready tourism site for Gura Humorului would still need.
Checked items are shipped and verified; unchecked items are gaps —
each has one line on why it matters, not a full spec.

## Done

- [x] Bilingual site (Romanian default at `site/`, English at `site/en/`),
      with per-language page slugs (`experiente.html`/`experiences.html`,
      `planifica-vizita.html`/`plan-your-visit.html`,
      `oferte-ghid.html`/`book-guide.html`) and a RO/EN switcher in
      header + footer nav on every page.
- [x] Homepage: hero, intro, 3 experience cards, "Living Valley" moment
      cards, rotating quote carousel, Getting Here / Where to Stay panel,
      traveller photo grid, newsletter signup (presentational only).
- [x] Experiences page: 3 category tabs (Festivals & Traditions / Outdoor
      & Trails / Food & Craft), 3 cards each, 12-month highlight calendar.
- [x] Plan Your Visit page: condensed "what you can do" activity
      overview, best-time-to-come month calendar, accommodation-owner
      WhatsApp contact card (no free listings — see below).
- [x] Guide packages / offers page: 3 packages (Descoperire/Discovery,
      Bucovina Completă/Bucovina in a Day, Popas Prelungit/Extended
      Stay), each with its own WhatsApp booking link, plus a notice that
      the guide only runs 5 July – 20 August.
- [x] WhatsApp as the site's entire contact/booking mechanism — guide
      booking, general trip-planning inquiries, and accommodation-owner
      leads all route to +40 721 630 640 with pre-filled, context-specific
      messages.
- [x] Responsive layout (desktop/tablet/mobile breakpoints) including a
      working hamburger nav on mobile.
- [x] Design tokens (`site/assets/css/tokens.css`) ported 1:1 from the
      design system spec in `design-specs/`.
- [x] GitHub Pages deploy workflow (`.github/workflows/deploy-pages.yml`)
      publishing `site/` on every push to `master`.
- [x] `.gitignore` (OS/editor junk, logs, `.env`, `node_modules/`) and a
      dedicated `site/assets/images/` folder with a filename-mapping
      README for when real photography is ready to drop in.
- [x] UX/accessibility audit pass: fixed text-contrast failures (eyebrow
      labels, month-calendar labels, and the gold accent-button
      background — all previously below WCAG AA 4.5:1, verified by
      computing actual contrast ratios against the design tokens),
      touch targets under 44×44px (carousel arrows, mobile nav toggle,
      quote-carousel dots now meet the WCAG 2.2 24×24px minimum),
      a hardcoded-English accessibility label that broke on Romanian
      pages, a `prefers-reduced-motion` gap on the auto-rotating
      homepage heading, and incomplete ARIA wiring on the Experiences
      page's tabs (now proper `tablist`/`tab`/`tabpanel` roles with
      `aria-controls`/`aria-labelledby` and live `aria-selected` updates).

## Not done

### Content
- [ ] Real photography. Every image is a styled placeholder block with a
      caption describing what should go there — none of it is real yet.
- [ ] A real "Monasteries" page. The nav item currently just anchors back
      to the homepage's Explore section; there's no dedicated page for
      Voroneț and the other painted monasteries individually.
- [ ] Real guide package prices. All 3 packages show a literal "___ lei"
      placeholder.
- [ ] Real accommodation listings. The site currently only has a contact
      card inviting owners to reach out — no actual paid listings exist
      yet, and there's no defined process for turning a WhatsApp
      conversation into a live listing on the site.

### Trust & legal
- [ ] Privacy policy / cookie notice. The site collects contact intent
      (WhatsApp, email field) without any policy — likely needed for
      GDPR compliance once this goes live for EU visitors.
- [ ] Terms for the accommodation-listing arrangement (what "paid
      listing" means, price, duration, what's included).
- [ ] Favicon — none is set.

### Discoverability
- [ ] `sitemap.xml` and `robots.txt`.
- [ ] Open Graph / Twitter Card meta tags for social sharing previews.
- [ ] JSON-LD structured data (schema.org `TouristAttraction` /
      `LocalBusiness`) so search engines understand the site's content.

### Ops
- [ ] GitHub Pages source still needs to be switched to "GitHub Actions"
      in the repo's Settings → Pages (one-time manual step — the
      workflow itself is already in place and will deploy automatically
      once that's set).
- [ ] Analytics (with a consent banner if added, given GDPR).
- [ ] A lightweight way for the owner to edit copy/prices without
      hand-editing HTML — even just a documented edit workflow, since
      there's no CMS.

### Quality
- [ ] Alt text on real `<img>` tags once real photography replaces the
      `.gh-placeholder` blocks (the audit pass covered everything that
      could be checked without real images in place).
- [ ] Full keyboard tab navigation on the Experiences page — tabs now
      have correct ARIA roles/associations, but arrow-key roving
      tabindex (the standard WAI-ARIA tabs pattern) isn't implemented;
      currently each tab is just a separate stop in the regular Tab
      order.
- [ ] Cross-browser testing beyond what's been checked so far.
- [ ] A custom 404 page.

### Guide booking
- [ ] The 5 Jul–20 Aug availability window is static text only — there's
      no real calendar or slot system. WhatsApp is the entire booking
      flow today, so double-booking or overload during peak season isn't
      prevented by anything on the site itself.
