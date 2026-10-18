export type ProjectPhoto = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  impact: string[];
  allies: string;
  placeAndYear: string;
  photos: ProjectPhoto[];
};

export const projectsIntro = {
  tagline: "Cuidar el planeta también es cuidar a las personas.",
  text: "Articulamos esfuerzos con empresas, instituciones y profesionales para convertir el compromiso ambiental en oportunidades de bienestar. Estas son algunas de las iniciativas que hemos impulsado para acercar servicios de salud, reconocer a quienes cuidan nuestro entorno y acompañar a nuestra comunidad.",
};

export const projects: Project[] = [
  {
    slug: "mentes-que-florecen",
    title: "Mentes que Florecen",
    tagline: "Escuchar. Cuidar. Acompañar.",
    paragraphs: [
      "En septiembre de 2026, acercamos atención gratuita de salud mental a más de 100 adolescentes y jóvenes en los Balcones del Palacio Municipal de Arequipa. Diez psicólogos atendieron en simultáneo durante una jornada que reunió orientación psicológica, tamizajes de ansiedad, depresión y estrés, y talleres para promover el bienestar emocional.",
      "La campaña se realizó junto con Consultoría Murillo y la Municipalidad Provincial de Arequipa, con SimplyBook.me como aliado tecnológico para gestionar las reservas. El acompañamiento continuó después de la jornada: todos los casos tuvieron seguimiento y cuatro casos identificados como urgentes recibieron apoyo prioritario.",
    ],
    impact: [
      "Más de 100 jóvenes atendidos gratuitamente",
      "10 psicólogos en simultáneo",
      "Seguimiento posterior y atención prioritaria a 4 casos urgentes",
    ],
    allies: "Consultoría Murillo, Municipalidad Provincial de Arequipa y SimplyBook.me.",
    placeAndYear: "Arequipa · Septiembre de 2026.",
    photos: [
      {
        src: "/images/proyectos/mentes-que-florecen/1.webp",
        alt: "Jóvenes y familias participando en la jornada de salud mental en los Balcones del Palacio Municipal de Arequipa",
      },
      {
        src: "/images/proyectos/mentes-que-florecen/2.webp",
        alt: "Taller de bienestar emocional con el mural «Mentes que florecen» en los Balcones del Palacio Municipal",
      },
      {
        src: "/images/proyectos/mentes-que-florecen/3.webp",
        alt: "Equipo de psicólogos y voluntarios de la campaña Mentes que Florecen",
      },
      {
        src: "/images/proyectos/mentes-que-florecen/4.webp",
        alt: "Psicóloga atendiendo a una joven durante la jornada de orientación psicológica",
      },
      {
        src: "/images/proyectos/mentes-que-florecen/5.webp",
        alt: "Módulo de inscripción de la campaña de salud mental en el Palacio Municipal de Arequipa",
      },
    ],
  },
  {
    slug: "heroinas-ambientales",
    title: "Heroínas Ambientales",
    tagline: "Reconocer a las mujeres que cuidan nuestra ciudad cada día.",
    paragraphs: [
      "En el marco del Día de la Mujer, impulsamos un homenaje a más de 20 mujeres recicladoras para reconocer su trabajo y su contribución al cuidado del ambiente. La ceremonia reunió a más de 120 asistentes en un auditorio de la Municipalidad Provincial de Arequipa y puso en el centro a mujeres cuyo esfuerzo merece ser visto, valorado y celebrado.",
      "Junto con la Municipalidad y más de dos empresas privadas arequipeñas, entregamos diplomas de reconocimiento y reunimos obsequios, capacitaciones y experiencias de bienestar para las homenajeadas. Además, realizamos un minidocumental sobre la vida de una mujer recicladora, acercando su historia y su trabajo a la comunidad.",
    ],
    impact: [
      "Más de 20 mujeres homenajeadas",
      "Más de 120 asistentes",
      "Reconocimiento, capacitación y bienestar",
    ],
    allies: "Municipalidad Provincial de Arequipa y empresas privadas arequipeñas.",
    placeAndYear: "Arequipa · 2022.",
    photos: [
      {
        src: "/images/proyectos/heroinas-ambientales/1.webp",
        alt: "Mujeres recicladoras homenajeadas junto al equipo organizador en el auditorio de la Municipalidad de Arequipa",
      },
      {
        src: "/images/proyectos/heroinas-ambientales/2.webp",
        alt: "Una recicladora recibe su diploma de reconocimiento durante la ceremonia",
      },
      {
        src: "/images/proyectos/heroinas-ambientales/3.webp",
        alt: "Recicladoras con sus obsequios durante el homenaje por el Día de la Mujer",
      },
      {
        src: "/images/proyectos/heroinas-ambientales/4.webp",
        alt: "Mujeres recicladoras en un centro de acopio de materiales reciclables",
      },
      {
        src: "/images/proyectos/heroinas-ambientales/5.webp",
        alt: "Foto grupal de las homenajeadas, autoridades y organizadores al cierre de la ceremonia",
      },
    ],
  },
  {
    slug: "ojos-por-el-planeta",
    title: "Ojos por el Planeta",
    tagline: "Botellas que se convirtieron en una oportunidad para ver mejor.",
    paragraphs: [
      "En 2021, impulsamos una campaña de salud visual en Ciudad Municipal, en el distrito de Cerro Colorado, Arequipa. Más de 60 personas adultas mayores accedieron a evaluación de la vista y recibieron lentes a cambio de botellas de plástico, vinculando el cuidado de su salud con una acción a favor del ambiente.",
      "La campaña fue posible gracias al trabajo conjunto con Dot Glasses, de República Checa, y la Comisaría de Ciudad Municipal. Una alianza que llevó atención visual a la comunidad y mostró cómo el reciclaje puede abrir nuevas oportunidades de bienestar.",
    ],
    impact: [
      "Más de 60 adultos mayores beneficiados",
      "Evaluación visual y entrega de lentes",
      "Botellas de plástico como medio de intercambio",
    ],
    allies: "Dot Glasses y Comisaría de Ciudad Municipal.",
    placeAndYear: "Cerro Colorado, Arequipa · 2021.",
    photos: [
      {
        src: "/images/proyectos/ojos-por-el-planeta/1.webp",
        alt: "Integrante de Dot Glasses midiendo la vista a una persona adulta mayor",
      },
      {
        src: "/images/proyectos/ojos-por-el-planeta/2.webp",
        alt: "Módulo de atención visual con el equipo de Dot Glasses en Ciudad Municipal",
      },
      {
        src: "/images/proyectos/ojos-por-el-planeta/3.webp",
        alt: "Evaluación visual a una persona adulta mayor durante la campaña",
      },
      {
        src: "/images/proyectos/ojos-por-el-planeta/4.webp",
        alt: "Medición de la vista con lentes de prueba a un beneficiario de la campaña",
      },
      {
        src: "/images/proyectos/ojos-por-el-planeta/5.webp",
        alt: "Beneficiaria con su bebé junto al banner de Dot Glasses tras recibir sus lentes",
      },
    ],
  },
];

// Acciones que antes se mostraban en Nosotros; se conservan en esta página.
export const otherActions = [
  {
    title: "Implementación tecnológica",
    description:
      "Sistema de videovigilancia para la I.E. Manuel Muñoz Najar. Sistema digital de control de asistencia para las I.E. Nicanor Rivera Cáceres e Independencia Americana.",
  },
  {
    title: "Articulación institucional",
    description:
      "El proyecto ha sido presentado ante especialistas de la Gerencia Regional de Educación de Arequipa, la UGEL Arequipa Norte y la UGEL Arequipa Sur.",
  },
] as const;
