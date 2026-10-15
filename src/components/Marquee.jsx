
import { WHATSAPP_DISPLAY, PICKUP_INFO } from "@/data/menu";
const ITEMS = [
  "Bolos artesanais",
  "Encomendas por quilo",
  "R$ 140,00 o quilo",
  "13 recheios cremosos",
  "5 coberturas",
  PICKUP_INFO.short.toUpperCase(),
  `Pedido pelo WhatsApp ${WHATSAPP_DISPLAY}`,
];

const Track = ({ hidden }) => (
  <div aria-hidden={hidden} className="flex items-center">
    {ITEMS.map((t) => (
      <span
        key={t}
        className="flex items-center whitespace-nowrap text-sm font-medium uppercase tracking-[0.3em] text-cocoa"
      >
        <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
        {t}
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <div className="marquee relative overflow-hidden border-y border-gold/25 bg-cream-2 py-5">
      <div className="marquee-track flex w-max">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}