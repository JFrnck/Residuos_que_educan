import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepList } from "@/components/ui/StepList";
import { FormField, formInputClasses } from "@/components/ui/FormField";
import { ImageWithCaption } from "@/components/ui/ImageWithCaption";
import { PatternBackground } from "@/components/brand/PatternBackground";
import { innovationClassroomEquipment, schoolParticipationSteps } from "@/data/steps";
import { regiones } from "@/data/regiones";
import { contact } from "@/data/site";
import { registroInstitucionSchema, type RegistroInstitucionInput } from "@/lib/schemas";
import { submitForm, type SubmitState } from "@/lib/submitForm";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function RecibirDonacion() {
  useDocumentTitle(
    "Recibir Donación",
    "Registra tu institución educativa pública y accede a un Aula de Innovación sin costo.",
  );

  const [status, setStatus] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistroInstitucionInput>({
    resolver: zodResolver(registroInstitucionSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegistroInstitucionInput) => {
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
      <section className="relative overflow-hidden bg-cream px-6 pt-16 pb-16 text-center">
        <PatternBackground opacity={0.12} />
        <div className="relative mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">
            Recibir donación
          </p>
          <h1 className="mb-5 text-[clamp(2.1rem,4.8vw,3.5rem)] font-extrabold tracking-tight text-grass">
            ¿Tu institución educativa necesita tecnología?
          </h1>
          <p className="mb-9 text-lg leading-relaxed text-ink/80">
            Forma parte de la red de colegios que transforman residuos en oportunidades para
            miles de estudiantes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#formulario" size="lg">
              Regístrate ahora
            </Button>
            <Button href={contact.whatsappUrl} target="_blank" rel="noopener" variant="secondary" size="lg">
              Enviar mensaje por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Qué recibe tu institución" title="El Aula de Innovación completa" />
          <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {innovationClassroomEquipment.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-grass/15 bg-cream p-4"
              >
                <span aria-hidden="true" className="mt-1.5 h-[3px] w-4 shrink-0 rounded-full bg-lime" />
                <span className="text-[15px] leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
            No entregamos equipos y desaparecemos: acompañamiento pedagógico continuo para cada
            docente.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader kicker="Muy sencillo" title="Participar es muy sencillo" />
          <StepList steps={schoolParticipationSteps} className="mt-9" />
          <p className="mt-8 inline-block rounded-full bg-lime/25 px-5 py-2.5 text-sm font-extrabold text-grass">
            La inscripción al programa es completamente gratuita.
          </p>
        </div>
      </section>

      <section id="formulario" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-[1180px] grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              kicker="Registro"
              title="Registro de institución educativa"
              as="h2"
            />

            {status === "success" ? (
              <Card tone="cream" className="mt-9">
                <h3 className="mb-3 text-xl font-extrabold text-grass">
                  Recibimos el registro de tu institución.
                </h3>
                <p className="mb-6 text-[15.5px] leading-relaxed">
                  Te contactaremos en un plazo máximo de 5 días hábiles.
                </p>
                <Button href={contact.whatsappUrl} target="_blank" rel="noopener">
                  Escribir por WhatsApp
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-9 flex flex-col gap-5">
                <FormField id="nombreInstitucion" label="Nombre de la institución educativa" required error={errors.nombreInstitucion?.message}>
                  <input
                    id="nombreInstitucion"
                    className={formInputClasses}
                    aria-invalid={!!errors.nombreInstitucion}
                    aria-describedby={errors.nombreInstitucion ? "nombreInstitucion-error" : undefined}
                    {...register("nombreInstitucion")}
                  />
                </FormField>

                <FormField id="codigoModular" label="Código modular" hint="Opcional">
                  <input id="codigoModular" className={formInputClasses} {...register("codigoModular")} />
                </FormField>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField id="nivel" label="Nivel" required error={errors.nivel?.message}>
                    <select
                      id="nivel"
                      className={formInputClasses}
                      defaultValue=""
                      aria-invalid={!!errors.nivel}
                      aria-describedby={errors.nivel ? "nivel-error" : undefined}
                      {...register("nivel")}
                    >
                      <option value="" disabled>
                        Selecciona un nivel
                      </option>
                      <option value="Inicial">Inicial</option>
                      <option value="Primaria">Primaria</option>
                      <option value="Secundaria">Secundaria</option>
                      <option value="Varios">Varios</option>
                    </select>
                  </FormField>

                  <FormField id="region" label="Región" required error={errors.region?.message}>
                    <select
                      id="region"
                      className={formInputClasses}
                      defaultValue=""
                      aria-invalid={!!errors.region}
                      aria-describedby={errors.region ? "region-error" : undefined}
                      {...register("region")}
                    >
                      <option value="" disabled>
                        Selecciona una región
                      </option>
                      {regiones.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField id="provincia" label="Provincia" required error={errors.provincia?.message}>
                    <input
                      id="provincia"
                      className={formInputClasses}
                      aria-invalid={!!errors.provincia}
                      aria-describedby={errors.provincia ? "provincia-error" : undefined}
                      {...register("provincia")}
                    />
                  </FormField>
                  <FormField id="distrito" label="Distrito" required error={errors.distrito?.message}>
                    <input
                      id="distrito"
                      className={formInputClasses}
                      aria-invalid={!!errors.distrito}
                      aria-describedby={errors.distrito ? "distrito-error" : undefined}
                      {...register("distrito")}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField id="nombreDirector" label="Nombre del director o responsable" required error={errors.nombreDirector?.message}>
                    <input
                      id="nombreDirector"
                      className={formInputClasses}
                      aria-invalid={!!errors.nombreDirector}
                      aria-describedby={errors.nombreDirector ? "nombreDirector-error" : undefined}
                      {...register("nombreDirector")}
                    />
                  </FormField>
                  <FormField id="cargo" label="Cargo" required error={errors.cargo?.message}>
                    <input
                      id="cargo"
                      className={formInputClasses}
                      aria-invalid={!!errors.cargo}
                      aria-describedby={errors.cargo ? "cargo-error" : undefined}
                      {...register("cargo")}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField id="email" label="Correo electrónico" required error={errors.email?.message}>
                    <input
                      id="email"
                      type="email"
                      className={formInputClasses}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email")}
                    />
                  </FormField>
                  <FormField id="telefono" label="Teléfono / WhatsApp" required error={errors.telefono?.message}>
                    <input
                      id="telefono"
                      type="tel"
                      inputMode="numeric"
                      className={formInputClasses}
                      aria-invalid={!!errors.telefono}
                      aria-describedby={errors.telefono ? "telefono-error" : undefined}
                      {...register("telefono")}
                    />
                  </FormField>
                </div>

                <FormField
                  id="numeroEstudiantes"
                  label="Número aproximado de estudiantes"
                  required
                  error={errors.numeroEstudiantes?.message}
                >
                  <input
                    id="numeroEstudiantes"
                    type="number"
                    min={1}
                    className={formInputClasses}
                    aria-invalid={!!errors.numeroEstudiantes}
                    aria-describedby={errors.numeroEstudiantes ? "numeroEstudiantes-error" : undefined}
                    {...register("numeroEstudiantes")}
                  />
                </FormField>

                <FormField
                  id="necesidadTecnologica"
                  label="Necesidad tecnológica principal"
                  required
                  error={errors.necesidadTecnologica?.message}
                >
                  <textarea
                    id="necesidadTecnologica"
                    rows={4}
                    className={formInputClasses}
                    aria-invalid={!!errors.necesidadTecnologica}
                    aria-describedby={errors.necesidadTecnologica ? "necesidadTecnologica-error" : undefined}
                    {...register("necesidadTecnologica")}
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
                  {isSubmitting ? "Enviando…" : "Registrar institución"}
                </Button>
              </form>
            )}
          </div>

          <ImageWithCaption
            src="/images/foto-a.jpg"
            alt="Campaña de acopio en colegio aliado"
            caption="Campaña de acopio en colegio aliado"
            aspect="auto"
            className="h-full min-h-[320px]"
          />
        </div>
      </section>
    </>
  );
}
