# Goudru Couple Cloud Kitchen — Complete End-to-End Tech Stack & Tools

> Everything needed to design, build, ship, run, and grow the web app. Free-tier-first, multi-tenant ready. Each item lists **what it is · why it · free tier · when to pay**. Companion to [GOUDRU_COUPLE_BUILD_PROMPT.md](GOUDRU_COUPLE_BUILD_PROMPT.md).

---

## 0. Stack At A Glance

```
Frontend      Next.js (App Router) + TypeScript + Tailwind + Framer Motion
Backend/DB    Supabase (Postgres + Auth + Storage + Realtime + Edge Functions)
Payments      Razorpay (UPI / cards / netbanking / COD)
Hosting       Vercel (app) + Cloudflare (CDN, cache, DNS)
Images        Cloudinary (or Supabase Storage) → WebP/AVIF
Messaging     WhatsApp (links + later Business API) · Resend (email) · MSG91 (SMS, India)
Scale layer   Upstash Redis (queue + cache) — turned on at Growth stage
Analytics     Vercel Analytics + Google Analytics 4 + PostHog
AI            Claude / OpenAI API · a chatbot widget · AI dev tools (Cursor, Copilot, v0)
```

Everything above has a usable **free tier** for launch. Paid only kicks in as real volume arrives (see Section 12).

---

## 1. Frontend

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Next.js (App Router)** | React framework — SSR/SSG for SEO + speed, API routes, image optimization. The app itself. | Open source |
| **TypeScript** | Type safety → fewer runtime bugs, better for a growing multi-tenant codebase. | Free |
| **Tailwind CSS** | Utility styling + a **custom design-token layer** (so it does NOT look like a generic UI kit). | Free |
| **Framer Motion** | Restrained micro-interactions + one signature motion moment. | Free |
| **shadcn/ui + Radix** | Accessible headless primitives you restyle to the brand (not used stock). | Free |
| **Lucide / custom SVG** | Icons — customized, never emoji-as-icons. | Free |
| **React Hook Form + Zod** | Forms + schema validation (checkout, address, admin). | Free |
| **Zustand** | Lightweight state (cart, session) — simpler than Redux. | Free |
| **next-pwa** | Installable PWA, offline menu, push-ready. | Free |
| **TanStack Query** | Server-state caching/fetching for menu + orders. | Free |

## 2. Backend, Database & Auth

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Supabase** | Postgres + Auth + Storage + Realtime + Edge Functions in one. Real SQL = clean multi-tenant (`restaurant_id` + row-level security). Realtime powers the admin order board. | 500MB DB, 1GB storage, 50k monthly active users |
| **Postgres (via Supabase)** | Relational data: restaurants → menus → orders. | Included |
| **Row-Level Security (RLS)** | Each tenant sees only its own rows — the multi-tenant safety net. | Included |
| **Supabase Auth** | Email/phone/OTP + social login. | Included |
| **Prisma or Drizzle ORM** *(optional)* | Typed DB access + migrations if you prefer code-first schema. | Free |

*Alternatives if ever needed:* Firebase (NoSQL, great realtime) · Appwrite (self-host) · Neon (serverless Postgres).

## 3. Payments

| Tool | What / Why | Cost |
|------|-----------|------|
| **Razorpay** | India-first: UPI, cards, netbanking, wallets, COD. No setup fee. | ~2% per transaction |
| **UPI (via Razorpay)** | Cheapest, most-used method in India. | Low/nil |
| **Cashfree / PhonePe PG** | Backup gateways. | ~2% |

## 4. Hosting, DNS & CDN

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Vercel** | Zero-config Next.js hosting, global edge, preview deploys per PR. | Hobby: generous for launch |
| **Cloudflare** | DNS + CDN + edge cache + DDoS + free SSL. Caches the menu at the edge (spike defense). | Free plan |
| **Domain** | e.g. `goudrucouple.com` from Namecheap/GoDaddy/Cloudflare Registrar. | ~₹800–1000/yr |

## 5. Media & Images

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Cloudinary** | Upload, auto WebP/AVIF, on-the-fly resize/crop, consistent warm grade for food photos. | 25GB storage + 25GB bandwidth |
| **Supabase Storage** | Simpler alt if staying all-in on Supabase. | 1GB |
| **Squoosh / Sharp** | Manual image compression during build. | Free |

## 6. Messaging & Notifications

| Tool | What / Why | Free / cost |
|------|-----------|-------------|
| **WhatsApp click-to-chat links** | Order updates + support, zero cost at launch. | Free |
| **WhatsApp Business API** (via Interakt/Gupshup/Twilio) | Automated order status messages later. | Paid per conversation |
| **Resend** | Transactional email (confirmations, receipts) — clean DX. | 3,000 emails/mo free |
| **MSG91** | India SMS + OTP. | Pay-per-SMS (~₹0.15) |
| **Twilio** | SMS/WhatsApp alternative, global. | Pay-as-you-go |

## 7. AI & Chatbots (Requested)

### 7a. AI features inside the product
| Tool | Use in the app | Notes |
|------|---------------|-------|
| **Claude API (Anthropic)** | "What are you craving?" natural-language discovery, dish recommendations, smart FAQ answers, review summarization. Latest models: Opus 5 / Sonnet 5 / Haiku 4.5. | Pay per token; cache prompts to cut cost |
| **OpenAI API (GPT)** | Alternative LLM for the same features. | Pay per token |
| **Support chatbot widget** — pick one: | | |
| • **Tidio / Crisp / Chatwoot** | Live-chat + bot widget for support; Chatwoot is open-source/self-hostable. | Free tiers exist |
| • **Voiceflow / Botpress** | Build a guided "order helper" conversational flow. | Free tier |
| • **Custom LLM chat** (Claude/OpenAI + Vercel AI SDK) | Fully on-brand in-app assistant: takes cravings → suggests dishes → adds to cart. | You build it |
| **Vercel AI SDK** | Framework to wire the LLM chat/streaming into Next.js cleanly. | Free |
| **pgvector (Supabase)** | Store menu embeddings for semantic "find me something like X" search. | Included in Postgres |

