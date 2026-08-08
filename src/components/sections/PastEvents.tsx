import { Icon } from "../ui/Icon.tsx";
import { ImagePlaceholder } from "../ui/ImagePlaceholder.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { Link } from "../../router/Link.tsx";
import { pastEvents } from "../../data/events.ts";
import { social } from "../../data/site.ts";
import { container, cx } from "../../lib/ui.ts";

const BENTO_SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
];

export function PastEvents() {
  return (
    <section id="eventos" className="bg-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="04" label="Eventos pasados" />

        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-[16ch] text-3xl font-extrabold tracking-tight text-unab-navy sm:text-4xl">
              Así se ve un semestre acá adentro
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={social.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 border-b-2 border-unab-red pb-1 text-sm font-semibold text-unab-navy transition-colors hover:text-unab-red"
            >
              Ver todo en Instagram
              <Icon
                name="arrow-right-icon"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-4 sm:auto-rows-[13rem]">
          {pastEvents.map((event, index) => (
            <Reveal
              key={event.slug}
              delay={Math.min(index, 4) * 0.05}
              className={cx(BENTO_SPANS[index] ?? "", "min-h-[11rem]")}
            >
              <Link
                to={`/eventos/${event.slug}`}
                className="group relative flex h-full w-full overflow-hidden rounded-2xl"
                ariaLabel={`Ver ${event.title}`}
              >
                {event.cover ? (
                  <>
                    <img
                      src={event.cover}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-unab-navy-deep/85 to-transparent p-4 text-sm font-semibold text-white">
                      {event.title}
                    </span>
                  </>
                ) : (
                  <ImagePlaceholder
                    label={event.title}
                    className="h-full w-full transition-colors group-hover:border-unab-red/50 group-hover:bg-unab-red/5"
                  />
                )}

                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-unab-navy text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Icon name="arrow-right-icon" className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
