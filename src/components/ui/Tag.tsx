import type { ReactNode } from "react";
import { cx } from "../../lib/ui.ts";

type Tone = "red" | "dark" | "light" | "outline";

const TONES: Record<Tone, string> = {
  red: "bg-unab-red text-white",
  dark: "bg-unab-navy text-white",
  light: "bg-unab-navy/8 text-unab-navy",
  outline: "border border-white/25 text-white/80",
};

export function Tag({
  tone = "red",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.625rem] font-bold tracking-[0.14em] uppercase",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
