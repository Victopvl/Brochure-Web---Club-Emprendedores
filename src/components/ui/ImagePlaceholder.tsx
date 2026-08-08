import { cx } from "../../lib/ui.ts";
import { Icon } from "./Icon.tsx";

export function ImagePlaceholder({
  label,
  tone = "light",
  className,
}: {
  label: string;
  tone?: "light" | "dark" | "red";
  className?: string;
}) {
  const tones = {
    light: "border-unab-navy/15 bg-paper text-muted",
    dark: "border-white/20 bg-white/5 text-white/60",
    red: "border-white/25 bg-unab-red/85 text-white/80",
  } as const;

  return (
    <div
      role="img"
      aria-label={label}
      className={cx(
        "flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed p-6 text-center",
        tones[tone],
        className,
      )}
    >
      <Icon name="image-icon" className="h-6 w-6" />
      <span className="max-w-[22ch] text-xs leading-relaxed font-medium">
        {label}
      </span>
    </div>
  );
}
