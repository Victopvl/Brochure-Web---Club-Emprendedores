import { useRef } from "react";
import { UnabWatermark } from "../brand/UnabWatermark.tsx";
import { Icon } from "../ui/Icon.tsx";
import { ImagePlaceholder } from "../ui/ImagePlaceholder.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { board } from "../../data/board.ts";
import { container, cx } from "../../lib/ui.ts";

export function Board() {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollByMember(direction: 1 | -1) {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const next = track.scrollLeft + step * direction;

    track.scrollTo({
      left: next < 0 ? maxScroll : next > maxScroll + 1 ? 0 : next,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="directiva"
      className="relative overflow-hidden bg-unab-navy-deep text-white"
    >
      <UnabWatermark className="-top-32 -left-28 w-[30rem] opacity-[0.05] lg:w-[38rem]" />

      <div className={cx(container, "relative py-20 lg:py-28")}>
        <SectionLabel index="03" label="La directiva" tone="dark" />

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Las personas detrás del club
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-end justify-between gap-5">
              <p className="max-w-sm text-sm leading-relaxed text-muted-dark">
                Escríbeles directo. Todos responden, incluso en semana de
                certámenes.
              </p>
              <div className="flex shrink-0 gap-3">
                <button
                  type="button"
                  onClick={() => scrollByMember(-1)}
                  aria-label="Integrante anterior"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-unab-navy"
                >
                  <Icon name="arrow-left-icon" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByMember(1)}
                  aria-label="Integrante siguiente"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-unab-navy"
                >
                  <Icon name="arrow-right-icon" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <ul
          ref={trackRef}
          aria-label="Integrantes de la directiva"
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {board.map((member, index) => (
            <li
              key={member.name}
              className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)]"
            >
              <Reveal delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                  <div className="relative">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`${member.name}, ${member.role}`}
                        className="aspect-4/3 w-full object-cover"
                      />
                    ) : (
                      <div className="aspect-4/3 w-full bg-linear-to-b from-unab-red to-unab-red-deep p-4">
                        <ImagePlaceholder
                          label={`Foto ${member.role.toLowerCase()}`}
                          tone="red"
                          className="h-full border-white/30 bg-transparent"
                        />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 rounded-full bg-unab-navy/70 px-2.5 py-1 text-[0.625rem] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="min-h-12 text-base font-bold tracking-tight text-unab-navy">
                      {member.name}
                    </h3>
                    <p className="mt-1 min-h-[3.75rem] text-sm leading-5 text-muted">
                      {member.role}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-5">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-unab-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-unab-navy-deep"
                      >
                        <Icon name="mail-icon" className="h-4 w-4" />
                        Escríbeme
                      </a>
                      {member.linkedinUrl ? (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`LinkedIn de ${member.name}`}
                          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-unab-navy/20 text-unab-navy transition-colors hover:bg-unab-navy hover:text-white"
                        >
                          <Icon name="linkedin-icon" className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
