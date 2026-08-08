import { Icon } from "../ui/Icon.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { Tag } from "../ui/Tag.tsx";
import { applicationForms } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function Application() {
  return (
    <section id="postulacion" className="bg-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="08" label="Postulación" />

        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-unab-navy sm:text-4xl">
            Elige tu formulario
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {applicationForms.map((form, index) => {
            const dark = form.tone === "dark";
            const available = Boolean(form.url);

            const shell = cx(
              "group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-300",
              dark ? "bg-unab-navy text-white" : "bg-paper text-unab-navy",
              available && "hover:-translate-y-1",
            );

            const inner = (
              <>
                <span
                  className={cx(
                    "flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                    dark
                      ? "bg-white/10 text-unab-red-soft group-hover:bg-unab-red group-hover:text-white"
                      : "bg-unab-navy/8 text-unab-red group-hover:bg-unab-red group-hover:text-white",
                  )}
                >
                  <Icon name={form.icon} className="h-7 w-7" />
                </span>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {form.title}
                  </h3>
                  <Tag tone={dark ? "red" : "dark"}>{form.badge}</Tag>
                </div>

                <p
                  className={cx(
                    "mt-4 max-w-[46ch] text-sm leading-relaxed",
                    dark ? "text-muted-dark" : "text-muted",
                  )}
                >
                  {form.description}
                </p>

                <div className="mt-8 flex items-center gap-2 pt-6">
                  {available ? (
                    <span
                      className={cx(
                        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                        dark
                          ? "bg-white text-unab-navy group-hover:bg-cream"
                          : "bg-unab-navy text-white group-hover:bg-unab-red",
                      )}
                    >
                      Abrir formulario
                      <Icon
                        name="arrow-right-icon"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  ) : (
                    <span
                      className={cx(
                        "inline-flex items-center gap-2 rounded-full border border-dashed px-6 py-3 text-sm font-semibold",
                        dark
                          ? "border-white/30 text-white/55"
                          : "border-unab-navy/25 text-muted",
                      )}
                    >
                      Link por confirmar
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={form.id} delay={index * 0.08} className="h-full">
                {available ? (
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={shell}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={shell}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
