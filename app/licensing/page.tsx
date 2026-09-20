import Link from "next/link";

export default function LicensingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Partnership Opportunity
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            Bring Badoota to Your City
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone-dim">
            Join the Badoota family and bring authentic Karnataka cuisine to your
            community. We provide everything you need to succeed with our proven
            model and ongoing support.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
          Why Partner with Badoota?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🎯</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Proven Model
            </h3>
            <p className="mt-3 text-bone-dim">
              Our authentic Karnataka cuisine concept has a loyal customer base
              and proven track record in the San Jose market.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">👨‍🍳</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Authentic Recipes
            </h3>
            <p className="mt-3 text-bone-dim">
              Get access to our complete menu of traditional Karnataka recipes,
              including our signature Donne Biryani preparation methods.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">📚</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Training & Support
            </h3>
            <p className="mt-3 text-bone-dim">
              Comprehensive training on cooking techniques, operations, customer
              service, and business management.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🎨</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Brand & Marketing
            </h3>
            <p className="mt-3 text-bone-dim">
              Established brand identity, marketing materials, social media
              playbook, and ongoing marketing support.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🔧</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Operational Systems
            </h3>
            <p className="mt-3 text-bone-dim">
              Proven workflows, vendor relationships, menu engineering, inventory
              management, and quality control systems.
            </p>
          </div>

          <div className="rounded-card border border-gold/20 bg-coal p-8">
            <div className="text-5xl">🤝</div>
            <h3 className="mt-4 font-display text-2xl text-bone">
              Ongoing Partnership
            </h3>
            <p className="mt-3 text-bone-dim">
              Continuous support, menu updates, seasonal specials, and access to
              our community of partner operators.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="bg-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            What We're Looking For
          </h2>

          <div className="mt-12 space-y-6">
            <div className="rounded-lg border border-gold/20 bg-noir p-6 md:p-8">
              <h3 className="font-display text-xl text-gold">
                Passion for Food & Culture
              </h3>
              <p className="mt-2 text-bone-dim">
                We seek partners who appreciate authentic cuisine and are excited
                about bringing Karnataka food culture to their community. Food
                service experience is helpful but not required — we'll train you.
              </p>
            </div>

            <div className="rounded-lg border border-gold/20 bg-noir p-6 md:p-8">
              <h3 className="font-display text-xl text-gold">
                Business Commitment
              </h3>
              <p className="mt-2 text-bone-dim">
                This is a hands-on business opportunity. Successful partners are
                actively involved in daily operations, especially in the early
                months.
              </p>
            </div>

            <div className="rounded-lg border border-gold/20 bg-noir p-6 md:p-8">
              <h3 className="font-display text-xl text-gold">
                Financial Readiness
              </h3>
              <p className="mt-2 text-bone-dim">
                Initial investment covers licensing fees, equipment, initial
                inventory, and working capital. We'll provide detailed financial
                projections during the discovery process.
              </p>
            </div>

            <div className="rounded-lg border border-gold/20 bg-noir p-6 md:p-8">
              <h3 className="font-display text-xl text-gold">
                Right Location
              </h3>
              <p className="mt-2 text-bone-dim">
                We look for markets with growing populations, appreciation for
                authentic ethnic cuisine, and proximity to South Asian or
                food-enthusiast communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
          Partnership Process
        </h2>
        <p className="mt-4 text-center text-bone-dim">
          From initial inquiry to grand opening, we guide you every step
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-2xl font-bold text-noir">
              1
            </div>
            <h3 className="mt-4 font-display text-xl text-bone">Inquiry</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Submit the form below and we'll send you our partnership information
              package.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-2xl font-bold text-noir">
              2
            </div>
            <h3 className="mt-4 font-display text-xl text-bone">Discovery</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Initial calls to discuss the opportunity, your goals, market
              potential, and financials.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-2xl font-bold text-noir">
              3
            </div>
            <h3 className="mt-4 font-display text-xl text-bone">Agreement</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Review and sign licensing agreement. Begin site selection and setup
              planning.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-2xl font-bold text-noir">
              4
            </div>
            <h3 className="mt-4 font-display text-xl text-bone">Launch</h3>
            <p className="mt-2 text-sm text-bone-dim">
              Training, setup, soft opening, and grand launch with full Badoota
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-app border border-gold/20 bg-coal p-8 md:p-12">
            <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
              Request Partnership Information
            </h2>
            <p className="mt-4 text-center text-bone-dim">
              Tell us about yourself and your interest. We'll follow up with
              detailed information.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-bone"
                  >
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
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-bone"
                  >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-bone"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-bone"
                >
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
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-bone"
                >
                  Desired Location (City, State) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="e.g., Austin, TX"
                  className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-bone"
                >
                  Food Service / Business Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                  placeholder="Tell us about your background..."
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-bone"
                >
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                >
                  <option value="">Select timeline...</option>
                  <option value="immediate">Immediate (0-3 months)</option>
                  <option value="short">Short term (3-6 months)</option>
                  <option value="medium">Medium term (6-12 months)</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-bone"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-gold/30 bg-noir px-4 py-3 text-bone focus:border-gold focus:outline-none"
                  placeholder="Tell us more about your interest, questions, or anything else we should know..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gold-sheen px-8 py-4 text-lg font-semibold text-noir shadow-gold transition hover:brightness-110"
              >
                Request Partnership Information
              </button>

              <p className="text-center text-sm text-bone-dim">
                We'll respond within 1-2 business days. Or call us directly at{" "}
                <a href="tel:+14085551234" className="text-gold hover:underline">
                  (408) 555-1234
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-gold/10 bg-coal px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-2xl text-bone md:text-3xl">
          Questions About Licensing?
        </h2>
        <p className="mt-3 text-bone-dim">
          We're here to answer all your questions about this opportunity.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+14085551234"
            className="rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10"
          >
            Call (408) 555-1234
          </a>
          <Link
            href="/contact"
            className="rounded-full border-2 border-gold px-8 py-3 font-semibold text-bone transition hover:bg-gold/10"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
