// TODO: revisión legal
import { legalIdentity, contact } from "@/data/site";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export default function PoliticaPrivacidad() {
  useDocumentTitle(
    "Política de Privacidad",
    "Política de privacidad y tratamiento de datos personales de Residuos que Educan.",
  );

  return (
    <section className="bg-cream px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold tracking-[0.15em] text-grass uppercase">Legal</p>
        <h1 className="mb-3 text-[clamp(2rem,4.4vw,3rem)] font-extrabold tracking-tight text-grass">
          Política de Privacidad
        </h1>
        <p className="mb-10 text-sm text-ink/60">Última actualización: 26 de julio de 2026</p>

        <div className="flex flex-col gap-7 text-[16px] leading-relaxed text-ink/85">
          <p>
            {legalIdentity.orgName} ({legalIdentity.ruc}), con domicilio en Arequipa, Perú, es
            responsable del tratamiento de los datos personales recogidos a través de este sitio
            web en el marco del proyecto Residuos que Educan, de conformidad con la Ley N.º 29733,
            Ley de Protección de Datos Personales del Perú, y su reglamento.
          </p>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">1. Datos que recopilamos</h2>
            <p>
              Recopilamos los datos que nos proporcionas voluntariamente a través de los
              formularios de "Recibir Donación" y "Contacto": nombre, institución o empresa,
              correo electrónico, teléfono y, en el caso de instituciones educativas, datos de
              ubicación y del director o responsable.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">2. Finalidad del tratamiento</h2>
            <p>
              Usamos tus datos para responder tus consultas, evaluar el registro de instituciones
              educativas, coordinar alianzas con empresas y comunicarte novedades del proyecto
              Residuos que Educan. No vendemos ni cedemos tus datos a terceros con fines
              comerciales.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">3. Almacenamiento y seguridad</h2>
            <p>
              Este sitio web no utiliza cookies de seguimiento ni almacenamiento local del
              navegador para procesar los formularios. Los datos enviados se transmiten
              directamente a nuestros canales de contacto y se conservan solo el tiempo necesario
              para cumplir con las finalidades descritas.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">4. Tus derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO)
              sobre tus datos personales escribiéndonos a{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-grass underline">
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-extrabold text-grass">5. Contacto</h2>
            <p>Para consultas sobre esta política, escríbenos a {contact.email}.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
