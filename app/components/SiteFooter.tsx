import Link from "next/link";
import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/badoota/";
const FACEBOOK = "https://www.facebook.com/badoota/";
const YELP = "https://www.yelp.com/biz/badoota-san-jose";
const ADDRESS = "336 Commercial Street, San Jose, CA 95112";
const MAPS = "https://maps.google.com/?q=336+Commercial+Street+San+Jose+CA+95112";
const PHONE = "+14085551234"; // Replace with actual phone
const PHONE_DISPLAY = "(408) 555-1234"; // Replace with actual phone

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-coal text-bone">
      {/* Gold hairline finishing touch */}
      <div className="h-px w-full bg-gold-sheen/50" />

      {/* Newsletter Subscribe Section */}
      <div className="border-b border-gold/10 bg-gradient-to-br from-coal via-noir to-coal">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10">
          <h2 className="font-display text-3xl text-bone md:text-4xl">
            Subscribe to Receive Our Specials
          </h2>
          <p className="mt-4 text-bone-dim">
            Get exclusive offers, new menu items, and updates delivered to your
            inbox.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full rounded-full border border-gold/30 bg-noir/50 px-6 py-3 text-bone placeholder:text-bone-dim/60 focus:border-gold focus:outline-none sm:w-80"
            />
            <button
              type="submit"
              className="rounded-full bg-gold-sheen px-8 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-auto overflow-hidden rounded-lg bg-white px-4 py-2 shadow-lg ring-2 ring-gold/10">
                <Image
                  src="/logo.avif"
                  alt="Badoota"
                  width={120}
                  height={56}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gold-sheen">Badoota</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-bone-dim">
                  Bengaluru Food
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-dim">
              Authentic Karnataka cuisine in San Jose. Traditional Donne Biryani
              and bold flavors from Bengaluru, made with the finest ingredients.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-noir/40 text-bone transition hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-noir/40 text-bone transition hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={YELP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gold/30 bg-noir/40 px-4 py-2 text-sm font-medium text-bone transition hover:border-gold hover:text-gold"
              >
                Yelp
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold/70">
              Explore
            </p>
            <ul className="space-y-3 text-sm text-bone-dim">
              <li>
                <Link href="/menu" className="transition hover:text-gold">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/order" className="transition hover:text-gold">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/bbc-club" className="transition hover:text-gold">
                  BBC Club
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="transition hover:text-gold">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="transition hover:text-gold">
                  Licensing Opportunity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Find us */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold/70">
              Find us
            </p>
            <address className="space-y-3 text-sm not-italic text-bone-dim">
              <p>
                336 Commercial Street
                <br />
                San Jose, CA 95112
              </p>
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="inline-block transition hover:text-gold"
              >
                View on map →
              </a>
              <p className="pt-1">
                <span className="text-bone">Tue–Sun</span>
                <br />
                Lunch: 12:00 PM – 3:00 PM
                <br />
                Dinner: 6:00 PM – 9:30 PM
              </p>
              <p className="font-semibold text-gold">CLOSED MONDAY</p>
            </address>
          </div>

          {/* Reach us */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold/70">
              Order &amp; reach us
            </p>
            <p className="text-sm text-bone-dim">
              Order for pickup or delivery
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-3 block font-display text-xl text-bone transition hover:text-gold"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/order"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-sheen px-5 py-2.5 text-sm font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-bone-dim/60 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Badoota Cloud Kitchen · All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
