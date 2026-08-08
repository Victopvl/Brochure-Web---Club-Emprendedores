type Tone = "onLight" | "onDark";

const TONES: Record<Tone, { ring: string; disc: string; bars: string }> = {
  onLight: {
    ring: "text-unab-navy",
    disc: "fill-cream",
    bars: "fill-unab-navy",
  },
  onDark: {
    ring: "text-cream",
    disc: "fill-cream",
    bars: "fill-unab-navy-deep",
  },
};

export function LogoMark({
  tone = "onLight",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const c = TONES[tone];

  return (
    <svg
      viewBox="0 0 302 304"
      aria-hidden="true"
      focusable="false"
      className={`${c.ring} ${className}`}
    >
      <circle cx="151" cy="152" r="127" className={c.disc} />
      <path
        d="M58.54 257.13 25.52 294.67"
        fill="none"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M243.46 257.13 276.48 294.67"
        fill="none"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <circle
        cx="151"
        cy="152"
        r="139"
        fill="none"
        stroke="currentColor"
        strokeWidth="24"
      />
      <rect x="74" y="93" width="36" height="120" rx="3" className={c.bars} />
      <rect x="133" y="93" width="36" height="120" rx="3" className={c.bars} />
      <rect x="192" y="93" width="36" height="120" rx="3" className={c.bars} />
    </svg>
  );
}

export function LogoLockup({
  tone = "onLight",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const onDark = tone === "onDark";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-9 w-9 shrink-0" />
      <span
        aria-hidden="true"
        className={`h-9 w-px shrink-0 ${
          onDark ? "bg-white/25" : "bg-unab-navy/20"
        }`}
      />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`text-[0.9375rem] font-extrabold tracking-tight ${
            onDark ? "text-white" : "text-unab-navy"
          }`}
        >
          Club de Emprendedores
        </span>
        <span
          className={`mt-1 text-[0.6875rem] font-semibold tracking-[0.2em] ${
            onDark ? "text-white/55" : "text-muted"
          }`}
        >
          UNAB
        </span>
      </span>
    </span>
  );
}
