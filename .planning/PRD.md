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
- [ ] Actual hosting/deployment. The site is currently just static files
      with no deploy pipeline or live URL.
- [ ] Analytics (with a consent banner if added, given GDPR).
- [ ] A lightweight way for the owner to edit copy/prices without
      hand-editing HTML — even just a documented edit workflow, since
      there's no CMS.

### Quality
- [ ] Accessibility pass — contrast, focus order, and alt text once real
      images exist (placeholders currently stand in for `alt` content).
- [ ] Cross-browser testing beyond what's been checked so far.
- [ ] A custom 404 page.

### Guide booking
- [ ] The 5 Jul–20 Aug availability window is static text only — there's
      no real calendar or slot system. WhatsApp is the entire booking
      flow today, so double-booking or overload during peak season isn't
      prevented by anything on the site itself.
