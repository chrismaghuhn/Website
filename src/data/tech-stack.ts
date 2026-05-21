import type { LocalizedString } from "./types";

export type TechGroup = {
  id: string;
  category: LocalizedString;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    id: "frontend",
    category: { de: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    category: { de: "Backend & APIs", en: "Backend & APIs" },
    items: ["Node.js", "REST", "PostgreSQL", "Prisma", "Edge Functions"],
  },
  {
    id: "games",
    category: { de: "Games & Simulation", en: "Games & simulation" },
    items: ["Unity", "C#", "Matter.js", "Canvas", "Netcode"],
  },
  {
    id: "tooling",
    category: { de: "Tooling & Qualität", en: "Tooling & quality" },
    items: ["ESLint", "Vitest", "Playwright", "GitHub Actions", "Storybook"],
  },
  {
    id: "design",
    category: { de: "Design & UX", en: "Design & UX" },
    items: ["Figma", "Design Tokens", "WCAG 2.2", "Prototyping"],
  },
];
