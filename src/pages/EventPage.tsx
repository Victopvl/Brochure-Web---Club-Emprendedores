import { UnabWatermark } from "../components/brand/UnabWatermark.tsx";
import { Button } from "../components/ui/Button.tsx";
import { Icon } from "../components/ui/Icon.tsx";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder.tsx";
import { Tag } from "../components/ui/Tag.tsx";
import { NotFoundPage } from "./NotFoundPage.tsx";
import { getEventBySlug } from "../data/events.ts";
import { longDate } from "../lib/date.ts";
import { goToSection } from "../router/hash.ts";
import { container, cx } from "../lib/ui.ts";

export function EventPage({ slug }: { slug: string }) {
  const event = getEventBySlug(slug);

  if (!event) return <NotFoundPage />;

  const upcoming = event.status === "upcoming";

  return (
    <article>
      <header className="relative overflow-hidden bg-unab-navy-deep text-white">
        <UnabWatermark className="-top-28 -right-24 w-[30rem] opacity-[0.06] lg:w-[36rem]" />

        <div className={cx(container, "relative py-14 lg:py-20")}>
          <button
            type="button"
            onClick={() => goToSection("eventos")}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
          >
            <Icon
              name="arrow-left-icon"
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            />
            Volver a eventos
          </button>

          <div className="mt-8">
            <Tag tone={upcoming ? "red" : "outline"}>
              {upcoming ? "Próximo evento" : "Evento pasado"}
            </Tag>
          </div>

          <h1 className="mt-5 max-w-[20ch] text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {event.title}
          </h1>

          <ul className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-dark">
            <li className="flex items-center gap-2">
              <Icon name="clock-icon" className="h-4 w-4" />
              {longDate(event.date)}
              {event.time ? ` · ${event.time}` : ""}
            </li>
            {event.location ? (
              <li className="flex items-center gap-2">
                <Icon name="pin-icon" className="h-4 w-4" />
                {event.location}
              </li>
            ) : null}
          </ul>
        </div>
      </header>

      <div className="bg-white">
        <div className={cx(container, "py-14 lg:py-20")}>
          {event.cover ? (
            <img
              src={event.cover}
              alt={event.title}
              className="aspect-16/9 w-full rounded-2xl object-cover"
            />
          ) : (
            <ImagePlaceholder
              label={`Foto de portada — ${event.title}`}
              className="aspect-16/9 w-full"
            />
          )}

          <div className="mx-auto mt-12 max-w-[68ch]">
            <p className="text-lg leading-relaxed font-semibold text-unab-navy">
              {event.excerpt}
            </p>

            {event.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-6 text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 flex flex-wrap gap-3 border-t border-unab-navy/12 pt-10">
              {event.instagramUrl ? (
                <Button variant="dark" href={event.instagramUrl} external>
                  <Icon name="instagram-icon" className="h-4 w-4" />
                  Ver en Instagram
                </Button>
              ) : null}

              {upcoming && event.signupUrl ? (
                <Button variant="primary" href={event.signupUrl} external>
                  Inscribirme
                </Button>
              ) : null}

              {upcoming && !event.signupUrl ? (
                <Button
                  variant="primary"
                  onClick={() => goToSection("postulacion")}
                >
                  Quiero participar
                </Button>
              ) : null}

              <Button
                variant="outlineDark"
                onClick={() => goToSection("eventos")}
              >
                Ver otros eventos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
