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
    "text-4xl md:text-5xl lg:text-6xl font-semibold text-left text-white tracking-wide",

  // ─── Subsection titles (H3 / H4) ────────────────────────────────────────────
  // font-semibold for clear hierarchy; used below section titles.
  subsectionTitle: "text-xl md:text-2xl font-semibold",
  subsectionTitleWhite: "text-xl md:text-2xl font-semibold text-white",

  // ─── Body text ───────────────────────────────────────────────────────────────
  // Capped at md:text-lg — body copy doesn't need to be xl on large screens.
  body: "text-base md:text-lg text-neutral-400 leading-relaxed font-normal",
  bodyWhite: "text-base md:text-lg text-white leading-relaxed font-normal",

  // Inline emphasis inside body paragraphs — white, medium weight
  emphasis: "text-white font-medium",

  // ─── Small text / labels ─────────────────────────────────────────────────────
  small: "text-sm md:text-base font-normal",
  smallMuted: "text-sm md:text-base text-neutral-500",
  // Uppercase labels (e.g. "Designation", "Duration") — tiny, refined
  label:
    "text-xs md:text-sm text-neutral-500 uppercase tracking-widest font-medium",

  // ─── Stats (About section numbers + captions) ────────────────────────────────
  statNumber: "text-5xl md:text-6xl lg:text-7xl font-semibold text-white",
  statLabel: "text-sm md:text-base text-neutral-400 font-normal",

  // ─── Tags / badges (tech stack pills, etc.) ─────────────────────────────────
  // Tags are small UI elements — text-sm is the max.
  tag: "text-sm font-normal text-neutral-300",
  tagSmall: "text-xs font-normal text-neutral-400",

  // ─── Project section ─────────────────────────────────────────────────────────
  categoryNumber: "hidden",
  categoryTitle: "text-2xl md:text-3xl lg:text-4xl font-semibold text-white",
  // Slightly more readable than neutral-500
  categoryLocation: "text-sm md:text-base text-neutral-400",
  // Previously text-sm — bumped to text-base so card titles read clearly
  cardTitle: "text-base md:text-lg font-medium text-white",
  cardDescription: "text-sm md:text-base text-neutral-400",
  // Modal headings & body
  modalTitle: "text-xl md:text-2xl font-semibold text-white",
  modalDescription: "text-sm md:text-base text-neutral-400",
  modalBody: "text-sm md:text-base text-neutral-400 leading-relaxed",
  modalSubheading: "text-base md:text-lg font-semibold text-white",

  // ─── Education / timeline ────────────────────────────────────────────────────
  timelineIntro: "text-base md:text-lg text-neutral-400 font-normal leading-relaxed",
  timelineYear: "text-2xl md:text-5xl lg:text-6xl font-semibold",
  timelineYearMobile: "text-2xl font-semibold",
  educationCardTitle: "text-xl md:text-2xl font-semibold text-white",
  // Score is secondary — base/lg is enough, semibold for number weight
  educationScore: "text-base md:text-lg font-semibold text-white",
  educationBody:
    "text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal",
  educationBodyWhite: "text-sm md:text-base lg:text-lg font-semibold text-white",
  educationList:
    "text-sm md:text-base lg:text-lg text-neutral-400 list-disc list-inside space-y-1.5 leading-relaxed font-normal",

  // ─── Work experience ─────────────────────────────────────────────────────────
  weCardTitle: "text-xl md:text-2xl font-semibold text-white",
  // Badges (e.g. "Internship") are small accent labels — xs/sm, semibold
  weBadge: "text-xs md:text-sm font-semibold",
  weDesignation: "text-sm md:text-base lg:text-lg font-medium text-white",
  // Meta (duration, location) — compact and muted
  weMeta: "text-xs md:text-sm text-neutral-400 font-normal",
  // Right-side subheadings ("Overview", "Key Responsibilities") — lg/xl, semibold
  weSubsectionTitle: "text-lg md:text-xl font-semibold text-white",
  weBody:
    "text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal",
  // Tech tags on WE cards — always small
  weTechTag: "text-xs md:text-sm font-normal text-neutral-300",

  // ─── UI elements (tooltips, buttons) ─────────────────────────────────────────
  // Tooltips should be compact and unobtrusive
  tooltip: "text-sm font-medium",
  button: "text-sm md:text-base font-medium",
} as const;

export type TypographyKey = keyof typeof typography;
