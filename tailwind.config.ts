import type { Config } from "tailwindcss";

// Badoota brand system: Premium Karnataka-inspired palette.
// Deep rich surfaces with warm gold accent reflecting traditional Donne Biryani heritage.
// Restrained elegance — gold emphasizes key elements, not overused.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: "#0B0A09",       // page background — deep warm black
        coal: "#16130E",       // elevated surface / cards
        "coal-2": "#1F1A13",   // hover / raised surface
        gold: "#C9A24B",       // signature gold (single accent)
        "gold-hi": "#E7C877",  // highlight / gradient top
        "gold-dim": "#8A6E2F", // pressed / borders
        bone: "#F3ECDD",       // primary text on dark
        "bone-dim": "#B9AE99", // secondary text (warm taupe)
        leaf: "#7F9B5B",       // veg badge only
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        app: "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(0,0,0,0.75)",
        gold: "0 10px 40px -12px rgba(201,162,75,0.45)",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(135deg, #E7C877 0%, #C9A24B 45%, #8A6E2F 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
