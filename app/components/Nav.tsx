"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/lib/cart";

export function Nav() {
  const count = useCart((s) => s.count());
  const pathname = usePathname();
  const router = useRouter();
  const [term, setTerm] = useState("");
  // On the home hero, the nav floats over the biryani video so the two read as
  // one continuous frame. Everywhere else it's a normal sticky bar.
  const overHero = pathname === "/";

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = term.trim();
    router.push(q ? `/menu?q=${encodeURIComponent(q)}` : "/menu");
  }

  return (
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

          {/* Search — jumps to the menu, filtered by what they typed */}
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

        {/* Mobile: compact search in the right corner (links/cart live in the bottom bar) */}
        <form
          onSubmit={onSearch}
          className="flex items-center gap-2 rounded-full border border-gold/30 bg-noir/50 px-3.5 py-2 backdrop-blur transition focus-within:border-gold md:hidden"
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
            className="w-20 bg-transparent text-sm text-bone placeholder:text-bone-dim/60 focus:outline-none sm:w-28"
          />
        </form>

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
  );
}
