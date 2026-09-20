BADOOTA IMAGES FOLDER

This folder contains all menu item images for the Badoota Cloud Kitchen website.

HOW TO ADD IMAGES:
==================

1. QUICK METHOD (Automatic):
   - Put all your Badoota images in one folder
   - Run: node organize-images.js "path/to/your/images"
   - Script will sort them automatically!

2. MANUAL METHOD:
   Copy images to these folders based on menu category:
   
   menu/specials/     - Special dishes (Chicken Chops)
   menu/appetizers/   - Starters (15 items - Paneer 65, Chicken 65, etc.)
   menu/donne/        - Donne Biryani (7 items - SIGNATURE)
   menu/dum/          - Dum Biryani (10 items)
   menu/combos/       - Combo meals (5 items)
   menu/family/       - Family packs (3 items)
   menu/desserts/     - Sweets & drinks (2 items)
   
   hero/              - Hero banner images
   about/             - Team & kitchen photos

FILENAME FORMAT:
================
- Lowercase with hyphens
- Match menu item ID exactly
- Example: chicken-donne-biryani.jpg

MISSING IMAGES:
===============
Don't worry! If an image is missing, the website shows:
  "Badoota - photo soon" placeholder

This looks professional until you add the real photo.

PRIORITY IMAGES (Start here):
==============================
1. chicken-donne-biryani.jpg (MOST IMPORTANT)
2. mutton-donne-biryani.jpg
3. chicken-65.jpg
4. logo.svg (in public/ root)

Need help? See ORGANIZE_IMAGES.md for complete guide.
