import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { Link } from "../../router/Link.tsx";
import { upcomingEvents } from "../../data/events.ts";
import { dayNumber, monthName } from "../../lib/date.ts";
import { container, cx } from "../../lib/ui.ts";

export function Agenda() {
  return (
    <section id="agenda" className="bg-unab-navy-deep text-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="05" label="Agenda" tone="dark" />

        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Lo que viene este semestre
          </h2>
        </Reveal>

        <ul className="mt-12">
          {upcomingEvents.map((event, index) => {
            const meta = [event.excerpt, event.time, event.location]
              .filter(Boolean)
              .join(" · ");

            return (
              <li key={event.slug}>
                <Reveal delay={index * 0.05}>
                  <div className="border-t border-white/12 py-7 sm:grid sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-x-8">
                    <div className="flex items-baseline gap-2.5 sm:block">
                      <div className="text-3xl leading-none font-extrabold tracking-tight">
                        {dayNumber(event.date)}
                      </div>
                      <div className="eyebrow whitespace-nowrap text-white/45 sm:mt-2">
                        {monthName(event.date)}
                      </div>
                    </div>

                    <div className="mt-3 min-w-0 sm:mt-0">
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                        <Link
                          to={`/eventos/${event.slug}`}
                          className="transition-colors hover:text-unab-red-soft"
                        >
                          {event.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-dark">
                        {meta}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-0">
                      {event.signupUrl ? (
                        <a
                          href={event.signupUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-unab-navy transition-colors hover:bg-cream"
                        >
                          Inscribirme
                        </a>
                      ) : (
                        <Link
                          to={`/eventos/${event.slug}`}
                          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-unab-navy transition-colors hover:bg-cream"
                        >
                          Inscribirme
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 font-mono text-xs text-white/35">
        </p>
      </div>
    </section>
  );
}
