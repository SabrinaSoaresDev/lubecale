import { ArrowUp, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Logo, { LogoMark } from "@/components/Logo";
import { Reveal, Eyebrow } from "@/components/Reveal";
import {
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
  INSTAGRAM,
  INSTAGRAM_LINK,
  PRICE_PER_KG,
  brl,
} from "@/data/menu";

export default function Footer({ onNavigate }) {
  return (
    <footer id="contato" className="grain relative overflow-hidden bg-choc py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full border border-gold/15"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 border-b border-cream/10 pb-14 lg:flex-row lg:items-end">
            <div>
              <Eyebrow light>Fale com a gente</Eyebrow>
              <h2 className="max-w-xl font-display text-4xl font-light leading-tight text-cream sm:text-5xl">
                Bora adoçar a <span className="italic text-gold-pale">sua festa?</span>
              </h2>
              <p className="mt-5 max-w-md text-cream/70">
                Chame no WhatsApp, conte o momento e monte seu bolo — {brl(PRICE_PER_KG)} o quilo,
                do jeito que você pedir.
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold-pale">
                <span className="inline-block h-px w-6 bg-current" />
                Somente retirada · agende data e hora
              </p>
            </div>
            <a
              data-testid="footer-whatsapp-link"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream"
            >
              <MessageCircle size={18} />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-center">
          <Logo light />
          <div className="flex items-center gap-6">
            <a
              data-testid="footer-instagram-link"
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-gold-pale"
            >
              <FaInstagram size={17} />
              {INSTAGRAM}
            </a>
            <button
              data-testid="footer-back-to-top"
              onClick={() => onNavigate("#top")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold-pale hover:text-gold-pale"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <p className="border-t border-cream/10 pt-8 text-xs uppercase tracking-[0.24em] text-cream/40">
          © {new Date().getFullYear()} Lubecale — Bolos artesanais
        </p>
      </div>
    </footer>
  );
}