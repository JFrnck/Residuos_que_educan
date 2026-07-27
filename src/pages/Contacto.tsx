import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useSearchParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField, formInputClasses } from "@/components/ui/FormField";
import { contact, legalIdentity, social } from "@/data/site";
import { tierOptions } from "@/data/tiers";
import { contactoSchema, type ContactoInput } from "@/lib/schemas";
import { submitForm, type SubmitState } from "@/lib/submitForm";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const SOCIAL_ICONS = {
  X: FaXTwitter,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
  LinkedIn: FaLinkedinIn,
} as const;

const soyOptions = ["Empresa", "Institución educativa", "Otro"] as const;

export default function Contacto() {
  useDocumentTitle("Contacto", "Escríbenos para ser aliado de Residuos que Educan o resolver tus dudas.");

  const [searchParams] = useSearchParams();
  const nivelParam = searchParams.get("nivel");
  const validNivel = tierOptions.some((option) => option.value === nivelParam)
    ? (nivelParam as ContactoInput["nivelInteres"])
    : undefined;

  const [status, setStatus] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactoInput>({
    resolver: zodResolver(contactoSchema),
    mode: "onBlur",
    defaultValues: {
      soy: validNivel ? "Empresa" : undefined,
      nivelInteres: validNivel,
    },
  });

  const soy = useWatch({ control, name: "soy" });

  const onSubmit = async (data: ContactoInput) => {
    setStatus("submitting");
    try {
      await submitForm(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-cream px-6 pt-16 pb-14 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">Contacto</p>
          <h1 className="mb-4 text-[clamp(2.1rem,4.8vw,3.5rem)] font-extrabold tracking-tight text-grass">
            ¿Deseas ser parte del cambio?
          </h1>
          <p className="text-lg text-ink/75">Estamos listos para ayudarte.</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            {status === "success" ? (
              <Card tone="cream">
                <h2 className="mb-3 text-xl font-extrabold text-grass">¡Mensaje enviado!</h2>
                <p className="mb-6 text-[15.5px] leading-relaxed">
                  Gracias por escribirnos. Te contactaremos a la brevedad.
                </p>
                <Button href={contact.whatsappUrl} target="_blank" rel="noopener">
                  Escribir por WhatsApp
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField id="nombre" label="Nombre" required error={errors.nombre?.message}>
                    <input
                      id="nombre"
                      className={formInputClasses}
                      aria-invalid={!!errors.nombre}
                      aria-describedby={errors.nombre ? "nombre-error" : undefined}
                      {...register("nombre")}
                    />
                  </FormField>
                  <FormField
                    id="institucionEmpresa"
                    label="Institución o Empresa"
                    required
                    error={errors.institucionEmpresa?.message}
                  >
                    <input
                      id="institucionEmpresa"
                      className={formInputClasses}
                      aria-invalid={!!errors.institucionEmpresa}
                      aria-describedby={errors.institucionEmpresa ? "institucionEmpresa-error" : undefined}
                      {...register("institucionEmpresa")}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField id="correo" label="Correo" required error={errors.correo?.message}>
                    <input
                      id="correo"
                      type="email"
                      className={formInputClasses}
                      aria-invalid={!!errors.correo}
                      aria-describedby={errors.correo ? "correo-error" : undefined}
                      {...register("correo")}
                    />
                  </FormField>
                  <FormField id="telefono" label="Teléfono" required error={errors.telefono?.message}>
                    <input
                      id="telefono"
                      type="tel"
                      className={formInputClasses}
                      aria-invalid={!!errors.telefono}
                      aria-describedby={errors.telefono ? "telefono-error" : undefined}
                      {...register("telefono")}
                    />
                  </FormField>
                </div>

                <fieldset>
                  <legend className="mb-2 text-sm font-bold text-grass">
                    Soy <span className="text-sea">*</span>
                  </legend>
                  <div className="flex flex-wrap gap-5">
                    {soyOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 text-sm text-ink/85">
                        <input
                          type="radio"
                          value={option}
                          className="h-4 w-4 accent-grass"
                          {...register("soy")}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.soy && (
                    <p role="alert" className="mt-2 text-xs font-semibold text-red-700">
                      {errors.soy.message}
                    </p>
                  )}
                </fieldset>

                {soy === "Empresa" && (
                  <FormField
                    id="nivelInteres"
                    label="Nivel de interés"
                    error={errors.nivelInteres?.message}
                  >
                    <select
                      id="nivelInteres"
                      className={formInputClasses}
                      defaultValue=""
                      aria-invalid={!!errors.nivelInteres}
                      aria-describedby={errors.nivelInteres ? "nivelInteres-error" : undefined}
                      {...register("nivelInteres")}
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      {tierOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                )}

                <FormField id="mensaje" label="Mensaje" required error={errors.mensaje?.message}>
                  <textarea
                    id="mensaje"
                    rows={5}
                    className={formInputClasses}
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                    {...register("mensaje")}
                  />
                </FormField>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-grass"
                    aria-invalid={!!errors.aceptaPrivacidad}
                    aria-describedby={errors.aceptaPrivacidad ? "aceptaPrivacidad-error" : undefined}
                    {...register("aceptaPrivacidad")}
                  />
                  <span>
                    Acepto la{" "}
                    <a href="/politica-privacidad" className="font-semibold text-grass underline">
                      Política de Privacidad
                    </a>
                    .
                  </span>
                </label>
                {errors.aceptaPrivacidad && (
                  <p id="aceptaPrivacidad-error" role="alert" className="-mt-3 text-xs font-semibold text-red-700">
                    {errors.aceptaPrivacidad.message}
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="text-sm font-semibold text-red-700">
                    Ocurrió un error al enviar el formulario. Inténtalo nuevamente.
                  </p>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
                  {isSubmitting ? "Enviando…" : "Enviar"}
                </Button>
              </form>
            )}
          </div>

          <div>
            <Card tone="sea" className="mb-6">
              <ul className="flex flex-col gap-4 text-[15px]">
                <li>
                  <span className="mb-1 block text-xs font-bold tracking-wide text-lime uppercase">
                    WhatsApp
                  </span>
                  <a href={contact.whatsappUrl} target="_blank" rel="noopener" className="hover:text-lime">
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs font-bold tracking-wide text-lime uppercase">
                    Correo
                  </span>
                  <a href={`mailto:${contact.email}`} className="hover:text-lime">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs font-bold tracking-wide text-lime uppercase">
                    Teléfono
                  </span>
                  <a href={`tel:${contact.phoneTel}`} className="hover:text-lime">
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="mb-1 block text-xs font-bold tracking-wide text-lime uppercase">
                    Dirección
                  </span>
                  {contact.address}
                </li>
              </ul>
              <div className="mt-6 flex gap-4">
                {social.map(({ label, href }) => {
                  const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
                  return (
                    <a key={label} href={href} aria-label={label} className="text-lime hover:text-white">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 border-t border-white/15 pt-5 text-xs leading-relaxed text-cream/75">
                {legalIdentity.orgName}
                <br />
                {legalIdentity.ruc} · {legalIdentity.donationEntity}
              </div>
            </Card>

            <Card tone="cream">
              <h2 className="mb-2 text-lg font-extrabold text-grass">Reunión de 15–20 minutos</h2>
              <p className="mb-5 text-sm leading-relaxed text-ink/75">
                Te presentamos el modelo a detalle y resolvemos tus preguntas.
              </p>
              <Button href={contact.whatsappUrl} target="_blank" rel="noopener">
                Escribir por WhatsApp
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
