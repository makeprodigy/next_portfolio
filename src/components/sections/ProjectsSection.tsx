"use client";

import React from "react";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaNetworkWired,
  FaBrain,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiRedis,
  SiWebpack,
  SiDocker,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

// ─── Project Data Types ───────────────────────────────────────────────────────

type TechTag = {
  label: string;
  icon?: IconType;
  color?: string;
};

type Project = {
  id: string;
  title: string;
  tagline: string;
  date: string;
  summary: string;
  githubLink: string;
  demoLink: string;
  tech: TechTag[];
};

const projects: Project[] = [
  {
    id: "flux",
    title: "Flux",
    tagline: "AI-Powered Assessment Platform",
    date: "February 2026",
    summary:
      "Engineered a distributed AI assessment platform with BullMQ, Redis, and WebSockets enabling concurrent document-generation workloads through scalable worker pools and real-time progress streaming.",
    githubLink: "https://github.com/makeprodigy/flux",
    demoLink: "https://flux-assignments.vercel.app/",
    tech: [
      { label: "Next.js 15", icon: SiNextdotjs, color: "#FFFFFF" },
      { label: "TypeScript", icon: SiTypescript, color: "#60A5FA" },
      { label: "MongoDB Atlas", icon: SiMongodb, color: "#4ADE80" },
      { label: "Redis", icon: SiRedis, color: "#F87171" },
      { label: "BullMQ", icon: SiWebpack, color: "#38BDF8" },
      { label: "WebSockets", icon: FaNetworkWired, color: "#C084FC" },
      { label: "Gemini API", icon: FaBrain, color: "#818CF8" },
      { label: "Docker", icon: SiDocker, color: "#38BDF8" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#22D3EE" },
    ],
  },
  {
    id: "reliefops",
    title: "Relief Ops",
    tagline: "Crisis Relief Coordination Platform",
    date: "June 2026",
    summary:
      "Architected an event-driven disaster response system featuring asynchronous allocation services, geospatial resource matching, and real-time operations dashboards for coordinating volunteers and relief resources.",
    githubLink: "https://github.com/MouliSrivastava05/ReliefOps",
    demoLink: "https://relief-ops-two.vercel.app/",
    tech: [
      { label: "Next.js 15", icon: SiNextdotjs, color: "#FFFFFF" },
      { label: "TypeScript", icon: SiTypescript, color: "#60A5FA" },
      { label: "MongoDB", icon: SiMongodb, color: "#4ADE80" },
      { label: "Redis", icon: SiRedis, color: "#F87171" },
      { label: "WebSockets", icon: FaNetworkWired, color: "#C084FC" },
      { label: "Redux", icon: SiReact, color: "#61DAFB" },
      { label: "Google Maps", icon: FaMapMarkerAlt, color: "#F87171" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#22D3EE" },
    ],
  },
];

// ─── Project Card Component ───────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      threshold={0.1}
      delay={0.15 * index}
    >
      <div className="relative group flex flex-col justify-between h-full border border-white/10 hover:border-white/25 bg-zinc-950 p-8 sm:p-10 md:p-12 transition-all duration-300">
        {/* Sharp corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/0 group-hover:border-white/50 transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/0 group-hover:border-white/50 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/0 group-hover:border-white/50 transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/0 group-hover:border-white/50 transition-colors duration-500" />

        {/* ── Top Header: Meta, Title, Tagline & Summary ──────────────────── */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="text-xs sm:text-sm font-semibold text-white/90 bg-white/5 border border-white/10 px-3.5 py-1.5 uppercase tracking-wider">
              {project.date}
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-widest">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-wide uppercase leading-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-medium uppercase tracking-wider mb-6">
            {project.tagline}
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal mb-8">
            {project.summary}
          </p>
        </div>

        {/* ── Bottom Section: Tech Stack & Action Links ────────────────────── */}
        <div className="mt-auto">
          {/* Tech stack */}
          <div className="pt-6 border-t border-white/5 mb-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium block mb-3.5">
              Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/10 hover:border-white/25 text-xs sm:text-sm text-neutral-200 font-medium transition-colors cursor-default"
                  >
                    {Icon && (
                      <Icon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: tech.color || "#FFFFFF" }}
                      />
                    )}
                    <span>{tech.label}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 px-4 border border-white/15 hover:border-white/40 hover:bg-white hover:text-black text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 px-4 border border-white/15 hover:border-white/40 hover:bg-white hover:text-black text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
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
            <h2 className={cn(typography.sectionTitle, "mb-4")}>PROJECTS</h2>
            <p className={cn(typography.body)}>
              Featured builds spanning distributed AI engines, crisis response
              systems, and high-performance web applications.
            </p>
          </div>
        </AnimatedContent>

        {/* 2-column Wide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
