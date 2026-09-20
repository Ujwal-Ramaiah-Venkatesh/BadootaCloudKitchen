# Badoota Cloud Kitchen - Image Requirements

This document lists all images needed from the Badoota website (https://www.badoota.biz/)

## 🚨 COPYRIGHT NOTICE
All images must be obtained with proper permission from Badoota. Contact them directly:
- Website: https://www.badoota.biz/
- Request their official brand assets and food photography

---

## Required Images

### Logo & Branding
- [ ] `public/logo.svg` or `logo.png` - Main Badoota logo
- [ ] `public/logo-light.svg` - Light version (if they have one)
- [ ] `public/favicon.ico` - Favicon
- [ ] `public/og-image.jpg` - Social media sharing image (1200x630px)

### Hero Images
- [ ] `public/images/hero/donne-biryani.jpg` - Hero shot of Donne Biryani
- [ ] `public/images/hero/karnataka-spread.jpg` - Karnataka food spread
- [ ] `public/images/hero/hero-video.mp4` (optional) - Video of Donne Biryani

---

## Menu Item Images (60+ items)

### Specials (1 item)
- [ ] `public/images/menu/specials/chicken-chops.jpg`

### Appetizers (15 items)
- [ ] `public/images/menu/appetizers/babycorn-kababs.jpg`
- [ ] `public/images/menu/appetizers/dry-gobi.jpg`
- [ ] `public/images/menu/appetizers/gobi-manchurian.jpg`
- [ ] `public/images/menu/appetizers/cabbage-manchurian.jpg`
- [ ] `public/images/menu/appetizers/jackfruit-kabab.jpg`
- [ ] `public/images/menu/appetizers/amaravathi-paneer.jpg`
- [ ] `public/images/menu/appetizers/paneer-majestic.jpg`
- [ ] `public/images/menu/appetizers/paneer-65.jpg`
- [ ] `public/images/menu/appetizers/bengaluru-egg-chilli.jpg`
- [ ] `public/images/menu/appetizers/chicken-kabab.jpg`
- [ ] `public/images/menu/appetizers/chilli-chicken.jpg`
- [ ] `public/images/menu/appetizers/amaravathi-chicken.jpg`
- [ ] `public/images/menu/appetizers/chicken-majestic.jpg`
- [ ] `public/images/menu/appetizers/chicken-65.jpg`
- [ ] `public/images/menu/appetizers/chicken-maharaja.jpg`

### Donne Biryani (7 items) - SIGNATURE CATEGORY
- [ ] `public/images/menu/donne/melukote-puliyogare.jpg`
- [ ] `public/images/menu/donne/avrekai-donne-biryani.jpg`
- [ ] `public/images/menu/donne/bengaluru-egg-rice.jpg`
- [ ] `public/images/menu/donne/chicken-donne-biryani.jpg` ⭐ SIGNATURE
- [ ] `public/images/menu/donne/mutton-donne-biryani.jpg`
- [ ] `public/images/menu/donne/chicken-kushka.jpg`
- [ ] `public/images/menu/donne/mutton-kushka.jpg`

### Dum Biryani (10 items)
- [ ] `public/images/menu/dum/veg-dum-biryani.jpg`
- [ ] `public/images/menu/dum/paneer-65-dum-biryani.jpg`
- [ ] `public/images/menu/dum/nizam-paneer-dum-biryani.jpg`
- [ ] `public/images/menu/dum/amaravathi-paneer-dum-biryani.jpg`
- [ ] `public/images/menu/dum/chicken-dum-biryani.jpg`
- [ ] `public/images/menu/dum/chicken-65-dum-biryani.jpg`
- [ ] `public/images/menu/dum/nizam-chicken-dum-biryani.jpg`
- [ ] `public/images/menu/dum/bezawada-chicken-dum-biryani.jpg`
- [ ] `public/images/menu/dum/amaravathi-chicken-dum-biryani.jpg`
- [ ] `public/images/menu/dum/goat-dum-biryani.jpg`

### Combos (5 items)
- [ ] `public/images/menu/combos/kushka-kabab.jpg`
- [ ] `public/images/menu/combos/kushka-chilli-chicken.jpg`
- [ ] `public/images/menu/combos/mutton-kushka-kabab.jpg`
- [ ] `public/images/menu/combos/mutton-kushka-chilli.jpg`
- [ ] `public/images/menu/combos/egg-rice-egg-chilli.jpg`

### Family Packs (3 items)
- [ ] `public/images/menu/family/chicken-donne-family.jpg`
- [ ] `public/images/menu/family/avrekai-donne-family.jpg`
- [ ] `public/images/menu/family/mutton-donne-family.jpg`

### Desserts & Drinks (2 items)
- [ ] `public/images/menu/desserts/almond-flour-jamun.jpg`
- [ ] `public/images/menu/desserts/kokum-sherbet.jpg`

---

## About Section Images
- [ ] `public/images/about/team-photo.jpg` - Owner/chef photo
- [ ] `public/images/about/kitchen-action.jpg` - Kitchen preparation
- [ ] `public/images/about/ingredients.jpg` - Fresh ingredients
- [ ] `public/images/about/donne-vessel.jpg` - Traditional donne vessel

---

## Location Images
- [ ] `public/images/location/exterior.jpg` - Restaurant exterior
- [ ] `public/images/location/interior.jpg` - Interior/ambiance

---

## Total Images Needed: 60+ images

## Image Specifications
- **Format:** JPG or WebP (optimized for web)
- **Size:** 
  - Hero images: 1920x1080px or larger
  - Menu items: 800x800px minimum (square aspect ratio)
  - Logo: SVG preferred, or PNG with transparent background
- **Quality:** High resolution, good lighting, appetizing presentation
- **Consistency:** Same style/lighting across all menu items

---

## Alternative: Temporary Placeholders

If you need to demo the site before getting official images, you can:
1. Use generic food photography from free stock sites (Unsplash, Pexels)
2. Label them clearly as "PLACEHOLDER - DEMO ONLY"
3. Replace with official Badoota images before launch

### Free Stock Photo Sources:
- Unsplash.com - Search "indian food", "biryani", "curry"
- Pexels.com - Search "indian cuisine"
- Pixabay.com - Search "south indian food"

**Note:** Stock photos are only for demo/development. Use Badoota's real photography for production.

---

## How to Add Images Once Obtained

1. Save images to the paths listed above
2. Ensure filenames match exactly (lowercase, hyphens)
3. Optimize images before adding:
   ```bash
   # Using ImageMagick or similar tools
   convert input.jpg -quality 85 -resize 1920x output.jpg
   ```
4. The website will automatically display them

---

## Contact Badoota

To request official brand assets:
- **Website:** https://www.badoota.biz/
- **Location:** 326 Commercial Street, San Jose, CA 95112
- **Explain:** You're building a modern web presence and need their official food photography and logo

They will likely be happy to provide assets if you're helping improve their online presence!
