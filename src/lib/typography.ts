/**
 * Centralized typography styles for the portfolio.
 * Import these class strings in components for consistent text sizes, weights, and styles.
 * Adjust values here to change typography across the app.
 */

export const typography = {
  // ---- Section titles (H2) - e.g. ABOUT ME, CONTACT, PROJECTS, EDUCATION ----
  sectionTitle:
    "text-4xl md:text-5xl lg:text-6xl font-semibold text-left text-neutral-400 tracking-wider",

  // ---- Subsection titles (H3/H4) - e.g. card titles, category names ----
  subsectionTitle: "text-xl md:text-2xl font-medium",
  subsectionTitleWhite: "text-xl md:text-2xl font-medium text-white",

  // ---- Body text ----
  body: "text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-normal",
  bodyWhite: "text-base md:text-lg lg:text-xl text-white leading-relaxed font-normal",

  // Inline emphasis inside body (e.g. "Full-stack Developer" in a paragraph)
  emphasis: "text-white font-medium",

  // ---- Small text / labels ----
  small: "text-sm md:text-base font-normal",
  smallMuted: "text-sm md:text-base text-neutral-500",
  label: "text-sm text-neutral-500 uppercase tracking-wider font-normal",

  // ---- Stats (About section numbers and labels) ----
  statNumber: "text-5xl md:text-6xl lg:text-7xl font-semibold text-white",
  statLabel: "text-sm md:text-base lg:text-lg text-neutral-400 font-normal",

  // ---- Tags / badges (tech stack pills, etc.) ----
  tag: "text-sm md:text-base font-normal text-neutral-200",
  tagSmall: "text-sm font-normal",

  // ---- Project section ----
  categoryNumber:
    "text-7xl md:text-8xl lg:text-9xl leading-none font-semibold text-white",
  categoryTitle: "text-lg md:text-xl font-medium text-white",
  categoryLocation: "text-sm md:text-base text-neutral-500",
  cardTitle: "text-sm md:text-base font-medium text-white",
  cardDescription: "text-sm md:text-base text-neutral-400",
  modalTitle: "text-xl md:text-2xl font-medium text-white",
  modalDescription: "text-sm md:text-base text-neutral-400",
  modalBody: "text-base md:text-lg text-neutral-400 leading-relaxed",
  modalSubheading: "text-base md:text-lg font-medium text-white",

  // ---- Education / timeline ----
  timelineIntro: "text-base md:text-lg lg:text-xl text-neutral-400 font-normal leading-relaxed",
  timelineYear: "text-2xl md:text-5xl lg:text-6xl font-semibold",
  timelineYearMobile: "text-2xl font-semibold",
  educationCardTitle: "text-xl md:text-2xl font-medium text-white",
  educationScore: "text-lg md:text-xl font-medium text-white",
  educationBody: "text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-normal",
  educationBodyWhite: "text-base md:text-lg lg:text-xl font-medium text-white",
  educationList: "text-base md:text-lg lg:text-xl text-neutral-400 list-disc list-inside space-y-2 leading-relaxed font-normal",

  // ---- Work experience ----
  weCardTitle: "text-xl md:text-2xl font-medium text-white",
  weBadge: "text-sm md:text-base font-medium",
  weDesignation: "text-base md:text-lg lg:text-xl font-medium text-white",
  weMeta: "text-sm md:text-base lg:text-lg text-neutral-400 font-normal",
  weSubsectionTitle: "text-xl md:text-2xl font-medium text-white",
  weBody: "text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-normal",
  weTechTag: "text-sm md:text-base font-normal text-neutral-200",

  // ---- UI (tooltips, buttons) ----
  tooltip: "text-base font-medium",
  button: "text-base font-medium",
} as const;

export type TypographyKey = keyof typeof typography;
