import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { feedstocks, images, products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Feedstocks — Wood Chips, Firewood, Briquettes" },
      {
        name: "description",
        content:
          "Qatalogue supplies industrial wood chips, firewood and briquettes made from sawdust, coffee husks, macadamia shells, maize cobs, rice husks and forestry residues.",
      },
      { property: "og:title", content: "Products & Feedstocks — Qatalogue Biofuels" },
      {
        property: "og:description",
        content:
          "Industrial wood chips, firewood and briquettes produced from recovered agricultural and forestry residues.",
      },
      { property: "og:image", content: `https://qatalogue.co.ke${images.woodChips}` },
      { name: "twitter:image", content: `https://qatalogue.co.ke${images.woodChips}` },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Products &amp; feedstocks</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl">
            Fuel prepared for industrial thermal systems.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            Every product below is produced from recovered biomass and prepared for use where it is
            technically suitable. Tell us your boiler and consumption, and we'll advise on the right
            fit.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl space-y-px px-5 py-24 sm:px-8">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="grid gap-10 border-t border-border py-16 first:border-0 first:pt-0 lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              <img
                src={product.image}
                alt={product.name}
                className={`h-80 w-full object-cover lg:h-96 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                loading="lazy"
              />
              <div>
                <p className="eyebrow text-ember">Fuel 0{index + 1}</p>
                <h2 className="mt-4 font-display text-3xl font-extrabold">{product.name}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {product.detail}
                </p>
                <p className="mt-8 text-sm font-semibold">{product.listTitle}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {product.list.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 shrink-0 text-forest" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-9 inline-flex items-center gap-2 bg-ember px-6 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-ember-foreground uppercase transition-opacity hover:opacity-90"
                >
                  Enquire about {product.name} <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Feedstocks we recover</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            The residues behind the fuel.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Feedstock availability varies by season and region. We assess each stream for suitability
            before it enters production.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {feedstocks.map((feedstock) => (
              <article key={feedstock.name} className="bg-card">
                <img
                  src={feedstock.image}
                  alt={feedstock.name}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-display text-base font-bold">{feedstock.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feedstock.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-kraft">Waste recovery partnerships</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold text-forest-foreground">
              Sitting on residue you can't use? We may be able to.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-foreground/80">
              Sawmills, coffee mills, rice millers, nut processors and grain handlers — talk to us
              about recovering and commercially utilising your by-products.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 bg-kraft px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-ink uppercase transition-opacity hover:opacity-90"
            >
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src={images.usedTyres}
            alt="Recovered waste material awaiting processing"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
