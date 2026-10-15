import { Wheat, HeartHandshake, SlidersHorizontal } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { IMAGES, PICKUP_INFO } from "@/data/menu";

const PILLARS = [
  {
    icon: Wheat,
    title: "Ingredientes selecionados",
    desc: "Recheios cremosos e coberturas preparados artesanalmente, um a um.",
  },
  {
    icon: HeartHandshake,
    title: "Feito à mão, com afeto",
    desc: "Cada bolo só entra no forno depois do seu pedido — nada fica pronto esperando.",
  },
  {
    icon: SlidersHorizontal,
    title: "Personalização total",
    desc: "Você escolhe a combinação e o tamanho em quilos, do jeito da sua festa.",
  },
];

const STATS = [
  { value: "13", label: "recheios" },
  { value: "5", label: "coberturas" },
  { value: "R$ 140", label: "o quilo" },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden
            className="absolute -inset-2 -translate-x-4 translate-y-4 rounded-b-[2rem] rounded-t-full border border-gold/40"
          />
          <div className="relative overflow-hidden rounded-b-[2rem] rounded-t-full shadow-soft">
            <img
              src={IMAGES.about}
              alt="Bolo artesanal sendo preparado"
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 rounded-2xl border border-gold/40 bg-cream px-7 py-5 shadow-lift sm:-right-6">
            <p className="font-display text-lg italic text-ink">“Feito à mão,</p>
            <p className="font-display text-lg italic text-gold">do nosso forno para a sua festa.”</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Sobre a loja</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Uma confeitaria de encomenda, feita para a sua celebração.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-lg leading-relaxed text-cocoa">
              A Lubecale nasceu na cozinha de casa, do prazer de ver uma mesa de festa se reunir em
              volta de um bolo. Aqui, cada bolo é montado por encomenda: você escolhe o recheio, a
              cobertura e os quilos, e a gente prepara tudo fresquinho para o seu momento.
            </p>
          </Reveal>
          {/* 🆕 Info de retirada */}
            <Reveal delay={0.25}>
              <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/5 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-cream">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-xl text-ink">{PICKUP_INFO.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-cocoa">{PICKUP_INFO.long}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-gold">
                      Agende data e hora no carrinho
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          <div className="mt-12 space-y-7">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.12 + i * 0.08}>
                <div className="group flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-cream">
                    <p.icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{p.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-cocoa">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex divide-x divide-gold/30 border-y border-gold/30 py-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex-1 px-4 text-center first:pl-0">
                  <p className="font-display text-3xl font-medium text-ink sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cocoa">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
