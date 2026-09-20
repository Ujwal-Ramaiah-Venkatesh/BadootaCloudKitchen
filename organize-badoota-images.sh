#!/bin/bash
# Organize Badoota images from assets/ to public/images/

echo "🎨 Organizing Badoota images..."
echo ""

# Create directories
mkdir -p "public/images/menu/specials"
mkdir -p "public/images/menu/appetizers"
mkdir -p "public/images/menu/donne"
mkdir -p "public/images/menu/dum"
mkdir -p "public/images/menu/combos"
mkdir -p "public/images/menu/family"
mkdir -p "public/images/menu/desserts"
mkdir -p "public/images/hero"
mkdir -p "public/images/about"

# Function to convert AVIF to JPG and copy
convert_and_copy() {
    local source="$1"
    local dest="$2"
    local name=$(basename "$source")

    if [[ "$source" == *.avif ]]; then
        # Check if ImageMagick/ffmpeg is available
        if command -v magick &> /dev/null; then
            magick "$source" "$dest"
            echo "  ✓ Converted and copied: $name → ${dest#public/}"
        elif command -v ffmpeg &> /dev/null; then
            ffmpeg -i "$source" "$dest" -y -loglevel quiet
            echo "  ✓ Converted and copied: $name → ${dest#public/}"
        else
            # Just copy as-is
            cp "$source" "$dest"
            echo "  ✓ Copied (AVIF): $name → ${dest#public/}"
        fi
    else
        cp "$source" "$dest"
        echo "  ✓ Copied: $name → ${dest#public/}"
    fi
}

# Organize images by matching filenames
count=0

# Specials
if [ -f "assets/Chicken Chops.avif" ]; then
    convert_and_copy "assets/Chicken Chops.avif" "public/images/menu/specials/chicken-chops.jpg"
    ((count++))
fi

# Appetizers
if [ -f "assets/Babycorn Kababs.avif" ]; then
    convert_and_copy "assets/Babycorn Kababs.avif" "public/images/menu/appetizers/babycorn-kababs.jpg"
    ((count++))
fi

if [ -f "assets/Gobi Manchurian.avif" ]; then
    convert_and_copy "assets/Gobi Manchurian.avif" "public/images/menu/appetizers/gobi-manchurian.jpg"
    ((count++))
fi

if [ -f "assets/Cabbage manchurian.avif" ]; then
    convert_and_copy "assets/Cabbage manchurian.avif" "public/images/menu/appetizers/cabbage-manchurian.jpg"
    ((count++))
fi

if [ -f "assets/Jackfuit kabab.avif" ]; then
    convert_and_copy "assets/Jackfuit kabab.avif" "public/images/menu/appetizers/jackfruit-kabab.jpg"
    ((count++))
fi

if [ -f "assets/Bengaluru Egg Chilli.avif" ]; then
    convert_and_copy "assets/Bengaluru Egg Chilli.avif" "public/images/menu/appetizers/bengaluru-egg-chilli.jpg"
    ((count++))
fi

if [ -f "assets/Chicken Mejastic.avif" ]; then
    convert_and_copy "assets/Chicken Mejastic.avif" "public/images/menu/appetizers/chicken-majestic.jpg"
    ((count++))
fi

# Donne Biryani (SIGNATURE)
if [ -f "assets/Chicken Donne Biriyani.avif" ]; then
    convert_and_copy "assets/Chicken Donne Biriyani.avif" "public/images/menu/donne/chicken-donne-biryani.jpg"
    echo "  ⭐ SIGNATURE DISH!"
    ((count++))
fi

if [ -f "assets/Mutton Donne Biriyani.avif" ]; then
    convert_and_copy "assets/Mutton Donne Biriyani.avif" "public/images/menu/donne/mutton-donne-biryani.jpg"
    ((count++))
fi

if [ -f "assets/Avrekain Donne Biriyani.avif" ]; then
    convert_and_copy "assets/Avrekain Donne Biriyani.avif" "public/images/menu/donne/avrekai-donne-biryani.jpg"
    ((count++))
fi

if [ -f "assets/Bengaluru Egg rice.avif" ]; then
    convert_and_copy "assets/Bengaluru Egg rice.avif" "public/images/menu/donne/bengaluru-egg-rice.jpg"
    ((count++))
fi

if [ -f "assets/Melkote Puliyogare.avif" ]; then
    convert_and_copy "assets/Melkote Puliyogare.avif" "public/images/menu/donne/melukote-puliyogare.jpg"
    ((count++))
fi

# Combos
if [ -f "assets/Bengaluru Eggg rice and egg chilli combo.avif" ]; then
    convert_and_copy "assets/Bengaluru Eggg rice and egg chilli combo.avif" "public/images/menu/combos/egg-rice-egg-chilli.jpg"
    ((count++))
fi

echo ""
echo "================================"
echo "📊 Organized $count images!"
echo "================================"
echo ""
echo "🎉 Done! Refresh http://localhost:3000 to see your images!"
echo ""
