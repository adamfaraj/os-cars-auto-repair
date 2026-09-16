---
name: Os-car's Auto Repair
description: A vinyl shop-sign marquee — outlined display lettering on a red/black/white field, built for a bilingual Durham driver scanning fast.
colors:
  shop-red: "#d81722"
  red-deep: "#a8121b"
  red-on-dark: "#e8515a"
  ink: "#121212"
  paper: "#f7f6f2"
  paper-alt: "#efeae0"
  kuruma-blue: "#2663eb"
typography:
  display:
    fontFamily: "Bungee, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 9vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8rem-0.95rem"
    fontWeight: 800
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  circle: "50%"
spacing:
  section-sm: "clamp(2.5rem, 6vw, 4rem)"
  section-md: "clamp(3rem, 7vw, 5rem)"
  section-lg: "clamp(3.5rem, 10vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-kuruma:
    backgroundColor: "{colors.kuruma-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
  button-kuruma-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.kuruma-blue}"
  button-outline-ink:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
---

# Design System: Os-car's Auto Repair

## Overview

**Creative North Star: "The Vinyl Shop-Sign Marquee"**

The site is built like a hand-painted, bilingual storefront sign, not a corporate auto-shop template: heavy outlined display lettering, a dominant red field, ink-black structural rules, and a crisp sign-white ground. It refuses the soft blue-gradient-with-wrench-icon look every repair-shop site defaults to, in favor of direct, high-contrast, unpretentious signage.

Depth is conveyed only as a soft, blurred lift under display type and floating badges (`text-shadow`/`box-shadow` with generous blur), never as a hard, zero-blur offset shadow — that harder device was tried during the build and removed in finish review as a neobrutalist costume the world doesn't wear. The real "outline" device is the `-webkit-text-stroke` ink stroke on display headlines (paint-order stroke-then-fill), paired with that soft lift underneath. Structure is carried by a recurring thick (3px) solid-ink rule/border, reused across the header, service list, seal badges, mobile bar, and map frame — a genuine signature, not a one-off.

Key Characteristics:
- Full-bleed red hero with outlined marquee headline directly on the field, no card wrapper.
- A dominant, page-scale red field (roughly 30-40% of surface across hero/trust-band/CTA), not a rare accent.
- Thick ink-black rule as the one recurring structural device (borders, dividers, ring badges).
- One deliberate palette exception: KurumaWorks blue, confined to `.btn-kuruma`.
- Outline + soft lift on display type; no hard offset shadows anywhere in the system.

## Colors

A committed two-color-plus-neutrals strategy: shop red is a dominant field color, not a rare accent, set against ink black structure and sign-white ground. One color, KurumaWorks blue, is a fixed third-party exception rather than a system color.

### Primary
- **Shop Red** (`#d81722`): dominant field color for the hero, trust-band, and CTA-band backgrounds; also the accent under headlines, scrollbar thumb, and focus ring. Covers roughly 30-40% of page-scale surface — a deliberate field color, not a sprinkle.
- **Red Deep** (`#a8121b`): a darker step used once, for the services-note "ask about our specials" line on the paper background, where straight shop red would be lower-contrast on `--paper`.
- **Red on Dark** (`#e8515a`): shop red re-tuned for legibility when placed as text on ink-black or on the black marquee ticker (alternating ticker items, positioning-section attribution line). Never used as a background.

### Neutral
- **Ink** (`#121212`): near-black text, structural rule/border color (3px rule motif), and full section background for the ticker, the positioning/quote section, and the footer.
- **Sign Paper** (`#f7f6f2`): the page's base ground and primary light text-on-dark color — a crisp sign-white, not a warm parchment tone.
- **Paper Alt** (`#efeae0`): secondary warm-neutral, used sparingly for the scrollbar track and footer secondary text/dividers.

### Fixed Exception
- **KurumaWorks Blue** (`#2663eb`): reserved exclusively for `.btn-kuruma` (solid fill / white text at rest, inverting to white fill / blue border+text on hover). This is the one place blue appears anywhere on the page; it is a third-party booking-partner affordance, deliberately foreign to the shop's own red/black/white system, never absorbed into it.

### Named Rules
**The Field, Not Accent Rule.** Shop red is a dominant page-scale field color (hero, trust-band, CTA-band), not a 5-10% accent. Any new section-level background should draw from red / ink / paper, not introduce a fourth field color.

**The One Blue Rule.** KurumaWorks blue appears only on `.btn-kuruma` and its states. It must never be used for any other button, link, background, or accent — its foreignness to the palette is the point (it signals "this is the third-party booking step").

