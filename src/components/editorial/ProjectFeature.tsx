"use client";

import { pick, useI18n } from "@/lib/i18n";
import type { ProjectRecord } from "@/data/projects";
import { MetaRow } from "./MetaRow";
import { StatusStamp } from "./StatusStamp";

type ProjectFeatureProps = {
  project: ProjectRecord;
  index: number;
};

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const { locale, t } = useI18n();
  const isLeadRight = project.layout === "lead-right";
  const fileNum = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.id}
      className="scroll-mt-24 border border-rule-on-base bg-base-elevated"
      aria-labelledby={`${project.id}-title`}
    >
      <header className="grid-technical flex flex-wrap items-center justify-between gap-3 border-b border-rule-on-base px-4 py-3 md:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.25em] text-accent-brass">
            FILE {fileNum}
          </span>
          <span className="font-mono text-xs text-ink-muted-on-base">
            {project.ref}
          </span>
          <StatusStamp>{pick(locale, project.status)}</StatusStamp>
        </div>
        <span className="font-mono text-[10px] text-ink-muted-on-base">
          {pick(locale, project.period)}
        </span>
      </header>

      <div
        className={`grid gap-0 lg:grid-cols-12 ${isLeadRight ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="paper-surface dossier-perforation border-b border-rule-on-paper p-6 md:p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:border-rule-on-paper">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            {pick(locale, project.subtitle)}
          </p>
          <h3
            id={`${project.id}-title`}
            className="mt-3 font-serif text-2xl leading-tight text-ink md:text-3xl"
          >
            {pick(locale, project.title)}
          </h3>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-soft md:text-base">
            {pick(locale, project.summary)}
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-accent">
            {t.common.highlights}
          </p>
          <ul className="mt-2 space-y-2 text-sm text-ink">
            {pick(locale, project.highlights).map((item) => (
              <li
                key={item}
                className="border-l border-rule-on-paper pl-3 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
          {project.href ? (
            <a
              href={project.href}
              className="focus-ring mt-8 inline-block font-mono text-xs uppercase tracking-wider text-accent underline decoration-rule-on-paper underline-offset-4 transition-colors hover:text-ink"
            >
              {t.common.readCase} →
            </a>
          ) : null}
        </div>

        <aside className="grid gap-0 bg-base-elevated p-6 font-mono text-xs md:p-8 lg:col-span-5">
          <dl className="paper-surface mb-4 rounded-sm p-4 text-ink">
            <MetaRow label={t.common.role} value={pick(locale, project.role)} />
            <MetaRow label={t.common.period} value={pick(locale, project.period)} />
            <MetaRow label={t.common.status} value={pick(locale, project.status)} />
            <div className="py-2">
              <dt className="text-[10px] uppercase tracking-wider text-ink-soft">
                {t.common.stack}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-rule-on-paper px-1.5 py-0.5 text-[10px] text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="border-t border-rule-on-base pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-brass">
              {t.common.buildNotes}
            </p>
            <ul className="mt-2 space-y-1.5 text-ink-muted-on-base">
              {pick(locale, project.buildNotes).map((note) => (
                <li key={note} className="leading-relaxed">
                  — {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 border-t border-rule-on-base pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-brass">
              {t.common.systemNotes}
            </p>
            <ul className="mt-2 space-y-1.5 text-ink-muted-on-base">
              {pick(locale, project.systemNotes).map((note) => (
                <li key={note} className="leading-relaxed">
                  — {note}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 border-t border-rule-on-base pt-4 text-sm leading-relaxed text-ink-on-base">
            <span className="text-[10px] uppercase tracking-wider text-accent">
              {t.common.outcome}{" "}
            </span>
            {pick(locale, project.outcome)}
          </p>
        </aside>
      </div>
    </article>
  );
}
