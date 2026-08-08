import type { ReactNode } from "react";
import { hrefFor } from "./hash.ts";

export function Link({
  to,
  className = "",
  children,
  ariaLabel,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a href={hrefFor(to)} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
