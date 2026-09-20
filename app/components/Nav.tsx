"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/lib/cart";

export function Nav() {
  const count = useCart((s) => s.count());
  const pathname = usePathname();
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount check for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);
  // On the home hero, the nav floats over the biryani video so the two read as
  // one continuous frame. Everywhere else it's a normal sticky bar.
  const overHero = pathname === "/";

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = term.trim();
    router.push(q ? `/menu?q=${encodeURIComponent(q)}` : "/menu");
  }

  // Menu overlay component to be rendered via portal
  const menuOverlay = menuOpen && mounted ? (
    <>
      {/* Backdrop - Rendered at body level via portal */}
      <div
        className="fixed inset-0 z-[999] bg-noir backdrop-blur-md md:hidden"
        onClick={() => setMenuOpen(false)}
        style={{ isolation: "isolate" }}
      />

      {/* Menu Panel - Rendered at body level via portal */}
      <div className="fixed left-0 top-0 z-[1000] h-full w-80 bg-noir border-r border-gold/20 shadow-2xl md:hidden">
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-4 top-4 p-2 text-gold hover:text-gold-sheen"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Logo at top of menu - left aligned, same size as nav logo */}
        <div className="flex items-center border-b border-gold/10 px-6 py-5">
          <div className="relative h-11 w-auto overflow-hidden rounded-lg bg-white px-3 py-2 shadow-xl ring-2 ring-gold/20">
            <Image
              src="/badoota-logo.svg"
              alt="Badoota"
              width={140}
              height={48}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 px-6 pt-6">
          <Link
            href="/menu"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            Menu
          </Link>
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            Order Online
          </Link>
          <Link
            href="/bbc-club"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            BBC Club
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            About
          </Link>
          <Link
            href="/delivery"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            Delivery
          </Link>
          <Link
            href="/licensing"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            Licensing Opportunity
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg text-bone transition hover:text-gold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  ) : null;

  return (
    <>
      <header
        className={
          overHero
            ? "absolute inset-x-0 top-0 z-40 bg-gradient-to-b from-noir via-noir/40 to-transparent md:from-noir/70 md:via-noir/25"
            : "sticky top-0 z-40 border-b border-gold/10 bg-noir/85 backdrop-blur"
        }
      >
      <nav className="flex w-full items-center justify-between px-6 py-4 lg:px-10">
        {/* Left: Premium brand logo + search */}
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-4 group">
            {/* Premium rectangular logo */}
            <div className="relative h-11 w-auto overflow-hidden rounded-lg bg-white px-3 py-2 shadow-xl ring-2 ring-gold/20 transition group-hover:ring-gold/50 group-hover:shadow-2xl md:h-12">
              <Image
                src="/logo.avif"
                alt="Badoota"
                width={140}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Search — jumps to the menu, filtered by what they typed */}
          <form
            onSubmit={onSearch}
            className="hidden items-center gap-2 rounded-full border border-gold/30 bg-noir/50 px-4 py-2.5 backdrop-blur transition focus-within:border-gold md:flex"
          >
            <button type="submit" aria-label="Search dishes" className="shrink-0 text-gold/70 transition hover:text-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
                <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
            <input
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search food…"
              aria-label="Search food"
              className="w-24 bg-transparent text-base text-bone placeholder:text-bone-dim/60 focus:outline-none lg:w-40 xl:w-52"
            />
          </form>
        </div>

        {/* Mobile: compact search + hamburger menu on the right */}
        <div className="flex items-center gap-3 md:hidden">
          <form
            onSubmit={onSearch}
            className="flex items-center gap-2 rounded-full border border-gold/30 bg-noir/50 px-3.5 py-2 backdrop-blur transition focus-within:border-gold"
          >
            <button type="submit" aria-label="Search dishes" className="shrink-0 text-gold/70 transition hover:text-gold">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
                <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
            <input
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search…"
              aria-label="Search food"
              className="w-16 bg-transparent text-sm text-bone placeholder:text-bone-dim/60 focus:outline-none sm:w-24"
            />
          </form>

          {/* Hamburger Menu Button - Right of search */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-gold transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-gold transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-gold transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Right: links + cart (mobile uses the bottom tab bar) */}
        <div className="hidden items-center gap-5 md:flex lg:gap-10">
          <div className="flex items-center gap-4 whitespace-nowrap text-base font-medium tracking-wide text-bone-dim lg:gap-6">
            <Link href="/menu" className="transition hover:text-gold">Menu</Link>
            <Link href="/order" className="transition hover:text-gold">Order Online</Link>
            <Link href="/bbc-club" className="transition hover:text-gold">BBC Club</Link>
            <Link href="/about" className="transition hover:text-gold">About</Link>
            <Link href="/contact" className="transition hover:text-gold">Contact</Link>
          </div>

          <Link
            href="/cart"
            className="relative rounded-full border border-gold/40 bg-gold-sheen px-7 py-2.5 text-xl font-semibold text-noir transition hover:shadow-gold"
          >
            Cart
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-noir px-1 text-xs text-gold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
      </header>

      {/* Mobile Menu Overlay - Rendered via Portal at document body level */}
      {mounted && typeof window !== 'undefined' && menuOverlay && createPortal(menuOverlay, document.body)}
    </>
  );
}
