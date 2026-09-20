"use client";

import type { MenuItem } from "@/app/data/menu";
import { useCart } from "@/app/lib/cart";
import { DishPhoto } from "./DishPhoto";

const spiceLabel: Record<MenuItem["spiceLevel"], string> = {
  mild: "Mild",
  medium: "Medium",
  hot: "Hot",
  "extra-hot": "Extra Hot",
};

export function MenuCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const remove = useCart((s) => s.remove);
  const lines = useCart((s) => s.lines);

  const cartItem = lines[item.id];
  const quantity = cartItem?.qty || 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-gold/15 bg-coal shadow-soft transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
      <div className="relative aspect-[4/3] overflow-hidden">
        <DishPhoto
          src={item.image}
          video={item.video}
          autoPlayInView
          name={item.name}
          className="h-full w-full transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-sheen px-3 py-1 text-xs font-semibold text-noir shadow">
            {item.badge}
          </span>
        )}
        <span
          className={`absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-sm border bg-noir ${
            item.isVeg ? "border-leaf" : "border-gold"
          }`}
          title={item.isVeg ? "Veg" : "Non-veg"}
        >
          <span
            className={`h-3 w-3 rounded-full ${
              item.isVeg ? "bg-leaf" : "bg-gold"
            }`}
          />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-gold/80">
          {item.category}
        </p>
        <h3 className="mt-1 font-display text-xl text-bone">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-dim">
          {item.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-bone-dim">
          <span>{spiceLabel[item.spiceLevel]} spice</span>
          <span aria-hidden>·</span>
          <span>{item.prepMinutes} min</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <span className="font-display text-2xl text-gold-sheen">${item.priceUsd}</span>
            {item.bbcPriceUsd && item.bbcPriceUsd > 0 && (
              <p className="mt-0.5 text-xs text-bone-dim">
                BBC: <span className="text-gold">${item.bbcPriceUsd}</span>
              </p>
            )}
          </div>

          {quantity === 0 ? (
            <button
              onClick={() => add(item)}
              className="shrink-0 rounded-full border border-gold/40 bg-gold-sheen px-5 py-2.5 text-sm font-semibold text-noir transition hover:brightness-110 active:scale-95"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => remove(item.id)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-noir text-gold transition hover:border-gold hover:bg-gold/10 active:scale-95"
                aria-label={`Remove one ${item.name}`}
              >
                <span className="text-lg leading-none">−</span>
              </button>
              <span className="min-w-[2rem] text-center font-display text-lg font-semibold text-gold-sheen">
                {quantity}
              </span>
              <button
                onClick={() => add(item)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-gold-sheen text-noir transition hover:brightness-110 active:scale-95"
                aria-label={`Add one more ${item.name}`}
              >
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
