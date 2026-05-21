export const copy = {
  de: {
    meta: {
      title: "Chris — Engineering Archive",
      description:
        "Portfolio: Webentwicklung, UI/UX, Tools, Games und interaktive Systeme.",
    },
    skip: "Zum Inhalt springen",
    nav: {
      about: "Profil",
      projects: "Akten",
      capabilities: "Kompetenzen",
      process: "Vorgehen",
      stack: "Stack",
      contact: "Kontakt",
    },
    header: {
      dossier: "Dossier",
      ref: "ENG-ARCH-2026",
      edition: "Ausgabe 01",
    },
    hero: {
      rubric: "Technical Case Study Archive",
      headline: "Systeme bauen, die man testen und erklären kann.",
      lede:
        "Softwareentwickler mit Fokus auf Web-Frontends, UI-Systeme, Tools und interaktive Anwendungen — von Audit-Pipelines bis zu Multiplayer-Prototypen.",
      meta: {
        role: "Rolle",
        roleValue: "Full-Stack / UI Engineer",
        focus: "Schwerpunkt",
        focusValue: "Web · UX · Tools · Games",
        status: "Status",
        statusValue: "Verfügbar für ausgewählte Projekte",
        location: "Basis",
        locationValue: "Remote · EU",
      },
      systemNote:
        "System note: Dieses Archiv dokumentiert ausgewählte Builds mit Kontext, Constraints und technischen Entscheidungen — keine Marketing-Showcase.",
    },
    about: {
      label: "Profil",
      ref: "ARCH-0001",
      title: "Positionierung",
      body: [
        "Ich arbeite an der Schnittstelle von Engineering und Interface: klare Zustände, nachvollziehbare Datenflüsse und UI, das sich im Betrieb beweisen lässt.",
        "Typische Aufgaben: Prototypen in kurzer Zeit validieren, Design-Systeme in Code übersetzen, Performance und Accessibility früh mitdenken.",
      ],
      pullQuote:
        "Gute Oberflächen sind keine Dekoration — sie sind die sichtbare Form eines Systems.",
      marginalia: {
        label: "Build notes",
        items: [
          "Bevorzugt kleine, testbare Module",
          "Dokumentiert Entscheidungen im Code",
          "Reduziert UI-Noise bewusst",
        ],
      },
    },
    projects: {
      label: "Ausgewählte Akten",
      intro:
        "Vier Referenzprojekte — jeweils als Feature-Notiz mit technischer Projektakte.",
    },
    capabilities: {
      label: "Kompetenzen",
      intro: "Rubriken nach Arbeitsmodus, nicht nach Buzzwords.",
    },
    process: {
      label: "Vorgehen",
      intro: "Ablauf von Erstkontakt bis Übergabe — kompakt und nachvollziehbar.",
    },
    stack: {
      label: "Tech Stack",
      intro: "Werkzeuge nach Einsatzbereich — ohne Logo-Wand.",
    },
    contact: {
      label: "Kontakt",
      ref: "ARCH-END",
      title: "Colophon",
      body: "Für technische Anfragen, Reviews oder Zusammenarbeit — direkt per Mail oder Repository.",
      channels: {
        email: "E-Mail",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      footer: "Archiv erstellt mit Next.js · TypeScript · Tailwind",
    },
    common: {
      readCase: "Case Study öffnen",
      period: "Zeitraum",
      role: "Rolle",
      status: "Status",
      stack: "Stack",
      buildNotes: "Build notes",
      systemNotes: "System notes",
      highlights: "Schwerpunkte",
      outcome: "Ergebnis",
    },
  },
  en: {
    meta: {
      title: "Chris — Engineering Archive",
      description:
        "Portfolio: web development, UI/UX, tools, games, and interactive systems.",
    },
    skip: "Skip to content",
    nav: {
      about: "Profile",
      projects: "Files",
      capabilities: "Capabilities",
      process: "Process",
      stack: "Stack",
      contact: "Contact",
    },
    header: {
      dossier: "Dossier",
      ref: "ENG-ARCH-2026",
      edition: "Edition 01",
    },
    hero: {
      rubric: "Technical Case Study Archive",
      headline: "Build systems you can test and explain.",
      lede:
        "Software developer focused on web frontends, UI systems, tools, and interactive applications — from audit pipelines to multiplayer prototypes.",
      meta: {
        role: "Role",
        roleValue: "Full-Stack / UI Engineer",
        focus: "Focus",
        focusValue: "Web · UX · Tools · Games",
        status: "Status",
        statusValue: "Open to selected engagements",
        location: "Base",
        locationValue: "Remote · EU",
      },
      systemNote:
        "System note: This archive records selected builds with context, constraints, and technical decisions — not a marketing showcase.",
    },
    about: {
      label: "Profile",
      ref: "ARCH-0001",
      title: "Positioning",
      body: [
        "I work at the intersection of engineering and interface: explicit state, traceable data flow, and UI that holds up in production.",
        "Typical work: validate prototypes quickly, translate design systems into code, and treat performance and accessibility as early constraints.",
      ],
      pullQuote:
        "Good interfaces are not decoration — they are the visible shape of a system.",
      marginalia: {
        label: "Build notes",
        items: [
          "Prefers small, testable modules",
          "Documents decisions in code",
          "Deliberately reduces UI noise",
        ],
      },
    },
    projects: {
      label: "Selected files",
      intro:
        "Four reference projects — each as a feature note with a technical project file.",
    },
    capabilities: {
      label: "Capabilities",
      intro: "Grouped by how I work, not by buzzwords.",
    },
    process: {
      label: "Process",
      intro: "From first contact to handoff — compact and traceable.",
    },
    stack: {
      label: "Tech stack",
      intro: "Tools by domain — no logo wall.",
    },
    contact: {
      label: "Contact",
      ref: "ARCH-END",
      title: "Colophon",
      body: "For technical inquiries, reviews, or collaboration — reach out via email or repository.",
      channels: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      footer: "Archive built with Next.js · TypeScript · Tailwind",
    },
    common: {
      readCase: "Open case study",
      period: "Period",
      role: "Role",
      status: "Status",
      stack: "Stack",
      buildNotes: "Build notes",
      systemNotes: "System notes",
      highlights: "Focus",
      outcome: "Outcome",
    },
  },
};

export type CopyTree = (typeof copy)[keyof typeof copy];
