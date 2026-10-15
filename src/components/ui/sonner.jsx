// src/components/ui/sonner.jsx
import { Toaster as Sonner } from "sonner";

export function Toaster(props) {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-ink group-[.toaster]:border-gold-border/40 group-[.toaster]:shadow-soft",
          description: "group-[.toast]:text-ink-muted",
          actionButton: "group-[.toast]:bg-gold group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-cream group-[.toast]:text-ink-muted",
        },
      }}
      {...props}
    />
  );
}