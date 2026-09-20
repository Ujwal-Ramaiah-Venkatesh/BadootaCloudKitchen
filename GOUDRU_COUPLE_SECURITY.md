# Goudru Couple Cloud Kitchen — Security & Genuine-Orders Playbook

> Two goals: (1) keep the app and customer data **secure**, and (2) make sure every order that reaches the kitchen is a **real, paying, deliverable order** — no bots, no fake COD, no prank addresses. Written for the Indian cloud-kitchen context. Companion to [GOUDRU_COUPLE_BUILD_PROMPT.md](GOUDRU_COUPLE_BUILD_PROMPT.md) and [GOUDRU_COUPLE_TECHSTACK.md](GOUDRU_COUPLE_TECHSTACK.md).

---

## Part 1 — Genuine Orders (Fraud & Abuse Prevention)

The #1 loss for a cloud kitchen isn't hacking — it's **fake/undeliverable orders**, mostly **COD abuse** and **prank orders**. Kitchen cooks the food, driver rides out, nobody pays or nobody's there. Here's how to stop it.

### 1.1 Verify the human before the order counts

| Control | What it does | Tool |
|---------|-------------|------|
| **Phone OTP verification (mandatory)** | No order is accepted until the phone number is verified by OTP. Kills 90% of fake orders — a fraudster won't burn a real number. | MSG91 / Firebase Auth / Supabase Auth OTP |
| **One verified account per phone** | Stops throwaway-account spam and referral abuse. | Unique constraint on `users.phone` |
| **Email verification for account** | Second signal; needed for receipts + loyalty. | Resend + Supabase Auth |
| **Optional social login** | Instagram/Google login = harder-to-fake identity. | Supabase Auth providers |

> **Golden rule:** OTP-verify the phone **before** the order hits the kitchen queue, not after.

### 1.2 Make COD safe (this is where the money leaks)

COD is the biggest fraud vector in India. Layered defense:

- **Push prepaid first:** default the checkout to UPI/card; make COD the secondary option. Give a small incentive for prepaid (e.g. "₹20 off on prepaid").
- **COD only for trusted customers:** new/unverified users → prepaid only. Unlock COD after 1–2 successfully delivered prepaid orders.
- **COD cap:** limit COD order value (e.g. max ₹500) for first-time users.
- **COD confirmation call/WhatsApp:** for high-value or first COD orders, auto-send a WhatsApp "Reply YES to confirm" before dispatch. No confirm → no cook.
- **Cancellation / RTO scoring:** track "return-to-origin" (order placed, delivery refused). After N refusals, block COD for that phone/address permanently.
- **Address + geofence check:** validate the delivery pin is inside the serviceable radius (Google Maps/Mapbox) before accepting. Rejects prank/impossible addresses early.

### 1.3 Stop bots & spam at the door

| Control | What it does | Tool |
|---------|-------------|------|
| **Cloudflare Turnstile / reCAPTCHA** | Blocks bot-submitted orders and signup floods (invisible, no annoying puzzles). | Cloudflare Turnstile (free) |
| **Rate limiting** | Cap orders/OTP-requests/logins per IP + per phone per time window. | Upstash Redis rate-limit |
| **Velocity checks** | Flag "10 orders in 2 minutes from one account" or "many accounts, one device". | Custom rule on order create |
| **Device fingerprinting** | Detect one device spinning many accounts. | FingerprintJS (free tier) |
| **Disposable-email/VOIP block** | Reject temp emails and known VOIP number ranges. | Validation list |
| **Honeypot fields** | Hidden form field bots fill but humans don't → auto-reject. | Free, in code |

### 1.4 Payment fraud

- **Server-side amount verification:** never trust the cart total sent from the browser. Recompute price on the server from `menu_items` before charging. (Stops price-tampering.)
- **Razorpay signature verification:** verify the payment signature on your server (webhook) — only then mark the order paid. Never mark paid from the client.
- **Idempotency keys:** prevent double-charge / duplicate orders on retry.
- **Webhook secret:** validate Razorpay webhooks with the signing secret; ignore unsigned calls.
- **Refund policy in code:** cancellations only within a short window / before "cooking" status.

### 1.5 Trust & reputation system (build once, reuse per tenant)

Give every account a lightweight trust score:
```
+ phone verified, + email verified, + prepaid order delivered,
+ order history length
−  COD refusal / RTO, − chargeback, − rapid multi-account signals
```
Route behavior by score: **low trust → prepaid only + confirmation; high trust → COD + faster checkout + skip confirmations.** Store on `users.trust_score`.

### 1.6 Operational guards for the kitchen

- **Confirmation before cook:** order enters `received`; auto-confirm (prepaid) or WhatsApp-confirm (risky COD) → then `cooking`. Never cook on an unconfirmed risky order.
- **"Kitchen busy" / max-orders throttle:** cap concurrent accepted orders so a bot flood can't overwhelm the kitchen (also protects the 1000/min claim gracefully).
- **Blocklist:** phone/email/device/address blocklist, enforced at order-create.
- **Manual review queue:** flagged orders land in an admin review lane, not straight to the cooks.

---

## Part 2 — Application & Data Security

