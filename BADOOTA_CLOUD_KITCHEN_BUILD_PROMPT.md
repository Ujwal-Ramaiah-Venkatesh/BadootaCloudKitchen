# Badoota Cloud Kitchen — Complete Build Prompt

> **Project Goal:** Transform the existing Gowdru Couple Cloud Kitchen demo webapp codebase into a premium, production-ready website for **Badoota Cloud Kitchen** — an authentic Karnataka/Bengaluru cuisine restaurant based in San Jose, CA. This must look professionally designed, not AI-generated or template-based.

---

## 0. How to Use This Document

1. **Read the entire document** to understand the Badoota brand, requirements, and design direction.
2. **Use Section 10 (THE MASTER PROMPT)** as your primary build instruction — copy-paste it into your AI tool.
3. **Reference the website assets** from https://www.badoota.biz/ for images, content, and branding.
4. **Keep this file** as your project reference guide throughout development.

---

## 1. Project Context

You are converting an existing Next.js webapp from **Gowdru Couple Cloud Kitchen** (Bangalore) to **Badoota Cloud Kitchen** (San Jose, CA). The existing codebase provides the foundation, but everything must be rebranded, restructured, and enhanced to match Badoota's authentic Karnataka cuisine focus and US market positioning.

### What's Already Built (Gowdru Couple Base)
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Responsive homepage with video hero, craving chips, featured menu
- Menu page with filtering
- Cart functionality (Zustand state management)
- About, Contact pages
- Mobile-first design with custom gold/bone/noir color palette

### What Needs to Change
- **Complete rebrand** to Badoota identity
- **New content** from https://www.badoota.biz/
- **Additional pages**: BBC Club, Licensing Opportunity, Delivery Info
- **US market adaptations**: USD pricing, San Jose location, DoorDash/Uber Eats integration
- **Enhanced features**: membership program, franchise information
- **Real Badoota menu** with authentic Karnataka dishes (Donne Biryani focus)

---

## 2. Badoota Brand Profile (From Website Analysis)

### Core Identity
- **Name:** Badoota
- **Tagline:** "Bengaluru Food"
- **Specialty:** Authentic Karnataka Cuisine, especially Donne Biryani and traditional non-vegetarian dishes
- **Location:** 326 Commercial Street, San Jose, CA 95112, USA
- **Positioning:** Premium authentic Karnataka/Bengaluru cuisine in the US market

### Operating Details
- **Hours:**
  - Tuesday–Sunday
  - Lunch: 12:00 PM – 3:00 PM
  - Dinner: 6:00 PM – 9:30 PM
  - **CLOSED MONDAY**

### Ordering & Delivery
- **Order for Pickup** (primary CTA)
- **DoorDash** integration
- **Uber Eats** integration
- **Free Home Delivery:** Orders $150+ within 10-mile radius (with advance notice)

### Contact & Social
- **Address:** 326 Commercial Street, San Jose, CA 95112
- **Instagram:** @badoota
- **Facebook:** Active page
- **Yelp:** Listed
- **Website:** https://www.badoota.biz/

### Unique Programs
1. **BBC Club:** Membership/loyalty program (needs subscription form)
2. **Licensing Opportunity:** Franchise/partnership program
3. **Newsletter:** Email subscription for specials and updates

---

## 3. Website Structure & Required Pages

Based on https://www.badoota.biz/ navigation, the complete site needs:

### Primary Pages
1. **Home** — Hero with Karnataka cuisine imagery, brand story, featured dishes, CTAs
2. **About** — Badoota story, Karnataka cuisine heritage, authenticity, values
3. **Menu** — Full categorized menu with Donne Biryani as hero item
4. **Order Online** — Pickup/delivery options, DoorDash/Uber Eats links
5. **BBC Club** — Membership program details, benefits, sign-up form
6. **Licensing Opportunity** — Franchise/partnership information, inquiry form
7. **Delivery** — Delivery zones, fees, minimum orders, free delivery info
8. **Contact** — Address, hours, phone, email, social media, map

### Supporting Pages
- **Cart & Checkout** — Modified for US market (USD, address format)
- **404 Error Page** — Custom branded
- **Terms & Conditions**
- **Privacy Policy**

---

## 4. Content Requirements (Extract from Badoota Website)

### Menu Categories (Karnataka Focus)
Based on authentic Karnataka cuisine, the menu should include:

1. **Donne Biryani** (Signature Category)
   - Chicken Donne Biryani
   - Mutton Donne Biryani
   - Vegetable Donne Biryani
   - Egg Donne Biryani

2. **Karnataka Specials**
   - Mangalorean Fish Curry
   - Coorg Pork Curry
   - Chicken Ghee Roast
   - Kori Rotti
   - Nati Koli Saaru (Country Chicken Curry)

3. **Rice & Pulao**
   - Bisi Bele Bath
   - Vangi Bath
   - Puliyogare (Tamarind Rice)

