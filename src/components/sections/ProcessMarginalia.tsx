"use client";

import { processSteps } from "@/data/process";
import { pick, useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { RevealSection } from "@/components/editorial/RevealSection";

export function ProcessMarginalia() {
  const { locale, t } = useI18n();

  return (
    <RevealSection
      id="process"
      className="scroll-mt-24 border-b border-rule-on-base px-4 py-16 md:px-6 md:py-20"
    >
      <SectionLabel index="04" label={t.process.label} />
      <p className="mt-4 max-w-2xl text-sm text-ink-muted-on-base">
        {t.process.intro}
      </p>

      <ol className="relative mt-10 max-w-3xl border-l border-rule-on-base pl-6 md:pl-8">
        {processSteps.map((step) => (
          <li key={step.step} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-6 top-0 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-base md:-left-8"
              aria-hidden
            />
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent-brass">
              {step.step}
            </span>
            <h3 className="mt-1 font-sans text-base font-medium text-ink-on-base">
              {pick(locale, step.title)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted-on-base">
              {pick(locale, step.detail)}
            </p>
          </li>
        ))}
      </ol>
    </RevealSection>
  );
}