### 2.1 Foundations (free, non-negotiable)

- **HTTPS everywhere** — automatic on Vercel + Cloudflare. Force HTTPS, enable HSTS.
- **Secrets in env vars** — never in code/repo. Use Vercel/Supabase secret stores. Add `.env` to `.gitignore`.
- **Least-privilege keys** — Supabase `anon` key on the client (limited by RLS); `service_role` key **server-only**, never shipped to the browser.
- **Dependency hygiene** — Dependabot + `pnpm audit`; keep packages patched.

### 2.2 Database security — Row-Level Security (RLS) is the core

This is the single most important control for a multi-tenant app:
- **RLS on every table**, keyed by `restaurant_id` and `user_id`. A user can read/write only their own rows; a tenant can never see another tenant's data.
- **No raw SQL from user input** — use the Supabase client / an ORM (Prisma/Drizzle) with parameterized queries → prevents SQL injection.
- **Server-side authorization** — check "is this user allowed to do this?" on the server for every mutation, not just in the UI.
- **Admin actions gated** — admin/kitchen routes behind role checks (`role = 'admin'` on the JWT/claims), not just a hidden URL.

### 2.3 Input & output safety

- **Validate all input with Zod** on the server (not only the browser). Reject malformed payloads.
- **Sanitize user content** (reviews, names, addresses) before storing/rendering → prevents **XSS**.
- **Escape on render** — React escapes by default; never use `dangerouslySetInnerHTML` with user content.
- **File uploads** (review photos): restrict type/size, scan, store in Cloudinary/Supabase Storage, serve from a separate domain.

### 2.4 Authentication & sessions

- **OTP + strong session tokens** (Supabase Auth handles JWT). Short-lived access tokens + refresh rotation.
- **Rate-limit login & OTP** endpoints (Upstash) — stops credential stuffing and OTP-bombing.
- **Account lockout / backoff** after repeated failures.
- **CSRF protection** on state-changing forms; **SameSite=Lax/Strict** cookies.

### 2.5 API & infra hardening

- **Rate limiting + WAF** via Cloudflare (free) — DDoS mitigation, bad-bot rules.
- **CORS locked** to your own domain(s).
- **Security headers** — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy (via `next.config` / middleware).
- **Webhook verification** — Razorpay & any inbound webhook validated by signature.
- **Idempotency** on order/payment endpoints.

### 2.6 Privacy & compliance (India — DPDP Act 2023)

- **Collect only what you need** (name, phone, address, email). Don't store card data — Razorpay does (PCI-DSS on their side).
- **Privacy policy + consent** at signup; explain what data is used for.
- **Right to delete** — support account+data deletion requests.
- **Encrypt sensitive data at rest** (Supabase encrypts; add column-level for anything extra sensitive).
- **Audit log** — record admin actions and status changes (who/what/when).

### 2.7 Monitoring & response

- **Sentry** — real-time error + anomaly alerts.
- **PostHog / logs** — watch for abnormal order/signup spikes (fraud signal).
- **Alerting** — notify owners on: payment failures spike, order spike, error spike.
- **Backups** — Supabase automated DB backups; test a restore before launch.
- **Incident plan** — who does what if data/payment issue occurs; rotate keys, revoke sessions.

---

## Part 3 — Priority Checklist (Do These In Order)

**Ship-blocking (before launch):**
- [ ] Mandatory **phone OTP** before order is accepted
- [ ] **Server-side price recompute** + Razorpay **signature/webhook verification**
- [ ] **RLS enabled** on every table, keyed by `restaurant_id` + `user_id`
- [ ] **Secrets in env vars**; `service_role` key server-only; `.env` gitignored
- [ ] **HTTPS + security headers + CORS locked**
- [ ] **Zod validation + sanitization** on all inputs
- [ ] **Cloudflare Turnstile** on signup/checkout + **rate limiting**
- [ ] **Serviceable-area geofence** check on delivery address
- [ ] **COD rules**: prepaid-first, COD only after trust earned, COD value cap, confirm-before-cook

**Fast-follow (first weeks):**
- [ ] Trust score + RTO/cancellation tracking + blocklist
- [ ] Device fingerprinting + velocity rules
- [ ] Manual-review queue for flagged orders
- [ ] Sentry + anomaly alerts + tested DB backups
- [ ] DPDP: privacy policy, consent, delete-my-data flow, audit log

---

## Part 4 — Tools Summary

| Need | Tool | Free tier |
|------|------|-----------|
| Phone OTP | MSG91 / Supabase Auth / Firebase | pay-per-SMS / free |
| Bot defense | Cloudflare Turnstile | Free |
| Rate limit / queue | Upstash Redis | 10k cmds/day free |
| Device fingerprint | FingerprintJS | Free tier |
| WAF / DDoS / CDN | Cloudflare | Free |
| Payments (PCI on their side) | Razorpay | ~2%/txn |
| Auth + RLS | Supabase | Free tier |
| Error/anomaly monitoring | Sentry | 5k events/mo free |
| Product/fraud analytics | PostHog | 1M events/mo free |
| Address geofence | Google Maps / Mapbox | Free tier |

---

**Version 1.0 · 2026-09-18 · Internal security reference.**
