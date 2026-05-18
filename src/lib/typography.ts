/**
 * Centralized typography styles for the portfolio.
 * Import these class strings in components for consistent text sizes, weights, and styles.
 * Adjust values here to change typography across the app.
 *
 * Design principles:
 *  - Section headings (H2) → white, large, tracking-wide, font-semibold
 *  - Subsection headings (H3/H4) → white, font-semibold, clearly sub-ordinate
 *  - Body text → neutral-400, relaxed line-height, capped at lg:text-lg
 *  - Labels / meta / badges → compact, uppercase where appropriate
 *  - Emphasis spans → white, font-medium (not bold — avoids fighting headings)
 */

export const typography = {
  // ─── Section titles (H2) — ABOUT ME, PROJECTS, WORK EXPERIENCE … ───────────
  // Previously text-neutral-400 — changed to text-white so headings are prominent,
  // not washed out. tracking-wide instead of tracking-wider for a cleaner look.
  sectionTitle:
    "text-5xl md:text-6xl lg:text-7xl font-semibold text-left text-white tracking-wide",

  // ─── Subsection titles (H3 / H4) ────────────────────────────────────────────
  // font-semibold for clear hierarchy; used below section titles.
  subsectionTitle: "text-2xl md:text-3xl font-semibold",
  subsectionTitleWhite: "text-2xl md:text-3xl font-semibold text-white",

  // ─── Body text ───────────────────────────────────────────────────────────────
  // Capped at md:text-lg — body copy doesn't need to be xl on large screens.
  body: "text-lg md:text-xl text-neutral-400 leading-relaxed font-normal",
  bodyWhite: "text-lg md:text-xl text-white leading-relaxed font-normal",

  // Inline emphasis inside body paragraphs — white, medium weight
  emphasis: "text-white font-medium",

  // ─── Small text / labels ─────────────────────────────────────────────────────
  small: "text-base md:text-lg font-normal",
  smallMuted: "text-base md:text-lg text-neutral-500",
  // Uppercase labels (e.g. "Designation", "Duration") — tiny, refined
  label:
    "text-sm md:text-base text-neutral-500 uppercase tracking-widest font-medium",

  // ─── Stats (About section numbers + captions) ────────────────────────────────
  statNumber: "text-6xl md:text-7xl lg:text-8xl font-semibold text-white",
  statLabel: "text-base md:text-lg text-neutral-400 font-normal",

  // ─── Tags / badges (tech stack pills, etc.) ─────────────────────────────────
  // Tags are small UI elements — text-sm is the max.
  tag: "text-base font-normal text-neutral-300",
  tagSmall: "text-sm font-normal text-neutral-400",

  // ─── Project section ─────────────────────────────────────────────────────────
  categoryNumber: "hidden",
  categoryTitle: "text-3xl md:text-4xl lg:text-5xl font-semibold text-white",
  // Slightly more readable than neutral-500
  categoryLocation: "text-base md:text-lg text-neutral-400",
  // Previously text-sm — bumped to text-base so card titles read clearly
  cardTitle: "text-lg md:text-xl font-medium text-white",
  cardDescription: "text-base md:text-lg text-neutral-400",
  // Modal headings & body
  modalTitle: "text-2xl md:text-3xl font-semibold text-white",
  modalDescription: "text-base md:text-lg text-neutral-400",
  modalBody: "text-base md:text-lg text-neutral-400 leading-relaxed",
  modalSubheading: "text-lg md:text-xl font-semibold text-white",

  // ─── Education / timeline ────────────────────────────────────────────────────
  timelineIntro: "text-lg md:text-xl text-neutral-400 font-normal leading-relaxed",
  timelineYear: "text-3xl md:text-6xl lg:text-7xl font-semibold",
  timelineYearMobile: "text-3xl font-semibold",
  educationCardTitle: "text-2xl md:text-3xl font-semibold text-white",
  // Score is secondary — base/lg is enough, semibold for number weight
  educationScore: "text-lg md:text-xl font-semibold text-white",
  educationBody:
    "text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-normal",
  educationBodyWhite: "text-base md:text-lg lg:text-xl font-semibold text-white",
  educationList:
    "text-base md:text-lg lg:text-xl text-neutral-400 list-disc list-inside space-y-1.5 leading-relaxed font-normal",

  // ─── Work experience ─────────────────────────────────────────────────────────
  weCardTitle: "text-2xl md:text-3xl font-semibold text-white",
  // Badges (e.g. "Internship") are small accent labels — xs/sm, semibold
  weBadge: "text-sm md:text-base font-semibold",
  weDesignation: "text-base md:text-lg lg:text-xl font-medium text-white",
  // Meta (duration, location) — compact and muted
  weMeta: "text-sm md:text-base text-neutral-400 font-normal",
  // Right-side subheadings ("Overview", "Key Responsibilities") — lg/xl, semibold
  weSubsectionTitle: "text-xl md:text-2xl font-semibold text-white",
  weBody:
    "text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-normal",
  // Tech tags on WE cards — always small
  weTechTag: "text-sm md:text-base font-normal text-neutral-300",

  // ─── UI elements (tooltips, buttons) ─────────────────────────────────────────
  // Tooltips should be compact and unobtrusive
  tooltip: "text-base font-medium",
  button: "text-base md:text-lg font-medium",
} as const;

export type TypographyKey = keyof typeof typography;
