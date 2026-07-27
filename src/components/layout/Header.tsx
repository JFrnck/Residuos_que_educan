import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contact, nav, social } from "@/data/site";
import { cn } from "@/lib/cn";

const SOCIAL_ICONS = {
  X: FaXTwitter,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedinIn,
} as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden bg-sea px-6 py-2 text-[13px] text-cream lg:block">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href={`mailto:${contact.email}`} className="text-cream hover:text-lime">
              {contact.email}
            </a>
            <a href={`tel:${contact.phoneTel}`} className="text-cream hover:text-lime">
              {contact.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {social.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-lime hover:text-white"
                >
                  <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-60 border-b border-grass/15 bg-cream/95 backdrop-blur-sm transition-shadow",
          scrolled && "shadow-[0_2px_14px_rgba(0,75,74,0.08)]",
        )}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
          <NavLink to="/" className="flex shrink-0 items-center">
            <Logo />
          </NavLink>

          <nav className="hidden items-center gap-5 text-[14.5px] font-semibold lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "border-b-2 border-transparent py-1.5 text-ink hover:text-grass",
                    isActive && "border-lime text-grass",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button to="/aliados" className="hidden shrink-0 lg:inline-flex">
            Donar Residuos
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-xl border border-grass/30 lg:hidden"
          >
            <span className="block h-[2.5px] w-6 rounded-full bg-grass" />
            <span className="block h-[2.5px] w-6 rounded-full bg-grass" />
            <span className="block h-[2.5px] w-6 rounded-full bg-grass" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
