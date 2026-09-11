# Doko AI — landing page revamp

## What the current site is

A dark, monochrome one-pager for SastoHost AI Studio selling **Doko AI**, Nepal's AI assistant. It works, but it reads flat: black-on-black cards, one grey accent, no motion, and every section is the same stacked-text rhythm.

Content already there (all of it carries over): hero + 3 stats, four products (WhatsApp AI, chat widget, Doko AI API, Studio Chat), 3-step WhatsApp QR flow, embed-snippet section, API/code section, 6 "why teams switch" points, pricing (Free / Arambh रु599 / Utkarsh रु1,799 / Uttam रु5,399), 3 testimonials, 8 FAQs, closing CTA, footer.

## New direction

**"Precision instrument, Himalayan warmth."** Near-black graphite canvas, one warm saffron-crimson accent used sparingly, crisp hairline borders, and a strict 12-column grid so every section snaps to the same rhythm. Motion is physical and restrained — reveal on scroll, magnetic buttons, counters that tick up — **no heavy glow washes**, only a single soft accent bloom behind the hero.

- Type: Space Grotesk for headlines, DM Sans for body, JetBrains Mono for code and labels (already the site's own fonts, used with real hierarchy).
- Every card shares one radius, one border weight, one padding scale, one hover behaviour. Symmetry enforced by equal-height grids.
- Nepali identity shown through the doko (basket) motif, NPR pricing, and Devanagari plan names — not through clichés.

## Sections to build (single scrolling page)

1. **Nav** — slim, blurs and shrinks on scroll, Products / Pricing / API Docs / Sign in / Get started.
2. **Hero** — badge "Now live in Nepal", oversized headline with the accent on "never sleeps", subcopy, two CTAs, three animated stat counters. Right side: a live-looking Doko AI chat mockup that types itself out, plus a soft accent bloom.
3. **Model lineage strip** — a marquee stating Doko AI is fine-tuned across Claude, ChatGPT, Grok, Gemini and DeepSeek, with a one-line explanation.
4. **Four products** — 2x2 equal-height bento grid, each with icon, description, three feature ticks, hover lift and border-accent.
5. **WhatsApp in 3 steps** — numbered timeline with a phone mockup showing a QR scan then live replies.
6. **Chat widget** — split: bullet list left, real code snippet with copy button and a floating widget preview right.
7. **Developer API** — tabbed Request/Response terminal card + list of core endpoints.
8. **Everywhere you work** — mobile app, web, WhatsApp, website widget, automations — a compact channel row covering the "business + daily life" angle.
9. **Why teams switch** — 6-item symmetric grid.
10. **Pricing** — monthly/yearly toggle (yearly saves 20%), Free card plus three plans, Utkarsh highlighted with the accent.
11. **Testimonials** — three equal cards with initials avatars.
12. **FAQ** — accordion, all 8 questions.
13. **Closing CTA + footer** — four link columns, legal row.

## Effects (deliberately limited)

Scroll-reveal fades with stagger, count-up stats, typing chat mockup, magnetic/press-state buttons, subtle card lift with accent border, animated gradient underline on headline accent, marquee, copy-to-clipboard feedback, accordion spring. One hero bloom only — no glow on cards, buttons or text.

## Technical notes

- All colors, radii, shadows, gradients and motion tokens defined as semantic tokens in `src/styles.css`; no hardcoded color classes in components.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`.
- Page built at `/` (`src/routes/index.tsx`), sections split into components under `src/components/landing/`.
- Framer Motion for reveals; `prefers-reduced-motion` respected.
- SEO head on the route: title, description, og/twitter tags matching the Doko AI positioning.
- Static marketing page — no backend needed. Buttons link to the existing app URLs.
