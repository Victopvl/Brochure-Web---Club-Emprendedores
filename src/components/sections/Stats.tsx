import { Reveal } from "../ui/Reveal.tsx";
import { stats } from "../../data/home.ts";
import { container, cx } from "../../lib/ui.ts";

export function Stats() {
  return (
    <section className="bg-white">
      <div className={cx(container, "py-14")}>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="border-unab-navy/12 pr-5 even:border-l even:pl-5 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="text-3xl font-extrabold tracking-tight text-unab-navy sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="eyebrow mt-3 max-w-[16ch] leading-relaxed text-muted">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
