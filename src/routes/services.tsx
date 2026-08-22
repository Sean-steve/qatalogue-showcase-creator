import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { images } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Boiler & Steam Energy Services — Qatalogue Biofuels" },
      {
        name: "description",
        content:
          "Boiler supply, fuel conversion, maintenance, efficiency assessments, steam-system solutions and energy consulting for Kenyan industry — combined with reliable biomass fuel supply.",
      },
      { property: "og:title", content: "Industrial Boiler & Steam Energy Solutions — Qatalogue" },
      {
        property: "og:description",
        content:
          "Reliable steam. Better fuel. Smarter energy. Boiler solutions and biomass fuel supply from one industrial energy partner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `https://qatalogue.co.ke${images.workerBoiler}` },
      { name: "twitter:image", content: `https://qatalogue.co.ke${images.workerBoiler}` },
    ],
  }),
  component: Services,
});

type Service = {
  number: string;
  title: string;
  lead: string;
  body: string[];
  listTitle?: string;
  list?: string[];
  note?: string;
  cta?: string;
  image?: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Boiler Supply & Installation",
    lead: "The right boiler for your operation",
    body: [
      "We work with qualified boiler and engineering partners to help customers identify, source and install boilers suitable for their production requirements.",
      "We help evaluate your steam demand, fuel availability, operating requirements and expected energy costs before recommending an appropriate solution.",
    ],
    listTitle: "Our solutions can cover",
    list: [
      "Biomass-fired boilers",
      "Firewood-fired boilers",
      "Wood-chip-fired boilers",
      "Briquette-fired boilers",
      "Multi-fuel boilers",
      "Steam boilers",
      "Hot-water boilers",
      "Industrial thermal-energy systems",
    ],
    image: images.facilityInterior,
  },
  {
    number: "02",
    title: "Boiler Fuel Conversion",
    lead: "Move from expensive fossil fuels to biomass",
    body: [
      "Already operating a boiler? You may not need to replace the entire system.",
      "Qatalogue can assess whether your existing boiler can be adapted or optimised to use biomass fuels, subject to technical assessment and manufacturer/qualified-engineer requirements.",
      "We can help develop a fuel-conversion strategy around your existing equipment.",
    ],
    listTitle: "Potential fuel options include",
    list: [
      "Wood chips",
      "Industrial firewood",
      "Briquettes",
      "Sawdust-derived fuels",
      "Agricultural-residue fuels",
    ],
    cta: "Request a boiler fuel assessment",
    image: images.woodChips,
  },
  {
    number: "03",
    title: "Biomass Boiler Solutions",
    lead: "Turn locally available biomass into industrial heat",
    body: [
      "Qatalogue is developing partnerships around biomass boiler systems designed to utilise appropriate local biomass fuels.",
      "This is where Qatalogue's fuel business becomes a complete energy proposition rather than simply selling tonnes of biomass.",
    ],
    listTitle: "Our objective is to connect",
    list: [
      "Reliable biomass supply",
      "Appropriate boiler technology",
      "Efficient steam generation",
      "= A more sustainable industrial energy solution",
    ],
    image: images.conveyorChips,
  },
  {
    number: "04",
    title: "Boiler Maintenance & Servicing",
    lead: "Keep your boiler operating safely and efficiently",
    body: [
      "Through qualified technical partners, Qatalogue can coordinate boiler servicing and maintenance solutions.",
    ],
    listTitle: "Coverage can include",
    list: [
      "Preventive maintenance",
      "Boiler inspection support",
      "Burner and combustion-system servicing",
      "Pumps and motors",
      "Valves and fittings",
      "Pressure gauges",
      "Safety systems",
      "Water-level controls",
      "Boiler cleaning",
      "Troubleshooting",
      "Repairs and component replacement",
    ],
    note: "All statutory examinations and certifications should be undertaken by appropriately approved persons / competent service providers. Kenyan law requires thorough examination of steam boilers at least every 12 months, and DOSHS maintains a system for plant inspection and approved persons.",
    image: images.workerBoiler,
  },
  {
    number: "05",
    title: "Boiler Efficiency Assessment",
    lead: "Your boiler may be using more fuel than necessary",
    body: [
      "Qatalogue can help customers assess their thermal-energy system and identify opportunities to improve efficiency.",
      "The objective is simple: produce the steam you need using as little energy as reasonably possible.",
    ],
    listTitle: "We can review",
    list: [
      "Fuel consumption",
      "Steam production",
      "Boiler operating conditions",
      "Combustion efficiency",
      "Heat losses",
      "Boiler loading",
      "Fuel quality",
      "Condensate recovery",
      "Insulation",
      "Steam distribution",
      "Operating practices",
    ],
    cta: "Book a boiler energy assessment",
    image: images.workerHopper,
  },
  {
    number: "06",
    title: "Steam System Solutions",
    lead: "Steam doesn't end at the boiler",
    body: [
      "A good boiler can still waste energy if the steam distribution system is poorly designed or maintained.",
      "Our approach is to look at the complete steam system, not just the boiler.",
    ],
    listTitle: "Through our engineering partners we can support",
    list: [
      "Steam pipeline design",
      "Steam distribution",
      "Valves",
      "Steam traps",
      "Pressure-reduction systems",
      "Condensate recovery",
      "Insulation",
      "Heat exchangers",
      "Feedwater systems",
      "Deaeration solutions",
      "Steam metering",
    ],
    image: images.heroBoiler,
  },
  {
    number: "07",
    title: "Boiler Water Treatment",
    lead: "Good water management protects your boiler",
    body: [
      "Poor-quality boiler water can contribute to scaling, corrosion, reduced heat transfer and equipment problems.",
    ],
    listTitle: "We can coordinate solutions covering",
    list: [
      "Boiler-water testing",
      "Water-treatment systems",
      "Chemical treatment",
      "Water softening",
      "Reverse osmosis where appropriate",
      "Blowdown management",
      "Feedwater treatment",
      "Monitoring programmes",
    ],
    note: "The specific treatment programme should be determined from the customer's water analysis and boiler operating conditions.",
  },
  {
    number: "08",
    title: "Fuel Supply + Boiler Solution",
    lead: "One partner. Two critical requirements.",
    body: [
      "Many companies can sell you a boiler. Others can sell you fuel. Qatalogue can connect the two.",
    ],
    listTitle: "Our biomass portfolio includes",
    list: [
      "Wood chips",
      "Firewood",
      "Briquettes",
      "Sawdust",
      "Coffee husks",
      "Macadamia shells",
      "Maize cobs",
      "Rice husks",
      "Pine residues",
      "Bagasse",
    ],
    image: images.chipsYard,
  },
  {
    number: "09",
    title: "Boiler Replacement & Upgrades",
    lead: "When your existing boiler is no longer the best solution",
    body: [
      "Where a boiler is obsolete, inefficient or unsuitable for the available fuel, Qatalogue can help customers evaluate the alternatives.",
      "We can coordinate the process from assessment → specification → supplier selection → installation → commissioning → fuel supply.",
    ],
    listTitle: "Options we can evaluate",
    list: [
      "Boiler replacement",
      "Capacity upgrades",
      "Fuel-system upgrades",
      "Automation",
      "Burner upgrades",
      "Combustion improvements",
      "Heat-recovery systems",
      "Economisers",
      "Improved insulation",
      "Steam-system upgrades",
    ],
  },
  {
    number: "10",
    title: "Steam Energy Consulting",
    lead: "We help you understand what your steam is really costing you",
    body: [
      "Before investing in new equipment, Qatalogue can help you establish the numbers so management can make an investment decision based on facts rather than assumptions.",
    ],
    listTitle: "Questions we help answer",
    list: [
      "What are you currently spending on fuel?",
      "How much steam are you producing?",
      "How much does each tonne of steam cost?",
      "What would biomass cost?",
      "Can your boiler use alternative fuels?",
      "Would a new boiler pay for itself?",
      "How much fuel would you need?",
      "What is the potential saving?",
    ],
    image: images.industrialFirewood,
  },
  {
    number: "11",
    title: "Energy-as-a-Service — Future Offering",
    lead: "Why buy the boiler when you can buy the energy?",
    body: [
      "As Qatalogue develops its steam-energy business, we can explore models where Qatalogue and its technology partners finance, install, operate or manage appropriate energy systems while the customer pays for the useful energy or steam delivered.",
    ],
    listTitle: "Potential customers could include",
    list: [
      "Food processors",
      "Tea factories",
      "Textile manufacturers",
      "Breweries",
      "Paper manufacturers",
      "Pharmaceutical manufacturers",
      "Dairy processors",
      "Edible-oil processors",
      "Chemical manufacturers",
      "Hotels and institutions",
    ],
  },
];

