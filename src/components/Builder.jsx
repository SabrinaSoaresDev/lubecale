import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { RECHEIOS, COBERTURAS, IMAGES, PRICE_PER_KG, PICKUP_INFO, brl, kgFmt, slug } from "@/data/menu";

const PRESETS = [1, 1.5, 2, 2.5, 3];

const chipClass = (selected) =>
  `chip rounded-full border px-4 py-2.5 text-sm ${
    selected
      ? "border-gold bg-gold text-cream shadow-[0_10px_24px_-12px_rgba(140,106,38,0.8)]"
      : "border-ink/20 bg-transparent text-ink hover:border-gold hover:text-gold"
  }`;

function Step({ n, title, hint, children }) {
  return (
    <Reveal>
      <div className="mb-3 flex items-baseline gap-4">
        <span className="font-display text-lg italic text-gold">{n}</span>
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-cocoa sm:inline">
          — {hint}
        </span>
      </div>
      {children}
    </Reveal>
  );
}

export default function Builder({ onAdd }) {
  const [recheio, setRecheio] = useState(null);
  const [cobertura, setCobertura] = useState(null);
  const [kg, setKg] = useState(1.5);

  const price = kg * PRICE_PER_KG;
  const ready = recheio && cobertura;

  const add = () => {
    if (!ready) return;
    onAdd({ recheio, cobertura, kg, price });
    setRecheio(null);
    setCobertura(null);
    setKg(1.5);
  };

  return (
    <section id="montar-bolo" className="border-y border-gold/20 bg-cream-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Eyebrow>Cardápio · Monte o seu</Eyebrow>
            <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Monte seu bolo por quilo
            </h2>
            <p className="mt-4 text-cocoa">
              Três passos e pronto: recheio, cobertura e tamanho. O valor sai a{" "}
              <strong className="font-medium text-ink">{brl(PRICE_PER_KG)} o quilo</strong>.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <div className="space-y-12">
            <Step n="01" title="Escolha o recheio" hint="selecione um sabor">
              <div className="mt-6 flex flex-wrap gap-2.5">
                {RECHEIOS.map((r) => (
                  <button
                    key={r}
                    data-testid={`builder-recheio-${slug(r)}`}
                    onClick={() => setRecheio(recheio === r ? null : r)}
                    className={chipClass(recheio === r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </Step>

            <Step n="02" title="Escolha a cobertura" hint="o acabamento perfeito">
              <div className="mt-6 flex flex-wrap gap-2.5">
                {COBERTURAS.map((c) => (
                  <button
                    key={c}
                    data-testid={`builder-cobertura-${slug(c)}`}
                    onClick={() => setCobertura(cobertura === c ? null : c)}
                    className={chipClass(cobertura === c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Step>

            <Step n="03" title="Quantos quilos?" hint={`a ${brl(PRICE_PER_KG)}/kg`}>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <button
                    data-testid="builder-kg-minus"
                    onClick={() => setKg((k) => Math.max(0.5, +(k - 0.5).toFixed(1)))}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
                    disabled={kg <= 0.5}
                    aria-label="Diminuir quantidade"
                  >
                    <Minus size={16} />
                  </button>
                  <span
                    data-testid="builder-kg-value"
                    className="w-20 text-center font-display text-3xl font-medium text-ink"
                  >
                    {kgFmt(kg)}
                  </span>
                  <button
                    data-testid="builder-kg-plus"
                    onClick={() => setKg((k) => Math.min(5, +(k + 0.5).toFixed(1)))}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
                    disabled={kg >= 5}
                    aria-label="Aumentar quantidade"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRESETS.map((p) => (
                    <button
                      key={p}
                      data-testid={`builder-preset-${slug(`${p}kg`)}`}
                      onClick={() => setKg(p)}
                      className={`chip rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.14em] ${
                        kg === p ? "bg-ink text-cream" : "border border-ink/15 text-cocoa hover:border-gold hover:text-gold"
                      }`}
                    >
                      {kgFmt(p)}
                    </button>
                  ))}
                </div>
              </div>
            </Step>
          </div>

          <Reveal delay={0.15}>
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-gold/35 bg-cream shadow-soft">
              <img src={IMAGES.slice} alt="Fatia de bolo" className="h-36 w-full object-cover" />
              <div className="p-7 sm:p-8">
              <h3 className="font-display text-2xl text-ink">Seu bolo</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt className="uppercase tracking-[0.18em] text-cocoa">Recheio</dt>
                  <dd
                    data-testid="builder-summary-recheio"
                    className={`text-right ${recheio ? 'text-ink' : 'italic text-cocoa/60'}`}
                  >
                    {recheio || 'escolha ao lado'}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt className="uppercase tracking-[0.18em] text-cocoa">Cobertura</dt>
                  <dd
                    data-testid="builder-summary-cobertura"
                    className={`text-right ${cobertura ? 'text-ink' : 'italic text-cocoa/60'}`}
                  >
                    {cobertura || 'escolha ao lado'}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt className="uppercase tracking-[0.18em] text-cocoa">Tamanho</dt>
                  <dd className="text-right text-ink">{kgFmt(kg)}</dd>
                </div>
              </dl>

              {/* 🆕 AVISO DE RETIRADA */}
              <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {PICKUP_INFO.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-cocoa">
                  {PICKUP_INFO.long}
                </p>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-cocoa">Total</span>
                <motion.span
                  key={price}
                  data-testid="builder-price"
                  initial={{ opacity: 0.4, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-display text-4xl font-medium text-ink"
                >
                  {brl(price)}
                </motion.span>
              </div>

              <button
                data-testid="builder-add-to-cart-btn"
                onClick={add}
                disabled={!ready}
                className="btn-gold mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                <ShoppingBag size={17} />
                Adicionar ao pedido
              </button>
              <p
                data-testid="builder-add-hint"
                className={`mt-3 text-center text-xs text-cocoa transition-opacity ${
                  ready ? 'opacity-0' : 'opacity-100'
                }`}
              >
                Escolha recheio e cobertura para adicionar
              </p>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
