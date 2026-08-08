import { UnabWatermark } from "../brand/UnabWatermark.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { about } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

const CARD = "rounded-2xl transition-transform duration-300 hover:-translate-y-1";

export function About() {
  return (
    <section id="quienes-somos" className="bg-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="01" label="Quiénes somos" />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="max-w-[19ch] text-3xl leading-[1.12] font-extrabold tracking-tight text-unab-navy sm:text-4xl lg:text-[2.75rem]">
              Un club hecho por estudiantes que se aburrieron de esperar{" "}
              <span className="text-unab-red">el momento perfecto.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-l-2 border-unab-red pl-6 lg:mt-3">
              <p className="text-base leading-relaxed text-muted">
                {about.body}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <article
              className={cx(
                CARD,
                "relative flex h-full flex-col overflow-hidden bg-unab-navy p-8 text-white",
              )}
            >
              <UnabWatermark className="-right-14 -bottom-16 w-56 opacity-[0.07]" />
              <h3 className="eyebrow relative text-white/50">Misión</h3>
              <p className="relative mt-10 text-xl leading-snug font-bold tracking-tight">
                {about.mission}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article
              className={cx(
                CARD,
                "relative flex h-full flex-col overflow-hidden bg-unab-red p-8 text-white",
              )}
            >
              <UnabWatermark className="-right-14 -bottom-16 w-56 opacity-[0.12]" />
              <h3 className="eyebrow relative text-white/60">Visión</h3>
              <p className="relative mt-10 text-xl leading-snug font-bold tracking-tight">
                {about.vision}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <article className={cx(CARD, "h-full bg-paper p-8")}>
              <h3 className="eyebrow text-muted">Valores</h3>
              <ol className="mt-6">
                {about.values.map((value, index) => (
                  <li
                    key={value}
                    className="group flex items-center gap-4 border-t border-unab-navy/10 py-4 first:border-t-0 first:pt-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-unab-red/10 text-[0.6875rem] font-extrabold text-unab-red transition-colors group-hover:bg-unab-red group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.9375rem] font-semibold text-unab-navy">
                      {value}
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              className="h-full min-h-[15rem] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
