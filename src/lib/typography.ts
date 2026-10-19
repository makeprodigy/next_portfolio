/**
 * Centralized typography styles for the portfolio.
 * Import these class strings in components for consistent text sizes, weights, and styles.
 * Adjust values here to change typography across the app.
 *
 * Design principles:
 *  - Section headings (H2) → white, large, tracking-wide, font-semibold
 *  - Subsection headings (H3/H4) → white, font-semibold, clearly sub-ordinate
 *  - Body text → neutral-300 (up from 400), relaxed line-height — readable without strain
 *  - Labels / meta / badges → neutral-400, compact, uppercase ONLY for short strings
 *  - Emphasis spans → white, font-medium (not bold — avoids fighting headings)
 *
 * Color hierarchy (on zinc-950 background):
 *  text-white        → headings, active elements           ~21:1 contrast
 *  text-neutral-200  → prominent body / descriptions       ~14:1 contrast
 *  text-neutral-300  → standard body text                  ~10:1 contrast  ← primary readable text
 *  text-neutral-400  → secondary / muted body              ~6.5:1 contrast ← meta, captions
 *  text-neutral-500  → labels, placeholders, dividers      ~4.0:1 contrast ← short labels ONLY
 *  text-neutral-600  → ghost / barely-there accents        ~2.5:1 contrast ← decorative only
 */

export const typography = {
  // ─── Section titles (H2) — ABOUT ME, PROJECTS, WORK EXPERIENCE … ───────────
  sectionTitle:
    "text-5xl md:text-6xl lg:text-7xl font-semibold text-left text-white tracking-wide",

  // ─── Subsection titles (H3 / H4) ────────────────────────────────────────────
  subsectionTitle: "text-2xl md:text-3xl font-semibold",
  subsectionTitleWhite: "text-2xl md:text-3xl font-semibold text-white",

  // ─── Body text ───────────────────────────────────────────────────────────────
  // Bumped from neutral-400 → neutral-300 for comfortable extended reading.
  // tracking-normal (default) — no letter-spacing on paragraph text.
  body: "text-lg md:text-xl text-neutral-300 leading-relaxed font-normal",
  bodyWhite: "text-lg md:text-xl text-white leading-relaxed font-normal",

  // Inline emphasis inside body paragraphs — white, medium weight
  emphasis: "text-white font-medium",

  // ─── Small text / labels ─────────────────────────────────────────────────────
  small: "text-base md:text-lg font-normal text-neutral-300",
  smallMuted: "text-base md:text-lg text-neutral-400",
  // Uppercase labels — ONLY for short strings (≤ 4 words). neutral-400 not 500.
  label:
    "text-sm md:text-base text-neutral-400 uppercase tracking-widest font-medium",

  // ─── Stats (About section numbers + captions) ────────────────────────────────
  statNumber: "text-6xl md:text-7xl lg:text-8xl font-semibold text-white",
  // Stat labels under big numbers are short → tracking-widest is acceptable here
  statLabel: "text-base md:text-lg text-neutral-400 font-normal",

  // ─── Tags / badges (tech stack pills, etc.) ─────────────────────────────────
  tag: "text-base font-normal text-neutral-200",
  tagSmall: "text-sm font-normal text-neutral-300",

  // ─── Project section ─────────────────────────────────────────────────────────
  categoryNumber: "hidden",
  categoryTitle: "text-3xl md:text-4xl lg:text-5xl font-semibold text-white",
  categoryLocation: "text-base md:text-lg text-neutral-300",
  cardTitle: "text-lg md:text-xl font-medium text-white",
  // Card descriptions are body text — neutral-300 not 400
  cardDescription: "text-base md:text-lg text-neutral-300",
  modalTitle: "text-2xl md:text-3xl font-semibold text-white",
  modalDescription: "text-base md:text-lg text-neutral-300",
  modalBody: "text-base md:text-lg text-neutral-300 leading-relaxed",
  modalSubheading: "text-lg md:text-xl font-semibold text-white",

  // ─── Education / timeline ────────────────────────────────────────────────────
  timelineIntro: "text-lg md:text-xl text-neutral-300 font-normal leading-relaxed",
  timelineYear: "text-3xl md:text-6xl lg:text-7xl font-semibold",
  timelineYearMobile: "text-3xl font-semibold",
  educationCardTitle: "text-2xl md:text-3xl font-semibold text-white",
  educationScore: "text-lg md:text-xl font-semibold text-white",
  // Education body: neutral-300, no tracking
  educationBody:
    "text-base md:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal",
  educationBodyWhite: "text-base md:text-lg lg:text-xl font-semibold text-white",
  educationList:
    "text-base md:text-lg lg:text-xl text-neutral-300 list-disc list-inside space-y-1.5 leading-relaxed font-normal",

  // ─── Work experience ─────────────────────────────────────────────────────────
  weCardTitle: "text-2xl md:text-3xl font-semibold text-white",
  weBadge: "text-sm md:text-base font-semibold",
  weDesignation: "text-base md:text-lg lg:text-xl font-medium text-white",
  // Meta (duration, location) — short strings, neutral-400 acceptable
  weMeta: "text-sm md:text-base text-neutral-400 font-normal",
  weSubsectionTitle: "text-xl md:text-2xl font-semibold text-white",
  // Body bullets: neutral-300, normal tracking
  weBody:
    "text-base md:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal",
  weTechTag: "text-sm md:text-base font-normal text-neutral-200",

  // ─── UI elements (tooltips, buttons) ─────────────────────────────────────────
  tooltip: "text-base font-medium",
  button: "text-base md:text-lg font-medium",
} as const;

export type TypographyKey = keyof typeof typography;
