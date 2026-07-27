// TODO: revisión legal
import { legalIdentity, contact } from "@/data/site";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function Terminos() {
  useDocumentTitle(
    "Términos y Condiciones",
    "Términos y condiciones de uso del sitio web de Residuos que Educan.",
  );

  return (
    <section className="bg-cream px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">Legal</p>
        <h1 className="mb-3 text-[clamp(2rem,4.4vw,3rem)] font-extrabold tracking-tight text-grass">
          Términos y Condiciones
        </h1>
        <p className="mb-10 text-sm text-ink/60">Última actualización: 26 de julio de 2026</p>

        <div className="flex flex-col gap-7 text-[16px] leading-relaxed text-ink/85">
          <p>
            El acceso y uso de este sitio web implica la aceptación de los siguientes términos y
            condiciones, establecidos por {legalIdentity.orgName} ({legalIdentity.ruc}) para el
            proyecto Residuos que Educan.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">1. Objeto del sitio</h2>
            <p>
              Este sitio informa sobre el modelo de economía circular de Residuos que Educan y
              permite a empresas y a instituciones educativas públicas iniciar contacto para
              formar parte del programa. No procesa pagos ni donaciones económicas en línea.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">2. Uso de los formularios</h2>
            <p>
              Al enviar los formularios de "Recibir Donación" o "Contacto" declaras que la
              información proporcionada es verdadera y autorizas a {legalIdentity.orgName} a
              contactarte para dar seguimiento a tu solicitud.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">3. Propiedad intelectual</h2>
            <p>
              Los textos, la marca, el isotipo y los materiales gráficos de Residuos que Educan
              son propiedad de {legalIdentity.orgName} y no pueden reproducirse sin autorización
              previa.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">4. Beneficios tributarios</h2>
            <p>
              {legalIdentity.orgName} cuenta con {legalIdentity.donationEntity} mediante la{" "}
              {legalIdentity.resolution}. Las condiciones específicas de deducción tributaria
              dependen de la normativa vigente de la SUNAT y de cada caso particular; recomendamos
              validar el detalle con tu asesor tributario.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">5. Modificaciones</h2>
            <p>
              Podemos actualizar estos términos en cualquier momento. Los cambios entran en
              vigencia desde su publicación en esta página.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">6. Contacto</h2>
            <p>
              Para consultas sobre estos términos, escríbenos a {contact.email} o llámanos al{" "}
              {contact.phoneDisplay}.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
