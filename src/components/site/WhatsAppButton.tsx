import { MessageCircle } from "lucide-react";

import { company } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        "Hello Qatalogue, I'd like to enquire about biomass fuel supply.",
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Qatalogue on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex items-center gap-2 bg-forest px-4 py-3 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
