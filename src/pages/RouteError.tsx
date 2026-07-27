import { Button } from "@/components/ui/Button";

export default function RouteError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream px-6 text-center">
      <p className="text-sm font-bold tracking-[0.15em] text-grass uppercase">Ocurrió un error</p>
      <h1 className="text-3xl font-extrabold text-grass">Algo no salió como esperábamos</h1>
      <p className="max-w-md text-ink/75">
        Intenta recargar la página. Si el problema continúa, escríbenos por WhatsApp.
      </p>
      <Button href="/">Volver al inicio</Button>
    </div>
  );
}
