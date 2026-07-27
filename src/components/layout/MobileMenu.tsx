import { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { PatternBackground } from "@/components/brand/PatternBackground";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      inert={!open}
      className={cn(
        "fixed inset-0 z-90 overflow-y-auto bg-cream px-6 pt-6 pb-14 transition-opacity duration-200 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <PatternBackground opacity={0.12} />
      <div className="relative mx-auto flex max-w-md flex-col">
        <div className="mb-9 flex items-center justify-between">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-grass/30 text-2xl font-bold text-grass"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1.5">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "border-b border-grass/15 py-3.5 text-2xl font-extrabold tracking-tight text-grass",
                  isActive && "text-sea",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/aliados" onClick={onClose} size="lg" className="mt-8 w-full text-center">
          Donar Residuos
        </Button>
      </div>
    </div>
  );
}
