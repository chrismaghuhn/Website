"use client";

import { useI18n } from "@/lib/i18n";
import { MetaRow } from "@/components/editorial/MetaRow";

export function CoverHero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="scroll-mt-20 border-b border-rule-on-base"
      aria-labelledby="hero-headline"
    >
      <div className="grid lg:grid-cols-12">
        <div className="grid-technical flex flex-col justify-between gap-8 border-b border-rule-on-base p-6 md:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-brass">
              {t.hero.rubric}
            </p>
            <p className="mt-6 font-mono text-xs text-ink-muted-on-base">
              {t.header.ref} · {t.header.edition}
            </p>
          </div>
          <p className="max-w-sm font-mono text-xs leading-relaxed text-ink-muted-on-base">
            {t.hero.systemNote}
          </p>
        </div>

        <div className="paper-surface dossier-perforation p-6 md:p-10 lg:col-span-7">
          <h1
            id="hero-headline"
            className="font-serif text-3xl leading-[1.15] tracking-tight text-ink md:text-4xl lg:text-[2.75rem]"
          >
            {t.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
            {t.hero.lede}
          </p>

          <dl className="mt-10 max-w-md border border-rule-on-paper bg-paper-muted/50 p-4">
            <MetaRow label={t.hero.meta.role} value={t.hero.meta.roleValue} />
            <MetaRow label={t.hero.meta.focus} value={t.hero.meta.focusValue} />
            <MetaRow label={t.hero.meta.status} value={t.hero.meta.statusValue} />
            <MetaRow
              label={t.hero.meta.location}
              value={t.hero.meta.locationValue}
            />
          </dl>
        </div>
      </div>
    </section>
  );
}
