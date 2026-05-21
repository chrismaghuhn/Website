"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionRail } from "@/components/layout/SectionRail";
import { CoverHero } from "@/components/sections/CoverHero";
import { AboutSpread } from "@/components/sections/AboutSpread";
import { ProjectsArchive } from "@/components/sections/ProjectsArchive";
import { CapabilitiesDept } from "@/components/sections/CapabilitiesDept";
import { ProcessMarginalia } from "@/components/sections/ProcessMarginalia";
import { TechSpecimen } from "@/components/sections/TechSpecimen";
import { ContactColophon } from "@/components/sections/ContactColophon";
import { useI18n } from "@/lib/i18n";

export function PortfolioShell() {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#about"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        {t.skip}
      </a>
      <SiteHeader />
      <SectionRail />
      <main className="mx-auto max-w-6xl">
        <CoverHero />
        <AboutSpread />
        <ProjectsArchive />
        <CapabilitiesDept />
        <ProcessMarginalia />
        <TechSpecimen />
        <ContactColophon />
      </main>
    </>
  );
}
