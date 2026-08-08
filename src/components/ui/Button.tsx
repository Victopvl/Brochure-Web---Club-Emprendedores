import type { ReactNode } from "react";
import { cx } from "../../lib/ui.ts";

type Variant = "primary" | "dark" | "light" | "outlineLight" | "outlineDark";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-unab-red text-white hover:bg-unab-red-deep",
  dark: "bg-unab-navy text-white hover:bg-unab-navy-deep",
  light: "bg-white text-unab-navy hover:bg-cream",
  outlineLight: "border border-white/30 text-white hover:bg-white/10",
  outlineDark:
    "border border-unab-navy/20 text-unab-navy hover:border-unab-navy/40 hover:bg-unab-navy/5",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

export function Button({
  variant = "primary",
  href,
  onClick,
  external,
  className,
  children,
}: {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cx(BASE, VARIANTS[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noreferrer noopener" }
          : null)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