const evolution = [
  "Biomass Supplier",
  "Boiler & Steam Solutions Provider",
  "Industrial Energy Integrator",
  "Energy-as-a-Service Provider",
];

const flow = [
  { label: "Customer", body: "Needs steam" },
  { label: "Qatalogue", body: "Assesses energy requirement" },
  { label: "Solution", body: "Recommends appropriate fuel/boiler solution through qualified partners" },
  { label: "Supply", body: "Supplies biomass fuel" },
  { label: "Support", body: "Supports operation & optimisation" },
  { label: "Result", body: "Reliable industrial steam" },
];

const approach = [
  { step: "01", title: "Assess", body: "We understand your current boiler, fuel, steam demand and operating costs." },
  {
    step: "02",
    title: "Design",
    body: "We develop an appropriate technical and commercial solution with qualified engineering partners.",
  },
  { step: "03", title: "Supply", body: "We provide or coordinate equipment, biomass fuel and supporting components." },
  { step: "04", title: "Install", body: "Qualified technical partners undertake installation and commissioning." },
  { step: "05", title: "Optimise", body: "We help monitor fuel consumption, steam output and system performance." },
  {
    step: "06",
    title: "Support",
    body: "We can establish ongoing fuel supply, maintenance and energy-management arrangements.",
  },
];

