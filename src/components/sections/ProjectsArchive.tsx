"use client";

import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { ProjectFeature } from "@/components/editorial/ProjectFeature";
import { RevealSection } from "@/components/editorial/RevealSection";

export function ProjectsArchive() {
  const { t } = useI18n();

  return (
    <RevealSection
      id="projects"
      className="scroll-mt-24 border-b border-rule-on-base px-4 py-16 md:px-6 md:py-20"
    >
      <SectionLabel index="02" label={t.projects.label} />
      <p className="mt-4 max-w-2xl text-sm text-ink-muted-on-base">
        {t.projects.intro}
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <ProjectFeature key={project.id} project={project} index={index} />
        ))}
      </div>
    </RevealSection>
  );
}
