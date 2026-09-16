# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Explicit user decision, established pattern from prior KurumaWorks-booking sites: plain static HTML/CSS/JS, no framework, built with Vite (src/ as Vite root, public/ for static assets, dist/ as build output). Deploys to AWS Amplify Hosting via amplify.yml at the repo root.

## Users

Local drivers in and around Durham, NC needing auto repair, maintenance, or an official NC vehicle inspection. Owners of both import and domestic vehicles. Includes Spanish-speaking customers specifically ("Hablo Espanol" is a stated capability, not a nice-to-have). Visitors arrive either ready to call the shop directly or wanting to book an appointment online through KurumaWorks — the site must serve both paths equally well.

## Product Purpose

A marketing and booking site for Os-car's Auto Repair, a local auto repair shop. It exists to build enough trust that a driver picks this shop over a nearby competitor, then converts that trust into a call or a KurumaWorks booking.

## Positioning

Honest, quality service at affordable prices, from a shop that specializes in both import and domestic vehicles. Broad technical range (A/C systems, brakes and chassis, charging and starting systems, electrical problems, computer diagnostics, ECU recalibration/reprogramming) backed by a 2-year warranty on all work, official NC inspection station status, and bilingual service (English/Spanish). The pitch is capability plus trust plus price, not a narrow specialty.

## Operating Context

- Address: 1404 Christian Ave, Durham, NC 27705.
- Phone: (919) 672-2098.
- Hours: Mon–Fri 8am–6pm, Sat by appointment.
- Booking: KurumaWorks, shop URL `https://kurumaworks.com/mechanics/nc/durham/os-cars-auto-repair` (real, not a placeholder).
- Domain: https://os-carsautorepair.com
- Analytics: Google Analytics via gtag.js, measurement ID `G-JH5TEL54MJ`.

## Capabilities and Constraints

- Services: general auto repair, oil changes, brakes, official NC vehicle inspection, A/C systems, chassis, charging/starting systems, electrical diagnostics, computer diagnostics, ECU recalibration/reprogramming, import and domestic vehicles.
- 2-year warranty on all work performed — a confirmed fact, not a generic claim.
- Bilingual service: English and Spanish.
- No online booking exists directly on this site; booking happens through KurumaWorks (external, opens in a new tab).
- No pricing, staff bios, certifications, or specific brand/model specialties beyond "import and domestic" have been provided and must not be invented.
- The owner's own positioning copy says "ask About Our Specials" — the site may invite visitors to ask about current specials (a real, owner-confirmed invitation), but must never name a specific special, discount, or price, since none has been provided.
- No testimonials, reviews, or case studies exist yet; none should be fabricated.
- No real photos of the shop, staff, or vehicles have been provided; the homepage must not use stock photography standing in as the shop's own people/space/vehicles.

## Brand Commitments

- Name: Os-car's Auto Repair.
- Existing logo at `public/logo.png` (transparent) and `public/logo.jpg`: crossed-pistons-and-wrench mark, red (~#d81722) and black/ink (~#111111) on white/transparent. Treat as the binding brand mark.
- KurumaWorks booking buttons use KurumaWorks' own brand blue (#2663eb), which is deliberately distinct from this shop's own red/black palette — a third-party affordance, not part of the shop's identity.
- Standing footer credit: "Built by KurumaWorks" linking to kurumaworks.com, per the established pattern across all KurumaWorks-booking sites.

## Evidence on Hand

- `public/logo.png`, `public/logo.jpg` — existing logo, red/black crossed-piston-and-wrench mark with shop name.
- All facts above (address, phone, hours, services, positioning, warranty, bilingual service, booking URL, GA id, domain) were provided directly by the business owner. No other copy, photos, testimonials, or pricing exist yet.

## Product Principles

1. Real contact info (phone, address, hours) stays reachable within one glance at every viewport.
2. Never state a fact (hours, address, services, pricing, credentials, warranty terms) beyond what's confirmed here.
3. Trust is earned through clarity, the 2-year warranty, NC inspection-station status, and honest presentation — never through invented social proof.
4. Support both conversion paths (call and KurumaWorks booking) without burying either.
5. Bilingual service (Hablo Espanol) is a real differentiator and should be visible, not buried in body copy.
