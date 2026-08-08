import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Icon } from "../ui/Icon.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { SectionLabel } from "../ui/SectionLabel.tsx";
import { testimonials } from "../../data/testimonials.ts";
import { container, cx } from "../../lib/ui.ts";

const SPEED = 38;

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const resumeAt = useRef(0);
  const offset = useRef(0);
  const reduced = useReducedMotion();
  const loop = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduced) return;

    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const delta = now - previous;
      previous = now;

      const half = track.scrollWidth / 2;
      const running = now >= resumeAt.current && half > 0;

      if (running) {
        let next = offset.current + (delta / 1000) * SPEED;
        if (next >= half) next -= half;
        offset.current = next;
        track.scrollLeft = next;
      } else {
        offset.current = track.scrollLeft;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  const hold = (ms: number) => {
    resumeAt.current = performance.now() + ms;
  };

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;

    hold(1400);

    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    const half = track.scrollWidth / 2;
    let next = track.scrollLeft + step * direction;
    if (next < 0) next += half;
    if (next >= half) next -= half;

    track.scrollTo({ left: next, behavior: "smooth" });
  }

  return (
    <section id="testimonios" className="bg-white">
      <div className={cx(container, "py-20 lg:py-28")}>
        <SectionLabel index="06" label="Testimonios" />

        <div className="flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-unab-navy sm:text-4xl">
              Pregúntale a los que ya están
            </h2>
          </Reveal>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-unab-navy/20 text-unab-navy transition-colors hover:bg-unab-navy hover:text-white"
            >
              <Icon name="arrow-left-icon" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Testimonio siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-unab-navy/20 text-unab-navy transition-colors hover:bg-unab-navy hover:text-white"
            >
              <Icon name="arrow-right-icon" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative pb-20 lg:pb-28"
        onPointerEnter={() => hold(Number.MAX_SAFE_INTEGER)}
        onPointerLeave={() => hold(0)}
        onFocusCapture={() => hold(Number.MAX_SAFE_INTEGER)}
        onBlurCapture={() => hold(0)}
      >
        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label="Testimonios de miembros del club"
          className="flex gap-5 overflow-x-auto px-6 [scrollbar-width:none] lg:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {loop.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              aria-hidden={index >= testimonials.length}
              className="w-[80%] shrink-0 sm:w-[22rem]"
            >
              <figure className="flex h-full flex-col rounded-2xl bg-paper p-7">
                <blockquote className="text-[0.9375rem] leading-relaxed font-medium text-unab-navy">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3.5 border-t border-unab-navy/10 pt-6">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-dashed border-unab-navy/25 text-unab-navy/40"
                    >
                      <Icon name="image-icon" className="h-4 w-4" />
                    </span>
                  )}
                  <span>
                    <span className="block text-sm font-bold text-unab-navy">
                      {item.name}
                    </span>
                    <span className="block text-sm text-muted">
                      {item.career}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
