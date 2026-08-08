import { UnabWatermark } from "../brand/UnabWatermark.tsx";
import { Button } from "../ui/Button.tsx";
import { ImagePlaceholder } from "../ui/ImagePlaceholder.tsx";
import { goToSection } from "../../router/hash.ts";
import { hero } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-unab-navy-deep text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <UnabWatermark className="-top-24 -right-24 w-[34rem] opacity-[0.06] lg:w-[42rem]" />

      <div
        className={cx(
          container,
          "relative grid gap-14 py-20 lg:grid-cols-2 lg:items-center lg:py-28",
        )}
      >
        <div>
          <h1 className="text-[2.75rem] leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
            <br />
            <span className="text-unab-red-soft">{hero.titleAccent}</span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-base leading-relaxed text-muted-dark sm:text-lg">
            {hero.lead}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => goToSection("postulacion")}>
              {hero.primaryCta}
            </Button>
            <Button variant="outlineLight" onClick={() => goToSection("agenda")}>
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        {hero.image ? (
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            className="aspect-4/3 w-full rounded-2xl object-cover ring-1 ring-white/15 lg:aspect-3/2"
          />
        ) : (
          <ImagePlaceholder
            label={hero.imageAlt}
            tone="dark"
            className="min-h-[19rem] lg:min-h-[24rem]"
          />
        )}
      </div>
    </section>
  );
}
