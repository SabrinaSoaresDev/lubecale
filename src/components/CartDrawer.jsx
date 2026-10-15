import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, ShoppingBag, CakeSlice, CalendarDays, Clock, MapPin } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { brl, kgFmt, PICKUP_INFO, HORARIOS } from "@/data/menu";

const EASE = [0.22, 1, 0.36, 1];

export default function CartDrawer({ open, items, onClose, onRemove, onClear }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const total = items.reduce((s, it) => s + it.price, 0);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const ready = name.trim() && date && time;

  const send = () => {
    if (!ready) return;
    const link = buildWhatsAppLink(items, { name, notes, date, time });
    window.open(link, "_blank", "noopener,noreferrer");
    onClear();
    onClose();
    setName("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            data-testid="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
          />
          <motion.aside
            data-testid="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: EASE }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-gold/30 bg-cream"
            aria-label="Seu pedido"
          >
            <div className="flex items-center justify-between border-b border-gold/25 px-6 py-5">
              <h2 className="flex items-center gap-3 font-display text-2xl text-ink">
                <ShoppingBag size={20} className="text-gold" />
                Seu pedido
                {items.length > 0 && (
                  <span className="text-sm font-sans uppercase tracking-[0.2em] text-cocoa">
                    · {items.length} {items.length === 1 ? "item" : "itens"}
                  </span>
                )}
              </h2>
              <button
                data-testid="cart-close-button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
                aria-label="Fechar carrinho"
              >
                <X size={18} />
              </button>
            </div>

            <div data-lenis-prevent className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <CakeSlice size={30} strokeWidth={1.4} />
                  </span>
                  <p className="mt-6 font-display text-2xl text-ink">Seu carrinho está vazio</p>
                  <p className="mt-2 max-w-60 text-sm text-cocoa">
                    Monte seu bolo escolhendo recheio, cobertura e os quilos.
                  </p>
                  <button
                    data-testid="cart-empty-cta"
                    onClick={onClose}
                    className="btn-gold mt-7 rounded-full border border-gold/50 px-7 py-3 text-sm font-medium uppercase tracking-[0.16em] text-ink hover:bg-gold hover:text-cream"
                  >
                    Voltar ao cardápio
                  </button>
                </div>
              ) : (
                <>
                 

                  <ul className="space-y-4">
                    <AnimatePresence initial={false}>
                      {items.map((it, i) => (
                        <motion.li
                          key={it.id}
                          data-testid="cart-item"
                          layout
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 40 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          className="rounded-2xl border border-ink/10 bg-white/60 p-5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="font-display text-lg leading-snug text-ink">
                              {i + 1}. Bolo artesanal
                            </p>
                            <button
                              data-testid="cart-item-remove"
                              onClick={() => onRemove(it.id)}
                              className="text-cocoa transition-colors hover:text-berry"
                              aria-label="Remover item"
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>
                          <p className="mt-2 text-sm text-cocoa">
                            {kgFmt(it.kg)} · Recheio: {it.recheio} · Cobertura: {it.cobertura}
                          </p>
                          <p className="mt-2 text-right font-display text-xl text-ink">
                            {brl(it.price)}
                          </p>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gold/25 px-6 py-6">
                <div className="space-y-3">
                  <input
                    data-testid="cart-input-customer-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome *"
                    required
                    className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink outline-none placeholder:text-cocoa/60 focus:border-gold focus:shadow-[0_0_0_3px_rgba(176,141,62,0.15)]"
                  />

                  {/* 🆕 DATA E HORA DE RETIRADA (obrigatórios) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <CalendarDays
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                      />
                      <input
                        data-testid="cart-input-date"
                        type="date"
                        value={date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        placeholder="Data *"
                        className="w-full rounded-xl border border-ink/15 bg-white/70 py-3 pl-11 pr-3 text-sm text-ink outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(176,141,62,0.15)]"
                      />
                    </div>
                    <div className="relative">
                      <Clock
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold"
                      />
                      <select
                        data-testid="cart-input-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full appearance-none rounded-xl border border-ink/15 bg-white/70 py-3 pl-11 pr-3 text-sm text-ink outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(176,141,62,0.15)]"
                      >
                        <option value="">Hora *</option>
                        {HORARIOS.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <textarea
                    data-testid="cart-input-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Observações (opcional) — escrita no bolo, cor, tema..."
                    rows={2}
                    className="w-full resize-none rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink outline-none placeholder:text-cocoa/60 focus:border-gold focus:shadow-[0_0_0_3px_rgba(176,141,62,0.15)]"
                  />
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-cocoa">Total</span>
                  <span data-testid="cart-total" className="font-display text-3xl font-medium text-ink">
                    {brl(total)}
                  </span>
                </div>
                 

                <button
                  data-testid="cart-checkout-whatsapp-btn"
                  onClick={send}
                  disabled={!ready}
                  className="btn-gold mt-4 w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                  Enviar pedido no WhatsApp
                </button>

                {!ready && (
                  <p className="mt-3 text-center text-xs text-berry">
                    Preencha nome, data e hora de retirada para continuar.
                  </p>
                )}
                {ready && (
                  <p className="mt-3 text-center text-xs text-cocoa">
                    Você será levado ao WhatsApp com o pedido já escrito.
                  </p>
                )}
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}