4. **Kebabs & Starters**
   - Chicken 65
   - Chicken Kebab
   - Fish Fry

5. **Vegetarian**
   - Mysore Masala Dosa
   - Ragi Mudde with Saaru
   - Palya (Vegetable Stir-fry)

6. **Breads**
   - Ragi Roti
   - Akki Roti (Rice Roti)
   - Neer Dosa

7. **Desserts**
   - Mysore Pak
   - Obbattu (Holige)

**Note:** Actual menu items and prices need to be extracted from the full menu section of badoota.biz or provided by the client.

### Hero Section Content
- **Headline:** Something like "Authentic Bengaluru Flavors in San Jose" or "Karnataka Cuisine, Crafted with Tradition"
- **Subheading:** Focus on Donne Biryani heritage and authentic preparation
- **CTAs:**
  - "Order for Pickup"
  - "View Menu"
  - "Join BBC Club"

### About Page Content
Extract the complete story from badoota.biz/about:
- Origin story and heritage
- Karnataka cuisine authenticity
- Traditional cooking methods (especially Donne Biryani in traditional vessels)
- Commitment to quality ingredients
- Why San Jose location

### BBC Club Details
- Membership benefits
- Exclusive offers
- How to join
- Pricing/tiers (if applicable)

### Licensing Opportunity Details
- Franchise model overview
- Requirements
- Support provided
- Contact for inquiries

---

## 5. Design Direction & Brand System

### Visual Identity
**Extract from badoota.biz:**
- Primary color palette (likely Karnataka cultural colors — warm earth tones, traditional colors)
- Food photography style (authentic, appetizing, traditional presentation)
- Typography choices from the website
- Logo treatment and placement

### Design Principles (Maintain Premium Feel)
- **Authentic, not fusion:** Visual language should reflect traditional Karnataka/Bengaluru culture
- **Warm, inviting:** Earthy tones, warm lighting in photography
- **Premium positioning:** High-quality imagery, generous whitespace
- **Food-forward:** Hero dish (Donne Biryani) prominently featured
- **Cultural markers:** Subtle incorporation of Karnataka cultural elements (traditional patterns, colors, motifs)

### Color Palette (Adapt from Website)
**Primary Colors:**
- Main brand color (extract from logo/website)
- Secondary accent (likely warm orange/saffron for food appeal)
- Neutral backgrounds (warm cream/beige)
- Dark text (deep brown/charcoal)

**Recommended Palette Structure:**
```css
/* Adapt these after analyzing badoota.biz design */
--primary: [extract from website]
--accent: [extract from website]
--background: warm-cream
--text: charcoal-brown
--highlight: saffron-orange
```

### Typography
- **Display Font:** For headings — should feel traditional yet premium
- **Body Font:** Clean, highly readable sans-serif for menu descriptions
- **Accent Font:** For special callouts (if used on badoota.biz)

### Photography Requirements
**Source all images from https://www.badoota.biz/:**
1. **Hero Images:**
   - Donne Biryani hero shot
   - Karnataka cuisine spread
   - Restaurant/kitchen atmosphere

2. **Menu Items:**
   - Each dish needs at least 1 high-quality photo
   - Consistent styling (same plate/background style)
   - Traditional serving vessels where appropriate (Donne for biryani)

3. **About Section:**
   - Chef/owner photos
   - Kitchen in action
   - Ingredients/preparation

4. **Supporting Images:**
   - San Jose location exterior/interior
   - Cultural/Karnataka heritage imagery

---

## 6. Technical Specifications

### Tech Stack (Retain from Gowdru Base)
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom design tokens
- **State Management:** Zustand (for cart)
- **Animations:** CSS transitions (Framer Motion if needed)
- **Deployment:** Vercel

### New Integrations Needed
1. **DoorDash Integration:**
   - External link to DoorDash ordering page
   - Track referral if possible

2. **Uber Eats Integration:**
   - External link to Uber Eats ordering page

3. **Newsletter Subscription:**
   - Email capture form
   - Integration with email service (Mailchimp/ConvertKit/Resend)

4. **Google Maps:**
   - Embedded map on Contact page
   - Directions link

5. **Social Media Embeds:**
   - Instagram feed embed (@badoota)
   - Social share buttons

### US Market Adaptations
- **Currency:** USD ($) pricing throughout
- **Address Format:** US standard (Street, City, State ZIP)
- **Phone Format:** US format with country code
- **Time Format:** 12-hour with AM/PM
- **Date Format:** MM/DD/YYYY standard

---

## 7. Feature Requirements

### MVP Features (Phase 1)
1. ✅ **Homepage:**
   - Video or image hero (Donne Biryani)
   - "What are you craving?" chips adapted for Karnataka cuisine
   - Featured dishes
   - Trust markers (authenticity, quality, tradition)
   - Social proof (Instagram following, reviews)
   - Newsletter signup

