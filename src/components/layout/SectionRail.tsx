"use client";

import { useI18n } from "@/lib/i18n";

const sections = [
  { id: "top", key: null },
  { id: "about", key: "about" as const },
  { id: "projects", key: "projects" as const },
  { id: "capabilities", key: "capabilities" as const },
  { id: "process", key: "process" as const },
  { id: "stack", key: "stack" as const },
  { id: "contact", key: "contact" as const },
];

export function SectionRail() {
  const { t } = useI18n();

  return (
    <nav
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
      aria-label="Section index"
    >
      {sections.map(({ id, key }) => (
        <a
          key={id}
          href={`#${id}`}
          title={key ? t.nav[key] : "Cover"}
          className="focus-ring group flex items-center gap-2"
        >
          <span className="h-px w-4 bg-rule-on-base transition-all group-hover:w-6 group-hover:bg-accent" />
          <span className="sr-only">{key ? t.nav[key] : "Cover"}</span>
        </a>
      ))}
    </nav>
  );
}
