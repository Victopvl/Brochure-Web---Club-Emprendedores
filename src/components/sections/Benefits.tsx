import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { benefits } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function Benefits() {
  return (
    <section id="beneficios" className="bg-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="02" label="Beneficios" />

        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-unab-navy sm:text-4xl">
            Lo que ganas al entrar
          </h2>
        </Reveal>

        <ul className="mt-12">
          {benefits.map((benefit, index) => (
            <li key={benefit.title}>
              <Reveal delay={index * 0.05}>
                <div className="grid grid-cols-[2.5rem_1fr] items-start gap-x-5 gap-y-3 border-t border-unab-navy/12 py-8 md:grid-cols-[4rem_1.1fr_1.2fr] md:gap-x-8">
                  <span className="eyebrow pt-1.5 text-unab-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-unab-navy sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="col-start-2 text-[0.9375rem] leading-relaxed text-muted md:col-start-3">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
