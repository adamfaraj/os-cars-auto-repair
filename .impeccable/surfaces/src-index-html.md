---
version: 1
slug: "src-index-html"
primary_target: "src/index.html"
related_targets: []
---

# Homepage — Os-car's Auto Repair

Scope: single marketing homepage. Visitor mode: Persuade.

Audience/job: local Durham NC drivers (import + domestic vehicles, English or Spanish speaking) who need auto repair, maintenance, or an official NC inspection, and must decide fast whether to call or book this shop over a competitor.

Content/proof to use: real address, phone, hours, full service list, 2-year warranty, NC inspection-station status, bilingual service, KurumaWorks booking, existing red/black piston-and-wrench logo. No stock photos of people/vehicles, no invented testimonials/pricing/certifications.

Constraints: sticky header (phone + Book Now right-aligned) and mobile sticky bottom bar (Call + Book Now) are non-negotiable per standing site requirements. KurumaWorks blue (#2663eb) is reserved exclusively for `.btn-kuruma` and must never be absorbed into the shop's own red/black palette.

## Direction contract

THESIS: The homepage is built like the shop's own hand-painted, bilingual storefront marquee sign — thick outlined display lettering, high-contrast red/black/white, direct and unpretentious — refusing the soft corporate-blue-gradient-with-wrench-icon template every auto-shop site defaults to.

OWN-WORLD: Committed color strategy — shop red `#d81722` (sampled from the existing logo) as the dominant page-scale field color (30-60% of the surface), ink black `#111111` for outlines, rules, and structure, and a crisp sign white `#f7f6f2` as the ground (not a cream/parchment tone — this is painted-sign material, not paper). Display type: a heavy, condensed, outline-capable face set like hand-painted marquee lettering, used sparingly and only for headlines/section marquees. Body/UI type: a plain, highly legible grotesk that reads cleanly in both English and Spanish with no display tricks — this shop's audience includes people scanning for facts fast, in two languages. Components carry thick black outline strokes like painted sign borders (cards, badges, the service list). The KurumaWorks blue `.btn-kuruma` button is the one deliberate exception to this palette everywhere it appears and must read as an obvious third-party affordance, never blended into the shop's own red/black/white system.

STORY: A Durham driver with a car problem lands, immediately reads this as a real, local, honest shop that speaks their language (bilingual signal near the top), sees the phone number and Book Now within one glance at every viewport, scans the full service range (imports and domestics, A/C through ECU reprogramming), registers the 2-year warranty and NC-inspection-station status as concrete trust marks (not soft claims), and either calls or books through KurumaWorks.

FIRST VIEWPORT: Full-bleed marquee hero on the red field. Sticky header above it: logo mark left, formatted phone number and Book Now button pinned right. Hero headline set in the heavy outlined marquee face, directly on the red field (never inside a soft white card), stating the shop's real promise (honest, affordable, works on import and domestic). Address/hours line and the bilingual signal sit near the headline, legible at a glance. Primary Book Now (`.btn-kuruma`, the page's only blue element) and a secondary Call button sit directly under the headline at high contrast against the red field.

FORM: Vinyl Shop-Sign Marquee — Impeccable's Pick (card id `model-pick`) from the direction round, seed key `e97b2eae`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
