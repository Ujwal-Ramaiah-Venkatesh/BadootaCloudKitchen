"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/lib/cart";

const tabs = [
  { href: "/", label: "Kitchen", icon: HomeIcon },
  { href: "/menu", label: "Menu", icon: MenuIcon },
  { href: "/cart", label: "Cart", icon: CartIcon },
  { href: "/bbc-club", label: "BBC", icon: BBCIcon },
  { href: "/about", label: "Story", icon: StoryIcon },
];

export function BottomNav() {
  const pathname = usePathname();
  const count = useCart((s) => s.count());

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/15 bg-noir/95 backdrop-blur-lg md:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)] pt-2">
        {tabs.map((t) => {
          const active =
            t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
          const Icon = t.icon;
          return (
            <li key={t.href} className="flex-1">
              <Link
                href={t.href}
                className={`relative flex flex-col items-center gap-1 rounded-app py-1.5 text-[11px] font-medium transition ${
                  active ? "text-gold" : "text-bone-dim"
                }`}
              >
                <span className="relative">
                  <Icon active={active} />
                  {t.href === "/cart" && count > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-noir">
                      {count}
                    </span>
                  )}
                </span>
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

type IconProps = { active?: boolean };
const stroke = (a?: boolean) => (a ? "#C9A24B" : "#B9AE99");

function HomeIcon({ active }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 11.5 12 4l8 7.5M6 10v9h12v-9" stroke={stroke(active)} strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
function MenuIcon({ active }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 5v14M8 5v6a3 3 0 0 1-3 3M16 5c-1.5 0-2 2-2 5s.5 4 2 4m0 0v5m0-5c1.5 0 2-1 2-4s-.5-5-2-5" stroke={stroke(active)} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CartIcon({ active }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 5h2l1.5 10.5A2 2 0 0 0 9.5 17h7a2 2 0 0 0 2-1.6L20 8H6.5" stroke={stroke(active)} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1.2" fill={stroke(active)} />
      <circle cx="16" cy="20" r="1.2" fill={stroke(active)} />
    </svg>
  );
}
function BBCIcon({ active }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {/* Community/People icon - three people for BBC Club membership */}
      <circle cx="12" cy="7" r="2.5" stroke={stroke(active)} strokeWidth="1.6" />
      <circle cx="6" cy="9" r="2" stroke={stroke(active)} strokeWidth="1.6" />
      <circle cx="18" cy="9" r="2" stroke={stroke(active)} strokeWidth="1.6" />
      <path d="M12 11c-2.5 0-4.5 1.5-4.5 4v4h9v-4c0-2.5-2-4-4.5-4z" stroke={stroke(active)} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3.5 19v-2.5c0-1.5 1-2.5 2.5-2.5M20.5 19v-2.5c0-1.5-1-2.5-2.5-2.5" stroke={stroke(active)} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StoryIcon({ active }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" stroke={stroke(active)} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