const reasons = [
  {
    title: "Fuel + Energy Expertise",
    body: "We understand both the fuel side and the thermal-energy side of the equation.",
  },
  {
    title: "Local Biomass Supply",
    body: "Our expanding network gives us access to agricultural and forestry residues across Kenya.",
  },
  {
    title: "Industrial Focus",
    body: "Our solutions are designed around real industrial operating requirements.",
  },
  {
    title: "Sustainability",
    body: "We help businesses explore alternatives to fossil fuels while creating productive value from biomass residues.",
  },
  {
    title: "Long-Term Partnership",
    body: "Our objective isn't simply to sell a boiler or a truckload of fuel. We want to become a long-term industrial energy partner.",
  },
];

function Services() {
  return (
    <>
      <section className="relative bg-ink">
        <img
          src={images.workerBoiler}
          alt="Industrial boiler operator at work"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Services</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.06] font-extrabold text-white sm:text-5xl">
            Industrial Boiler &amp; Steam Energy Solutions
          </h1>
          <p className="mt-6 font-display text-lg font-bold text-kraft">
            Reliable steam. Better fuel. Smarter energy.
          </p>
          <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-white/75">
            <p>
              At Qatalogue Limited, we help industrial businesses improve the way they generate,
              manage and use steam and thermal energy.
            </p>
            <p>
              We combine biomass fuel supply, boiler solutions, steam-system optimisation and
              technical partnerships to help industries reduce energy costs, improve reliability and
              transition toward more sustainable energy.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-ember px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-ember-foreground uppercase transition-opacity hover:opacity-90"
          >
            Book an energy consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <article
                key={service.number}
                className="grid gap-10 border-t border-border pt-12 lg:grid-cols-[1fr_1fr] lg:items-start"
              >
                <div>
                  <p className="eyebrow text-ember">{service.number}</p>
                  <h2 className="mt-4 font-display text-2xl leading-tight font-extrabold sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 font-display text-base font-bold text-forest">{service.lead}</p>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    {service.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {service.note ? (
                    <p className="mt-6 border-l-2 border-kraft bg-secondary p-4 text-xs leading-relaxed text-muted-foreground">
                      {service.note}
                    </p>
                  ) : null}
                  {service.cta ? (
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 border border-ink px-6 py-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-colors hover:bg-ink hover:text-white"
                    >
                      {service.cta} <ArrowRight className="size-4" />
                    </Link>
                  ) : null}
                </div>

                <div className="space-y-6">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-56 w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ) : null}
                  {service.list ? (
                    <div className="bg-secondary p-7">
                      {service.listTitle ? (
                        <h3 className="eyebrow text-muted-foreground">{service.listTitle}</h3>
                      ) : null}
                      <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                        {service.list.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 bg-ember" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-kraft">How the pieces connect</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-extrabold text-forest-foreground sm:text-4xl">
            From steam demand to reliable industrial steam.
          </h2>
          <ol className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {flow.map((item) => (
              <li key={item.label} className="bg-forest-foreground/10 p-7">
                <p className="eyebrow text-kraft">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-forest-foreground/85">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold tracking-[0.16em] text-forest-foreground/80 uppercase">
            {evolution.map((stage, index) => (
              <span key={stage} className="flex items-center gap-3">
                {index > 0 ? <ArrowRight className="size-4 text-kraft" /> : null}
                <span className="border border-forest-foreground/25 px-4 py-2">{stage}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Our approach</p>
          <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
            Assess. Design. Supply. Optimise.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((item) => (
              <div key={item.step} className="border-t-2 border-ember bg-card p-7">
                <p className="font-display text-2xl font-extrabold text-ember">{item.step}</p>
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Why choose Qatalogue</p>
          <div className="mt-12 grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="border border-border/60 p-8">
                <h3 className="font-display text-lg font-bold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow text-ember">Call to action</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            Is your boiler costing you too much?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
            Your fuel bill may be telling you something. Let's look at your boiler, fuel, steam,
            costs and production — and identify where the opportunity lies.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 bg-ember px-7 py-4 text-[0.75rem] font-semibold tracking-[0.18em] text-ember-foreground uppercase transition-opacity hover:opacity-90"
          >
            Book a free initial energy consultation <ArrowRight className="size-4" />
          </Link>
          <p className="mt-6 text-sm text-white/60">
            Tell us your current fuel, boiler capacity, monthly consumption and location.
          </p>
          <p className="mt-12 font-display text-sm font-bold tracking-[0.18em] text-kraft uppercase">
            Qatalogue Limited — Turning Biomass &amp; Waste Into Reliable Industrial Energy.
          </p>
        </div>
      </section>
    </>
  );
}
