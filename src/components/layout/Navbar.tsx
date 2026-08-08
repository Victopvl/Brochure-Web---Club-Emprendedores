import { useEffect, useState } from "react";
import { LogoLockup } from "../brand/Logo.tsx";
import { Icon } from "../ui/Icon.tsx";
import { goToSection, hrefFor } from "../../router/hash.ts";
import { nav } from "../../data/site.ts";
import { container, cx } from "../../lib/ui.ts";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleSection(sectionId: string) {
    setOpen(false);
    goToSection(sectionId);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-unab-navy/95 backdrop-blur-md">
      <div className={cx(container, "flex h-20 items-center justify-between gap-6")}>
        <a
          href={hrefFor("/")}
          onClick={() => setOpen(false)}
          aria-label="Club de Emprendedores UNAB — ir al inicio"
        >
          <LogoLockup tone="onDark" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => handleSection(item.sectionId)}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleSection("postulacion")}
            className="ml-3 rounded-full bg-unab-red px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-unab-red-deep"
          >
            Postular
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="rounded-full p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          <Icon name={open ? "close-icon" : "menu-icon"} className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-unab-navy lg:hidden">
          <nav className={cx(container, "flex flex-col gap-1 py-5")}>
            {nav.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => handleSection(item.sectionId)}
                className="rounded-xl px-3 py-3 text-left text-base font-medium text-white/80 transition-colors hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleSection("postulacion")}
              className="mt-3 rounded-full bg-unab-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-unab-red-deep"
            >
              Postular
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