### 7b. AI tools that speed up BUILDING the site
| Tool | Use |
|------|-----|
| **Claude Code / Claude** | Generate + refactor code, write the app from the master prompt. |
| **Cursor** | AI-native IDE — inline edits, whole-file changes. |
| **GitHub Copilot** | Autocomplete while coding. |
| **v0.dev (Vercel)** | Generate React/Tailwind UI components fast (then de-genericize them). |
| **Midjourney / DAL·E / Ideogram** | Concept art, backgrounds, placeholder food shots before real photos arrive. |
| **Figma + AI plugins** | Design mockups, brand system, handoff. |

> ⚠️ Reminder from the build prompt: AI *builds* it, but the output must be de-generic-ized so it never *looks* AI-made (Section 2 of the build prompt).

## 8. Search

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Postgres full-text search** | Menu search at launch — free, built into Supabase. | Included |
| **pgvector** | Semantic/craving search via embeddings. | Included |
| **Meilisearch** | Fast typo-tolerant search, self-hostable. | Free (self-host) |
| **Algolia** | Managed instant search when the menu grows. | 10k searches/mo free |

## 9. Analytics, Monitoring & SEO

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Vercel Analytics** | Traffic + Web Vitals, zero setup. | Free on Vercel |
| **Google Analytics 4** | Behavior, funnels, conversions. | Free |
| **PostHog** | Product analytics, funnels, session replay, feature flags. | 1M events/mo free |
| **Sentry** | Error + performance monitoring. | 5k errors/mo free |
| **Google Search Console** | Indexing + search performance. | Free |
| **Lighthouse / PageSpeed** | Performance/SEO audits. | Free |
| **next-seo / next-sitemap** | Meta, Open Graph, schema markup, sitemap. | Free |

## 10. Dev Tooling & Workflow

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Git + GitHub** | Version control, PRs, Actions CI/CD. | Free |
| **GitHub Actions** | Auto lint/test/deploy on push. | Free minutes |
| **VS Code / Cursor** | Editor. | Free |
| **pnpm** | Fast package manager. | Free |
| **ESLint + Prettier** | Lint + format. | Free |
| **Vitest + Playwright** | Unit + end-to-end tests (test the checkout path!). | Free |
| **Storybook** *(optional)* | Component catalog for the design system. | Free |
| **Postman / Bruno** | API testing. | Free |
| **Docker** *(optional)* | Local Supabase/Meilisearch. | Free |
| **k6 / Artillery** | **Load-test the order-intake path** (prove the spike-safety claim). | Free (OSS) |

## 11. Scale Layer (Turn On At Growth Stage)

| Tool | What / Why | Free tier |
|------|-----------|-----------|
| **Upstash Redis** | Serverless Redis: order-intake **queue** (decouple intake from processing) + hot cache. This is what makes the 1000-orders/min goal reachable without a rewrite. | 10k commands/day free |
| **Supabase read replicas / Pro** | More DB throughput under spikes. | Paid |
| **Cloudflare cache rules** | Aggressive edge caching of menu/static. | Free |
| **QStash (Upstash)** | Serverless message/queue + scheduled jobs. | Free tier |

## 12. Cost Ladder (Recap)

| Stage | Real traffic | Monthly | What's on |
|-------|-------------|---------|-----------|
| **Launch** | up to ~100 orders/day | **₹0** (+ ~₹80/mo domain) | Vercel free · Supabase free · Cloudflare free · Cloudinary free · Resend free |
| **Growth** | ~1,000 orders/day | **₹2,000–4,000** | Supabase Pro · Vercel Pro · Upstash · pay-per-use SMS/WhatsApp |
| **Scale** | spikes toward 1000/min | **₹15,000–25,000** | read replicas · Redis queue · edge cache · + Razorpay % per txn |

## 13. Third-Party Accounts To Create (Setup Checklist)

- [ ] GitHub org/repo
- [ ] Vercel (link GitHub)
- [ ] Supabase project
- [ ] Cloudflare (add domain + DNS)
- [ ] Domain registrar purchase
- [ ] Cloudinary
- [ ] Razorpay merchant (needs business/FSSAI docs)
- [ ] Resend + verify sending domain
- [ ] MSG91 / Twilio (SMS/OTP) — when needed
- [ ] WhatsApp Business number
- [ ] Google Analytics 4 + Search Console
- [ ] PostHog + Sentry
- [ ] Anthropic (Claude) and/or OpenAI API keys
- [ ] Upstash (Redis/QStash) — at Growth stage

## 14. Minimum Stack To Start Coding Tomorrow

If you want the shortest path to a first commit:

```
Next.js + TypeScript + Tailwind      (frontend)
Supabase                              (DB + Auth + Storage)
Razorpay test mode                    (payments)
Cloudinary                            (images)
Vercel + Cloudflare                   (deploy)
Claude/Cursor/Copilot                 (build assist)
```

Everything else (Redis queue, SMS, PostHog, semantic search, chatbot) is additive and can be layered in without changing the foundation.

---

**Version 1.0 · 2026-09-18 · Internal build reference.**
