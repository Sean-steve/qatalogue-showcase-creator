import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Factory, Leaf, Recycle, Truck } from "lucide-react";

import { company, images, products } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qatalogue Biofuels — Industrial Biomass Fuel Supply in Kenya" },
      {
        name: "description",
        content:
          "Qatalogue supplies wood chips, industrial firewood and briquettes to Kenyan industry, converting agricultural and forestry residues into reliable energy.",
      },
      { property: "og:title", content: "Qatalogue Biofuels — Industrial Biomass Fuel Supply" },
      {
        property: "og:description",
        content:
          "Turning biomass and waste into reliable industrial energy for Kenyan manufacturers.",
      },
      { property: "og:image", content: `https://qatalogue.co.ke${images.heroBoiler}` },
      { name: "twitter:image", content: `https://qatalogue.co.ke${images.heroBoiler}` },
    ],
  }),
  component: Home,
});

const whyUs = [
  {
    icon: Factory,
    title: "Industrial focus",
    body: "We build supply around boilers, dryers and process heat — not one-off retail orders.",
  },
  {
    icon: Truck,
    title: "Supply you can plan around",
    body: "Programmes covering volume, quality, pricing, delivery and monitoring so production keeps moving.",
  },
  {
    icon: Recycle,
    title: "Waste into value",
    body: "We recover sawdust, husks, shells and cobs that would otherwise be dumped or burned in the open.",
  },
  {
    icon: Leaf,
    title: "Responsible sourcing",
    body: "Feedstock is recovered lawfully and responsibly, with residues prioritised over standing timber.",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={images.heroBoiler}
          alt="Industrial biomass boiler being fed with wood fuel"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-40">
          <p className="eyebrow text-ember">Biomass · Waste recovery · Industrial energy</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
            Turning biomass &amp; waste into reliable industrial energy.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {company.strapline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ember px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-ember-foreground uppercase transition-opacity hover:opacity-90"
            >
              Request a quote <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-white/10"
            >
              See our fuels
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-ember">The challenge</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
              Industry needs heat. Fuel supply keeps getting harder.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Manufacturers, processors and institutions depend on thermal energy every single
                shift. Yet fuel costs move unpredictably, supply is inconsistent, and pressure to cut
                emissions keeps rising.
              </p>
              <p>
                At the same time, enormous volumes of usable biomass — sawdust, coffee husks,
                macadamia shells, maize cobs, rice husks, forestry residues — are dumped, left to rot
                or burned in the open.
              </p>
              <p className="font-medium text-foreground">
                Qatalogue exists to close that gap: recovering residues and delivering them back to
                industry as dependable fuel.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.chipsYard}
              alt="Yard stacked with prepared biomass wood chips"
              className="col-span-2 h-64 w-full object-cover"
              loading="lazy"
            />
            <img
              src={images.workerHopper}
              alt="Worker loading biomass fuel into a hopper"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <img
              src={images.conveyorChips}
              alt="Wood chips moving along a conveyor"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-ember">What we supply</p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                Three fuels, built for industrial thermal demand.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.16em] text-ember uppercase"
            >
              All products &amp; feedstocks <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.slug} className="group bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold">{product.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {product.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Why Qatalogue</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            A fuel partner, not just a delivery.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t-2 border-ember pt-6">
                <Icon className="size-6 text-forest" />
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-forest">
        <img
          src={images.pineResidues}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p className="eyebrow text-kraft">Our promise</p>
          <h2 className="mt-6 font-display text-3xl leading-tight font-extrabold text-forest-foreground sm:text-4xl">
            Energy that supports industry without working against the environment.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-forest-foreground/80">
            We prioritise residues and waste streams, source lawfully and responsibly, and work with
            producers so biomass is recovered rather than wasted.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 border border-kraft/60 px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-forest-foreground uppercase transition-colors hover:bg-white/10"
          >
            How we work <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
