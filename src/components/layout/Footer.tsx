import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { PatternBackground } from "@/components/brand/PatternBackground";
import { Logo } from "@/components/brand/Logo";
import { contact, legalIdentity, legalRoutes, nav, social, closingLine } from "@/data/site";

const SOCIAL_ICONS = {
  X: FaXTwitter,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedinIn,
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sea px-6 pt-16 pb-6 text-cream">
      <PatternBackground opacity={0.06} />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="blanco" className="mb-4 text-xl" />
          <p className="text-[13.5px] leading-relaxed text-cream/85">
            Proyecto ejecutado por: {legalIdentity.orgName}
            <br />
            {legalIdentity.orgKind}
            <br />
            {legalIdentity.ruc}
            <br />
            {legalIdentity.donationEntity}
            <br />
            {legalIdentity.resolution}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold tracking-wide text-lime uppercase">
            Enlaces rápidos
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className="text-cream/90 hover:text-lime">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-extrabold tracking-wide text-lime uppercase">Contacto</h2>
          <ul className="flex flex-col gap-2.5 text-sm text-cream/90">
            <li>
              <a href={contact.whatsappUrl} target="_blank" rel="noopener" className="hover:text-lime">
                WhatsApp: {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-lime">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneTel}`} className="hover:text-lime">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>{contact.address}</li>
          </ul>
          <div className="mt-4 flex gap-4">
            {social.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
              return (
                <a key={label} href={href} aria-label={label} className="text-lime hover:text-white">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-start">
          <p className="text-lg leading-snug font-semibold text-white italic">“{closingLine}”</p>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-[1180px] flex-col gap-3 border-t border-white/15 pt-6 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Residuos que Educan — ONG Ecotec Perú. Todos los derechos reservados.</p>
        <div className="flex gap-5">
          {legalRoutes.map((item) => (
            <NavLink key={item.to} to={item.to} className="hover:text-lime">
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
