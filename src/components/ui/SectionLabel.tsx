import { cx } from "../../lib/ui.ts";

type Tone = "light" | "dark" | "red";

const TONES: Record<Tone, { index: string; label: string; rule: string }> = {
  light: {
    index: "text-unab-red",
    label: "text-unab-navy",
    rule: "border-unab-navy/12",
  },
  dark: {
    index: "text-unab-red-soft",
    label: "text-white/70",
    rule: "border-white/15",
  },
  red: {
    index: "text-white/55",
    label: "text-white",
    rule: "border-white/25",
  },
};

export function SectionLabel({
  index,
  label,
  tone = "light",
}: {
  index: string;
  label: string;
  tone?: Tone;
}) {
  const c = TONES[tone];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <span className={cx("eyebrow", c.index)}>{index}</span>
        <span className={cx("eyebrow", c.label)}>{label}</span>
      </div>
      <hr className={cx("mt-4 border-0 border-t", c.rule)} />
    </div>
  );
}
