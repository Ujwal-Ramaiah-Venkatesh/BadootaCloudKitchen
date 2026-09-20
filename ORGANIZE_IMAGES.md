# How to Organize Your Badoota Images

## 📁 Where to Put Images

Copy your Badoota food images into these folders based on the menu category:

### **Menu Item Images** (60+ images needed)

```
public/images/menu/
├── specials/
│   └── chicken-chops.jpg
├── appetizers/
│   ├── babycorn-kababs.jpg
│   ├── gobi-manchurian.jpg
│   ├── paneer-65.jpg
│   ├── chicken-kabab.jpg
│   ├── chilli-chicken.jpg
│   ├── chicken-65.jpg
│   └── ... (15 total)
├── donne/               ⭐ SIGNATURE CATEGORY
│   ├── chicken-donne-biryani.jpg
│   ├── mutton-donne-biryani.jpg
│   ├── avrekai-donne-biryani.jpg
│   └── ... (7 total)
├── dum/
│   ├── chicken-dum-biryani.jpg
│   ├── goat-dum-biryani.jpg
│   └── ... (10 total)
├── combos/
│   ├── kushka-kabab.jpg
│   └── ... (5 total)
├── family/
│   ├── chicken-donne-family.jpg
│   └── ... (3 total)
└── desserts/
    ├── almond-flour-jamun.jpg
    └── kokum-sherbet.jpg
```

### **Hero & Branding Images**

```
public/
├── logo.svg (or logo.png)
├── favicon.ico
└── images/
    ├── hero/
    │   ├── donne-biryani.jpg       (Main hero image)
    │   └── karnataka-spread.jpg
    └── about/
        ├── team-photo.jpg
        └── kitchen-action.jpg
```

---

## 🔍 Quick Image Matching Guide

If you have images from Badoota's website, match them to menu items:

### **Biryani Images** → `donne/` or `dum/`
- Donne Biryani (leaf vessel) → `donne/`
- Regular Biryani (ceramic) → `dum/`

### **Appetizers** → `appetizers/`
- Paneer dishes → paneer-65.jpg, paneer-majestic.jpg
- Chicken starters → chicken-kabab.jpg, chicken-65.jpg, chilli-chicken.jpg
- Vegetable → babycorn-kababs.jpg, gobi-manchurian.jpg

### **Combos** → `combos/`
- Rice + Protein combinations

### **Family Size** → `family/`
- Large serving images

---

## 🚀 Quick Setup Script

I've created a helper script to organize your images. If you have images in a folder, run:

```bash
# If images are in Downloads or Desktop
# Move them to the correct menu folders based on filename
```

---

## ✅ What Happens If Images Are Missing?

**Don't worry!** The website shows a branded placeholder:

```
┌─────────────────┐
│                 │
│    Badoota      │  (in gold italic)
│   photo soon    │  (subtle text)
│                 │
└─────────────────┘
```

This looks professional and shows the Badoota brand even without the actual photo.

---

## 📸 Image Tips

### **Filename Format:**
- Lowercase with hyphens
- Match the menu item ID
- Example: `chicken-donne-biryani.jpg` (not `Chicken Donne Biryani.JPG`)

### **Image Quality:**
- **Minimum:** 800x800px
- **Preferred:** 1200x1200px
- **Format:** JPG or WebP
- **File size:** Under 500KB each (use compression if needed)

### **Quick Rename:**
If your images have different names, here's how to rename them:

**Windows:**
```bash
# Rename in File Explorer or use PowerShell:
Rename-Item "old-name.jpg" "chicken-donne-biryani.jpg"
```

**Mac/Linux:**
```bash
mv "old-name.jpg" "chicken-donne-biryani.jpg"
```

---

## 🎯 Priority Images (Start Here)

If you have limited images, add these first for maximum impact:

1. **Logo** → `public/logo.svg` or `logo.png`
2. **Chicken Donne Biryani** → `public/images/menu/donne/chicken-donne-biryani.jpg` ⭐
3. **Mutton Donne Biryani** → `public/images/menu/donne/mutton-donne-biryani.jpg`
4. **Chicken 65** → `public/images/menu/appetizers/chicken-65.jpg`
5. **Hero Image** → `public/images/hero/donne-biryani.jpg`

These 5 images cover the most important items and hero section!

---

## 📋 Check Your Work

After adding images, refresh the browser (http://localhost:3000) and check:
- Homepage hero section
- Menu page - browse all categories
- Individual menu items

Images should appear automatically! If you see "Badoota photo soon" - the image filename might not match.

---

## 🔄 Image Naming Reference

Complete list in **IMAGE_REQUIREMENTS.md**, but here are the most common:

### Donne Biryani (Must-Have):
```
chicken-donne-biryani.jpg
mutton-donne-biryani.jpg
avrekai-donne-biryani.jpg
bengaluru-egg-rice.jpg
```

### Top Appetizers:
```
chicken-65.jpg
chicken-kabab.jpg
chilli-chicken.jpg
paneer-65.jpg
babycorn-kababs.jpg
gobi-manchurian.jpg
```

### Dum Biryani:
```
chicken-dum-biryani.jpg
goat-dum-biryani.jpg
veg-dum-biryani.jpg
```

---

## ❓ Need Help?

1. **Images not showing?**
   - Check filename matches exactly (case-sensitive on some systems)
   - Check file is in correct folder
   - Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

2. **Images too large?**
   - Use online compressor: tinypng.com or squoosh.app
   - Target: 300-500KB per image

3. **Don't have all images yet?**
   - That's fine! Add what you have
   - Missing images show "Badoota photo soon" placeholder
   - Add more images anytime

---

## 📦 Bulk Image Organization

If you have many images in one folder, let me know and I can create a script to automatically:
1. Match image content to menu items
2. Rename files to correct format
3. Move to appropriate folders

Just put all your Badoota images in one folder and tell me!

---

**Ready?** Start by copying your images to the folders above, then refresh http://localhost:3000 to see them live!
