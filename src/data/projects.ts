import type { LocalizedList, LocalizedString } from "./types";

export type ProjectLayout = "lead-left" | "lead-right";

export type ProjectRecord = {
  id: string;
  ref: string;
  layout: ProjectLayout;
  period: LocalizedString;
  status: LocalizedString;
  role: LocalizedString;
  stack: string[];
  title: LocalizedString;
  subtitle: LocalizedString;
  summary: LocalizedString;
  highlights: LocalizedList;
  buildNotes: LocalizedList;
  systemNotes: LocalizedList;
  outcome: LocalizedString;
  href?: string;
};

export const projects: ProjectRecord[] = [
  {
    id: "ai-code-audit",
    ref: "ARCH-0041",
    layout: "lead-left",
    period: { de: "2025 — laufend", en: "2025 — ongoing" },
    status: { de: "In Entwicklung", en: "In development" },
    role: { de: "Lead Engineer", en: "Lead engineer" },
    stack: ["TypeScript", "Next.js", "AST Parsing", "OpenAI API", "PostgreSQL"],
    title: {
      de: "AI Code Audit Tool",
      en: "AI Code Audit Tool",
    },
    subtitle: {
      de: "Statische Analyse + LLM-Review für sicherheitsrelevante Muster",
      en: "Static analysis + LLM review for security-relevant patterns",
    },
    summary: {
      de: "Pipeline, die Repositories scannt, Findings strukturiert und Reviewer mit reproduzierbaren Reports versorgt — ohne Black-Box-Empfehlungen.",
      en: "Pipeline that scans repositories, structures findings, and gives reviewers reproducible reports — without black-box recommendations.",
    },
    highlights: {
      de: [
        "Regelbasierte Vorfilterung vor LLM-Calls",
        "Diff-fokussierte Review-Oberfläche",
        "Export als Markdown + JSON für CI",
      ],
      en: [
        "Rule-based pre-filtering before LLM calls",
        "Diff-focused review surface",
        "Export as Markdown + JSON for CI",
      ],
    },
    buildNotes: {
      de: [
        "Parser-Layer getrennt von UI",
        "Prompt-Templates versioniert",
        "Rate-Limits und Token-Budgets pro Run",
      ],
      en: [
        "Parser layer separated from UI",
        "Versioned prompt templates",
        "Rate limits and token budgets per run",
      ],
    },
    systemNotes: {
      de: [
        "Keine Auto-Fixes ohne explizite Freigabe",
        "Audit-Trail pro Finding",
      ],
      en: [
        "No auto-fixes without explicit approval",
        "Audit trail per finding",
      ],
    },
    outcome: {
      de: "Reduzierte Review-Zeit bei wiederkehrenden Security-Patterns in mittelgroßen TS-Codebases.",
      en: "Reduced review time for recurring security patterns in mid-size TS codebases.",
    },
    href: "#",
  },
  {
    id: "extraction-roguelike",
    ref: "ARCH-0033",
    layout: "lead-right",
    period: { de: "2024 — 2025", en: "2024 — 2025" },
    status: { de: "Prototyp / Multiplayer", en: "Prototype / multiplayer" },
    role: { de: "Gameplay & Netcode", en: "Gameplay & netcode" },
    stack: ["Unity", "C#", "Netcode", "ScriptableObjects", "WebGL target"],
    title: {
      de: "Multiplayer Extraction Roguelike",
      en: "Multiplayer Extraction Roguelike",
    },
    subtitle: {
      de: "Session-basiertes Risk/Reward mit synchronisiertem Loot-State",
      en: "Session-based risk/reward with synchronized loot state",
    },
    summary: {
      de: "Koop-Prototyp mit Extraktionsfenster, persistentem Inventar pro Run und deterministischen Combat-Ticks für faire Replays.",
      en: "Co-op prototype with extraction windows, per-run inventory persistence, and deterministic combat ticks for fair replays.",
    },
    highlights: {
      de: [
        "Host-authoritative Loot-Sync",
        "Proc-generierte Raumgraph-Layouts",
        "Telegraph-basiertes Combat-Readability",
      ],
      en: [
        "Host-authoritative loot sync",
        "Proc-generated room graph layouts",
        "Telegraph-based combat readability",
      ],
    },
    buildNotes: {
      de: [
        "Gameplay-Tuning über datengetriebene SO-Configs",
        "Debug-Overlay für Tick-Drift",
      ],
      en: [
        "Gameplay tuning via data-driven SO configs",
        "Debug overlay for tick drift",
      ],
    },
    systemNotes: {
      de: [
        "Kein Pay-to-Win Meta in diesem Prototyp",
        "Fokus auf Lesbarkeit unter Latenz",
      ],
      en: [
        "No pay-to-win meta in this prototype",
        "Focus on readability under latency",
      ],
    },
    outcome: {
      de: "Spielbare 4-Spieler-Sessions mit stabilisiertem Extraktions-Flow und messbarem Time-to-Fun.",
      en: "Playable 4-player sessions with stabilized extraction flow and measurable time-to-fun.",
    },
    href: "#",
  },
  {
    id: "physics-learning",
    ref: "ARCH-0027",
    layout: "lead-left",
    period: { de: "2023 — 2024", en: "2023 — 2024" },
    status: { de: "Produktiv", en: "Production" },
    role: { de: "Frontend & Simulation UI", en: "Frontend & simulation UI" },
    stack: ["React", "TypeScript", "Canvas", "Matter.js", "REST"],
    title: {
      de: "Physics Learning Platform",
      en: "Physics Learning Platform",
    },
    subtitle: {
      de: "Interaktive Labore mit parametrisierbaren Experimenten",
      en: "Interactive labs with parameterized experiments",
    },
    summary: {
      de: "Lernumgebung, in der Lernende Kräfte, Reibung und Impuls direkt am Modell verändern und Hypothesen als kuratierte Versuchsreihen speichern.",
      en: "Learning environment where students adjust forces, friction, and momentum on the model and save hypotheses as curated experiment runs.",
    },
    highlights: {
      de: [
        "Zeitachse für Simulationsschritte",
        "Barrierefreie Steuerung per Tastatur",
        "Lehrer-Dashboard für Versuchsassignments",
      ],
      en: [
        "Timeline for simulation steps",
        "Accessible keyboard controls",
        "Teacher dashboard for experiment assignments",
      ],
    },
    buildNotes: {
      de: [
        "Simulation-Step isoliert vom React-Tree",
        "Unit-Tests für Physik-Invarianten",
      ],
      en: [
        "Simulation step isolated from React tree",
        "Unit tests for physics invariants",
      ],
    },
    systemNotes: {
      de: [
        "Offline-fähige Lab-Snapshots",
        "Keine Tracking-Pixel in Lernpfaden",
      ],
      en: [
        "Offline-capable lab snapshots",
        "No tracking pixels in learning paths",
      ],
    },
    outcome: {
      de: "Messbar kürzere Einarbeitungszeit in Pilotklassen gegenüber statischen Arbeitsblättern.",
      en: "Measurably shorter onboarding in pilot classes vs. static worksheets.",
    },
    href: "#",
  },
  {
    id: "portfolio-ui-system",
    ref: "ARCH-0012",
    layout: "lead-right",
    period: { de: "2025", en: "2025" },
    status: { de: "Referenz / Design System", en: "Reference / design system" },
    role: { de: "Design & Implementierung", en: "Design & implementation" },
    stack: ["Next.js", "Tailwind", "CSS Variables", "Storybook"],
    title: {
      de: "Developer Portfolio / UI System",
      en: "Developer Portfolio / UI System",
    },
    subtitle: {
      de: "Editoriales UI-System ohne Template-Ästhetik",
      en: "Editorial UI system without template aesthetics",
    },
    summary: {
      de: "Komponentenbibliothek und Layout-Primitives für technische Archive: Dossier-Labels, Specimen-Tabellen, Feature-Spreads — ohne Card-Grid-Defaults.",
      en: "Component library and layout primitives for technical archives: dossier labels, specimen tables, feature spreads — without card-grid defaults.",
    },
    highlights: {
      de: [
        "Token-basierte Typografie-Skala",
        "Asymmetrische Editorial-Grids",
        "Motion nur bei prefers-reduced-motion OK",
      ],
      en: [
        "Token-based typography scale",
        "Asymmetric editorial grids",
        "Motion only when reduced-motion allows",
      ],
    },
    buildNotes: {
      de: [
        "Keine Icon-Dependencies",
        "Datenarrays für alle Sektionen",
      ],
      en: [
        "No icon dependencies",
        "Data arrays for all sections",
      ],
    },
    systemNotes: {
      de: [
        "Dunkle Basis + Papierflächen als Kontrast",
        "Bilingual ohne schwere i18n-Library",
      ],
      en: [
        "Dark base + paper surfaces for contrast",
        "Bilingual without heavy i18n library",
      ],
    },
    outcome: {
      de: "Wiederverwendbare Patterns für zukünftige Case-Study-Seiten und Client-Workshops.",
      en: "Reusable patterns for future case-study sites and client workshops.",
    },
    href: "#",
  },
];
