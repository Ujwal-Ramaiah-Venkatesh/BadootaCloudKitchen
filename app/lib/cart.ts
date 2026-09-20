"use client";

import { create } from "zustand";
import type { MenuItem } from "@/app/data/menu";

export type CartLine = { item: MenuItem; qty: number };

type CartState = {
  lines: Record<string, CartLine>;
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>((set, get) => ({
  lines: {},
  add: (item) =>
    set((s) => {
      const existing = s.lines[item.id];
      return {
        lines: {
          ...s.lines,
          [item.id]: { item, qty: existing ? existing.qty + 1 : 1 },
        },
      };
    }),
  remove: (id) =>
    set((s) => {
      const existing = s.lines[id];
      if (!existing) return s;
      if (existing.qty <= 1) {
        const { [id]: _, ...rest } = s.lines;
        return { lines: rest };
      }
      return { lines: { ...s.lines, [id]: { ...existing, qty: existing.qty - 1 } } };
    }),
  clear: () => set({ lines: {} }),
  count: () => Object.values(get().lines).reduce((n, l) => n + l.qty, 0),
  total: () =>
    Object.values(get().lines).reduce((n, l) => n + l.qty * l.item.priceUsd, 0),
}));
