import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
  <p
    className={`mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] ${
      light ? "text-gold-pale" : "text-gold"
    }`}
  >
    <span className="inline-block h-px w-8 bg-current" />
    {children}
  </p>
);

export default Reveal;
