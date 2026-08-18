# Qatalogue Biofuels Website

A four-page marketing site for Qatalogue Limited, built from the copy and photography in your PDF, with the tree-mark logo as the brand anchor.

## Design direction

- Industrial-natural palette drawn from the logo: charcoal ink, warm kraft/ember accent for CTAs, muted stone/concrete greys, and a deep forest green for sustainability sections.
- Strong typographic headlines with wide letter-spacing echoing the logo wordmark; clean sans for body text.
- Full-bleed photography from the PDF (wood chips, boilers, briquettes, feedstocks) used as hero and section imagery, with dark overlays for legible text.
- No purple/indigo gradients, no generic stock-photo filler.

## Pages

**Home** (`/`)
- Hero: "Turn Waste Into Energy. Power Your Business Sustainably." with the two CTAs (Request a Quotation / Talk to Our Energy Team) over an industrial biomass image.
- The Energy Challenge section.
- Our Products: three cards (Wood Chips, Industrial Firewood, Industrial Briquettes) + "View All Products".
- Why Qatalogue: five points (Reliable Supply, Multiple Biomass Sources, Sustainability, Industrial Focus, Flexible Volumes).
- Sustainability Promise with the circular flow diagram (Farmers & processors → Biomass collection → Qatalogue processing → Industrial fuels → Factories & businesses → Useful energy).
- Closing CTA: Request a Fuel Assessment.

**About** (`/about`)
- Intro, What We Do with the feedstock list, Vision, Mission, and the four-part Approach (Supply, Processing, Delivery, Impact).

**Products** (`/products`)
- Industrial Fuels: detailed sections for Wood Chips, Industrial Firewood, and Industrial Briquettes with applications, customer types, and per-product quotation CTAs.
- Our Biomass Feedstocks: gallery grid of Sawdust, Coffee Husks, Macadamia Shells, Maize Cobs, Rice Husks, Pine Cones/Residues, Bagasse, Wood Residues with their descriptions and photos.

**Contact** (`/contact`)
- Quotation / enquiry form: name, company, email, phone, product interest, estimated monthly volume, location, message.
- Contact details block for email, phone/WhatsApp and physical address. I'll put clear placeholders there — send me the real email, phone number and address and I'll drop them in (and wire the WhatsApp click-to-chat link).

Shared header with logo + nav (mobile drawer) and a footer with products, quick links and contact summary.

## Enquiry storage

Enable Lovable Cloud and store every submitted enquiry in a database table so you can review them later. The form validates input, shows a success confirmation, and each product's "Request quotation" button pre-selects that product. Email notifications can be added afterwards if you want them.

## Technical notes

- TanStack Start file routes: `index.tsx`, `about.tsx`, `products.tsx`, `contact.tsx`, each with its own `head()` metadata (title, description, og/twitter tags).
- Images extracted from the PDF are uploaded as CDN assets (`.asset.json` pointers) rather than committed binaries; the logo is also used for the favicon.
- Design tokens (colors, radii, fonts) defined in `src/styles.css` under `@theme inline` — no hardcoded color utilities in components.
- Enquiries table: public `INSERT` policy for the form, no public read; a server function handles the insert with Zod validation.
