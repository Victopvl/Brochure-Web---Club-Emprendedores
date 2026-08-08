import { useState } from "react";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { faqs } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="09" label="Preguntas frecuentes" />

        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-unab-navy sm:text-4xl">
            Antes de postular
          </h2>
        </Reveal>

        <ul className="mt-12">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <li key={item.question} className="border-b border-unab-navy/12">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-bold tracking-tight text-unab-navy sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative h-4 w-4 shrink-0 text-unab-red"
                    >
                      <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-current" />
                      <span
                        className={cx(
                          "absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-current transition-transform duration-300",
                          open ? "rotate-0" : "rotate-90",
                        )}
                      />
                    </span>
                  </button>
                </h3>

                                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cx(
                    "grid transition-all duration-300 ease-out",
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-7 text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
