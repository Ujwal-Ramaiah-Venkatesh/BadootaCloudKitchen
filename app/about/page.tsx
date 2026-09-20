import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-coal via-noir to-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-bone md:text-5xl lg:text-6xl">
            Bringing the Flavors of Karnataka to San Jose
          </h1>
        </div>
      </section>

      {/* Main Story */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <div className="space-y-6 text-lg leading-relaxed text-bone-dim">
          <p className="text-xl text-bone">
            It all began with a love for authentic Karnataka cuisine and a
            mission to share its unique flavors and taste with the world.
          </p>

          <p>
            Growing up in Karnataka, we developed a deep appreciation for the
            region's diverse culinary culture — from the streets of Bengaluru to
            the traditional homes of our families. Karnataka cuisine is more than
            just food; it's a celebration of bold spices, time-honored
            techniques, and recipes passed down through generations.
          </p>

          <p>
            At Badoota, we're committed to bringing you that authentic
            experience. We use only the freshest and highest quality ingredients,
            preparing each dish with the care and attention it deserves. Our
            goal is simple: to transport you to the vibrant streets of Karnataka
            with every bite.
          </p>
        </div>

        {/* Donne Biryani Section */}
        <div className="mt-16 rounded-app border border-gold/20 bg-coal p-8 md:p-12">
          <h2 className="font-display text-3xl text-bone md:text-4xl">
            Our Signature: Donne Biryani
          </h2>
          <div className="mt-6 space-y-4 text-bone-dim">
            <p>
              The Donne Biryani is a signature dish of Karnataka, known for its
              bold flavors and fragrant aroma. The name comes from the{" "}
              <strong className="text-gold">donne</strong> — a traditional leaf
              cup made from dried areca nut palm tree leaves — in which the
              biryani is served.
            </p>
            <p>
              This isn't just about the vessel; it's about tradition. The donne
              adds a subtle earthiness to the rice and meat, while the cooking
              method locks in moisture and intensifies the spices. Each serving
              features aromatic basmati rice layered with your choice of tender
              chicken, mutton, or mushrooms, all infused with authentic Karnataka
              spices and herbs.
            </p>
            <p>
              We prepare our Donne Biryani the traditional way — slow-cooked with
              patience and precision, never rushed, always fresh. It's the dish
              that defines us and the one our customers return for again and
              again.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-coal px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            What Sets Us Apart
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-card border border-gold/20 bg-noir p-8">
              <div className="text-5xl">🇮🇳</div>
              <h3 className="mt-4 font-display text-2xl text-bone">
                Authentic Karnataka Recipes
              </h3>
              <p className="mt-3 text-bone-dim">
                Every dish is prepared using traditional Karnataka recipes and
                techniques. From our Donne Biryani to our curries, we honor the
                authentic flavors of Bengaluru.
              </p>
            </div>

            <div className="rounded-card border border-gold/20 bg-noir p-8">
              <div className="text-5xl">🌾</div>
              <h3 className="mt-4 font-display text-2xl text-bone">
                Freshest Ingredients
              </h3>
              <p className="mt-3 text-bone-dim">
                We source only the finest ingredients and prepare everything
                fresh to order. No compromises on quality, no day-old food.
              </p>
            </div>

            <div className="rounded-card border border-gold/20 bg-noir p-8">
              <div className="text-5xl">🔥</div>
              <h3 className="mt-4 font-display text-2xl text-bone">
                Bold, Traditional Spices
              </h3>
              <p className="mt-3 text-bone-dim">
                Karnataka cuisine is known for its bold, aromatic spice blends.
                We use traditional masalas and cooking methods to deliver
                authentic taste.
              </p>
            </div>

            <div className="rounded-card border border-gold/20 bg-noir p-8">
              <div className="text-5xl">👨‍🍳</div>
              <h3 className="mt-4 font-display text-2xl text-bone">
                Cooked with Care
              </h3>
              <p className="mt-3 text-bone-dim">
                Each order is prepared with attention to detail. We treat every
                dish like it's being served to our own family.
              </p>
            </div>

            <div className="rounded-card border border-gold/20 bg-noir p-8">
              <div className="text-5xl">🍃</div>
              <h3 className="mt-4 font-display text-2xl text-bone">
                Traditional Methods
              </h3>
              <p className="mt-3 text-bone-dim">
                From cooking in traditional donne vessels to slow-cooking our
                biryanis, we preserve the time-honored techniques that make
                Karnataka cuisine special.
              </p>
            </div>

            <div className="rounded-card border border-gold/20 bg-noir p-8">
              <div className="text-5xl">❤️</div>
              <h3 className="mt-4 font-display text-2xl text-bone">
                Community Focus
              </h3>
              <p className="mt-3 text-bone-dim">
                We're proud to serve the San Jose community and bring a taste of
                Karnataka to California. Your satisfaction is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="rounded-app border border-gold/20 bg-coal p-8 text-center md:p-12">
          <h2 className="font-display text-3xl text-bone md:text-4xl">
            Visit Us in San Jose
          </h2>
          <p className="mt-4 text-lg text-bone-dim">
            Experience authentic Karnataka cuisine in the heart of Silicon Valley
          </p>

          <div className="mt-8 space-y-2 text-bone">
            <p className="font-semibold">336 Commercial Street</p>
            <p>San Jose, CA 95112</p>
          </div>

          <div className="mt-8 space-y-2 text-bone">
            <p className="font-semibold text-gold">Operating Hours</p>
            <p>Tuesday – Sunday</p>
            <p>Lunch: 12:00 PM – 3:00 PM</p>
            <p>Dinner: 6:00 PM – 9:30 PM</p>
            <p className="mt-4 font-bold text-gold">⚠️ CLOSED MONDAY</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
        </div>
      </section>

      {/* Join BBC Club CTA */}
      <section className="border-t border-gold/10 bg-coal px-6 py-16 text-center lg:px-10">
        <h2 className="font-display text-2xl text-bone md:text-3xl">
          Love Karnataka Cuisine?
        </h2>
        <p className="mt-3 text-bone-dim">
          Join our BBC Club and save 20% on every order plus get weekly free
          appetizers
        </p>
        <Link
          href="/bbc-club"
          className="mt-6 inline-block rounded-full bg-gold-sheen px-8 py-3 font-semibold text-noir shadow-gold transition hover:brightness-110"
        >
          Learn About BBC Club
        </Link>
      </section>
    </main>
  );
}