## Typography

**Display Font:** Bungee (with Arial Narrow, sans-serif fallback)
**Body Font:** Archivo, a variable font (weight 400-900) (with Helvetica Neue, Arial, sans-serif fallback)

**Character:** A heavy, condensed, hand-painted marquee display face set against a plain, highly legible grotesk body — the pairing exists so a driver scanning in English or Spanish reads facts instantly, while headlines still carry the sign-painted voice.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 9vw, 5.5rem)`, line-height 0.98): hero headline only, uppercase, `-webkit-text-stroke: 2px` ink outline with `paint-order: stroke fill` and a soft blurred lift (`text-shadow: 0 8px 20px rgba(18,18,18,.35)`) — never a hard offset shadow.
- **Display, small** (400, `clamp(1.6rem, 4vw, 2.4rem)`–`clamp(2rem, 5vw, 2.75rem)`): section headings (`.section-heading`) and the CTA-band line (`.cta-text`); same face, no stroke/lift at this size.
- **Body** (400-600, `16px` base / `clamp(1.05rem, 2.2vw, 1.25rem)` for hero-sub, line-height 1.55): paragraph copy, hero subhead, positioning quote.
- **Label** (700-800, `0.8rem-1.05rem`, letter-spacing `0.02em`, uppercase where used): buttons, header phone number, seal-badge lines, footer headings.

### Named Rules
**The Headlines-Only Rule.** Bungee is used only for hero headline, section headings, the positioning attribution line, footer sub-headings, and the CTA line — never for body copy, buttons, or the bilingual-scanning UI text, which stays in Archivo for fast legibility in either language.

**The Outline-and-Lift Rule.** Display headlines get their sign-painted look from an ink text-stroke plus a soft blurred drop lift — never a hard, zero-blur offset shadow. A hard offset shadow was tried on the hero headline during finish review and rejected as a neobrutalist costume the world doesn't wear.

## Layout

Sections run full-width, edge-to-edge for field-color sections (hero, marquee ticker, trust-band, positioning, CTA-band, footer), with inner content constrained by section-specific max-widths (`880px` hero, `1100px` seal row/location/footer, `900px` services, `720px` positioning). Spacing rhythm is clamp-based rather than fixed: section vertical padding scales in three tiers — small (`clamp(2.5rem, 6vw, 4rem)`), medium (`clamp(3rem, 7vw, 5rem)`), and large (`clamp(3.5rem, 10vw, 7.5rem)`, hero only).

Responsive behavior: the service list and footer columns go single-column below 720px and multi-column above it (2-col services, 3-col footer, 4-col seal row above 720px vs. 2-col below). The location grid stacks below 860px and splits 1:1 above it. A sticky header (76px) pins the phone number and Book Now button right at all viewports; a mobile-only sticky bottom bar (68px, Call + Book Now) appears below 720px and is removed entirely at 720px+, with body bottom padding adjusting to match.

## Elevation & Depth

The system is mostly flat, with depth used only as a soft, blurred ambient lift under a few floating elements — never a hard, zero-blur offset shadow (that device was tested on the hero headline and explicitly rejected in finish review as a neobrutalist costume this world doesn't wear).

### Shadow Vocabulary
- **Headline lift** (`text-shadow: 0 8px 20px rgba(18, 18, 18, 0.35)`): soft blurred lift under the hero headline, paired with the ink text-stroke outline.
- **Scroll shadow** (`box-shadow: 0 6px 14px rgba(18, 18, 18, 0.18)`): appears on the sticky header only once scrolled (`.is-scrolled`), signaling it has detached from the page flow.
- **Seal lift** (`box-shadow: 0 6px 14px rgba(18, 18, 18, 0.16)`): soft ambient lift under each trust-band seal badge, reinforcing that the badges float above the red field.

### Named Rules
**The Soft-Lift-Only Rule.** Where depth is used at all, it is a soft, blurred, ambient lift responding to state (scroll) or floating placement (seals, headline) — never a hard offset/zero-blur shadow. Hard shadows are a banned device in this world, confirmed by their removal from the hero headline in finish review.

## Shapes

Corners are gently rounded on buttons and the footer logo chip (`border-radius: 8px`) — not a pill shape, and not sharp/square either. Circles are used deliberately for the four trust-band seal badges (`border-radius: 50%`) and the small service-list checkmark bullet, evoking rubber-stamp trust marks.

The dominant recurring structural device is a thick (3px) solid ink border/rule, reused across the site rather than invented per-component: the header's bottom border, the service-list's top/row-divider borders, the seal badge's solid ring (paired with a 2px dashed outer ring, offset 6px, for a double-ring stamp look), the location-map frame, and the mobile bar's top border and internal call/book divider. Two adjacent seal badges are each rotated a few degrees off-axis (±3-4deg) for a hand-stamped, not machine-aligned, feel.

### Named Rules
**The Thick-Rule Rule.** Structural separation between regions (header/body, list rows, badge rings, mobile-bar buttons) is always a solid 3px ink rule, not a thin 1px hairline or a soft shadow-only separation. This is a genuine cross-component signature, confirmed by five independent uses.

## Components

### Buttons
- **Shape:** gently rounded (8px radius), 3px solid ink border on every variant.
- **Primary / Outline (ink):** solid ink fill, sign-paper text at rest (`.btn-outline`); inverts to sign-paper fill / ink text on hover. A transparent variant (`.btn-outline-ink`) starts ink-text-on-transparent and inverts to ink-fill/paper-text on hover — used for secondary actions in the location section.
- **Kuruma (fixed exception):** solid KurumaWorks-blue fill, white text at rest; inverts to white fill, blue border+text on hover. This is the only blue surface in the system and the only button whose color is not drawn from the shop palette.
- **Press state:** all buttons shift `translateY(1px)` on `:active`, reinforcing a solid, pressable object rather than a flat link.

### Navigation
- **Header:** sticky, sign-paper background, 3px ink bottom border, logo mark left, phone number + `.btn-kuruma` Book Now pinned right. Gains a soft ambient shadow (`.is-scrolled`) once the page scrolls past 4px — the only state-driven shadow in the system.
- **Mobile bar (below 720px):** fixed to the viewport bottom, 68px tall, 3px ink top border, Call (left, ink text, red phone icon) and Book Now (right, `.btn-kuruma`) split by a 3px ink divider — the same thick-rule motif as the header, applied at the bottom edge.

### Seal Badge (signature component)
Four circular "rubber-stamp" trust marks in the trust-band: sign-paper fill, 3px solid ink ring plus a 2px dashed ink outer ring offset 6px out, soft ambient lift, and a slight rotation (±3-4deg) per badge. Each carries three text lines (small red label / bold ink title / muted ink subtitle) — used only for the four confirmed trust facts (NC Inspection Station, 2-Year Warranty, Import & Domestic, Hablamos Español), never as a generic badge/chip for arbitrary content.

### Service List (signature component)
A menu-board-style list: top and per-row 3px ink dividers, each row led by a small red circular badge containing a hand-drawn SVG checkmark (referenced via `<use href="#icon-check">`, defined once as a shared symbol) — never a Unicode glyph or icon-font character. Two-column above 720px, single column below.

### Marquee Ticker (signature component)
A continuous, decorative (`aria-hidden`) scrolling strip of service names on an ink-black background, tilted -1deg and scaled up slightly to bleed past its section edges, alternating sign-white and red-on-dark text per item, separated by a decorative `&#9733;` star glyph between entries. Respects `prefers-reduced-motion` (animation disabled). This decorative separator star is a native ornament of the vinyl-marquee world, not a functional icon, and is distinct from the service-list's drawn-SVG checkmarks used for actual functional/informational icons.

## Do's and Don'ts

### Do:
- **Do** treat shop red as a field color at section scale (hero, trust-band, CTA-band), not a small accent.
- **Do** use the 3px solid ink rule as the default structural separator between regions, list rows, and split buttons.
- **Do** pair any display-type outline effect with a soft blurred lift, never a hard offset shadow.
- **Do** draw functional icons (checkmarks, phone) as inline SVG paths/symbols, never Unicode glyphs or icon fonts — the marquee's decorative `&#9733;` separator is the one sanctioned exception, and only as a non-functional, aria-hidden ornament inside the marquee itself.
- **Do** keep `.btn-kuruma` visually foreign (KurumaWorks blue) to signal the third-party booking step; never restyle it toward the shop's red/black/white system.

### Don't:
- **Don't** introduce a hard, zero-blur offset shadow anywhere in this system — it was built, reviewed, and explicitly removed from the hero headline as a neobrutalist device this world doesn't wear.
- **Don't** use KurumaWorks blue (`#2663eb`) for anything other than `.btn-kuruma` and its hover state.
- **Don't** use a pill (fully rounded) button shape; the system's rounding is consistently 8px, not a capsule.
