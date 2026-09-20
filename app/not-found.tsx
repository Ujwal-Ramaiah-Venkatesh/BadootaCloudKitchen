import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-6xl text-gold-sheen">404</p>
      <h1 className="mt-4 font-display text-3xl text-bone">
        This dish isn&apos;t on the menu.
      </h1>
      <p className="mt-3 text-bone-dim">
        The page you&apos;re looking for wandered out of the kitchen.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-gold-sheen px-7 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
      >
        Back home
      </Link>
    </main>
  );
}
