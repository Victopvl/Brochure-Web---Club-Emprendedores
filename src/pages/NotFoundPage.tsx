import { Button } from "../components/ui/Button.tsx";
import { hrefFor } from "../router/hash.ts";
import { container, cx } from "../lib/ui.ts";

export function NotFoundPage() {
  return (
    <section className="bg-unab-navy-deep text-white">
      <div className={cx(container, "flex min-h-[60vh] flex-col justify-center py-24")}>
        <span className="eyebrow text-unab-red-soft">Error 404</span>
        <h1 className="mt-5 max-w-[18ch] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Esta página no existe.
        </h1>
        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted-dark">
          Puede que el evento haya cambiado de nombre o que el link esté mal
          copiado.
        </p>
        <div className="mt-9">
          <Button variant="primary" href={hrefFor("/")}>
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
}
