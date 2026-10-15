import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_LINK } from "@/data/menu";

const LINKS = [
  { label: "Sobre a loja", hash: "#sobre", id: "nav-link-sobre" },
  { label: "Montar bolo", hash: "#montar-bolo", id: "nav-link-builder" },
  { label: "Contato", hash: "#contato", id: "nav-link-contato" },
];

export default function Navbar({ cartCount, onCartOpen, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          data-testid="nav-brand-logo"
          onClick={() => onNavigate("#top")}
          className="cursor-pointer"
          aria-label="Ir para o início"
        >
          <Logo />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.hash}
              data-testid={l.id}
              onClick={() => onNavigate(l.hash)}
              className="group relative text-sm uppercase tracking-[0.18em] text-cocoa transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="nav-whatsapp-link"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-cream sm:flex"
          >
            <MessageCircle  size={18} />
          </a>

          <button
            data-testid="nav-cart-button"
            onClick={onCartOpen}
            className="btn-ink relative flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-cream"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={17} />
            <span className="hidden text-sm uppercase tracking-[0.14em] sm:inline">Pedido</span>
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                data-testid="cart-count-badge"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
                className="absolute -right-1.5 -top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-gold px-1.5 text-xs font-semibold text-cream"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
