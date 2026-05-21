import type { LocalizedString } from "./types";

export type CapabilityRecord = {
  id: string;
  code: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const capabilities: CapabilityRecord[] = [
  {
    id: "frontend-systems",
    code: "01",
    title: { de: "Frontend-Systeme", en: "Frontend systems" },
    description: {
      de: "Komponentenarchitektur, State-Grenzen, Performance-Budgets und barrierefreie Interaktion.",
      en: "Component architecture, state boundaries, performance budgets, and accessible interaction.",
    },
  },
  {
    id: "ui-ux",
    code: "02",
    title: { de: "UI / UX Engineering", en: "UI / UX engineering" },
    description: {
      de: "Wireframes in Code übersetzen, Design-Tokens pflegen, kritische Flows prototypen.",
      en: "Translate wireframes into code, maintain design tokens, prototype critical flows.",
    },
  },
  {
    id: "tools",
    code: "03",
    title: { de: "Developer Tools", en: "Developer tools" },
    description: {
      de: "Interne Tools, CLI-Helfer und Review-Oberflächen mit Fokus auf Nachvollziehbarkeit.",
      en: "Internal tools, CLI helpers, and review surfaces focused on traceability.",
    },
  },
  {
    id: "games",
    code: "04",
    title: { de: "Games & Interaktion", en: "Games & interaction" },
    description: {
      de: "Gameplay-Loops, Netcode-Grundlagen und lesbare Feedback-Systeme unter Latenz.",
      en: "Gameplay loops, netcode fundamentals, and readable feedback under latency.",
    },
  },
  {
    id: "apis",
    code: "05",
    title: { de: "APIs & Daten", en: "APIs & data" },
    description: {
      de: "REST/GraphQL-Anbindung, typisierte Contracts und klare Fehlerzustände in der UI.",
      en: "REST/GraphQL integration, typed contracts, and clear error states in the UI.",
    },
  },
  {
    id: "quality",
    code: "06",
    title: { de: "Qualität & Delivery", en: "Quality & delivery" },
    description: {
      de: "Linting, Tests wo sie zählen, CI-freundliche Builds und dokumentierte Übergaben.",
      en: "Linting, tests where they matter, CI-friendly builds, and documented handoffs.",
    },
  },
];