2. ✅ **Menu Page:**
   - Category filtering (Biryani, Karnataka Specials, Rice, Starters, etc.)
   - Search functionality
   - Dietary filters (Veg/Non-veg, Spice level)
   - Dish details modal/page
   - Add to cart functionality
   - Prominent "Order for Pickup" CTAs

3. ✅ **Cart & Checkout:**
   - Cart summary
   - Pickup time selection
   - Customer contact info
   - Order notes
   - External redirect to DoorDash/Uber Eats for delivery
   - Direct phone order option

4. ✅ **About Page:**
   - Badoota story
   - Karnataka cuisine heritage
   - Team/chef information
   - Values and commitment

5. ✅ **BBC Club Page:**
   - Program overview
   - Membership benefits
   - Sign-up form (email capture + details)
   - Call to action

6. ✅ **Licensing Opportunity Page:**
   - Franchise model explanation
   - Benefits of partnering
   - Requirements overview
   - Inquiry form (name, email, phone, message)

7. ✅ **Delivery Page:**
   - Delivery zones map/list
   - Delivery fees
   - Free delivery promotion ($150+ / 10 miles)
   - DoorDash/Uber Eats info
   - Estimated delivery times

8. ✅ **Contact Page:**
   - Address with Google Maps embed
   - Operating hours (with Monday CLOSED highlighted)
   - Click-to-call phone number
   - Email contact
   - Social media links
   - Contact form

9. ✅ **Mobile Responsiveness:**
   - Mobile-first design
   - Touch-friendly navigation
   - Optimized images for mobile
   - Fast loading on 4G

10. ✅ **SEO & Performance:**
    - Meta tags (title, description, Open Graph)
    - Semantic HTML
    - Image optimization (WebP/AVIF)
    - Fast page loads (<3s)
    - Sitemap and robots.txt

### Phase 2 Enhancements (Future)
- **Online Ordering:** Full integrated ordering system (if moving away from DoorDash/Uber Eats)
- **Loyalty Program:** Digital BBC Club member portal
- **Reservation System:** Table booking if dine-in available
- **Catering Orders:** Large order/catering inquiry system
- **Reviews & Testimonials:** Customer review system
- **Blog/News:** Karnataka cuisine articles, updates

---

## 8. Content Extraction Checklist

### From https://www.badoota.biz/ — Extract These:

#### Images Needed:
- [ ] Logo (header and footer versions)
- [ ] Favicon
- [ ] Hero image(s) — Donne Biryani, Karnataka spread
- [ ] All menu item photos (organized by category)
- [ ] About section images (team, kitchen, prep)
- [ ] Location exterior/interior photos
- [ ] Social media icons (if custom)

#### Text Content Needed:
- [ ] Complete About section text
- [ ] Full menu with:
  - Dish names
  - Descriptions
  - Prices (USD)
  - Dietary info (veg/non-veg, spice level, allergens)
- [ ] BBC Club program details
- [ ] Licensing opportunity details
- [ ] Delivery policy and zones
- [ ] Terms & Conditions
- [ ] Privacy Policy
- [ ] FAQ (if available)

#### Brand Assets:
- [ ] Brand colors (hex codes)
- [ ] Font names/families
- [ ] Logo files (SVG preferred)
- [ ] Brand guidelines (if available)

#### Business Information:
- [ ] Exact address: 326 Commercial Street, San Jose, CA 95112
- [ ] Phone number(s)
- [ ] Email address(es)
- [ ] Social media handles (verified)
- [ ] Operating hours (confirmed)
- [ ] Payment methods accepted
- [ ] Food safety certifications/licenses

---

## 9. Development Phases & Timeline

### Phase 1: Foundation & Core Pages (Week 1-2)
1. **Setup & Rebrand (Days 1-2):**
   - Clone Gowdru Couple codebase
   - Update package.json (project name, metadata)
   - Extract Badoota brand assets from website
   - Set up new color palette and design tokens
   - Update logo and favicon

2. **Homepage (Days 3-4):**
   - New hero section with Badoota imagery
   - Adapt "craving chips" for Karnataka cuisine categories
   - Featured Donne Biryani section
   - Trust markers (authenticity, tradition)
   - Newsletter signup form
   - Social media integration

3. **Menu System (Days 5-7):**
   - Build new menu data structure (Karnataka categories)
   - Create menu cards for all dishes
   - Implement category filtering
   - Add search functionality
   - Dietary and spice filters
   - Cart integration

4. **About & Contact (Days 8-9):**
   - About page with Badoota story
   - Contact page with map, hours, details
   - Ensure Monday CLOSED is prominent

### Phase 2: Unique Features (Week 3)
5. **BBC Club Page (Days 10-11):**
   - Program overview section
   - Benefits breakdown
   - Membership sign-up form
   - Email capture integration

