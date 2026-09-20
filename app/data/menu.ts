// Badoota Cloud Kitchen — Complete Menu
// All content extracted from https://www.badoota.biz/menu
// Pricing in USD, authentic Karnataka/Bengaluru cuisine

export type CravingTag =
  | "donne-biryani"
  | "dum-biryani"
  | "appetizer"
  | "spicy"
  | "traditional"
  | "rice"
  | "combo"
  | "vegetarian"
  | "bestseller"
  | "family-pack";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category:
    | "Specials"
    | "Appetizers"
    | "Donne Biryani"
    | "Dum Biryani"
    | "Combos"
    | "Family Packs"
    | "Party Trays"
    | "Desserts & Drinks";
  priceUsd: number;
  bbcPriceUsd?: number; // BBC Club member price (20% off)
  isVeg: boolean;
  spiceLevel: "mild" | "medium" | "hot" | "extra-hot";
  prepMinutes: number;
  image: string; // path under /public/images/menu/
  video?: string; // optional video path
  cravingTags: CravingTag[];
  badge?: string;
  ingredients?: string[];
  servings?: string; // e.g., "Serves 3-4"
  extras?: { name: string; price: number }[]; // Add-ons
};

export const CRAVINGS: { tag: CravingTag; label: string }[] = [
  { tag: "donne-biryani", label: "Donne Biryani" },
  { tag: "dum-biryani", label: "Dum Biryani" },
  { tag: "appetizer", label: "Appetizers" },
  { tag: "spicy", label: "Spicy" },
  { tag: "traditional", label: "Traditional" },
  { tag: "rice", label: "Rice Dishes" },
  { tag: "combo", label: "Combos" },
  { tag: "vegetarian", label: "Vegetarian" },
  { tag: "bestseller", label: "Bestsellers" },
  { tag: "family-pack", label: "Family Packs" },
];

