import Link from "next/link";
import Image from "next/image";
import { CRAVINGS, getFeaturedItems } from "./data/menu";
import { MenuCard } from "./components/MenuCard";

export default function Home() {
  const featured = getFeaturedItems(6);

  return (
    <main>
      {/* HERO — Authentic Karnataka Donne Biryani heritage */}
      <section className="relative isolate w-full overflow-hidden">
        {/* Hero background image — Badoota's signature Chicken Chops */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/menu/specials/chicken-chops.avif')",
          }}
          aria-hidden
        />

        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-noir/95 via-noir/80 to-noir/90"
          aria-hidden
        />

        {/* Vignette effect for focus */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(11,10,9,0.9)_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center md:min-h-[92vh]">
          <p className="animate-rise whitespace-nowrap font-display text-[0.7rem] uppercase tracking-[0.2em] text-gold sm:text-sm sm:tracking-[0.35em] md:text-base md:tracking-[0.4em]">
            Bengaluru Food · San Jose, California
          </p>

          <h1 className="animate-rise mt-6 max-w-4xl font-display text-4xl leading-[1.05] text-bone sm:text-5xl md:text-6xl xl:text-7xl">
            Authentic{" "}
            <span className="text-gold-sheen italic">Donne Biryani</span> in San
            Jose
          </h1>

          <p className="animate-rise mx-auto mt-7 max-w-2xl text-base leading-relaxed text-bone-dim sm:text-lg">
            Experience the authentic flavors of Karnataka cuisine. Traditional
            Donne Biryani cooked in leaf cups, bold spices, and recipes passed
            down through generations.
          </p>

          {/* Craving discovery — Karnataka cuisine categories */}
          <div className="animate-rise mt-10 w-full">
            <p className="mb-4 text-sm font-medium text-bone">
              What are you craving today?
            </p>

            {/* Mobile: Horizontal scroll */}
            <div className="block sm:hidden">
              <div className="relative -mx-6">
                {/* Left fade hint */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-noir to-transparent" />
                {/* Right fade hint */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-noir to-transparent" />

                <div
                  className="flex gap-3 overflow-x-auto px-6 pb-3"
                  style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#C9A24B #0B0A09'
                  }}
                >
                  {CRAVINGS.map((c) => (
                    <Link
                      key={c.tag}
                      href={`/menu?c=${c.tag}`}
                      className="inline-block shrink-0 whitespace-nowrap rounded-full border border-gold/40 bg-noir/50 px-5 py-2.5 text-sm font-medium text-bone backdrop-blur transition active:scale-95"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Wrapped buttons */}
            <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {CRAVINGS.map((c) => (
                <Link
                  key={c.tag}
                  href={`/menu?c=${c.tag}`}
                  className="rounded-full border border-gold/40 bg-noir/50 px-5 py-2.5 text-sm font-medium text-bone backdrop-blur transition hover:border-gold hover:bg-coal hover:text-gold"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/order"
              className="rounded-full bg-gold-sheen px-9 py-4 text-base font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              Order for Pickup
            </Link>
            <Link
              href="/menu"
              className="rounded-full border-2 border-gold px-9 py-4 text-base font-semibold text-bone transition hover:bg-gold/10"
            >
              View Full Menu
            </Link>
          </div>

          <p className="animate-rise mt-6 text-sm text-bone-dim sm:text-base">
            Tuesday–Sunday • Lunch & Dinner •{" "}
            <Link href="/order" className="text-gold hover:underline">
              DoorDash
            </Link>{" "}
            &{" "}
            <Link href="/order" className="text-gold hover:underline">
              Uber Eats
            </Link>
          </p>
        </div>
      </section>

      {/* Trust signals — Social proof & authenticity */}
      <section className="border-y border-gold/10 bg-coal">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-center md:grid-cols-4 lg:px-10">
          {[
            ["Authentic", "Karnataka Cuisine"],
            ["Traditional", "Donne Biryani"],
            ["Fresh", "Daily Preparation"],
            ["20% Off", "BBC Club Members"],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="font-display text-3xl text-gold-sheen">{big}</p>
              <p className="mt-1 text-sm text-bone-dim">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured dishes — Bestsellers */}
      <section className="mx-auto max-w-7xl px-6 pt-16 lg:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
              Customer Favorites
            </p>
            <h2 className="mt-2 font-display text-3xl text-bone md:text-4xl">
              Dishes people keep ordering
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden font-semibold text-bone underline decoration-gold decoration-2 underline-offset-4 hover:text-gold md:block"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10 md:hidden"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Donne Biryani Story */}
      <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 rounded-app border border-gold/15 bg-coal px-8 py-12 md:grid-cols-2 md:items-center md:px-12">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
              Our Signature
            </p>
            <h2 className="mt-3 font-display text-3xl leading-snug text-bone md:text-4xl">
              Donne Biryani — A Karnataka Tradition
            </h2>
          </div>
          <div className="text-bone-dim">
            <p className="leading-relaxed">
              Named after the traditional leaf cup (donne) made from dried areca
              nut palm leaves, our Donne Biryani is a signature dish of
              Karnataka known for its bold flavors and fragrant aroma. We
              prepare each order using only the freshest ingredients and
              authentic spices, bringing the streets of Bengaluru to San Jose.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block font-semibold text-gold underline decoration-gold decoration-2 underline-offset-4 hover:brightness-110"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* BBC Club CTA */}
      <section className="mx-auto mt-20 max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-app border border-gold/20 bg-gradient-to-br from-coal via-coal-2 to-coal px-8 py-12 text-center md:px-16 md:py-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Badoota Bengaluru Club
          </p>
          <h2 className="mt-3 font-display text-3xl leading-snug text-bone md:text-4xl">
            Save 20% on Every Order
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-bone-dim">
            Join the BBC Club and enjoy exclusive member pricing on our entire
            menu. Plus get weekly free appetizers and special perks.
          </p>
          <Link
            href="/bbc-club"
            className="mt-8 inline-block rounded-full bg-gold-sheen px-9 py-4 text-base font-semibold text-noir shadow-gold transition hover:brightness-110"
          >
            Join BBC Club
          </Link>
        </div>
      </section>

      {/* Quick ordering options */}
      <section className="border-t border-gold/10 bg-coal">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            Order Your Way
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Link
              href="/order"
              className="group rounded-card border border-gold/20 bg-noir p-8 text-center transition hover:border-gold/40 hover:bg-coal"
            >
              <div className="text-4xl">📞</div>
              <h3 className="mt-4 font-display text-xl text-bone">
                Order for Pickup
              </h3>
              <p className="mt-2 text-sm text-bone-dim">
                Call ahead or order online for pickup
              </p>
            </Link>

            <a
              href="https://www.doordash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-card border border-gold/20 bg-noir p-8 text-center transition hover:border-gold/40 hover:bg-coal"
            >
              <div className="text-4xl">🚗</div>
              <h3 className="mt-4 font-display text-xl text-bone">DoorDash</h3>
              <p className="mt-2 text-sm text-bone-dim">
                Fast delivery to your door
              </p>
            </a>

            <a
              href="https://www.ubereats.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-card border border-gold/20 bg-noir p-8 text-center transition hover:border-gold/40 hover:bg-coal"
            >
              <div className="text-4xl">🍽️</div>
              <h3 className="mt-4 font-display text-xl text-bone">
                Uber Eats
              </h3>
              <p className="mt-2 text-sm text-bone-dim">
                Convenient delivery service
              </p>
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-bone-dim">
            Free delivery on orders $150+ within 10 miles (with advance notice)
          </p>
        </div>
      </section>
    </main>
  );
}
