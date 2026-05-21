"use client";

import { useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { PullQuote } from "@/components/editorial/PullQuote";
import { RevealSection } from "@/components/editorial/RevealSection";

export function AboutSpread() {
  const { t } = useI18n();

  return (
    <RevealSection
      id="about"
      className="scroll-mt-24 border-b border-rule-on-base px-4 py-16 md:px-6 md:py-20"
    >
      <SectionLabel index="01" label={t.about.label} refCode={t.about.ref} />
      <p className="mt-4 max-w-2xl font-mono text-xs text-ink-muted-on-base">
        {t.about.title}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="paper-surface p-6 md:p-8 lg:col-span-7">
          <div className="space-y-4 text-sm leading-relaxed text-ink-soft md:text-base">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <PullQuote>{t.about.pullQuote}</PullQuote>
          </div>
        </div>

        <aside className="border border-rule-on-base bg-base-elevated p-6 lg:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-brass">
            {t.about.marginalia.label}
          </p>
          <ul className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-ink-muted-on-base">
            {t.about.marginalia.items.map((item) => (
              <li key={item} className="border-l border-rule-on-base pl-3">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </RevealSection>
  );
}
