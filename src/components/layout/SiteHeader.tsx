"use client";

import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

const navIds = [
  "about",
  "projects",
  "capabilities",
  "process",
  "stack",
  "contact",
] as const;

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-rule-on-base bg-base/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
        <a
          href="#top"
          className="focus-ring group flex flex-col gap-0.5"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-brass">
            {t.header.dossier}
          </span>
          <span className="font-sans text-sm font-medium text-ink-on-base group-hover:text-accent">
            Chris
          </span>
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden text-right font-mono text-[10px] leading-tight text-ink-muted-on-base sm:block">
            <div>{t.header.ref}</div>
            <div>{t.header.edition}</div>
          </div>
          <LanguageToggle />
        </div>
        </div>

        <nav
          className="mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-rule-on-base pt-3"
          aria-label="Primary"
        >
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="focus-ring font-mono text-[10px] uppercase tracking-wider text-ink-muted-on-base transition-colors hover:text-ink-on-base sm:text-[11px]"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
