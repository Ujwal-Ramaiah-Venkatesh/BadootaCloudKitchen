import Link from "next/link";

export default function BBCClubPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Badoota Bengaluru Club
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            Save 20% on Every Order
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone-dim">
            Join the BBC Club and enjoy exclusive member pricing across our
            entire menu. Plus get weekly free appetizers, early access to new
            dishes, and special perks.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
          Membership Benefits
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Benefit 1 */}
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">💰</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              20% Off Everything
            </h3>
            <p className="mt-3 text-bone-dim">
              Get 20% discount on every single item on our menu. No exceptions,
              no exclusions. From Donne Biryani to appetizers to family packs.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🎁</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Weekly Free Appetizer
            </h3>
            <p className="mt-3 text-bone-dim">
              Choose one complimentary appetizer (8oz) every week with any
              order. Try our Babycorn Kababs, Chicken Kababs, or any veggie
              appetizer on us.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">⭐</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Priority Access
            </h3>
            <p className="mt-3 text-bone-dim">
              Be the first to try new menu items, seasonal specials, and limited
              dishes before they're available to the public.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🎂</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Birthday Special
            </h3>
            <p className="mt-3 text-bone-dim">
              Enjoy a special birthday treat on your special day. We celebrate
              our BBC family!
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">📧</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Exclusive Updates
            </h3>
            <p className="mt-3 text-bone-dim">
              Get member-only emails with special promotions, recipes, and
              behind-the-scenes content from our kitchen.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🎉</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Special Events
            </h3>
            <p className="mt-3 text-bone-dim">
              Invitations to member-exclusive events, tasting sessions, and
              Karnataka cuisine celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Examples */}
      <section className="bg-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            See Your Savings
          </h2>
          <p className="mt-4 text-center text-bone-dim">
            Here's how much you save with BBC Club membership:
          </p>

          <div className="mt-12 overflow-hidden rounded-card border border-gold/20 bg-noir">
            <table className="w-full">
              <thead className="bg-coal">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold">
                    Item
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gold">
                    Regular
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gold">
                    BBC Member
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gold">
                    You Save
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                <tr>
                  <td className="px-6 py-4 text-bone">Chicken Donne Biryani</td>
                  <td className="px-6 py-4 text-right text-bone-dim">$17.99</td>
                  <td className="px-6 py-4 text-right font-semibold text-gold">
                    $14.39
                  </td>
                  <td className="px-6 py-4 text-right text-bone">$3.60</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-bone">Mutton Donne Biryani</td>
                  <td className="px-6 py-4 text-right text-bone-dim">$18.99</td>
                  <td className="px-6 py-4 text-right font-semibold text-gold">
                    $15.19
                  </td>
                  <td className="px-6 py-4 text-right text-bone">$3.80</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-bone">Chicken 65</td>
                  <td className="px-6 py-4 text-right text-bone-dim">$16.99</td>
                  <td className="px-6 py-4 text-right font-semibold text-gold">
                    $13.59
                  </td>
                  <td className="px-6 py-4 text-right text-bone">$3.40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-bone">Family Pack (Chicken)</td>
                  <td className="px-6 py-4 text-right text-bone-dim">$39.99</td>
                  <td className="px-6 py-4 text-right font-semibold text-gold">
                    $31.99
                  </td>
                  <td className="px-6 py-4 text-right text-bone">$8.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-sm text-bone-dim">
            * Plus get weekly free appetizers valued at $14.99 each week!
          </p>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="rounded-app border border-gold/20 bg-coal p-8 md:p-12">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            Join BBC Club Today
          </h2>
          <p className="mt-4 text-center text-bone-dim">
            Fill out the form below and we'll contact you with membership
            details.
          </p>

          <form className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-bone">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-bone">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-bone">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-bone">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="birthday" className="block text-sm font-medium text-bone">
                Birthday (Optional - for birthday special)
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="preferences" className="block text-sm font-medium text-bone">
                Dietary Preferences / Favorite Dishes (Optional)
              </label>
              <textarea
                id="preferences"
                name="preferences"
                rows={3}
                className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                placeholder="Let us know your preferences..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold-sheen px-8 py-4 text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
            >
              Sign Me Up for BBC Club
            </button>

            <p className="text-center text-sm text-bone-dim">
              Questions? <Link href="/contact" className="text-gold hover:underline">Contact us</Link> or
              call us at (408) 555-1234
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">
            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                How much does BBC Club membership cost?
              </summary>
              <p className="mt-3 text-bone-dim">
                Please contact us for current membership pricing. We offer
                monthly and annual plans with significant savings on annual
                membership.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                Can I use my discount for online orders?
              </summary>
              <p className="mt-3 text-bone-dim">
                Yes! Your BBC Club discount applies to all orders - pickup,
                DoorDash, and Uber Eats. Just provide your membership number
                when ordering.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                How do I claim my weekly free appetizer?
              </summary>
              <p className="mt-3 text-bone-dim">
                Simply mention it when placing your order. You can choose any
                8oz appetizer from our menu once per week with any purchase.
              </p>
            </details>

            <details className="group rounded-lg border border-gold/20 bg-noir p-6">
              <summary className="cursor-pointer font-semibold text-bone">
                Can I share my membership with family?
              </summary>
              <p className="mt-3 text-bone-dim">
                Membership is per household. All family members at the same
                address can enjoy the benefits.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
