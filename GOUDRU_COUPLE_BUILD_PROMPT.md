# Goudru Couple Cloud Kitchen — Master Build Prompt

> **What this document is:** A single, copy-paste-ready master prompt (plus the reasoning behind it) that you can hand to any AI coding tool, a developer, or use yourself to build a genuinely premium website for Goudru Couple Cloud Kitchen. It is written so the *output looks hand-crafted by a senior product studio* — not generated. Read the whole thing once; the actual prompt to use is in **Section 9**.

---

## 0. How to Use This File

1. Read Sections 1–8 so you understand *why* each choice was made (this is what lets you defend the pitch to Goudru Couple and sound like a professional, not a tool-user).
2. Fill in the `⟨PLACEHOLDER⟩` values in **Section 9** with real Goudru Couple details from their Instagram.
3. Paste Section 9 into your build tool / IDE agent.
4. Keep this file out of the final repo (it's your playbook, not a deliverable for the client).

---

## 1. What We Learned From the Reference Sites (Research Summary)

I analyzed your three reference apps plus four benchmark premium platforms. Here is what actually matters, distilled:

| Source | The one thing worth stealing |
|--------|------------------------------|
| **FreshMenu** | A single, confident brand promise repeated everywhere ("Made fresh. Served fresh."). One clear message beats ten features. |
| **HungryBotz** ("AI Waiter for every craving") | Conversational / craving-based discovery. People don't always know the dish name — they know the *mood*. |
| **Pomelli / V's Cloud Kitchen** | Auto-generated sites look generic fast. Our job is the opposite — bespoke, brand-specific. |
| **Sweetgreen** | Radical ingredient transparency + editorial food photography justifies premium pricing. **No prices on the marketing pages** to protect the premium feel; prices only appear inside the ordering flow. |
| **EatClub** | "Sophistication through simplicity" — hide complex logistics behind an effortless UI. Strong social proof (numbers: meals served, companies, cities). |
| **ChowNow** | Commission-free, **own your customer data**. This is the core money argument to Goudru Couple: escape 20–30% Swiggy/Zomato cut. |
| **Rebel Foods** | Multi-brand architecture under one operating system — build so we can add more Bangalore kitchens later without a rewrite. |

**The synthesis for Goudru Couple:** A warm, couple-led, story-first brand (their human edge — a couple who cook) wrapped in a Sweetgreen-grade visual polish, a HungryBotz-style "what are you craving?" discovery entry, ChowNow-style commission-free direct ordering, and a Rebel-Foods-style multi-tenant backbone so the *same codebase* becomes your product for every other Bangalore cloud kitchen later.

---

## 2. The "Doesn't Look AI-Generated" Rulebook

This is the requirement you stressed most. Generic AI sites are recognizable because they all share the same tells. The prompt in Section 9 explicitly bans them:

**Banned (the AI tells):**
- Generic hero: centered heading + subtitle + two pill buttons on a gradient.
- Emoji as icons (🍔🚀✨) anywhere in the UI.
- Purple-to-blue gradients, "glassmorphism" cards everywhere.
- Lorem-style filler copy and vague verbs ("Seamlessly elevate your dining journey").
- Stock icon sets used without customization.
- Perfectly even, symmetrical everything (real design has intentional asymmetry).
- Three identical feature cards in a row with a tiny icon on top.

**Required (the premium markers):**
- A **real, opinionated brand system**: one signature color drawn from their food/Instagram, one warm neutral, one ink-dark; a genuine type pairing (e.g., a characterful display serif for headings + a clean grotesque for body).
- **Editorial layout**: overlapping elements, a defined grid that's occasionally broken on purpose, generous negative space, large typography.
- **Real food photography** front and center (theirs, not stock), treated consistently (same crop ratios, same warmth grade).
- **Micro-interactions with restraint**: subtle hover states, a smooth add-to-cart, one signature motion moment — not motion everywhere.
- **Human copy**: written in the couple's voice, specific ("We slow-cook the biryani for 4 hours") not generic.
- **Details that signal care**: a custom 404, a considered empty-cart state, a loading state that's on-brand.

If a stranger can't tell whether a boutique agency or a tool built it, we succeeded.

---

## 3. Feature Set (Prioritized, Not a Wish-List)

### Must-have (MVP — this is what ships first)
- **Story-led homepage** — the couple, their kitchen, one clear promise, live-feeling social proof.
- **"What are you craving?" discovery** — mood/craving chips (Spicy, Comfort, Light, Sweet, Bestseller) that filter the menu, plus normal category browse.
- **Menu** — editorial cards, veg/non-veg + spice-level + prep-time badges, ingredient transparency, "loved on Instagram" tags on bestsellers.
- **Cart + checkout** — add/customize, address, payment (Razorpay + UPI + COD), order confirmation.
- **Order tracking** — status stages (Received → Cooking → Out for delivery → Delivered), ETA, WhatsApp link.
- **Contact / About** — click-to-call, WhatsApp, hours, delivery area, FSSAI license, the couple's story.
- **Simple admin** — accept/advance orders, toggle item availability, mark "kitchen busy."
- **Mobile-first + PWA** — installable, fast, works on a mid-range Android.

### Phase 2 (differentiators)
Loyalty points, one-tap reorder, saved favorites, reviews with photos (UGC), scheduled orders, email/SMS/WhatsApp notifications, Instagram feed embed.

### Phase 3 (moat)
Subscriptions/meal plans, group ordering, referral program, recommendations, live kitchen status, analytics dashboard for the owners.

---

## 4. Tech Stack (Free-Tier-First, Multi-Tenant Ready)

```
Framework   : Next.js (App Router) + TypeScript
Styling     : Tailwind CSS + a small custom design-token layer (NOT a generic UI kit look)
Motion      : Framer Motion (used sparingly)
Backend/DB  : Supabase (Postgres + Auth + Storage + Realtime)  ← generous free tier, real SQL, scales
Images      : Cloudinary or Supabase Storage, served as WebP/AVIF
Payments    : Razorpay (UPI, cards, COD)
Hosting     : Vercel (free tier) + Cloudflare in front (free CDN/cache)
Notifications: WhatsApp link (free) + Resend email (free tier); SMS later (paid, pay-per-use)
Search      : Client-side/Postgres full-text first; Algolia/Meilisearch later if needed
```

**Why Supabase over Firebase here:** real relational data (multi-tenant: `restaurants → menus → orders`), row-level security per tenant, and it makes the "expand to every Bangalore kitchen" plan a config change, not a rebuild.

**Multi-tenant from day one (invisible to Goudru Couple):** every table carries a `restaurant_id`. Goudru Couple is simply the first tenant. Later kitchens = new rows + a theme config, same code. This is the Rebel Foods lesson applied cheaply.

---

## 5. The 1000-Orders-Per-Minute Requirement — Straight Talk

You must go into the client pitch knowing this, because it protects your credibility:

**1000 orders/minute = ~16.7 orders/second = enterprise-scale traffic.** No real business runs that on a *completely* free tier with *zero* delay guaranteed — anyone promising that is bluffing. What we *can* honestly deliver:

- **Architecture that doesn't fall over under spikes** and costs ₹0 at launch: static/edge-cached pages, CDN in front, serverless functions, a database with connection pooling.
- **A clear, cheap scaling ladder** so the number is a *ceiling we can reach*, not a launch-day promise:

| Stage | Real traffic | Monthly cost | How |
|-------|-------------|--------------|-----|
| Launch | up to ~100 orders/day | ₹0 (free tiers) | Vercel + Supabase free + Cloudflare |
| Growth | ~1,000 orders/day | ~₹2,000–4,000 | Supabase Pro, Vercel Pro |
| Scale | high spikes toward 1000/min | ~₹15,000–25,000 | Read replicas, Redis queue, edge caching, order-intake buffering |

**The engineering that makes the big number possible (build these in from the start, they're free):** decouple order *intake* from order *processing* with a queue so a spike never blocks a customer; cache the menu aggressively (it changes rarely); make the checkout write path lean. Frame it to the client as: *"Free to launch, engineered so that when you hit 1000 orders/minute, we flip on paid infrastructure without rewriting anything."* That's the honest, professional position.

---

## 6. Design Direction (Fill With Real Brand Values)

- **Personality:** warm, personal, appetite-driven, "a couple who genuinely cook for you" — not corporate, not a faceless app.
- **Color:** ⟨pull the signature hue from their hero dish / Instagram grid⟩ + warm cream + deep ink. One accent only.
- **Type:** display serif (character) for headlines + clean sans for everything else. No default system-font look.
- **Imagery:** their real food, consistent warm grade, big and confident.
- **Voice:** first-person plural ("we"), specific and sensory. Every dish description sounds like the cook talking.

---

## 7. Information You Still Need To Supply

Before building, collect from their Instagram / a call:
- Handle, logo, brand colors, 3+ photos per dish, full menu + prices.
- The couple's real story (how/why they started), names, a photo.
- FSSAI license no., delivery areas + charges, hours, WhatsApp business number, payment methods.
- Their single biggest pain today (Instagram-DM order chaos? Swiggy commission? no repeat customers?).

---

## 8. Build Order (So It Ships Fast and Clean)

1. Design tokens + brand system + layout shell (get the *look* right first — this is what sells).
2. Menu data model (multi-tenant) + menu page + craving discovery.
3. Cart → checkout → Razorpay → order record.
4. Order tracking + admin order board.
5. About/story + contact + PWA + polish (404, empty states, loading).
6. Deploy on Vercel + Cloudflare; load-test the intake path.

---

## 9. THE MASTER PROMPT (Copy-Paste This)

> Replace every `⟨…⟩` with real Goudru Couple details before using. Paste into your build agent.

```
You are a senior product designer + full-stack engineer at a boutique digital
studio. Build a PREMIUM, hand-crafted website + ordering web app for a real
cloud kitchen called "Goudru Couple Cloud Kitchen" — a husband-and-wife team in
Bangalore with a 14k-strong Instagram following. This must look like a boutique
agency built it. It must NOT look AI-generated or template-based.

=== BRAND ===
- Name: Goudru Couple Cloud Kitchen
- Story: ⟨the couple's real story⟩
- Cuisine / signature dishes: ⟨…⟩
- Signature color: ⟨hex from their food/Instagram⟩ + warm cream + deep ink. ONE accent only.
- Voice: warm, first-person "we", sensory and specific. Never generic marketing-speak.
- Instagram: ⟨@handle⟩, 14k followers — use social proof prominently.

=== ABSOLUTE DESIGN RULES (this is the priority) ===
DO:
- An opinionated brand system: real type pairing (characterful display serif for
  headings + clean grotesque for body), a 3-color palette, custom design tokens.
- Editorial layout: large type, generous negative space, intentional asymmetry,
  overlapping elements, a grid that's occasionally broken on purpose.
- Big, confident real food photography with a consistent warm grade and crop ratio.
- Restrained, tasteful micro-interactions and ONE signature motion moment.
- Human, specific copy in the couple's voice. Custom 404, empty-cart, loading states.
DON'T (these are AI tells — banned):
- No centered hero of heading+subtitle+two pill buttons on a gradient.
- No emoji used as UI icons. No purple→blue gradients. No glassmorphism everywhere.
- No three-identical-icon-cards-in-a-row feature section.
- No vague copy ("elevate your journey"). No stock icons used as-is. No perfect symmetry.
- No prices on marketing/landing sections — prices appear only inside the ordering flow.

=== TECH STACK ===
- Next.js (App Router) + TypeScript, Tailwind + custom design-token layer, Framer Motion (sparingly).
- Supabase (Postgres + Auth + Storage + Realtime). Payments: Razorpay (UPI/cards/COD).
- Deploy target: Vercel free tier, Cloudflare CDN in front. Images as WebP/AVIF.
- MULTI-TENANT from day one: every table has restaurant_id; Goudru Couple is tenant #1.
  A future kitchen = new rows + theme config, NO code rewrite. Enforce row-level security per tenant.

=== FEATURES (MVP — build these now) ===
1. Story-led homepage: the couple, the kitchen, ONE clear brand promise, social proof
   (followers, dishes served, rating), an Instagram-feel section.
2. "What are you craving?" discovery: mood chips (Spicy / Comfort / Light / Sweet /
   Bestseller) that filter the menu, alongside normal category browse.
3. Menu: editorial cards; veg/non-veg + spice-level + prep-time badges; ingredient
   transparency; "Loved on Instagram" tag on bestsellers; search.
4. Cart + checkout: add/customize items, address, Razorpay (UPI/card/COD), confirmation.
5. Order tracking: Received → Cooking → Out for delivery → Delivered, ETA, WhatsApp link.
6. About + Contact: couple's story, click-to-call, WhatsApp, hours, delivery area, FSSAI no.
7. Admin board: accept/advance orders (realtime), toggle item availability, "kitchen busy" flag.
8. Mobile-first + installable PWA. Fast on a mid-range Android.

=== SCALABILITY ===
Engineer so it costs ₹0 at launch but can reach 1000 orders/minute later WITHOUT a rewrite:
- Aggressively cache the menu (changes rarely) at the edge.
- Decouple order INTAKE from order PROCESSING via a queue so a traffic spike never
  blocks a customer at checkout. Keep the checkout write path lean.
- Serverless functions, DB connection pooling. Document the paid scaling ladder in the README.

=== DELIVERABLES ===
- Full running Next.js app, seeded with ⟨real menu⟩ sample data.
- README: setup, env vars, deploy steps, and the honest free→paid scaling ladder.
- Clean, typed, commented-only-where-non-obvious code. No dead code, no filler.

Start by building the design system + homepage shell so the LOOK is right first,
then the menu + discovery, then cart→checkout→Razorpay, then tracking + admin,
then polish (404 / empty / loading states). Show me the homepage before moving on.
```

---

## 10. What To Say When You Pitch Goudru Couple

- **The money line:** "Every order on Swiggy/Zomato costs you 20–30%. On your own site, that's yours — and so is the customer's phone number, so you can bring them back."
- **The brand line:** "Your 14k followers currently live on rented land. This makes *you* the destination."
- **The honesty line (builds trust):** "It launches free. When you grow to serious volume, we scale the infrastructure — no rebuild, just a switch."
- Lead with the *look* (show the homepage), not the feature list. People buy the feeling first.

---

# APPENDICES — Operational Detail

*(Reference material for the build. Sections 1–10 above are the core; everything below is the "how" you pull from as you execute.)*

## A. Data Model (Multi-Tenant, Supabase / Postgres)

Every table carries `restaurant_id` and is protected by row-level security so tenants can never see each other's data. Goudru Couple is `restaurant_id` #1.

```sql
restaurants   ( id, name, slug, theme_config jsonb, fssai_no, whatsapp,
                delivery_areas jsonb, hours jsonb, is_open bool, created_at )

users         ( id, restaurant_id, name, email, phone, addresses jsonb,
                loyalty_points int, created_at, last_order_at )

menu_items    ( id, restaurant_id, name, description, category, price,
                image_url, is_veg bool, spice_level int, prep_minutes int,
                is_available bool, popularity int, craving_tags text[],
                ingredients text[] )

orders        ( id, restaurant_id, user_id, items jsonb, total,
                status text,            -- received|cooking|out_for_delivery|delivered
                payment_method, payment_status, delivery_address jsonb,
                eta timestamptz, created_at )

reviews       ( id, restaurant_id, user_id, order_id, rating, comment,
                images text[], created_at )

loyalty_txns  ( id, restaurant_id, user_id, points, type, order_id, created_at )
```

`craving_tags` (e.g. `{spicy,comfort,bestseller}`) powers the "What are you craving?" discovery chips.

## B. Page-by-Page Structure

- **Home** — hero (real food, not a gradient), the couple's promise, craving chips, featured dishes, social proof strip, Instagram-feel section, how-it-works (3 steps), testimonials.
- **Menu** — filter rail (category / veg / spice / price / craving), search with autocomplete, editorial cards, quick-view modal, customization.
- **About** — the couple's story, mission, kitchen photos, FSSAI + hygiene, press/mentions.
- **Order tracking** — order id or login, live status stages, ETA, delivery contact, WhatsApp/call.
- **Dashboard** — order history, saved addresses, loyalty balance, favorites, subscriptions, profile.
- **Contact** — form, WhatsApp deep-link, click-to-call, hours, delivery area, socials.
- **Admin** — realtime order board, availability toggles, "kitchen busy" flag.
- **System states** — custom 404, empty cart, on-brand loading, offline (PWA).

## C. Development Phases & Checklists

**Phase 1 — MVP (4–6 wks):** design system + homepage shell → menu + craving discovery → cart → checkout → Razorpay → order record → tracking → admin board → About/Contact → PWA → polish. Ships free on Vercel + Cloudflare.

**Phase 2 — Differentiators (3–4 wks):** loyalty points, one-tap reorder, favorites, photo reviews (UGC), scheduled orders, email/WhatsApp notifications, Instagram embed.

**Phase 3 — Moat (4–6 wks):** subscriptions/meal plans, group ordering, referral program, recommendations, live kitchen status, owner analytics dashboard.

**Phase 4 — Optimize (ongoing):** performance, SEO, A/B tests, infra scaling per Section 5 ladder.

## D. Cost Breakdown

| Stage | Real traffic | Monthly | Stack |
|-------|-------------|---------|-------|
| Launch | up to ~100 orders/day | ₹0 | Vercel free + Supabase free + Cloudflare + domain (~₹80/mo) |
| Growth | ~1,000 orders/day | ₹2,000–4,000 | Supabase Pro + Vercel Pro + pay-per-use SMS |
| Scale | spikes toward 1000/min | ₹15,000–25,000 | read replicas, Redis queue, edge cache + Razorpay % per txn |

Development effort if quoting the client: Phase 1 is the sellable MVP; price Phases 2–3 as add-ons.

## E. Pre-Development Checklist (Collect From Instagram / A Call)

- [ ] Handle, logo (hi-res), brand colors (hex), full menu + prices
- [ ] 3+ photos per dish; the couple's photo + real story; team details
- [ ] FSSAI license no., delivery areas + charges, business hours
- [ ] WhatsApp Business number, Razorpay merchant account, domain preference
- [ ] Emails needed (info@ / orders@ / support@), Google Maps location
- [ ] T&C, Privacy, Refund/Cancellation policy drafts

## F. Discovery Questions For Goudru Couple

1. Top 3 pain points with how you take orders today?
2. What % of orders come through Instagram DMs?
3. On Swiggy/Zomato? What commission are you paying?
4. Average orders/day now; peak hours & days?
5. Delivery radius? Do you have a customer phone-number list?
6. Which dishes do customers ask for most?
7. Budget range and timeline expectations?

## G. Non-Negotiables Checklist (Quality Gate Before Launch)

- [ ] Passes the Section 2 "AI tells" ban — a stranger can't tell a tool built it
- [ ] Real food photography, consistent grade; no stock icons used as-is
- [ ] Mobile-first, fast on a mid-range Android; installable PWA
- [ ] HTTPS, input validation, RLS per tenant, secrets in env vars, rate-limited APIs
- [ ] Custom 404 / empty-cart / loading states exist and are on-brand
- [ ] Order intake decoupled from processing (spike-safe); menu edge-cached
- [ ] SEO: meta + Open Graph + schema markup, sitemap, <3s load, semantic HTML

## H. Demo Scope & Client Approval Flow

**This first build is a DEMO, not the full product.** Goal: show Goudru Couple a working, premium sample so they say yes — then gather real requirements and build the real thing.

**Demo menu (5 items only)** — real dishes from @gowdrucouple, chosen to exercise every feature (veg + non-veg, cheap + premium, meal + starter, healthy niche):

1. **Chicken Biryani / Pulav** — hero dish (Biryani)
2. **Mutton Curry / Fry** — premium high-value (Mutton)
3. **Chicken Kebab / Starter** — starter/upsell (Chicken)
4. **Weight-Loss Meal Bowl** — key differentiator, powers "Light/Healthy" craving chip (Healthy)
5. **Daal + Rice / Home Thali** — comfort + veg option for badge demo (Veg/Comfort)
6. **Pregnancy ("Prego") Meal** — key differentiator #2, powers a "Prego/Care" craving chip; nutrition-focused home food for expecting mothers (Healthy/Care)

Now **6 demo items**. The two differentiators (Weight-Loss + Pregnancy meals) are what make @gowdrucouple stand out — no other cloud kitchen offers care-focused home food, so the demo must showcase both.

Each item ships with 1 short video + 2–3 photos + name/description/price/veg-flag/spice-level. Assets live in `assets/` (per-item subfolders).

**Flow (do not skip):**
```
1. Build the 5-item DEMO (this scope) — premium look, real ordering flow, sample data.
2. Present the demo to Goudru Couple.
3. → On approval: sit with the client, gather full requirements
     (complete menu + prices, delivery areas, brand assets, policies, budget, timeline).
4. THEN continue to the full build (Phases 1–3) using those real requirements.
```

Do **not** build the full menu or Phase 2/3 features until after client approval + requirements gathering. The demo's only job is to win the deal.

---

**Version 1.2 · 2026-09-18 · Single-file playbook for internal use — do not ship to client.**
