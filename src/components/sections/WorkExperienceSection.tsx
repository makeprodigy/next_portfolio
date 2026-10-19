"use client";

import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import {
  FaExternalLinkAlt,
  FaFileAlt,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiFastapi,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiPostgresql,
  SiSqlalchemy,
  SiRazorpay,
  SiNgrok,
  SiRedux,
  SiJavascript,
  SiGooglegemini,
} from "react-icons/si";

// ─── Data Types ───────────────────────────────────────────────────────────────

type TechItem = {
  label: string;
  icon: IconType;
  color: string;
};

interface WorkExperience {
  id: number;
  company: string;
  designation: string;
  duration: string;
  location: string;
  companyInfo: string;
  websiteUrl?: string;
  letterUrl?: string;
  points: {
    text: string;
    highlights: string[];
  }[];
  technologies: TechItem[];
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "XpressDM",
    designation: "SDE Intern",
    duration: "Jun 2026 – Sep 2026",
    location: "Remote",
    companyInfo: "B2B Marketing Automation Platform",
    websiteUrl: "https://xpressdm.com/",
    letterUrl:
      "https://drive.google.com/file/d/1e22EmKApWMp5gHdW10LCZ_8wupplWsMA/view?usp=sharing",
    points: [
      {
        text: "Optimized the core automation engine by 30% by refining caching layers and asynchronous worker queues, cutting redundant API and database calls by ~35% and significantly reducing response latency under high-volume engagement traffic.",
        highlights: ["30%", "~35%"],
      },
      {
        text: "Built and shipped 10+ full-stack features across React/Next.js and FastAPI, including SQLAlchemy/Alembic schema migrations and contributions to Razorpay payment integration.",
        highlights: ["10+ full-stack features"],
      },
      {
        text: "Used Docker and ngrok for containerized development and webhook testing in local environments.",
        highlights: ["Docker", "ngrok"],
      },
    ],
    technologies: [
      { label: "Python", icon: FaPython, color: "#38BDF8" },
      { label: "FastAPI", icon: SiFastapi, color: "#2DD4BF" },
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "TypeScript", icon: SiTypescript, color: "#60A5FA" },
      { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { label: "Docker", icon: SiDocker, color: "#38BDF8" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#60A5FA" },
      { label: "SQLAlchemy", icon: SiSqlalchemy, color: "#F87171" },
      { label: "Alembic", icon: FaDatabase, color: "#FB923C" },
      { label: "Razorpay", icon: SiRazorpay, color: "#38BDF8" },
      { label: "ngrok", icon: SiNgrok, color: "#FFFFFF" },
      { label: "Git", icon: FaGitAlt, color: "#F87171" },
    ],
  },
  {
    id: 2,
    company: "Gamearena",
    designation: "SDE Intern",
    duration: "Sep 2025 – Dec 2025",
    location: "Remote",
    companyInfo: "Incubated at IIM Bangalore",
    websiteUrl: "https://gamearena.tech/",
    points: [
      {
        text: "Led UI/UX revamp across 5 platform pages, building 15+ reusable React components and resolving cross-device responsiveness issues.",
        highlights: ["5 platform pages", "15+ reusable React components"],
      },
      {
        text: "Shipped frontend features in a remote Agile environment using AI-assisted development workflows (Cursor / Gemini).",
        highlights: ["AI-assisted development workflows"],
      },
      {
        text: "Collaborated asynchronously on a fast-paced Scrum team, maintaining high delivery cadence across sprints.",
        highlights: ["Scrum team", "high delivery cadence"],
      },
    ],
    technologies: [
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Redux", icon: SiRedux, color: "#C084FC" },
      { label: "JavaScript", icon: SiJavascript, color: "#FDE047" },
      { label: "TypeScript", icon: SiTypescript, color: "#60A5FA" },
      { label: "Agile / Scrum", icon: FaUsers, color: "#34D399" },
      { label: "Cursor", icon: FaLaptopCode, color: "#A78BFA" },
      { label: "Gemini", icon: SiGooglegemini, color: "#818CF8" },
      { label: "Git", icon: FaGitAlt, color: "#F87171" },
    ],
  },
];

// ─── Highlight Helper ─────────────────────────────────────────────────────────

function HighlightedText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  if (!highlights.length) return <span>{text}</span>;

  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span key={i} className="text-white font-medium">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({
  exp,
  index,
}: {
  exp: WorkExperience;
  index: number;
}) {
  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={0.85}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      threshold={0.1}
      delay={0.15 * index}
    >
      <div className="relative group border border-white/10 hover:border-white/25 bg-zinc-950 p-8 sm:p-10 md:p-12 transition-all duration-300">
        {/* Sharp corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/0 group-hover:border-white/50 transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/0 group-hover:border-white/50 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/0 group-hover:border-white/50 transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/0 group-hover:border-white/50 transition-colors duration-500" />

        {/* ── Top Header: Company, Designation & Meta ────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-wide uppercase leading-tight">
              {exp.company}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-white font-medium">{exp.designation}</span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-400">{exp.companyInfo}</span>
            </p>
          </div>

          {/* Badges and action links */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <span className="text-xs sm:text-sm font-semibold text-white bg-white/10 border border-white/10 px-3.5 py-1.5 uppercase tracking-wider">
              {exp.duration}
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-300 border border-white/10 px-3.5 py-1.5 uppercase tracking-wider">
              {exp.location}
            </span>
            {exp.websiteUrl && (
              <a
                href={exp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold border border-white/15 hover:border-white/40 hover:bg-white hover:text-black text-white px-3.5 py-1.5 uppercase tracking-wider transition-all duration-300"
              >
                <span>Website</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            )}
            {exp.letterUrl && (
              <a
                href={exp.letterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold border border-white/15 hover:border-white/40 hover:bg-white hover:text-black text-white px-3.5 py-1.5 uppercase tracking-wider transition-all duration-300"
              >
                <span>Letter</span>
                <FaFileAlt className="w-2.5 h-2.5 text-emerald-400 group-hover:text-black transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* ── Main Layout: Responsibilities on left, 2-column wrapped Stack on right ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_390px] gap-8 md:gap-8 lg:gap-10 items-start pt-8">
          {/* Left Column: Responsibilities */}
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium block mb-4">
              What I Did
            </span>
            <ul className="space-y-5">
              {exp.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-base md:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-none bg-white/60 shrink-0" />
                  <div>
                    <HighlightedText
                      text={pt.text}
                      highlights={pt.highlights}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 2-column wrapped Tech Stack */}
          <div className="md:border-l md:border-white/10 md:pl-8 lg:pl-10">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
              Stack
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {exp.technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.label}
                    className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 cursor-default"
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                      style={{ color: tech.color }}
                    />
                    <span className="truncate">{tech.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section heading */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.1}
          delay={0}
        >
          <div className="mb-14">
            <h2 className={cn(typography.sectionTitle, "mb-4")}>
              WORK EXPERIENCE
            </h2>
            <p className={cn(typography.body, "max-w-2xl")}>
              Software engineering internships focused on distributed automation
              engines, backend performance optimization, and responsive product interfaces.
            </p>
          </div>
        </AnimatedContent>

        {/* Experience cards list */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