6. **Licensing Opportunity Page (Day 12):**
   - Franchise information layout
   - Inquiry form
   - Lead capture setup

7. **Delivery Information Page (Day 13):**
   - Delivery zones
   - Fee structure
   - DoorDash/Uber Eats integration
   - Free delivery promotion

### Phase 3: Ordering & Polish (Week 4)
8. **Order Flow (Days 14-16):**
   - Cart page refinement
   - Pickup ordering flow
   - DoorDash/Uber Eats external linking
   - Order confirmation

9. **Polish & Testing (Days 17-19):**
   - Mobile responsiveness testing
   - Cross-browser testing
   - Performance optimization
   - SEO implementation
   - Analytics setup

10. **Launch Prep (Day 20):**
    - Final content review
    - Legal pages (Terms, Privacy)
    - Domain setup
    - Deployment to production

---

## 10. THE MASTER PROMPT (Copy-Paste This)

```
You are a senior product designer + full-stack engineer at a boutique digital studio.
Your task is to TRANSFORM an existing Next.js webapp codebase from "Gowdru Couple
Cloud Kitchen" into a premium, production-ready website for "BADOOTA CLOUD KITCHEN"
— an authentic Karnataka/Bengaluru cuisine restaurant in San Jose, California.

This must look professionally designed by a premium agency. It must NOT look
AI-generated, template-based, or generic.

=== PROJECT CONTEXT ===
- EXISTING CODEBASE: Next.js 14 + TypeScript + Tailwind CSS demo for "Gowdru Couple"
- YOUR JOB: Complete rebrand and rebuild for "Badoota Cloud Kitchen"
- REFERENCE WEBSITE: https://www.badoota.biz/ (extract ALL content, images, branding)
- LOCATION: San Jose, California, USA (US market adaptations required)

=== BADOOTA BRAND IDENTITY ===
Business Name: Badoota
Tagline: "Bengaluru Food"
Specialty: Authentic Karnataka Cuisine, especially Donne Biryani
Positioning: Premium traditional Karnataka/Bengaluru food in the US market

Address: 326 Commercial Street, San Jose, CA 95112, USA

Operating Hours:
- Tuesday–Sunday
- Lunch: 12:00 PM – 3:00 PM  
- Dinner: 6:00 PM – 9:30 PM
- ⚠️ CLOSED MONDAY (make this clear everywhere)

Ordering Channels:
- Order for Pickup (primary CTA)
- DoorDash (external link)
- Uber Eats (external link)
- Free Home Delivery: $150+ orders within 10-mile radius (with advance notice)

Social Media:
- Instagram: @badoota
- Facebook: Active page
- Yelp: Listed

Special Programs:
- BBC Club: Membership/loyalty program
- Licensing Opportunity: Franchise/partnership program

=== ABSOLUTE DESIGN RULES ===

DO (Premium markers):
✓ Extract the EXACT color palette from https://www.badoota.biz/
✓ Use real Badoota food photography from their website (download all images)
✓ Traditional Karnataka cultural aesthetic — warm earth tones, authentic feel
✓ Editorial layout with generous whitespace, large typography
✓ Intentional asymmetry and grid-breaking where appropriate
✓ Highlight Donne Biryani as signature hero dish throughout
✓ Cultural authenticity — traditional serving vessels (Donne), Karnataka patterns
✓ US market polish — professional, trustworthy, premium feel
✓ Mobile-first, touch-friendly, fast loading
✓ Custom states: 404, empty cart, loading, CLOSED Monday notice

DON'T (Banned AI tells):
✗ NO generic centered hero with gradient background
✗ NO emoji as UI icons anywhere
✗ NO purple-to-blue gradients or glassmorphism
✗ NO three-identical-icon-cards-in-a-row features
✗ NO vague marketing-speak ("elevate your journey", "seamless experience")
✗ NO stock photos — ONLY Badoota's real food imagery
✗ NO Lorem ipsum or placeholder text
✗ NO perfect symmetry everywhere — real design has intention

=== REQUIRED PAGES (Complete Website) ===

1. HOME
   - Hero: Donne Biryani or Karnataka cuisine spread (video or image from website)
   - Brand promise: Authentic Bengaluru flavors
   - "What are you craving?" discovery chips (adapt for Karnataka: Biryani, Spicy,
     Traditional, Comfort, Rice, Starters)
   - Featured dishes (Donne Biryani hero)
   - Trust markers: Authentic, Traditional methods, Quality ingredients
   - Social proof: Instagram following, reviews
   - Newsletter signup
   - Primary CTAs: "Order for Pickup", "View Menu", "Join BBC Club"

2. MENU
   - Categories: Donne Biryani (hero), Karnataka Specials, Rice & Pulao,
     Kebabs & Starters, Vegetarian, Breads, Desserts
   - Each item: Photo, name, description, price (USD), veg/non-veg badge, spice level
   - Filtering: Category, dietary (veg/non-veg), spice level, search
   - Add to cart with customization
   - "Order for Pickup" CTAs throughout
   - EXTRACT FULL MENU from https://www.badoota.biz/menu

3. ABOUT
   - Badoota origin story
   - Karnataka cuisine heritage and authenticity
   - Traditional cooking methods (especially Donne Biryani preparation)
   - Team/chef information
   - Values: Quality, tradition, authenticity
   - Why San Jose location
   - EXTRACT CONTENT from https://www.badoota.biz/about

4. ORDER ONLINE
   - Primary: "Order for Pickup" with phone number and form
   - Secondary: DoorDash button (external link to their DoorDash page)
   - Secondary: Uber Eats button (external link to their Uber Eats page)
   - Delivery options explanation
   - Free delivery promotion ($150+, 10 miles)
   - Operating hours reminder (CLOSED MONDAY)

5. BBC CLUB
   - Membership program overview
   - Benefits breakdown (exclusive offers, early access, special events, etc.)
   - Membership tiers (if applicable)
   - Sign-up form: Name, Email, Phone, Preferences
   - Email capture integration (newsletter service)
   - EXTRACT DETAILS from https://www.badoota.biz/bbc-club or create compelling
     membership benefits if details not available

6. LICENSING OPPORTUNITY
   - Franchise/partnership program overview
   - Why partner with Badoota (brand strength, authentic cuisine, support system)
   - What's included: Training, recipes, branding, support
   - Requirements: Investment range, location criteria, experience
   - Inquiry form: Name, Email, Phone, Location interest, Message
   - Lead capture for business development
   - EXTRACT CONTENT from https://www.badoota.biz/licensing-opportunity

7. DELIVERY
   - Delivery zones (San Jose area map or list)
   - Delivery fees structure
   - Free delivery promotion: $150+ orders within 10-mile radius (advance notice)
   - Estimated delivery times
   - DoorDash and Uber Eats info (faster option)
   - Pickup instructions
   - Contact for delivery questions

8. CONTACT
   - Address: 326 Commercial Street, San Jose, CA 95112, USA
   - Google Maps embed with pin
   - Operating hours (Tuesday–Sunday, CLOSED MONDAY highlighted)
   - Phone number (click-to-call)
   - Email address
   - Contact form: Name, Email, Phone, Message
   - Social media links: Instagram (@badoota), Facebook, Yelp
   - Directions link

9. CART & CHECKOUT
   - Cart summary with item customization
   - Pickup time selection (within operating hours, not Monday)
   - Customer info: Name, phone, email
   - Order notes/special requests
   - Payment: Redirect to phone order, DoorDash, or Uber Eats
   - For pickup: Show "Call to confirm" CTA
   - Order confirmation page

10. LEGAL & SUPPORT
    - Terms & Conditions
    - Privacy Policy
    - Custom 404 page (brand-aligned, helpful)

=== US MARKET TECHNICAL REQUIREMENTS ===
- Currency: USD ($) throughout — NO ₹ Rupees
- Address format: US standard (Street, City, State ZIP)
- Phone format: US format, click-to-call enabled
- Time format: 12-hour with AM/PM
- Date format: MM/DD/YYYY
- Distance: Miles (not kilometers)
- Temperature: Fahrenheit (if showing food temps)

=== INTEGRATIONS & FUNCTIONALITY ===
1. Email Newsletter:
   - Form on homepage and BBC Club page
   - Integration with email service (Mailchimp/ConvertKit/Resend API)
   - Capture: email, name, preferences

2. DoorDash & Uber Eats:
   - External links to Badoota's profiles on each platform
   - Open in new tab
   - Track referrals if API available

3. Google Maps:
   - Embedded map on Contact page
   - Correct address pin: 326 Commercial Street, San Jose, CA 95112

4. Social Media:
   - Instagram feed embed (optional, if looks premium)
   - Social share buttons on menu items
   - Links to @badoota Instagram, Facebook, Yelp

5. Phone Integration:
   - Click-to-call phone number throughout
   - WhatsApp link (if Badoota uses WhatsApp Business)

6. Analytics:
   - Google Analytics 4 setup
   - Event tracking: Menu views, Add to cart, Order attempts, Form submissions

=== TECH STACK (Retain & Enhance) ===
Framework: Next.js 14 (App Router) + TypeScript
Styling: Tailwind CSS + custom Badoota design tokens
State: Zustand (cart management)
Forms: React Hook Form + validation
Images: Next.js Image component, WebP/AVIF, optimized from badoota.biz
Animations: CSS transitions, Framer Motion (sparingly)
Email: Resend or Mailchimp API
Deployment: Vercel
Analytics: Google Analytics 4, Vercel Analytics

=== CONTENT EXTRACTION TASKS ===
From https://www.badoota.biz/, you MUST extract:

1. IMAGES (download all, organize in /public/images/):
   - Logo (header and footer versions) → /public/logo.svg or .png
   - Favicon → /public/favicon.ico
   - Hero images (Donne Biryani, Karnataka spread) → /public/images/hero/
   - Menu items (all dishes with photos) → /public/images/menu/[category]/
   - About section (team, kitchen) → /public/images/about/
   - Location photos → /public/images/location/

2. COLOR PALETTE (extract hex codes):
   - Primary brand color (from logo/header)
   - Secondary/accent color
   - Background colors
   - Text colors
   - Extract and document in tailwind.config.ts

3. TYPOGRAPHY:
   - Identify fonts used on badoota.biz
   - Load via Google Fonts or local files
   - Match heading and body font styles

4. COMPLETE MENU (with prices in USD):
   - Donne Biryani items (Chicken, Mutton, Veg, Egg)
   - Karnataka Specials (Fish Curry, Pork Curry, Chicken Ghee Roast, etc.)
   - Rice dishes (Bisi Bele Bath, Puliyogare, etc.)
   - Starters (Chicken 65, Kebabs, Fish Fry)
   - Vegetarian items
   - Breads (Ragi Roti, Neer Dosa, etc.)
   - Desserts (Mysore Pak, Obbattu)
   - For EACH item: name, description, price, photo, veg/non-veg, spice level

5. TEXT CONTENT:
   - About section story
   - BBC Club program details
   - Licensing opportunity details
   - Delivery policy
   - Terms & Conditions
   - Privacy Policy

=== MOBILE-FIRST REQUIREMENTS ===
- Design for 375px mobile first, scale up
- Touch targets minimum 44x44px
- Swipeable menu categories
- Sticky "Order Now" button on mobile
- Fast image loading (lazy load, WebP)
- Optimized for 4G networks
- Offline-friendly (service worker for PWA if desired)

=== SEO & PERFORMANCE ===
- Page title: "Badoota | Authentic Karnataka Cuisine in San Jose, CA"
- Meta descriptions for each page (70-160 chars)
- Open Graph images for social sharing
- Structured data (Restaurant, Menu, Review schema)
- Sitemap.xml
- Robots.txt
- Image optimization (Next.js Image, WebP/AVIF)
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Lighthouse score: 90+ performance, 100 accessibility

=== CONVERSION OPTIMIZATION ===
Primary CTAs (in order of priority):
1. "Order for Pickup" (phone or form)
2. "View Menu"
3. "Order via DoorDash"
4. "Order via Uber Eats"
5. "Join BBC Club"

CTA placement:
- Hero section (above fold)
- Sticky mobile footer
- Throughout menu page
- End of About page
- Sidebar on all pages

Trust signals:
- Operating hours (clear, accurate)
- Address with map
- Phone number (verified)
- Social proof (Instagram followers, reviews)
- Food safety certifications (if visible)
- Authentic ingredients messaging

=== QUALITY GATES (Must Pass Before Launch) ===
- [ ] Extracted ALL content from https://www.badoota.biz/
- [ ] Downloaded and optimized ALL images from Badoota website
- [ ] Matched exact brand colors from website
- [ ] No "Gowdru Couple" references anywhere (complete rebrand)
- [ ] All prices in USD (no ₹)
- [ ] US address format and phone format
- [ ] Monday CLOSED clearly shown
- [ ] All 10 pages built and functional
- [ ] Mobile responsive (tested 375px to 1920px)
- [ ] DoorDash and Uber Eats links working
- [ ] Newsletter signup functional
- [ ] Google Maps embedded correctly
- [ ] Click-to-call phone working
- [ ] Custom 404 page exists
- [ ] No Lorem ipsum anywhere
- [ ] No AI design tells (gradient heroes, emojis, etc.)
- [ ] Fast page loads (<3s on 4G)
- [ ] SEO meta tags on all pages
- [ ] Analytics tracking implemented

=== BUILD ORDER (Execute in This Sequence) ===

PHASE 1: Foundation (Do First)
1. Extract ALL assets from https://www.badoota.biz/
   - Download images, extract colors, identify fonts, copy menu, save all text
2. Set up Badoota brand system
   - Update tailwind.config.ts with Badoota colors
   - Set up fonts
   - Update package.json metadata
3. Replace logo and favicon
4. Build homepage hero (Badoota imagery, brand promise, CTAs)

PHASE 2: Core Pages
5. Menu page (full menu extracted from website, filtering, cart)
6. About page (Badoota story from website)
7. Contact page (map, hours, CLOSED Monday, form)

PHASE 3: Unique Features
8. BBC Club page (membership program, signup form)
9. Licensing Opportunity page (franchise info, inquiry form)
10. Delivery page (zones, fees, free delivery promo)
11. Order Online page (pickup/DoorDash/Uber Eats)

PHASE 4: Conversion Flow
12. Cart and checkout flow
13. Order confirmation
14. Email newsletter integration

PHASE 5: Polish
15. Custom 404 page
16. Terms, Privacy pages
17. Mobile optimization testing
18. Performance optimization (images, lazy load, code splitting)
19. SEO implementation (meta tags, structured data, sitemap)
20. Analytics setup

=== DELIVERABLES ===
- Complete Next.js app with all 10+ pages functional
- All content extracted from https://www.badoota.biz/ and integrated
- All images downloaded, optimized, and properly attributed
- README.md with:
  - Setup instructions
  - Environment variables needed
  - Deployment instructions
  - Content update guide
  - Asset sources documented
- Clean, typed, production-ready code
- No placeholder content (all real Badoota content)
- Fully mobile-responsive
- Fast, SEO-optimized, accessible

=== CRITICAL SUCCESS FACTORS ===
1. **Brand Accuracy:** Website must feel authentically Badoota, not generic
2. **Content Completeness:** ALL content from badoota.biz extracted and used
3. **US Market Fit:** USD, US formats, US ordering patterns (DoorDash/Uber Eats)
4. **Mobile Excellence:** Most customers will order from mobile
5. **Conversion Focus:** Easy path from "I'm hungry" to "Order placed"
6. **Premium Aesthetic:** Compete with best restaurant websites, not cloud kitchen templates
7. **Karnataka Authenticity:** Visual and textual respect for Karnataka cuisine heritage

Start by visiting https://www.badoota.biz/ and extracting ALL assets and content.
Then build the design system (colors, fonts, components) to match Badoota's brand.
Then build homepage to establish look and feel before moving to other pages.

Show me the extracted assets list and homepage design direction before proceeding
to full build.
```

