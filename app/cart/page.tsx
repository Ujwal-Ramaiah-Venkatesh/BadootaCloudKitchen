"use client";

import Link from "next/link";
import { useCart } from "@/app/lib/cart";
import { DishPhoto } from "@/app/components/DishPhoto";

export default function CartPage() {
  const { lines, add, remove, total, clear } = useCart();
  const items = Object.values(lines);

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
        <p className="font-display text-3xl text-bone">Your cart is empty</p>
        <p className="mt-3 text-bone-dim">
          Nothing here yet — let&apos;s fix that with something warm.
        </p>
        <Link
          href="/menu"
          className="mt-6 rounded-full bg-gold-sheen px-7 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
        >
          Browse the menu
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 pt-10">
      <h1 className="font-display text-4xl text-bone">Your order</h1>

      <ul className="mt-8 divide-y divide-gold/10">
        {items.map(({ item, qty }) => (
          <li key={item.id} className="flex items-center gap-4 py-4">
            <div className="h-16 w-16 overflow-hidden rounded-xl">
              <DishPhoto src={item.image} name={item.name} className="h-full w-full" />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg text-bone">{item.name}</p>
              <p className="text-sm text-bone-dim">${item.priceUsd} each</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => remove(item.id)}
                className="h-9 w-9 rounded-full border border-gold/25 text-bone transition hover:border-gold hover:text-gold"
                aria-label={`Remove one ${item.name}`}
              >
                −
              </button>
              <span className="w-6 text-center font-semibold text-bone">{qty}</span>
              <button
                onClick={() => add(item)}
                className="h-9 w-9 rounded-full border border-gold/25 text-bone transition hover:border-gold hover:text-gold"
                aria-label={`Add one ${item.name}`}
              >
                +
              </button>
            </div>
            <p className="w-16 text-right font-display text-lg text-gold-sheen">
              ${item.priceUsd * qty}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-6">
        <span className="text-lg text-bone-dim">Total</span>
        <span className="font-display text-3xl text-gold-sheen">${total()}</span>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/order"
          className="rounded-full bg-gold-sheen px-7 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
        >
          Proceed to Order · ${total()}
        </Link>
        <Link
          href="/menu"
          className="rounded-full border-2 border-gold/30 px-6 py-3 font-semibold text-bone transition hover:border-gold hover:bg-gold/10"
        >
          Continue Shopping
        </Link>
        <button
          onClick={clear}
          className="rounded-full px-4 py-3 font-semibold text-bone-dim/70 transition hover:text-gold"
        >
          Clear cart
        </button>
      </div>
      <p className="mt-3 text-xs text-bone-dim/60">
        Demo cart - proceed to Order page to see pickup and delivery options.
      </p>
    </main>
  );
}
