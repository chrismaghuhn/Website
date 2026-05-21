import type { LocalizedString } from "./types";

export type ProcessStep = {
  step: string;
  title: LocalizedString;
  detail: LocalizedString;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: { de: "Scope & Constraints", en: "Scope & constraints" },
    detail: {
      de: "Ziele, Nicht-Ziele, Nutzer, technische Grenzen und Erfolgskriterien schriftlich fixieren.",
      en: "Fix goals, non-goals, users, technical limits, and success criteria in writing.",
    },
  },
  {
    step: "02",
    title: { de: "Architektur-Skizze", en: "Architecture sketch" },
    detail: {
      de: "Module, Datenflüsse und Schnittstellen — klein genug zum Testen, groß genug zum Liefern.",
      en: "Modules, data flows, and interfaces — small enough to test, large enough to ship.",
    },
  },
  {
    step: "03",
    title: { de: "Prototyp", en: "Prototype" },
    detail: {
      de: "Kritische Pfade zuerst: ein Flow, ein Screen, ein API-Contract — dann iterieren.",
      en: "Critical paths first: one flow, one screen, one API contract — then iterate.",
    },
  },
  {
    step: "04",
    title: { de: "Härtung", en: "Hardening" },
    detail: {
      de: "Accessibility, Fehlerfälle, Performance-Messung und Review mit echten Daten.",
      en: "Accessibility, error cases, performance measurement, and review with real data.",
    },
  },
  {
    step: "05",
    title: { de: "Übergabe", en: "Handoff" },
    detail: {
      de: "README, Deploy-Notizen, bekannte Risiken — damit das System ohne dich erklärbar bleibt.",
      en: "README, deploy notes, known risks — so the system stays explainable without you.",
    },
  },
];
