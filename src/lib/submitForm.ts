export type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * Stub sin backend: simula latencia de red y siempre resuelve con éxito.
 * // TODO: conectar endpoint real (API de la ONG / servicio de email).
 */
export async function submitForm<T>(_data: T): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
}
