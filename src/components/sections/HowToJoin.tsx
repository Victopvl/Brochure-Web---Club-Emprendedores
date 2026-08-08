import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { joinSteps } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function HowToJoin() {
  return (
    <section id="como-me-uno" className="bg-unab-red text-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="07" label="Cómo me uno" tone="red" />

        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tres pasos y estás dentro
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {joinSteps.map((step, index) => {
            const isLast = index === joinSteps.length - 1;

            return (
              <li key={step.title}>
                <Reveal delay={index * 0.07} className="h-full">
                  <article
                    className={cx(
                      "flex h-full flex-col rounded-2xl p-7",
                      isLast
                        ? "bg-unab-navy-deep"
                        : "border border-white/30 bg-white/5",
                    )}
                  >
                    <span
                      className={cx(
                        "text-4xl font-extrabold tracking-tight",
                        isLast ? "text-unab-red-soft" : "text-white/45",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 text-lg font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p
                      className={cx(
                        "mt-3 text-sm leading-relaxed",
                        isLast ? "text-muted-dark" : "text-white/80",
                      )}
                    >
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