---

## 11. Post-Launch Considerations

### Marketing Integration
- Google My Business listing optimization
- Yelp listing enhancement
- Social media integration (auto-post new menu items)
- Email marketing campaigns

### Analytics & Tracking
- Track conversion funnel: Visit → Menu View → Add to Cart → Order
- Monitor: Most viewed dishes, popular categories, drop-off points
- A/B test: CTA button text, hero images, menu layout

### Maintenance Plan
- Weekly: Check order flow, test forms, monitor analytics
- Monthly: Update featured dishes, refresh content, add seasonal items
- Quarterly: Performance audit, SEO review, menu updates

### Growth Features (Future Phases)
- Customer accounts and order history
- Loyalty points system (digital BBC Club)
- Catering order system
- Gift cards
- Subscription meal plans
- Waitlist for sold-out items
- Customer reviews and ratings
- Blog (Karnataka cuisine, recipes, culture)

---

## 12. Client Presentation Points

When presenting to Badoota team:

### Lead with Visual
- Show homepage mockup/build first
- Demonstrate mobile experience (most orders)
- Walk through ordering flow

### Emphasize Business Value
- **Direct orders = no commission:** Vs. 20-30% to DoorDash/Uber Eats
- **Customer data ownership:** Build email list, remarket
- **Brand control:** Tell authentic Karnataka story
- **Premium positioning:** Justify higher prices with quality presentation

