import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { images, services } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Qatalogue — Biomass Recovery & Industrial Fuel" },
      {
        name: "description",
        content:
          "Qatalogue Limited recovers agricultural and forestry residues and supplies them to Kenyan industry as reliable biomass fuel. Our vision, mission and approach.",
      },
      { property: "og:title", content: "About Qatalogue — Biomass Recovery & Industrial Fuel" },
      {
        property: "og:description",
        content:
          "Our vision, mission and approach to converting biomass and waste into industrial energy in Kenya.",
      },
      { property: "og:image", content: `https://qatalogue.co.ke${images.facilityInterior}` },
      { name: "twitter:image", content: `https://qatalogue.co.ke${images.facilityInterior}` },
    ],
  }),
  component: About,
});

const approach = [
  {
    number: "01",
    title: "Recover",
    body: "We work with sawmills, farms, processors and forestry operations to collect residues that would otherwise be wasted.",
  },
  {
    number: "02",
    title: "Prepare",
    body: "Feedstock is sorted, sized and processed into wood chips, industrial firewood or densified briquettes.",
  },
  {
    number: "03",
    title: "Supply",
    body: "Fuel is delivered on programmes built around your consumption, boiler requirements and delivery schedule.",
  },
  {
    number: "04",
    title: "Improve",
    body: "We stay involved — reviewing quality, consumption and cost with your technical and procurement teams.",
  },
];

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={images.facilityInterior}
          alt="Interior of a biomass processing facility"
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <p className="eyebrow text-ember">About Qatalogue</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl">
            Built around one idea: waste is misplaced energy.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            Qatalogue Limited is a Kenyan biomass and waste-to-energy company connecting residue
            producers with the industries that need dependable thermal fuel.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="border-t-2 border-ember bg-card p-9">
            <p className="eyebrow text-ember">Our vision</p>
            <p className="mt-6 font-display text-2xl leading-snug font-bold">
              A Kenya where industry runs on energy recovered from what was previously discarded.
            </p>
          </div>
          <div className="border-t-2 border-forest bg-card p-9">
            <p className="eyebrow text-forest">Our mission</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              To supply reliable, responsibly sourced biomass fuels to industrial users while
              building the recovery networks that turn agricultural and forestry residues into
              commercial value for the people who produce them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Our approach</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            From residue to running boiler.
          </h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <div key={step.number} className="bg-secondary p-8">
                <span className="font-display text-4xl font-extrabold text-ember/40">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow text-ember">What we do</p>
              <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                Services across the biomass chain.
              </h2>
              <img
                src={images.workerBoiler}
                alt="Operator working at an industrial biomass boiler"
                className="mt-10 h-72 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="divide-y divide-border">
              {services.map((service) => (
                <div key={service.title} className="py-7 first:pt-0">
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-extrabold text-white">
            Producing biomass residue, or looking for a better fuel? Let's talk.
          </h2>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-ember px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-ember-foreground uppercase transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
