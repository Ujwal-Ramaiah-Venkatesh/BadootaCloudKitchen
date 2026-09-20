import Link from "next/link";

const ADDRESS = "336 Commercial Street, San Jose, CA 95112";
const PHONE = "+14085551234";
const PHONE_DISPLAY = "(408) 555-1234";
const EMAIL = "info@badoota.biz";
const MAPS_URL = "https://maps.google.com/?q=336+Commercial+Street+San+Jose+CA+95112";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Get in Touch
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            Visit or Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone-dim">
            Come visit us in San Jose or reach out with questions.
          </p>
        </div>
      </section>

      {/* Simple Contact Info */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-gold">Address</p>
            <p className="mt-2 text-xl text-bone">{ADDRESS}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-gold">Phone</p>
            <a href={`tel:${PHONE}`} className="mt-2 block text-xl text-bone hover:text-gold">
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-gold">Email</p>
            <a href={`mailto:${EMAIL}`} className="mt-2 block text-xl text-bone hover:text-gold">
              {EMAIL}
            </a>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-gold">Hours</p>
            <p className="mt-2 text-bone">Tuesday – Sunday</p>
            <p className="text-bone-dim">12:00 PM – 3:00 PM | 6:00 PM – 9:30 PM</p>
            <p className="mt-2 font-semibold text-gold">CLOSED MONDAY</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-gold-sheen px-8 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
          >
            View Menu
          </Link>
          <Link
            href="/order"
            className="rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10"
          >
            Order Now
          </Link>
        </div>
      </section>
    </main>
  );
}
