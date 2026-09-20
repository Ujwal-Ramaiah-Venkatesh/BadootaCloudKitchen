// Image Organization Helper for Badoota Cloud Kitchen
// Run with: node organize-images.js

const fs = require('fs');
const path = require('path');

// Menu item mapping - matches filenames to correct folders
const imageMap = {
  // Specials
  'chicken-chops': 'specials',
  'chicken-chop': 'specials',

  // Appetizers
  'babycorn-kabab': 'appetizers',
  'baby-corn': 'appetizers',
  'dry-gobi': 'appetizers',
  'gobi-manchurian': 'appetizers',
  'cauliflower': 'appetizers',
  'cabbage-manchurian': 'appetizers',
  'jackfruit-kabab': 'appetizers',
  'amaravathi-paneer': 'appetizers',
  'paneer-majestic': 'appetizers',
  'paneer-65': 'appetizers',
  'paneer': 'appetizers',
  'bengaluru-egg-chilli': 'appetizers',
  'egg-chilli': 'appetizers',
  'chicken-kabab': 'appetizers',
  'chilli-chicken': 'appetizers',
  'amaravathi-chicken': 'appetizers',
  'chicken-majestic': 'appetizers',
  'chicken-65': 'appetizers',
  'chicken-maharaja': 'appetizers',

  // Donne Biryani (Signature)
  'melukote-puliyogare': 'donne',
  'puliyogare': 'donne',
  'avrekai-donne': 'donne',
  'avrekai-biryani': 'donne',
  'bengaluru-egg-rice': 'donne',
  'egg-rice': 'donne',
  'chicken-donne-biryani': 'donne',
  'chicken-donne': 'donne',
  'mutton-donne-biryani': 'donne',
  'mutton-donne': 'donne',
  'chicken-kushka': 'donne',
  'mutton-kushka': 'donne',
  'kushka': 'donne',

  // Dum Biryani
  'veg-dum-biryani': 'dum',
  'veg-dum': 'dum',
  'paneer-65-dum': 'dum',
  'nizam-paneer-dum': 'dum',
  'amaravathi-paneer-dum': 'dum',
  'chicken-dum-biryani': 'dum',
  'chicken-dum': 'dum',
  'chicken-65-dum': 'dum',
  'nizam-chicken-dum': 'dum',
  'bezawada-chicken-dum': 'dum',
  'amaravathi-chicken-dum': 'dum',
  'goat-dum-biryani': 'dum',
  'goat-dum': 'dum',

  // Combos
  'kushka-kabab': 'combos',
  'kushka-chilli': 'combos',
  'mutton-kushka-kabab': 'combos',
  'mutton-kushka-chilli': 'combos',
  'egg-rice-egg-chilli': 'combos',

  // Family Packs
  'chicken-donne-family': 'family',
  'chicken-family': 'family',
  'avrekai-donne-family': 'family',
  'avrekai-family': 'family',
  'mutton-donne-family': 'family',
  'mutton-family': 'family',

  // Desserts
  'almond-flour-jamun': 'desserts',
  'jamun': 'desserts',
  'kokum-sherbet': 'desserts',
  'kokum': 'desserts',
};

// Hero/branding keywords
const heroKeywords = ['hero', 'banner', 'main', 'cover', 'donne-biryani-hero'];
const logoKeywords = ['logo', 'badoota-logo', 'brand'];
const aboutKeywords = ['team', 'chef', 'owner', 'kitchen', 'about'];

function normalizeFileName(filename) {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_/g, '-')
    .replace(/[()]/g, '')
    .replace(/\.jpg$|\.jpeg$|\.png$|\.webp$/i, '');
}

function findBestMatch(filename) {
  const normalized = normalizeFileName(filename);

  // Check for exact match
  if (imageMap[normalized]) {
    return { folder: `menu/${imageMap[normalized]}`, confidence: 'exact' };
  }

  // Check for partial match
  for (const [key, folder] of Object.entries(imageMap)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return { folder: `menu/${folder}`, confidence: 'partial' };
    }
  }

  // Check for hero/branding
  if (heroKeywords.some(k => normalized.includes(k))) {
    return { folder: 'hero', confidence: 'special' };
  }
  if (logoKeywords.some(k => normalized.includes(k))) {
    return { folder: '', confidence: 'logo' };
  }
  if (aboutKeywords.some(k => normalized.includes(k))) {
    return { folder: 'about', confidence: 'special' };
  }

  return null;
}