### Showcase Differentiators
- BBC Club membership program (loyalty)
- Licensing opportunity page (business growth)
- Karnataka authenticity throughout
- Mobile-first US market design

### Set Expectations
- Launch timeline: 3-4 weeks for MVP
- Ongoing: Content updates, menu changes, seasonal promotions
- Growth: Add features based on customer behavior data

---

## 13. Success Metrics

Define success for Badoota website:

### Launch Metrics (Month 1)
- Website visitors
- Menu page views
- Order inquiries/calls
- DoorDash/Uber Eats referrals
- Email signups
- BBC Club signups

### Growth Metrics (Month 3+)
- Direct order % (vs. aggregator)
- Average order value
- Repeat customer rate
- Email open rates
- Social media traffic
- Mobile vs. desktop split

### Business Impact (Month 6+)
- Reduced commission costs (direct orders)
- Customer lifetime value increase
- Licensing inquiries
- Brand awareness (search rankings)

---

## APPENDIX A: Asset Organization

```
/public
├── /images
│   ├── /hero
│   │   ├── donne-biryani-hero.jpg
│   │   ├── karnataka-spread.jpg
│   │   └── hero-video.mp4 (if available)
│   ├── /menu
│   │   ├── /biryani
│   │   │   ├── chicken-donne-biryani.jpg
│   │   │   ├── mutton-donne-biryani.jpg
│   │   │   └── veg-biryani.jpg
│   │   ├── /karnataka-specials
│   │   │   ├── mangalorean-fish-curry.jpg
│   │   │   ├── coorg-pork-curry.jpg
│   │   │   └── chicken-ghee-roast.jpg
│   │   ├── /rice
│   │   ├── /starters
│   │   ├── /vegetarian
│   │   ├── /breads
│   │   └── /desserts
│   ├── /about
│   │   ├── team-photo.jpg
│   │   ├── kitchen-action.jpg
│   │   └── ingredients.jpg
│   ├── /location
│   │   ├── exterior.jpg
│   │   └── interior.jpg
│   └── /icons
│       ├── veg-icon.svg
│       ├── non-veg-icon.svg
│       └── spice-level.svg
├── logo.svg
├── logo-light.svg (if different for dark bg)
├── favicon.ico
└── og-image.jpg (Open Graph social share image)

/app
├── /components (reusable UI)
├── /data
│   ├── menu.ts (full Badoota menu)
│   └── content.ts (site-wide content)
├── page.tsx (Home)
├── /menu
│   └── page.tsx
├── /about
│   └── page.tsx
├── /contact
│   └── page.tsx
├── /bbc-club
│   └── page.tsx
├── /licensing
│   └── page.tsx
├── /delivery
│   └── page.tsx
├── /order
│   └── page.tsx
├── /cart
│   └── page.tsx
└── /api
    ├── /newsletter (email signup)
    └── /contact (form submissions)
```

