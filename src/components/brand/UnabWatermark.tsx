import { cx } from "../../lib/ui.ts";

export function UnabWatermark({ className }: { className?: string }) {
  return (
    <img
      src="/unab-mark.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      className={cx(
        "pointer-events-none absolute select-none",
        className,
      )}
    />
  );
}