function organizeImages(sourceFolder) {
  if (!fs.existsSync(sourceFolder)) {
    console.error(`❌ Source folder not found: ${sourceFolder}`);
    console.log('\n💡 Usage: node organize-images.js <folder-path>');
    console.log('   Example: node organize-images.js "C:\\Users\\YourName\\Downloads\\badoota-images"');
    return;
  }

  const files = fs.readdirSync(sourceFolder);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  if (imageFiles.length === 0) {
    console.log('❌ No image files found in the source folder');
    return;
  }

  console.log(`\n📁 Found ${imageFiles.length} images in ${sourceFolder}\n`);

  const results = {
    moved: [],
    needsReview: [],
    skipped: []
  };

  imageFiles.forEach(file => {
    const match = findBestMatch(file);

    if (match) {
      const targetDir = path.join('public', 'images', match.folder);
      const normalized = normalizeFileName(file);
      const ext = path.extname(file);
      const targetFile = match.confidence === 'logo'
        ? path.join('public', 'logo' + ext)
        : path.join(targetDir, normalized + ext);

      // Create directory if needed
      if (match.folder) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Copy file
      try {
        const sourcePath = path.join(sourceFolder, file);
        fs.copyFileSync(sourcePath, targetFile);
        results.moved.push({
          from: file,
          to: targetFile.replace('public/', ''),
          confidence: match.confidence
        });
      } catch (err) {
        results.skipped.push({ file, reason: err.message });
      }
    } else {
      results.needsReview.push(file);
    }
  });

  // Print results
  console.log('✅ SUCCESSFULLY ORGANIZED:\n');
  results.moved.forEach(({ from, to, confidence }) => {
    const emoji = confidence === 'exact' ? '✓' : confidence === 'partial' ? '~' : '★';
    console.log(`  ${emoji} ${from}`);
    console.log(`     → ${to}\n`);
  });

  if (results.needsReview.length > 0) {
    console.log('\n⚠️  NEEDS MANUAL REVIEW (unclear match):\n');
    results.needsReview.forEach(file => {
      console.log(`  ? ${file}`);
    });
    console.log('\n  👉 Please manually copy these to the correct folders');
  }

  if (results.skipped.length > 0) {
    console.log('\n❌ ERRORS:\n');
    results.skipped.forEach(({ file, reason }) => {
      console.log(`  ✗ ${file}: ${reason}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📊 SUMMARY:`);
  console.log(`   ✅ Organized: ${results.moved.length}`);
  console.log(`   ⚠️  Review needed: ${results.needsReview.length}`);
  console.log(`   ❌ Errors: ${results.skipped.length}`);
  console.log('='.repeat(60));

  if (results.moved.length > 0) {
    console.log('\n🎉 Done! Refresh your browser to see the images.');
    console.log('   http://localhost:3000\n');
  }
}

// Run
const sourceFolder = process.argv[2];

if (!sourceFolder) {
  console.log('\n📸 Badoota Image Organizer\n');
  console.log('This script helps you organize Badoota food images into the correct folders.\n');
  console.log('Usage:');
  console.log('  node organize-images.js <path-to-your-images-folder>\n');
  console.log('Examples:');
  console.log('  node organize-images.js "C:\\Users\\YourName\\Downloads\\badoota-images"');
  console.log('  node organize-images.js ./badoota-photos\n');
  console.log('The script will:');
  console.log('  ✓ Match image filenames to menu items');
  console.log('  ✓ Copy them to the correct public/images folders');
  console.log('  ✓ Rename them properly if needed');
  console.log('  ✓ Show you which images need manual review\n');
} else {
  organizeImages(sourceFolder);
}