---

## APPENDIX B: Menu Data Structure

```typescript
// app/data/menu.ts

export type CravingTag = 
  | "biryani" 
  | "spicy" 
  | "traditional" 
  | "comfort" 
  | "rice"
  | "starters"
  | "vegetarian"
  | "bestseller";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: 
    | "Donne Biryani"
    | "Karnataka Specials"
    | "Rice & Pulao"
    | "Kebabs & Starters"
    | "Vegetarian"
    | "Breads"
    | "Desserts";
  priceUsd: number; // USD pricing
  isVeg: boolean;
  spiceLevel: "mild" | "medium" | "hot" | "extra-hot";
  prepMinutes: number;
  image: string; // path under /public/images/menu/
  cravingTags: CravingTag[];
  badge?: string; // "Signature Dish", "Customer Favorite", etc.
  ingredients?: string[]; // For transparency
  allergens?: string[]; // Common allergens
};

export const CRAVINGS: { tag: CravingTag; label: string }[] = [
  { tag: "biryani", label: "Donne Biryani" },
  { tag: "spicy", label: "Spicy" },
  { tag: "traditional", label: "Traditional" },
  { tag: "comfort", label: "Comfort" },
  { tag: "rice", label: "Rice Dishes" },
  { tag: "starters", label: "Starters" },
  { tag: "vegetarian", label: "Vegetarian" },
  { tag: "bestseller", label: "Bestsellers" },
];

export const MENU: MenuItem[] = [
  {
    id: "chicken-donne-biryani",
    name: "Chicken Donne Biryani",
    description: "Authentic Bengaluru-style biryani cooked in traditional donne (clay pot) with aromatic spices, basmati rice, and tender chicken. The signature dish of Karnataka.",
    category: "Donne Biryani",
    priceUsd: 14.99,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 25,
    image: "/images/menu/biryani/chicken-donne-biryani.jpg",
    cravingTags: ["biryani", "spicy", "bestseller", "traditional"],
    badge: "Signature Dish",
    ingredients: ["Chicken", "Basmati Rice", "Onions", "Tomatoes", "Spices"],
  },
  // ... more menu items extracted from badoota.biz
];
```

