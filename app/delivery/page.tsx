import Link from "next/link";

export default function DeliveryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Delivery Information
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            We Deliver Karnataka Cuisine to Your Door
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone-dim">
            Fast delivery through DoorDash and Uber Eats, plus special free
            delivery on large orders.
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* DoorDash & Uber Eats */}
          <div className="rounded-app border-2 border-gold/30 bg-coal p-8 lg:p-10">
            <h2 className="font-display text-3xl text-bone">
              DoorDash & Uber Eats
            </h2>
            <p className="mt-4 text-bone-dim">
              Order through our delivery partners for fast, reliable service with
              real-time tracking.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://www.doordash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-gold/30 bg-noir p-4 transition hover:border-gold"
              >
                <div>
                  <p className="font-semibold text-bone">DoorDash</p>
                  <p className="mt-1 text-sm text-bone-dim">
                    Track your order live
                  </p>
                </div>
                <span className="text-gold">→</span>
              </a>

              <a
                href="https://www.ubereats.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-gold/30 bg-noir p-4 transition hover:border-gold"
              >
                <div>
                  <p className="font-semibold text-bone">Uber Eats</p>
                  <p className="mt-1 text-sm text-bone-dim">
                    Fast & convenient
                  </p>
                </div>
                <span className="text-gold">→</span>
              </a>
            </div>

            <div className="mt-8 space-y-3 text-sm text-bone-dim">
              <p>✓ Typical delivery: 35-50 minutes</p>
              <p>✓ Real-time order tracking</p>
              <p>✓ Contactless delivery available</p>
              <p>✓ Standard delivery fees apply</p>
            </div>
          </div>

          {/* Free Delivery Special */}
          <div className="rounded-app border-2 border-gold bg-gradient-to-br from-gold/10 via-coal to-noir p-8 lg:p-10">
            <div className="text-5xl">🎉</div>
            <h2 className="mt-4 font-display text-3xl text-bone">
              FREE Delivery Special
            </h2>
            <p className="mt-4 text-lg text-bone">
              Orders <span className="font-bold text-gold">$150 or more</span>{" "}
              get FREE home delivery within 10 miles!
            </p>

            <div className="mt-6 rounded-lg bg-noir/50 p-6">
              <p className="text-sm font-semibold text-bone">How it works:</p>
              <ol className="mt-3 space-y-2 text-sm text-bone-dim">
                <li>1. Place order of $150+ by phone</li>
                <li>2. Give us advance notice (2-3 hours preferred)</li>
                <li>3. We deliver for FREE within 10-mile radius</li>
              </ol>
            </div>

            <a
              href="tel:+14085551234"
              className="mt-6 block w-full rounded-full bg-gold-sheen px-8 py-4 text-center text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              Call to Place Large Order
            </a>

            <p className="mt-4 text-center text-sm text-bone-dim">
              Perfect for parties, family gatherings & events
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="border-y border-gold/10 bg-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            Delivery Coverage Area
          </h2>
          <p className="mt-4 text-center text-bone-dim">
            We deliver to San Jose and surrounding areas
          </p>

          <div className="mt-12 rounded-app border border-gold/20 bg-noir p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl text-gold">
                  Primary Delivery Zone
                </h3>
                <p className="mt-2 text-sm text-bone-dim">
                  Free delivery on $150+ orders:
                </p>
                <ul className="mt-4 space-y-2 text-bone">
                  <li>• Downtown San Jose</li>
                  <li>• Willow Glen</li>
                  <li>• Rose Garden</li>
                  <li>• Japantown</li>
                  <li>• Berryessa</li>
                  <li>• Alum Rock</li>
                  <li>• East San Jose</li>
                  <li>• Campbell (near San Jose)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl text-gold">
                  Extended Area
                </h3>
                <p className="mt-2 text-sm text-bone-dim">
                  Via DoorDash & Uber Eats:
                </p>
                <ul className="mt-4 space-y-2 text-bone">
                  <li>• Santa Clara</li>
                  <li>• Sunnyvale</li>
                  <li>• Milpitas</li>
                  <li>• Cupertino</li>
                  <li>• Mountain View</li>
                  <li>• Los Gatos</li>
                  <li>• Saratoga</li>
                  <li>• Other nearby areas</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-coal p-6">
              <p className="text-center text-sm text-bone">
                <span className="font-semibold text-gold">Note:</span> For areas
                beyond our free delivery zone, delivery is available through
                DoorDash and Uber Eats with their standard fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Details */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
          Delivery Information
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-card border border-gold/20 bg-coal p-6">
            <div className="text-4xl">⏱️</div>
            <h3 className="mt-3 font-display text-xl text-bone">
              Delivery Times
            </h3>
            <p className="mt-2 text-sm text-bone-dim">
              Tuesday–Sunday during our operating hours: Lunch (12-3 PM) and
              Dinner (6-9:30 PM). Closed Monday.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6">
            <div className="text-4xl">📦</div>
            <h3 className="mt-3 font-display text-xl text-bone">Packaging</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Food packed securely in eco-friendly containers to ensure freshness
              and temperature retention during transit.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6">
            <div className="text-4xl">🌡️</div>
            <h3 className="mt-3 font-display text-xl text-bone">
              Temperature Control
            </h3>
            <p className="mt-2 text-sm text-bone-dim">
              Hot food stays hot, cold items stay cold. Special packaging for
              biryani to preserve texture and flavor.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6">
            <div className="text-4xl">💵</div>
            <h3 className="mt-3 font-display text-xl text-bone">
              Minimum Orders
            </h3>
            <p className="mt-2 text-sm text-bone-dim">
              No minimum for DoorDash/Uber Eats. $150 minimum for our free home
              delivery special.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6">
            <div className="text-4xl">🚫</div>
            <h3 className="mt-3 font-display text-xl text-bone">
              Contactless Option
            </h3>
            <p className="mt-2 text-sm text-bone-dim">
              Request contactless delivery through DoorDash or Uber Eats for
              safe, no-contact drop-off.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-6">
            <div className="text-4xl">💳</div>
            <h3 className="mt-3 font-display text-xl text-bone">Payment</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Credit cards, mobile pay through delivery apps. Cash or card
              accepted for direct deliveries.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            Delivery FAQ
          </h2>

          <div className="mt-12 space-y-4">
            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                What's the delivery time estimate?
              </summary>
              <p className="mt-3 text-bone-dim">
                Through DoorDash/Uber Eats: typically 35-50 minutes depending on
                your location and traffic. For our free delivery special: 45-60
                minutes with advance notice preferred.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                Do you deliver on Monday?
              </summary>
              <p className="mt-3 text-bone-dim">
                No. We are CLOSED on Mondays. Delivery is available
                Tuesday–Sunday during lunch (12-3 PM) and dinner (6-9:30 PM)
                hours only.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                How do I track my delivery order?
              </summary>
              <p className="mt-3 text-bone-dim">
                DoorDash and Uber Eats orders can be tracked in real-time through
                their apps. You'll see when your food is being prepared, picked
                up, and delivered.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                What if there's an issue with my delivery?
              </summary>
              <p className="mt-3 text-bone-dim">
                For DoorDash/Uber Eats orders, contact their customer service
                through the app. For direct deliveries, call us immediately at
                (408) 555-1234 and we'll make it right.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                Do you deliver to businesses/offices?
              </summary>
              <p className="mt-3 text-bone-dim">
                Yes! We deliver to businesses, offices, and corporate locations.
                For large office orders ($150+), call us for free delivery and we
                can accommodate special timing requests.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                Can I schedule a delivery in advance?
              </summary>
              <p className="mt-3 text-bone-dim">
                Yes! For large orders with our free delivery special, advance
                scheduling (2-3 hours ahead) is actually preferred. Call us to
                schedule.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/10 px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-2xl text-bone md:text-3xl">
          Ready to Order?
        </h2>
        <p className="mt-3 text-bone-dim">
          Get authentic Karnataka cuisine delivered to your door
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/order"
            className="rounded-full bg-gold-sheen px-8 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
          >
            Order Now
          </Link>
          <Link
            href="/menu"
            className="rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10"
          >
            View Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
