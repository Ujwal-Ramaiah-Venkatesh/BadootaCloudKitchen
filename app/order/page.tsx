import Link from "next/link";

export default function OrderOnlinePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Order Now
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            Order Badoota Your Way
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone-dim">
            Choose the most convenient way to enjoy authentic Karnataka cuisine.
            Pickup, DoorDash, or Uber Eats — we've got you covered.
          </p>
        </div>
      </section>

      {/* Hours Notice */}
      <section className="border-y border-gold/20 bg-coal">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center">
          <p className="font-display text-2xl text-bone">
            Tuesday – Sunday | Lunch: 12:00 PM – 3:00 PM | Dinner: 6:00 PM –
            9:30 PM
          </p>
          <p className="mt-3 font-semibold text-gold">⚠️ CLOSED MONDAY</p>
        </div>
      </section>

      {/* Ordering Options */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Pickup */}
          <div className="rounded-app border-2 border-gold/30 bg-gradient-to-br from-coal via-noir to-coal p-8 lg:p-10">
            <div className="text-6xl">📞</div>
            <h2 className="mt-6 font-display text-3xl text-bone">
              Order for Pickup
            </h2>
            <p className="mt-4 text-bone-dim">
              Call us directly or place your order online. Your food will be
              fresh and ready when you arrive.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+14085551234"
                className="block w-full rounded-full bg-gold-sheen px-8 py-4 text-center text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
              >
                Call (408) 555-1234
              </a>

              <Link
                href="/menu"
                className="block w-full rounded-full border-2 border-gold px-8 py-4 text-center text-lg font-semibold text-bone transition hover:bg-gold/10"
              >
                Browse Menu
              </Link>
            </div>

            <div className="mt-8 space-y-2 text-sm text-bone-dim">
              <p>✓ Call ahead to order</p>
              <p>✓ Pay when you pick up</p>
              <p>✓ Usually ready in 25-35 minutes</p>
              <p>✓ BBC Club members get 20% off</p>
            </div>

            <div className="mt-6 rounded-lg bg-noir/50 p-4">
              <p className="text-sm font-semibold text-bone">Pickup Address:</p>
              <p className="mt-1 text-sm text-bone-dim">
                336 Commercial Street
                <br />
                San Jose, CA 95112
              </p>
              <a
                href="https://maps.google.com/?q=326+Commercial+Street+San+Jose+CA+95112"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-gold hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* DoorDash */}
          <div className="rounded-app border-2 border-gold/30 bg-gradient-to-br from-coal via-noir to-coal p-8 lg:p-10">
            <div className="text-6xl">🚗</div>
            <h2 className="mt-6 font-display text-3xl text-bone">DoorDash</h2>
            <p className="mt-4 text-bone-dim">
              Fast delivery through DoorDash. Track your order in real-time from
              kitchen to your door.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://www.doordash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-gold-sheen px-8 py-4 text-center text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
              >
                Order on DoorDash
              </a>
            </div>

            <div className="mt-8 space-y-2 text-sm text-bone-dim">
              <p>✓ Fast delivery to your location</p>
              <p>✓ Real-time order tracking</p>
              <p>✓ Contactless delivery available</p>
              <p>✓ DoorDash fees apply</p>
            </div>

            <div className="mt-6 rounded-lg bg-noir/50 p-4">
              <p className="text-sm font-semibold text-bone">
                Delivery Estimate:
              </p>
              <p className="mt-1 text-sm text-bone-dim">
                Typically 35-50 minutes depending on your location and current
                traffic.
              </p>
            </div>
          </div>

          {/* Uber Eats */}
          <div className="rounded-app border-2 border-gold/30 bg-gradient-to-br from-coal via-noir to-coal p-8 lg:p-10">
            <div className="text-6xl">🍽️</div>
            <h2 className="mt-6 font-display text-3xl text-bone">Uber Eats</h2>
            <p className="mt-4 text-bone-dim">
              Convenient delivery via Uber Eats. Order through the app and enjoy
              Karnataka cuisine at home.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://www.ubereats.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full bg-gold-sheen px-8 py-4 text-center text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
              >
                Order on Uber Eats
              </a>
            </div>

            <div className="mt-8 space-y-2 text-sm text-bone-dim">
              <p>✓ Reliable delivery service</p>
              <p>✓ Track your driver live</p>
              <p>✓ Easy reordering of favorites</p>
              <p>✓ Uber Eats fees apply</p>
            </div>

            <div className="mt-6 rounded-lg bg-noir/50 p-4">
              <p className="text-sm font-semibold text-bone">
                Delivery Estimate:
              </p>
              <p className="mt-1 text-sm text-bone-dim">
                Typically 35-50 minutes depending on your location and current
                traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Delivery Promo */}
      <section className="bg-gradient-to-br from-gold/10 via-coal to-noir px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-app border-2 border-gold bg-coal p-8 text-center md:p-12">
          <div className="text-6xl">🎉</div>
          <h2 className="mt-6 font-display text-3xl text-bone md:text-4xl">
            Free Home Delivery Special
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-bone-dim">
            Order <span className="font-semibold text-gold">$150 or more</span>{" "}
            and get <span className="font-semibold text-gold">FREE delivery</span>{" "}
            within a 10-mile radius. Just give us advance notice when ordering!
          </p>
          <a
            href="tel:+14085551234"
            className="mt-8 inline-block rounded-full bg-gold-sheen px-10 py-4 text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
          >
            Call to Place Large Order
          </a>
          <p className="mt-4 text-sm text-bone-dim">
            Perfect for family gatherings, parties, and events
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
          Payment Methods Accepted
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-card border border-gold/20 bg-coal p-6 text-center">
            <div className="text-4xl">💳</div>
            <p className="mt-3 font-medium text-bone">Credit Cards</p>
            <p className="mt-1 text-sm text-bone-dim">Visa, Mastercard, Amex</p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6 text-center">
            <div className="text-4xl">💰</div>
            <p className="mt-3 font-medium text-bone">Cash</p>
            <p className="mt-1 text-sm text-bone-dim">For pickup orders</p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6 text-center">
            <div className="text-4xl">📱</div>
            <p className="mt-3 font-medium text-bone">Mobile Pay</p>
            <p className="mt-1 text-sm text-bone-dim">Apple Pay, Google Pay</p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6 text-center">
            <div className="text-4xl">🔒</div>
            <p className="mt-3 font-medium text-bone">Secure</p>
            <p className="mt-1 text-sm text-bone-dim">All payments encrypted</p>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="border-t border-gold/10 bg-coal px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-2xl text-bone md:text-3xl">
          Questions About Ordering?
        </h2>
        <p className="mt-3 text-bone-dim">
          We're here to help! Give us a call or check our contact page.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+14085551234"
            className="rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10"
          >
            Call Us
          </a>
          <Link
            href="/contact"
            className="rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10"
          >
            Contact Page
          </Link>
        </div>
      </section>
    </main>
  );
}
