import { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { PatternBackground } from "@/components/brand/PatternBackground";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/data/site";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const panelVariants: Variants = {
  closed: { opacity: 0, y: -18, scale: 0.98 },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.045,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const reducedMotionVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.15 } },
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

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
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      inert={!open}
      initial={false}
      animate={open ? "open" : "closed"}
      variants={shouldReduceMotion ? reducedMotionVariants : panelVariants}
      className={cn(
        "fixed inset-0 z-90 overflow-y-auto bg-cream px-6 pt-6 pb-14 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <PatternBackground opacity={0.12} />
      <div className="relative mx-auto flex max-w-md flex-col">
        <motion.div variants={itemVariants} className="mb-9 flex items-center justify-between">
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
        </motion.div>
        <nav className="flex flex-col gap-1.5">
          {nav.map((item) => (
            <motion.div key={item.to} variants={itemVariants}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "block border-b border-grass/15 py-3.5 text-2xl font-extrabold tracking-tight text-grass",
                    isActive && "text-sea",
                  )
                }
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        <motion.div variants={itemVariants}>
          <Button to="/aliados" onClick={onClose} size="lg" className="mt-8 w-full text-center">
            Donar Residuos
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
