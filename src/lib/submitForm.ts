import { contact } from "@/data/site";

export type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * Envía el formulario por correo a `contact.email` usando FormSubmit (sin backend propio).
 * La primera vez que se envía, FormSubmit manda un correo de activación a esa dirección:
 * hay que confirmarlo una sola vez para que los siguientes mensajes lleguen.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`;

export async function submitForm<T extends Record<string, unknown>>(
  formName: string,
  data: T,
): Promise<void> {
  const fields = Object.fromEntries(
    Object.entries(data)
      .filter(([, value]) => value !== undefined && value !== "")
      .map(([key, value]) => [key, typeof value === "boolean" ? (value ? "Sí" : "No") : value]),
  );
  const replyTo = fields.email ?? fields.correo;

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: `${formName} — Residuos que Educan`,
      _template: "table",
      _captcha: "false",
      ...(replyTo ? { _replyto: replyTo } : {}),
    }),
  });

  const result = (await response.json().catch(() => null)) as { success?: string | boolean } | null;
  if (!response.ok || !result || String(result.success) !== "true") {
    throw new Error("No se pudo enviar el formulario.");
  }
}
