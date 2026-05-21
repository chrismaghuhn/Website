"use client";

import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/data/types";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const btn = (lang: Locale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(lang)}
      aria-pressed={locale === lang}
      className={`focus-ring min-h-11 min-w-11 px-2 font-mono text-xs uppercase tracking-wider transition-colors ${
        locale === lang
          ? "text-ink-on-base underline decoration-accent underline-offset-4"
          : "text-ink-muted-on-base hover:text-ink-on-base"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className="flex items-center gap-1 border border-rule-on-base px-1"
      role="group"
      aria-label="Language"
    >
      {btn("de", "DE")}
      <span className="text-rule-on-base" aria-hidden>
        |
      </span>
      {btn("en", "EN")}
    </div>
  );
}
