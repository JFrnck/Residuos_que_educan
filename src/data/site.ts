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
  address: "Arequipa, Perú", // TODO: dirección exacta
} as const;

export const social = [
  { label: "X", href: "#" }, // TODO: URL real
  { label: "Facebook", href: "#" }, // TODO: URL real
  { label: "Instagram", href: "#" }, // TODO: URL real
  { label: "YouTube", href: "#" }, // TODO: URL real
  { label: "TikTok", href: "#" }, // TODO: URL real
  { label: "LinkedIn", href: "#" }, // TODO: URL real
] as const;

export const legalIdentity = {
  projectName: "RESIDUOS QUE EDUCAN",
  orgName:
    "ONG Ecotec Perú – Patronato de Educación, Ecología, Economía Social y Tecnología",
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
