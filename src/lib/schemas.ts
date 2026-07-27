import { z } from "zod";
import { regiones } from "@/data/regiones";

const phoneRegex = /^\d{9}$/;

export const registroInstitucionSchema = z.object({
  nombreInstitucion: z.string().min(1, "Ingresa el nombre de la institución educativa."),
  codigoModular: z.string().optional(),
  nivel: z.enum(["Inicial", "Primaria", "Secundaria", "Varios"], {
    errorMap: () => ({ message: "Selecciona el nivel educativo." }),
  }),
  region: z.enum(regiones, {
    errorMap: () => ({ message: "Selecciona una región." }),
  }),
  provincia: z.string().min(1, "Ingresa la provincia."),
  distrito: z.string().min(1, "Ingresa el distrito."),
  nombreDirector: z.string().min(1, "Ingresa el nombre del director o responsable."),
  cargo: z.string().min(1, "Ingresa el cargo."),
  email: z.string().min(1, "Ingresa un correo electrónico.").email("Ingresa un correo electrónico válido."),
  telefono: z.string().regex(phoneRegex, "Ingresa un teléfono/WhatsApp válido de 9 dígitos."),
  numeroEstudiantes: z.coerce
    .number({ invalid_type_error: "Ingresa el número aproximado de estudiantes." })
    .int("Ingresa un número entero.")
    .positive("Ingresa un número mayor a 0."),
  necesidadTecnologica: z
    .string()
    .min(20, "Cuéntanos con más detalle (mínimo 20 caracteres)."),
  aceptaPrivacidad: z
    .boolean()
    .refine((value) => value === true, "Debes aceptar la Política de Privacidad."),
});

export type RegistroInstitucionInput = z.infer<typeof registroInstitucionSchema>;

export const contactoSchema = z
  .object({
    nombre: z.string().min(1, "Ingresa tu nombre."),
    institucionEmpresa: z.string().min(1, "Ingresa tu institución o empresa."),
    correo: z.string().min(1, "Ingresa un correo electrónico.").email("Ingresa un correo electrónico válido."),
    telefono: z.string().min(6, "Ingresa un teléfono válido."),
    soy: z.enum(["Empresa", "Institución educativa", "Otro"], {
      errorMap: () => ({ message: "Selecciona una opción." }),
    }),
    nivelInteres: z.enum(["recicla", "impacta", "transforma", "no-se"]).optional(),
    mensaje: z.string().min(1, "Escribe tu mensaje."),
    aceptaPrivacidad: z
      .boolean()
      .refine((value) => value === true, "Debes aceptar la Política de Privacidad."),
  })
  .refine((data) => data.soy !== "Empresa" || Boolean(data.nivelInteres), {
    message: "Selecciona tu nivel de interés.",
    path: ["nivelInteres"],
  });

export type ContactoInput = z.infer<typeof contactoSchema>;
