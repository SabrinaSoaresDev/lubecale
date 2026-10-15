import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMAGES, PRICE_PER_KG, brl } from "@/data/menu";

const EASE = [0.22, 1, 0.36, 1];

const line = (delay) => ({
  initial: { y: "112%" },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: EASE },
});

export default function Hero({ onNavigate }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section id="top" ref={ref} className="grain relative overflow-hidden bg-cream pt-[76px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] rounded-full border border-gold/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-[560px] w-[560px] rounded-full border border-gold/15"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10 lg:px-12 lg:pb-28 lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.34em] text-gold"
          >
            <span className="inline-block h-px w-10 bg-current" />
            Lubecale · Bolos artesanais
          </motion.p>

          <h1
            data-testid="hero-title"
            className="font-display text-5xl font-light leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" {...line(0.15)}>
                Bolos artesanais,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block italic text-gold" {...line(0.28)}>
                camada por camada,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span className="block" {...line(0.41)}>
                do seu jeito.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
            className="mt-7 max-w-md text-base leading-relaxed text-cocoa sm:text-lg"
          >
            Você escolhe o recheio, a cobertura e os quilos — a gente transforma em festa.
            Pedido direto pelo WhatsApp, sem burocracia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-cta-builder"
              onClick={() => onNavigate("#montar-bolo")}
              className="btn-ink rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream"
            >
              Montar meu bolo
            </button>
            <button
              data-testid="hero-cta-sobre"
              onClick={() => onNavigate("#sobre")}
              className="btn-gold rounded-full border border-gold/50 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold hover:text-cream"
            >
              Conhecer a loja
            </button>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div style={{ y: yImg }} className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-4 translate-y-4 rounded-b-[2rem] rounded-t-full border border-gold/45"
            />
            <div className="relative overflow-hidden rounded-b-[2rem] rounded-t-full shadow-soft">
              <motion.img
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
                src={IMAGES.hero}
                alt="Bolo artesanal com frutas vermelhas"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            style={{ y: yCard }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
            className="absolute -left-4 bottom-14 sm:-left-10"
          >
            <div
              data-testid="hero-price-badge"
              className="animate-floaty rounded-2xl border border-gold/40 bg-cream/95 px-6 py-4 shadow-lift backdrop-blur"
            >
              <p className="font-display text-3xl font-medium text-ink">{brl(PRICE_PER_KG)}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.26em] text-cocoa">o quilo</p>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: EASE }}
            src={IMAGES.heroSmall}
            alt="Fatia de bolo artesanal"
            className="absolute -right-3 -top-6 hidden h-40 w-32 -rotate-6 rounded-2xl border-4 border-cream object-cover shadow-lift sm:block lg:-right-8"
          />
        </div>
      </div>

      <motion.button
        onClick={() => onNavigate("#montar-bolo")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cocoa lg:flex"
        aria-label="Rolar para o cardápio"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