// FULL BADOOTA MENU
export const MENU: MenuItem[] = [
  // ============= SPECIALS =============
  {
    id: "chicken-chops",
    name: "Chicken Chops",
    description:
      "Badoota's signature chicken chops — tender, flavorful, and perfectly seasoned. A customer favorite!",
    category: "Specials",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 30,
    image: "/images/menu/specials/chicken-chops.avif",
    cravingTags: ["bestseller", "spicy"],
    badge: "20% Off BBC Members",
  },

  // ============= APPETIZERS =============
  {
    id: "babycorn-kababs",
    name: "Babycorn Kababs",
    description:
      "Tender baby corn marinated in aromatic spices and grilled to perfection. A delightful vegetarian starter.",
    category: "Appetizers",
    priceUsd: 14.99,
    bbcPriceUsd: 0, // Free with BBC Weekly benefit
    isVeg: true,
    spiceLevel: "mild",
    prepMinutes: 20,
    image: "/images/menu/appetizers/babycorn-kababs.avif",
    cravingTags: ["appetizer", "vegetarian"],
    badge: "BBC Weekly Free",
  },
  {
    id: "dry-gobi",
    name: "Dry Gobi",
    description:
      "Crispy cauliflower florets tossed with onions, peppers, and spices. Simple yet addictive.",
    category: "Appetizers",
    priceUsd: 14.99,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 20,
    image: "/images/menu/appetizers/dry-gobi.jpg",
    cravingTags: ["appetizer", "vegetarian", "spicy"],
  },
  {
    id: "gobi-manchurian",
    name: "Gobi Manchurian",
    description:
      "Crispy cauliflower florets tossed in a spicy, tangy Indo-Chinese sauce with garlic, ginger, and peppers.",
    category: "Appetizers",
    priceUsd: 15.99,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 25,
    image: "/images/menu/appetizers/gobi-manchurian.avif",
    cravingTags: ["appetizer", "vegetarian", "spicy"],
    badge: "Popular",
  },
  {
    id: "cabbage-manchurian",
    name: "Cabbage Manchurian",
    description:
      "Crispy cabbage fritters tossed in a spicy, tangy Indo-Chinese sauce. A unique twist on a classic.",
    category: "Appetizers",
    priceUsd: 14.99,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 25,
    image: "/images/menu/appetizers/cabbage-manchurian.avif",
    cravingTags: ["appetizer", "vegetarian", "spicy"],
  },
  {
    id: "jackfruit-kabab",
    name: "Jackfruit Kabab",
    description:
      "Chef's special creation — marinated jackfruit grilled with authentic Karnataka spices. A must-try vegetarian delight.",
    category: "Appetizers",
    priceUsd: 14.99,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 25,
    image: "/images/menu/appetizers/jackfruit-kabab.avif",
    cravingTags: ["appetizer", "vegetarian", "traditional"],
    badge: "Chef Special",
  },
  {
    id: "amaravathi-paneer",
    name: "Amaravathi Paneer",
    description:
      "Paneer cubes marinated in Amaravathi-style spices and cooked to perfection. Rich, spicy, and flavorful.",
    category: "Appetizers",
    priceUsd: 16.99,
    isVeg: true,
    spiceLevel: "hot",
    prepMinutes: 25,
    image: "/images/menu/appetizers/amaravathi-paneer.jpg",
    cravingTags: ["appetizer", "vegetarian", "spicy"],
  },
  {
    id: "paneer-majestic",
    name: "Paneer Majestic",
    description:
      "Premium paneer preparation with bold flavors and rich spices. A royal vegetarian treat.",
    category: "Appetizers",
    priceUsd: 15.99,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 25,
    image: "/images/menu/appetizers/paneer-majestic.jpg",
    cravingTags: ["appetizer", "vegetarian"],
  },
  {
    id: "paneer-65",
    name: "Paneer 65",
    description:
      "Classic South Indian paneer preparation — spicy, tangy, and irresistibly crispy.",
    category: "Appetizers",
    priceUsd: 15.99,
    isVeg: true,
    spiceLevel: "hot",
    prepMinutes: 20,
    image: "/images/menu/appetizers/paneer-65.jpg",
    cravingTags: ["appetizer", "vegetarian", "spicy", "bestseller"],
  },
  {
    id: "bengaluru-egg-chilli",
    name: "Bengaluru Egg Chilli",
    description:
      "Bangalore-style egg preparation with peppers and onions in a semi-gravy. Bold and flavorful.",
    category: "Appetizers",
    priceUsd: 16.99,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 25,
    image: "/images/menu/appetizers/bengaluru-egg-chilli.avif",
    cravingTags: ["appetizer", "spicy", "traditional"],
  },
  {
    id: "chicken-kabab",
    name: "Chicken Kabab",
    description:
      "Tender chicken pieces marinated in traditional spices and grilled to smoky perfection.",
    category: "Appetizers",
    priceUsd: 15.99,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 25,
    image: "/images/menu/appetizers/chicken-kabab.jpg",
    cravingTags: ["appetizer", "bestseller"],
    badge: "Bestseller",
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    description:
      "Classic Indo-Chinese favorite — chicken tossed with peppers and onions in a spicy semi-gravy.",
    category: "Appetizers",
    priceUsd: 15.99,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 25,
    image: "/images/menu/appetizers/chilli-chicken.jpg",
    cravingTags: ["appetizer", "spicy", "bestseller"],
  },
  {
    id: "amaravathi-chicken",
    name: "Amaravathi Chicken",
    description:
      "Spicy Amaravathi-style chicken with bold masala flavors. Not for the faint of heart!",
    category: "Appetizers",
    priceUsd: 16.99,
    isVeg: false,
    spiceLevel: "extra-hot",
    prepMinutes: 30,
    image: "/images/menu/appetizers/amaravathi-chicken.jpg",
    cravingTags: ["appetizer", "spicy"],
  },
  {
    id: "chicken-majestic",
    name: "Chicken Majestic",
    description:
      "Royal chicken preparation with rich spices and aromatic herbs. A premium appetizer experience.",
    category: "Appetizers",
    priceUsd: 16.99,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 30,
    image: "/images/menu/appetizers/chicken-majestic.avif",
    cravingTags: ["appetizer"],
  },
  {
    id: "chicken-65",
    name: "Chicken 65",
    description:
      "The iconic South Indian chicken starter — crispy, spicy, and bursting with flavor.",
    category: "Appetizers",
    priceUsd: 16.99,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 25,
    image: "/images/menu/appetizers/chicken-65.jpg",
    cravingTags: ["appetizer", "spicy", "bestseller", "traditional"],
    badge: "Signature",
  },
  {
    id: "chicken-maharaja",
    name: "Chicken Maharaja",
    description:
      "Premium chicken preparation fit for royalty. Rich, aromatic, and utterly delicious.",
    category: "Appetizers",
    priceUsd: 16.99,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 30,
    image: "/images/menu/appetizers/chicken-maharaja.jpg",
    cravingTags: ["appetizer"],
  },

  // ============= DONNE BIRYANI (Signature) =============
  {
    id: "melukote-puliyogare",
    name: "Melukote Puliyogare",
    description:
      "Traditional Karnataka tamarind rice from Melukote. Tangy, aromatic, and authentically prepared.",
    category: "Donne Biryani",
    priceUsd: 14.99,
    bbcPriceUsd: 11.99,
    isVeg: true,
    spiceLevel: "mild",
    prepMinutes: 30,
    image: "/images/menu/donne/melukote-puliyogare.avif",
    cravingTags: ["rice", "vegetarian", "traditional"],
  },
  {
    id: "avrekai-donne-biryani",
    name: "Avrekai Donne Biryani",
    description:
      "Unique vegetarian Donne Biryani with fresh field beans (avrekai). A Karnataka seasonal specialty cooked in traditional donne.",
    category: "Donne Biryani",
    priceUsd: 16.99,
    bbcPriceUsd: 13.59,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 35,
    image: "/images/menu/donne/avrekai-donne-biryani.avif",
    cravingTags: ["donne-biryani", "vegetarian", "traditional"],
    badge: "Seasonal Special",
  },
  {
    id: "bengaluru-egg-rice",
    name: "Bengaluru Egg Rice",
    description:
      "Bangalore-style egg rice cooked with aromatic spices in traditional donne. Contains eggs.",
    category: "Donne Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 30,
    image: "/images/menu/donne/bengaluru-egg-rice.avif",
    cravingTags: ["donne-biryani", "rice"],
  },
  {
    id: "chicken-donne-biryani",
    name: "Chicken Donne Biryani",
    description:
      "Badoota's signature dish! Authentic Bengaluru-style biryani cooked in traditional donne (leaf cup) with tender chicken, aromatic basmati rice, and bold Karnataka spices.",
    category: "Donne Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 35,
    image: "/images/menu/donne/chicken-donne-biryani.avif",
    cravingTags: ["donne-biryani", "bestseller", "traditional", "spicy"],
    badge: "Signature Dish",
    ingredients: ["Chicken", "Basmati Rice", "Donne", "Spices"],
  },
  {
    id: "mutton-donne-biryani",
    name: "Mutton Donne Biryani",
    description:
      "Premium Donne Biryani with tender mutton pieces. Slow-cooked in traditional donne for an authentic Bengaluru experience.",
    category: "Donne Biryani",
    priceUsd: 18.99,
    bbcPriceUsd: 15.19,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 40,
    image: "/images/menu/donne/mutton-donne-biryani.avif",
    cravingTags: ["donne-biryani", "bestseller", "traditional"],
    badge: "Premium",
  },
  {
    id: "chicken-kushka",
    name: "Chicken Kushka Rice",
    description:
      "Fragrant South Indian-style spiced rice cooked in flavorful chicken broth. A lighter alternative to biryani.",
    category: "Donne Biryani",
    priceUsd: 15.99,
    bbcPriceUsd: 12.79,
    isVeg: false,
    spiceLevel: "mild",
    prepMinutes: 30,
    image: "/images/menu/donne/chicken-kushka.jpg",
    cravingTags: ["rice"],
  },
  {
    id: "mutton-kushka",
    name: "Mutton Kushka Rice",
    description:
      "Fragrant South Indian-style spiced rice cooked in rich mutton broth. Aromatic and flavorful.",
    category: "Donne Biryani",
    priceUsd: 16.99,
    bbcPriceUsd: 13.59,
    isVeg: false,
    spiceLevel: "mild",
    prepMinutes: 35,
    image: "/images/menu/donne/mutton-kushka.jpg",
    cravingTags: ["rice"],
  },

  // ============= DUM BIRYANI =============
  {
    id: "veg-dum-biryani",
    name: "Veg Dum Biryani",
    description:
      "Traditional dum-cooked vegetable biryani with aromatic spices and fresh vegetables.",
    category: "Dum Biryani",
    priceUsd: 15.99,
    bbcPriceUsd: 12.79,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 35,
    image: "/images/menu/dum/veg-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "vegetarian"],
  },
  {
    id: "paneer-65-dum-biryani",
    name: "Paneer 65 Dum Biryani",
    description:
      "Spicy Paneer 65 layered with fragrant rice and slow-cooked dum-style.",
    category: "Dum Biryani",
    priceUsd: 16.99,
    bbcPriceUsd: 13.59,
    isVeg: true,
    spiceLevel: "hot",
    prepMinutes: 35,
    image: "/images/menu/dum/paneer-65-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "vegetarian", "spicy"],
  },
  {
    id: "nizam-paneer-dum-biryani",
    name: "Nizam Paneer Dum Biryani",
    description:
      "Royal Nizam-style paneer biryani with rich spices and aromatic herbs.",
    category: "Dum Biryani",
    priceUsd: 16.99,
    bbcPriceUsd: 13.59,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 35,
    image: "/images/menu/dum/nizam-paneer-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "vegetarian"],
  },
  {
    id: "amaravathi-paneer-dum-biryani",
    name: "Amaravathi Paneer Dum Biryani",
    description:
      "Spicy Amaravathi-style paneer dum biryani with bold masala flavors.",
    category: "Dum Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: true,
    spiceLevel: "extra-hot",
    prepMinutes: 35,
    image: "/images/menu/dum/amaravathi-paneer-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "vegetarian", "spicy"],
  },
  {
    id: "chicken-dum-biryani",
    name: "Chicken Dum Biryani",
    description:
      "Classic Hyderabadi-style chicken dum biryani. Layered and slow-cooked to perfection.",
    category: "Dum Biryani",
    priceUsd: 16.99,
    bbcPriceUsd: 13.59,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 40,
    image: "/images/menu/dum/chicken-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "bestseller"],
  },
  {
    id: "chicken-65-dum-biryani",
    name: "Chicken 65 Dum Biryani",
    description:
      "Spicy Chicken 65 pieces layered with fragrant basmati rice and dum-cooked.",
    category: "Dum Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 40,
    image: "/images/menu/dum/chicken-65-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "spicy"],
  },
  {
    id: "nizam-chicken-dum-biryani",
    name: "Nizam Chicken Dum Biryani",
    description:
      "Royal Nizam-style chicken dum biryani with rich, aromatic spices.",
    category: "Dum Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 40,
    image: "/images/menu/dum/nizam-chicken-dum-biryani.jpg",
    cravingTags: ["dum-biryani"],
  },
  {
    id: "bezawada-chicken-dum-biryani",
    name: "Bezawada Chicken Dum Biryani",
    description:
      "Bezawada-style chicken dum biryani with distinctive regional flavors.",
    category: "Dum Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 40,
    image: "/images/menu/dum/bezawada-chicken-dum-biryani.jpg",
    cravingTags: ["dum-biryani"],
  },
  {
    id: "amaravathi-chicken-dum-biryani",
    name: "Amaravathi Chicken Dum Biryani",
    description:
      "Fiery Amaravathi-style chicken dum biryani. Extra spicy and full of flavor.",
    category: "Dum Biryani",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "extra-hot",
    prepMinutes: 40,
    image: "/images/menu/dum/amaravathi-chicken-dum-biryani.jpg",
    cravingTags: ["dum-biryani", "spicy"],
  },
  {
    id: "goat-dum-biryani",
    name: "Goat Dum Biryani",
    description:
      "Premium goat meat dum biryani. Tender, flavorful, and authentically prepared.",
    category: "Dum Biryani",
    priceUsd: 18.99,
    bbcPriceUsd: 15.19,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 45,
    image: "/images/menu/dum/goat-dum-biryani.jpg",
    cravingTags: ["dum-biryani"],
    badge: "Premium",
  },

  // ============= COMBOS =============
  {
    id: "chicken-kushka-chicken-kabab-combo",
    name: "Chicken Kushka + Chicken Kabab Combo",
    description:
      "Chicken Kushka rice paired with 4 pieces of juicy chicken kabab. Perfect meal combo.",
    category: "Combos",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 30,
    image: "/images/menu/combos/kushka-kabab.jpg",
    cravingTags: ["combo"],
  },
  {
    id: "chicken-kushka-chilli-chicken-combo",
    name: "Chicken Kushka + Chilli Chicken Combo",
    description:
      "Chicken Kushka rice with spicy chilli chicken. Great combination of flavors.",
    category: "Combos",
    priceUsd: 17.99,
    bbcPriceUsd: 14.39,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 30,
    image: "/images/menu/combos/kushka-chilli-chicken.jpg",
    cravingTags: ["combo", "spicy"],
  },
  {
    id: "mutton-kushka-chicken-kabab-combo",
    name: "Mutton Kushka + Chicken Kabab Combo",
    description:
      "Rich mutton kushka rice with 4 pieces of grilled chicken kabab.",
    category: "Combos",
    priceUsd: 18.99,
    bbcPriceUsd: 15.19,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 35,
    image: "/images/menu/combos/mutton-kushka-kabab.jpg",
    cravingTags: ["combo"],
  },
  {
    id: "mutton-kushka-chilli-chicken-combo",
    name: "Mutton Kushka + Chilli Chicken Combo",
    description:
      "Mutton kushka rice paired with spicy chilli chicken. A hearty meal.",
    category: "Combos",
    priceUsd: 18.99,
    bbcPriceUsd: 15.19,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 35,
    image: "/images/menu/combos/mutton-kushka-chilli.jpg",
    cravingTags: ["combo", "spicy"],
  },
  {
    id: "bengaluru-egg-rice-egg-chilli-combo",
    name: "Bengaluru Egg Rice + Egg Chilli Combo",
    description:
      "Bangalore-style egg rice with spicy egg chilli. Complete egg lover's meal.",
    category: "Combos",
    priceUsd: 19.99,
    bbcPriceUsd: 15.99,
    isVeg: false,
    spiceLevel: "hot",
    prepMinutes: 30,
    image: "/images/menu/combos/egg-rice-egg-chilli.avif",
    cravingTags: ["combo", "spicy"],
  },

  // ============= FAMILY PACKS =============
  {
    id: "chicken-donne-family-pack",
    name: "Chicken Donne Biryani Family Pack",
    description:
      "Serves 3-4 people. Our signature Chicken Donne Biryani in family size. Includes FREE 8oz appetizer of your choice!",
    category: "Family Packs",
    priceUsd: 39.99,
    bbcPriceUsd: 31.99,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 45,
    servings: "Serves 3-4",
    image: "/images/menu/family/chicken-donne-family.jpg",
    cravingTags: ["family-pack", "donne-biryani", "bestseller"],
    badge: "FREE Appetizer Included",
    extras: [
      { name: "Extra 8oz Baby corn Kabab", price: 5.99 },
      { name: "Extra 3pc Chilli Chicken", price: 7.99 },
    ],
  },
  {
    id: "avrekai-donne-family-pack",
    name: "Avrekai Donne Biryani Family Pack",
    description:
      "Serves 3-4 people. Vegetarian Avrekai Donne Biryani in family size. Includes FREE 8oz appetizer!",
    category: "Family Packs",
    priceUsd: 38.99,
    bbcPriceUsd: 31.19,
    isVeg: true,
    spiceLevel: "medium",
    prepMinutes: 45,
    servings: "Serves 3-4",
    image: "/images/menu/family/avrekai-donne-family.jpg",
    cravingTags: ["family-pack", "vegetarian", "donne-biryani"],
    badge: "FREE Appetizer Included",
  },
  {
    id: "mutton-donne-family-pack",
    name: "Mutton Donne Biryani Family Pack",
    description:
      "Serves 3-4 people. Premium Mutton Donne Biryani in family size. Includes FREE 8oz appetizer!",
    category: "Family Packs",
    priceUsd: 44.99,
    bbcPriceUsd: 35.99,
    isVeg: false,
    spiceLevel: "medium",
    prepMinutes: 50,
    servings: "Serves 3-4",
    image: "/images/menu/family/mutton-donne-family.jpg",
    cravingTags: ["family-pack", "donne-biryani"],
    badge: "Premium • FREE Appetizer",
  },

  // ============= DESSERTS & DRINKS =============
  {
    id: "almond-flour-jamun",
    name: "Almond Flour Jamun",
    description:
      "Healthier twist on traditional gulab jamun — made with almond flour. Sweet, soft, and delicious.",
    category: "Desserts & Drinks",
    priceUsd: 5.99,
    bbcPriceUsd: 4.79,
    isVeg: true,
    spiceLevel: "mild",
    prepMinutes: 10,
    image: "/images/menu/desserts/almond-flour-jamun.jpg",
    cravingTags: ["vegetarian"],
  },
  {
    id: "kokum-sherbet",
    name: "Kokum Sherbet",
    description:
      "Refreshing traditional Karnataka drink made from kokum. Sweet, tangy, and cooling.",
    category: "Desserts & Drinks",
    priceUsd: 4.99,
    bbcPriceUsd: 3.99,
    isVeg: true,
    spiceLevel: "mild",
    prepMinutes: 5,
    image: "/images/menu/desserts/kokum-sherbet.jpg",
    cravingTags: ["vegetarian", "traditional"],
  },
];

// Helper function to get items by category
export function getMenuByCategory(category: MenuItem["category"]): MenuItem[] {
  return MENU.filter((item) => item.category === category);
}

// Helper function to get items by craving tag
export function getMenuByCraving(tag: CravingTag): MenuItem[] {
  return MENU.filter((item) => item.cravingTags.includes(tag));
}

// Helper function to get featured/bestseller items
export function getFeaturedItems(count: number = 6): MenuItem[] {
  return MENU.filter((item) => item.cravingTags.includes("bestseller")).slice(
    0,
    count
  );
}

// Categories for navigation/filtering
export const CATEGORIES = [
  "Specials",
  "Appetizers",
  "Donne Biryani",
  "Dum Biryani",
  "Combos",
  "Family Packs",
  "Party Trays",
  "Desserts & Drinks",
] as const;
