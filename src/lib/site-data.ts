import heroBoiler from "@/assets/hero-boiler.jpg.asset.json";
import workerHopper from "@/assets/worker-hopper.jpg.asset.json";
import woodChips from "@/assets/wood-chips.jpg.asset.json";
import industrialFirewood from "@/assets/industrial-firewood.jpg.asset.json";
import briquettes from "@/assets/briquettes.jpg.asset.json";
import sawdust from "@/assets/sawdust.jpg.asset.json";
import coffeeHusks from "@/assets/coffee-husks.jpg.asset.json";
import macadamiaShells from "@/assets/macadamia-shells.jpg.asset.json";
import maizeCobs from "@/assets/maize-cobs.jpg.asset.json";
import riceHusks from "@/assets/rice-husks.jpg.asset.json";
import pineResidues from "@/assets/pine-residues.jpg.asset.json";
import bagasse from "@/assets/bagasse.jpg.asset.json";
import woodResidues from "@/assets/wood-residues.jpg.asset.json";
import usedTyres from "@/assets/used-tyres.jpg.asset.json";
import conveyorChips from "@/assets/conveyor-chips.jpg.asset.json";
import chipsYard from "@/assets/chips-yard.jpg.asset.json";
import facilityInterior from "@/assets/facility-interior.jpg.asset.json";
import workerBoiler from "@/assets/worker-boiler.jpg.asset.json";
import logo from "@/assets/logo-qatalogue.jpg.asset.json";

export const images = {
  heroBoiler: heroBoiler.url,
  workerHopper: workerHopper.url,
  woodChips: woodChips.url,
  industrialFirewood: industrialFirewood.url,
  briquettes: briquettes.url,
  sawdust: sawdust.url,
  coffeeHusks: coffeeHusks.url,
  macadamiaShells: macadamiaShells.url,
  maizeCobs: maizeCobs.url,
  riceHusks: riceHusks.url,
  pineResidues: pineResidues.url,
  bagasse: bagasse.url,
  woodResidues: woodResidues.url,
  usedTyres: usedTyres.url,
  conveyorChips: conveyorChips.url,
  chipsYard: chipsYard.url,
  facilityInterior: facilityInterior.url,
  workerBoiler: workerBoiler.url,
  logo: logo.url,
};

export const company = {
  name: "Qatalogue Limited",
  short: "Qatalogue",
  tagline: "Turning Biomass & Waste Into Reliable Industrial Energy",
  strapline:
    "Wood chips. Industrial firewood. Briquettes. Biomass recovery. Helping Kenyan industries access dependable alternative fuels while creating value from agricultural and forestry residues.",
  email: "sales@qatalogue.co.ke",
  phone: "+254 700 000 000",
  whatsapp: "254700000000",
  location: "Nairobi, Kenya",
};

export type Product = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  detail: string;
  listTitle: string;
  list: string[];
};

export const products: Product[] = [
  {
    slug: "wood-chips",
    name: "Wood Chips",
    image: images.woodChips,
    summary:
      "Consistent biomass fuel for paper manufacturers, industrial boilers and other suitable applications.",
    detail:
      "Our wood chips are produced for industrial applications where appropriately sized and prepared biomass fuel can be used.",
    listTitle: "Suitable applications include",
    list: ["Paper manufacturing", "Industrial boilers", "Thermal-energy applications", "Manufacturing"],
  },
  {
    slug: "industrial-firewood",
    name: "Industrial Firewood",
    image: images.industrialFirewood,
    summary:
      "Responsibly sourced wood fuel for industrial boilers, tea factories, food processors and other thermal-energy users.",
    detail:
      "We supply responsibly sourced industrial firewood for customers using biomass boilers and other suitable thermal-energy systems.",
    listTitle: "Potential customers include",
    list: [
      "Tea factories",
      "Food processors",
      "Manufacturing companies",
      "Hotels",
      "Institutions",
      "Industrial boiler operators",
    ],
  },
  {
    slug: "industrial-briquettes",
    name: "Industrial Briquettes",
    image: images.briquettes,
    summary:
      "High-density biomass fuel produced from suitable agricultural and forestry residues, providing an alternative fuel for industrial applications.",
    detail:
      "Our industrial briquettes are manufactured from suitable biomass residues and designed to provide a dense, convenient fuel for industrial applications.",
    listTitle: "Potential feedstocks include",
    list: [
      "Sawdust",
      "Coffee husks",
      "Macadamia shells",
      "Maize cobs",
      "Rice husks",
      "Pine residues",
      "Bagasse",
    ],
  },
];

export const feedstocks = [
  {
    name: "Sawdust",
    image: images.sawdust,
    description:
      "Sourced from sawmills and wood-processing operations for suitable biomass fuel applications.",
  },
  {
    name: "Coffee Husks",
    image: images.coffeeHusks,
    description:
      "Coffee-processing residue that can be recovered and converted into useful biomass fuel where technically suitable.",
  },
  {
    name: "Macadamia Shells",
    image: images.macadamiaShells,
    description:
      "A dense agricultural residue with potential for use as biomass fuel and as an input into processed biomass products.",
  },
  {
    name: "Maize Cobs",
    image: images.maizeCobs,
    description:
      "Recovered from agricultural and grain-processing activities and utilised where suitable for fuel production.",
  },
  {
    name: "Rice Husks",
    image: images.riceHusks,
    description:
      "An agricultural residue generated during rice milling that can be incorporated into appropriate biomass-energy applications.",
  },
  {
    name: "Pine Cones & Forestry Residues",
    image: images.pineResidues,
    description:
      "Suitable forestry residues can be recovered and utilised as biomass feedstock, subject to responsible and lawful sourcing.",
  },
  {
    name: "Bagasse",
    image: images.bagasse,
    description:
      "Sugar-processing residue that can be utilised in suitable industrial biomass-energy applications.",
  },
  {
    name: "Wood Residues",
    image: images.woodResidues,
    description:
      "Residues from forestry and wood-processing operations, recovered and prepared as industrial biomass fuel.",
  },
];

export const interestOptions = [
  "Wood Chips",
  "Industrial Firewood",
  "Briquettes",
  "Biomass Feedstock Supply",
  "Biomass Fuel Assessment",
  "Waste Recovery Partnership",
  "Other",
];

export const services = [
  {
    title: "Industrial Biomass Fuel Supply",
    body: "Regular supply of wood chips, industrial firewood and briquettes, structured around your operational requirements and delivery schedule.",
  },
  {
    title: "Biomass Sourcing & Aggregation",
    body: "A growing network connecting agricultural processors, sawmills, farmers and other biomass producers with industrial energy markets.",
  },
  {
    title: "Fuel Supply Programmes",
    body: "Programmes covering volume, quality, pricing, delivery and monitoring. You concentrate on manufacturing; we help keep your fuel supply moving.",
  },
  {
    title: "Biomass Fuel Assessment",
    body: "We work with your technical and procurement teams on current fuel, consumption, costs, boiler requirements and potential biomass alternatives.",
  },
  {
    title: "Waste & Biomass Recovery Partnerships",
    body: "Generating sawdust, coffee husks, macadamia shells, maize cobs or rice husks? Talk to us about recovery and commercial utilisation.",
  },
  {
    title: "Future Industrial Energy Solutions",
    body: "Longer term, partnerships around biomass boilers, industrial heat, steam generation, fuel conversion and energy efficiency.",
  },
];
