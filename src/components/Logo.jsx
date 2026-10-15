export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 42 L32 15 L52 42"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 34.5 Q22 30.5 26.5 34.5 T35.5 34.5 T44.5 34.5"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path d="M8 49 H56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="9" r="3.4" fill="currentColor" />
  </svg>
);

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className={`h-9 w-9 ${light ? "text-gold-pale" : "text-gold"}`} />
      <span className="leading-none">
        <span
          className={`block font-display text-2xl font-medium tracking-tight ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          Lubecale
        </span>
        <span
          className={`mt-1 block text-[10px] uppercase tracking-[0.32em] ${
            light ? "text-gold-pale/80" : "text-cocoa"
          }`}
        >
          Bolos artesanais
        </span>
      </span>
    </span>
  );
}
