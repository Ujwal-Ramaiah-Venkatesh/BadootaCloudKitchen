import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { BottomNav } from "./components/BottomNav";
import { SiteFooter } from "./components/SiteFooter";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Badoota Cloud Kitchen — Authentic Karnataka Cuisine in San Jose",
  description:
    "Experience authentic Bengaluru food in San Jose. Traditional Donne Biryani, bold spices, and Karnataka specialties made fresh to order. Order for pickup or delivery.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/logo.avif", type: "image/avif" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.avif",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Badoota Cloud Kitchen",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <Nav />
        {/* pb leaves room for the mobile bottom tab bar */}
        <div className="pb-24 md:pb-0">{children}</div>
        <SiteFooter />
        <BottomNav />
      </body>
    </html>
  );
}
