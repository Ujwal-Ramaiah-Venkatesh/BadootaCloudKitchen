"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CRAVINGS, MENU, type CravingTag } from "@/app/data/menu";
import { MenuCard } from "@/app/components/MenuCard";

function MenuInner() {
  const params = useSearchParams();
  const initial = params.get("c") as CravingTag | null;
  const [active, setActive] = useState<CravingTag | null>(
    initial && CRAVINGS.some((c) => c.tag === initial) ? initial : null
  );

  // Get query from URL params - this is the source of truth
  const urlQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(urlQuery);

  // Sync local state with URL params when they change
  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const q = query.trim().toLowerCase();
  const items = useMemo(
    () =>
      MENU.filter((m) => {
        const byCraving = active ? m.cravingTags.includes(active) : true;
        const bySearch = q
          ? m.name.toLowerCase().includes(q) ||
            m.category.toLowerCase().includes(q) ||
            m.description.toLowerCase().includes(q)
          : true;
        return byCraving && bySearch;
      }),
    [active, q]
  );

  return (
    <main className="mx-auto max-w-7xl px-6 pt-12 lg:px-10">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
        The Cloud Kitchen
      </p>
      <h1 className="mt-2 max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
        What are you craving today?
      </h1>
      <p className="mt-3 max-w-xl text-bone-dim">
        Tell us the mood — we cook the rest, fresh to order.
      </p>

      <div className="no-scrollbar -mx-5 mt-8 flex gap-3 overflow-x-auto px-5">
        <button
          onClick={() => setActive(null)}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
            active === null
              ? "border-gold bg-gold-sheen text-noir"
              : "border-gold/25 text-bone-dim hover:border-gold hover:text-gold"
          }`}
        >
          Everything
        </button>
        {CRAVINGS.map((c) => (
          <button
            key={c.tag}
            onClick={() => setActive(c.tag)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === c.tag
                ? "border-gold bg-gold-sheen text-noir"
                : "border-gold/25 text-bone-dim hover:border-gold hover:text-gold"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {items.length > 0 ? (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-app border border-gold/15 bg-coal px-8 py-16 text-center">
          <p className="font-display text-2xl text-bone md:text-3xl">
            {query.trim() ? `"${query.trim()}" not found` : "No items match your filters"}
          </p>
          <p className="mx-auto mt-3 max-w-md text-bone-dim">
            {query.trim()
              ? "We couldn't find any dishes matching your search. Try different keywords or browse our complete menu."
              : "Try selecting different category filters or clearing your search."}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setQuery("");
                setActive(null);
              }}
              className="rounded-full bg-gold-sheen px-7 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              See the full menu
            </button>
            <Link
              href="/contact"
              className="font-semibold text-bone underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}

      {/* Closing band — small menu, so we make the tail feel intentional & premium */}
      <section className="mb-4 mt-16 overflow-hidden rounded-app border border-gold/15 bg-coal">
        <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.4fr_1fr] md:items-center md:px-12 md:py-12">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
              Cooked only after you order
            </p>
            <h2 className="mt-3 font-display text-3xl leading-snug text-bone md:text-4xl">
              Can&apos;t decide? Pre-book and we&apos;ll cook it fresh for your slot.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-bone-dim">
              Everything is made to order in small batches — nothing sits under a
              lamp. Add your dishes to cart and proceed to order for pickup or delivery.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="/order"
              className="rounded-full bg-gold-sheen px-8 py-3.5 text-center font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              Order Now
            </Link>
            <Link
              href="/cart"
              className="text-center font-semibold text-bone underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="px-5 pt-10 text-bone-dim">Loading the kitchen…</div>}>
      <MenuInner />
    </Suspense>
  );
}
