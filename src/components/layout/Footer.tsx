import { LogoLockup } from "../brand/Logo.tsx";
import { Icon } from "../ui/Icon.tsx";
import { goToSection } from "../../router/hash.ts";
import { club, footerNav, social } from "../../data/site.ts";
import { container, cx } from "../../lib/ui.ts";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-unab-navy-deep text-white">
      <div className={cx(container, "py-16")}>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <LogoLockup tone="onDark" />
            <p className="mt-5 max-w-[26ch] text-sm leading-relaxed text-muted-dark">
              {club.description}
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-white/50">Navegación</h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() => goToSection(item.sectionId)}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-white/50">Síguenos</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={social.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Icon name="instagram-icon" className="h-4 w-4" />
                  Instagram {social.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={social.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Icon name="linkedin-icon" className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${social.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Icon name="mail-icon" className="h-4 w-4" />
                  {social.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {club.fullName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#/" className="transition-colors hover:text-white/80">
              Términos
            </a>
            <a href="#/" className="transition-colors hover:text-white/80">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
