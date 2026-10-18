import { FaInstagram } from "react-icons/fa6";

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Cómo Funciona", to: "/como-funciona" },
  { label: "Beneficios", to: "/beneficios" },
  { label: "Aliados", to: "/aliados" },
  { label: "Recibir Donación", to: "/recibir-donacion" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const contact = {
  email: "direccion@residuosqueeducan.org.pe",
  address: "Calle Melgar 513, Arequipa, Arequipa, Arequipa",
} as const;

// Solo redes con cuenta real: Google verifica que cada enlace lleve a una página existente.
export const social = [
  { label: "Instagram", href: "https://instagram.com/residuosqueeducan", icon: FaInstagram },
] as const;

export const legalIdentity = {
  projectName: "RESIDUOS QUE EDUCAN",
  initiativeOf: "Una iniciativa de ECOTEC PERÚ",
  orgName:
    "Ecotec Perú – Patronato de Educación, Ecología, Economía Social y Tecnología",
  orgKind: "Organización sin fines de lucro",
  ruc: "RUC N.º 20498319352",
  donationEntity: "Entidad Perceptora de Donaciones autorizada por la SUNAT",
  resolution: "Resolución de Intendencia N.º 0590050005705-SUNAT",
} as const;

export const legalRoutes = [
  { label: "Política de Privacidad", to: "/politica-privacidad" },
  { label: "Términos y Condiciones", to: "/terminos" },
] as const;

export const closingLine =
  "Porque invertir en educación es también invertir en el futuro del país.";
