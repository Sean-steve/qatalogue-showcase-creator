import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { company, images } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="Qatalogue Biofuels logo"
              className="h-12 w-12 rounded-sm object-cover"
            />
            <span className="font-display text-lg font-extrabold tracking-[0.18em] text-white uppercase">
              Qatalogue
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed">
            {company.name} converts biomass and waste streams into dependable industrial fuel —
            supporting Kenyan manufacturers while creating value from agricultural and forestry
            residues.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-white">Navigate</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition-colors hover:text-white">
                Products & Feedstocks
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-white">Talk to us</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-ember" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-ember" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-ember" />
              <span>{company.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Biomass fuel supply · Waste recovery · Industrial energy</p>
        </div>
      </div>
    </footer>
  );
}
