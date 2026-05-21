"use client";

import { techStack } from "@/data/tech-stack";
import { pick, useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { RevealSection } from "@/components/editorial/RevealSection";

export function TechSpecimen() {
  const { locale, t } = useI18n();

  return (
    <RevealSection
      id="stack"
      className="scroll-mt-24 border-b border-rule-on-base px-4 py-16 md:px-6 md:py-20"
    >
      <SectionLabel index="05" label={t.stack.label} />
      <p className="mt-4 max-w-2xl text-sm text-ink-muted-on-base">
        {t.stack.intro}
      </p>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-rule-on-base font-mono text-[10px] uppercase tracking-wider text-ink-muted-on-base">
              <th className="py-3 pr-6 font-normal">ID</th>
              <th className="py-3 pr-6 font-normal">
                {locale === "de" ? "Bereich" : "Domain"}
              </th>
              <th className="py-3 font-normal">Tools</th>
            </tr>
          </thead>
          <tbody>
            {techStack.map((group, i) => (
              <tr
                key={group.id}
                className="border-b border-rule-on-base align-top"
              >
                <td className="py-4 pr-6 font-mono text-accent-brass">
                  {String(i + 1).padStart(2, "0")}
                </td>
                <td className="py-4 pr-6 font-medium text-ink-on-base">
                  {pick(locale, group.category)}
                </td>
                <td className="py-4">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-muted-on-base">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="text-rule-on-base" aria-hidden>
                          ·
                        </span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RevealSection>
  );
}
