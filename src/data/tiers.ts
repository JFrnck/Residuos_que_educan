export const tiers = [
  {
    slug: "recicla",
    number: "01",
    level: "Nivel 1 — Entrada / Volumen",
    name: "Aliado Recicla",
    who: "Empresa que dona residuos sólidos valorizables.",
    features: [
      "Trazabilidad total de cada kilo donado (con Kolekt)",
      "Certificado de recuperación — válido como crédito ambiental",
      "Sello con código QR, para usar en oficina y comunicación",
      "Reporte básico de impacto (kg valorizados)",
      "Presencia en la web y redes de Residuos que Educan",
      "Aporte base al cumplimiento de la Ley REP",
    ],
    inheritsFrom: null as string | null,
  },
  {
    slug: "impacta",
    number: "02",
    level: "Nivel 2 — Estratégico",
    name: "Aliado Impacta",
    who: "Empresa que dona residuos + un aporte económico.",
    features: [
      "Indicadores ESG listos para tus reportes internos",
      "Reporte de impacto ampliado — ambiental y educativo",
      "Visibilidad destacada, no solo en el listado colectivo",
      "Participación en contenido — historias y casos reales",
      "Invitación a eventos y activaciones del proyecto",
      "Voluntariado corporativo: mentorías y talleres",
    ],
    inheritsFrom: "Todo lo anterior, más:",
  },
  {
    slug: "transforma",
    number: "03",
    level: "Nivel 3 — Premium",
    name: "Aliado Transforma",
    who: "Empresa que financia o apadrina un Aula de Innovación completa.",
    features: [
      "Naming del aula — branding exclusivo con el nombre de tu empresa",
      "Exclusividad visual: solo tu logo en ese espacio",
      "Implementación completa en un colegio de tu zona de influencia",
      "Evento de inauguración con prensa",
      "Caso de éxito completo: video, nota de prensa y storytelling",
      "Relación directa con la comunidad y prioridad de renovación anual",
      'Ranking anual y reconocimiento "Empresa que Transforma la Educación en Perú"',
    ],
    inheritsFrom: "Todo lo anterior, más:",
  },
] as const;

export type TierSlug = (typeof tiers)[number]["slug"];

export const tierOptions = [
  { value: "recicla", label: "Aliado Recicla" },
  { value: "impacta", label: "Aliado Impacta" },
  { value: "transforma", label: "Aliado Transforma" },
  { value: "no-se", label: "Aún no lo sé" },
] as const;
