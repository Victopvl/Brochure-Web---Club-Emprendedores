import { UnabWatermark } from "../brand/UnabWatermark.tsx";
import { Icon } from "../ui/Icon.tsx";
import { ImagePlaceholder } from "../ui/ImagePlaceholder.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { board } from "../../data/board.ts";
import { container, cx } from "../../lib/ui.ts";

export function Board() {
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
            <p className="text-sm leading-relaxed text-muted-dark">
              Escríbeles directo. Todos responden, incluso en semana de
              certámenes.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {board.map((member, index) => (
            <li key={member.role}>
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
                    <h3 className="text-base font-bold tracking-tight text-unab-navy">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>

                    <div className="mt-5 flex items-center gap-2">
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
