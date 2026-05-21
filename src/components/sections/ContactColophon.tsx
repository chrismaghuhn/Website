"use client";

import { useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { RevealSection } from "@/components/editorial/RevealSection";

const links = {
  email: "mailto:hello@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export function ContactColophon() {
  const { t } = useI18n();

  return (
    <RevealSection
      id="contact"
      className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20"
    >
      <SectionLabel
        index="06"
        label={t.contact.label}
        refCode={t.contact.ref}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="paper-surface p-6 md:p-8 lg:col-span-7">
          <h3 className="font-serif text-xl text-ink">{t.contact.title}</h3>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-soft">
            {t.contact.body}
          </p>

          <ul className="mt-8 space-y-3 font-mono text-sm">
            <li>
              <span className="text-[10px] uppercase tracking-wider text-ink-soft">
                {t.contact.channels.email}
              </span>
              <a
                href={links.email}
                className="focus-ring mt-1 block text-accent underline decoration-rule-on-paper underline-offset-4 hover:text-ink"
              >
                hello@example.com
              </a>
            </li>
            <li>
              <span className="text-[10px] uppercase tracking-wider text-ink-soft">
                {t.contact.channels.github}
              </span>
              <a
                href={links.github}
                className="focus-ring mt-1 block text-ink underline decoration-rule-on-paper underline-offset-4 hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/chris
              </a>
            </li>
            <li>
              <span className="text-[10px] uppercase tracking-wider text-ink-soft">
                {t.contact.channels.linkedin}
              </span>
              <a
                href={links.linkedin}
                className="focus-ring mt-1 block text-ink underline decoration-rule-on-paper underline-offset-4 hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/chris
              </a>
            </li>
          </ul>
        </div>

        <footer className="flex flex-col justify-end border border-rule-on-base bg-base-elevated p-6 font-mono text-[10px] uppercase tracking-wider text-ink-muted-on-base lg:col-span-5">
          <p>{t.contact.footer}</p>
          <p className="mt-4 text-accent-brass">{t.header.ref}</p>
        </footer>
      </div>
    </RevealSection>
  );
}
