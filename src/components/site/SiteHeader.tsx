import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { company, images } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },

] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={images.logo}
            alt="Qatalogue Biofuels logo"
            className="h-11 w-11 rounded-sm object-cover"
          />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-[0.18em] uppercase">
              Qatalogue
            </span>
            <span className="mt-1 block text-[0.6rem] tracking-[0.34em] text-muted-foreground uppercase">
              Biofuels
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.8rem] font-medium tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-ember px-5 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-ember-foreground uppercase transition-opacity hover:opacity-90"
          >
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm tracking-[0.12em] uppercase last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${company.email}`}
              className="py-3 text-sm tracking-[0.12em] text-ember uppercase"
            >
              {company.email}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
