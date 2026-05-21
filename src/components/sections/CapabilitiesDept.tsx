"use client";

import { capabilities } from "@/data/capabilities";
import { pick, useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { RevealSection } from "@/components/editorial/RevealSection";

export function CapabilitiesDept() {
  const { locale, t } = useI18n();

  return (
    <RevealSection
      id="capabilities"
      className="scroll-mt-24 border-b border-rule-on-base px-4 py-16 md:px-6 md:py-20"
    >
      <SectionLabel index="03" label={t.capabilities.label} />
      <p className="mt-4 max-w-2xl text-sm text-ink-muted-on-base">
        {t.capabilities.intro}
      </p>

      <ol className="mt-10 divide-y divide-rule-on-base border border-rule-on-base">
        {capabilities.map((cap) => (
          <li
            key={cap.id}
            className="grid gap-4 bg-base-elevated p-5 md:grid-cols-[4rem_1fr] md:p-6"
          >
            <span className="font-mono text-2xl text-accent-brass md:text-3xl">
              {cap.code}
            </span>
            <div>
              <h3 className="font-sans text-base font-medium text-ink-on-base md:text-lg">
                {pick(locale, cap.title)}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted-on-base">
                {pick(locale, cap.description)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </RevealSection>
  );
}
