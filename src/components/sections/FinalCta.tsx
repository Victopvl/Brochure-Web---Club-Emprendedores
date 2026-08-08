import { Button } from "../ui/Button.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { goToSection } from "../../router/hash.ts";
import { finalCta } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function FinalCta() {
  return (
    <section className="bg-unab-navy-deep text-white">
      <div className={cx(container, "py-20 text-center lg:py-24")}>
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-base leading-relaxed text-muted-dark">
            {finalCta.lead}
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              variant="primary"
              onClick={() => goToSection("postulacion")}
              className="px-8 py-3.5"
            >
              {finalCta.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