---

## APPENDIX C: Color Palette Template

After extracting from https://www.badoota.biz/, update `tailwind.config.ts`:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // EXTRACT THESE FROM BADOOTA WEBSITE
        primary: "#[HEX]", // Main brand color
        secondary: "#[HEX]", // Accent color
        background: "#[HEX]", // Page background
        card: "#[HEX]", // Card backgrounds
        text: {
          DEFAULT: "#[HEX]", // Main text
          muted: "#[HEX]", // Secondary text
          light: "#[HEX]", // Light text on dark bg
        },
        accent: {
          DEFAULT: "#[HEX]", // Accent/highlight
          hover: "#[HEX]", // Hover states
        },
        // Example Karnataka-inspired palette:
        // saffron: "#FF9933",
        // earthBrown: "#6B4423",
        // warmCream: "#FFF8E7",
        // deepCharcoal: "#2C2416",
      },
      fontFamily: {
        // EXTRACT FROM WEBSITE
        display: ["var(--font-display)", "serif"], // For headings
        body: ["var(--font-body)", "sans-serif"], // For body text
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Document Version Control

**Version:** 1.0  
**Date:** September 19, 2026  
**Project:** Badoota Cloud Kitchen Website Build  
**Status:** Master build specification  
**For:** Internal development team use  

**Prepared for:** Badoota Cloud Kitchen pitch and development  
**Based on:** Gowdru Couple Cloud Kitchen codebase + https://www.badoota.biz/ reference  

---

**END OF DOCUMENT**

Use Section 10 (THE MASTER PROMPT) as your primary build instruction.
Reference other sections for detailed specifications.
Extract ALL content from https://www.badoota.biz/ before starting development.
