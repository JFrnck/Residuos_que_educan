import { FaWhatsapp } from "react-icons/fa6";
import { contact } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      className="fixed right-5 bottom-5 z-70 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-grass shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
