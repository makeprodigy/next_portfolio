"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

interface WorkExperience {
  id: number;
  company: string;
  logo: string;
  designation: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  companyInfo?: string;
  responsibilities: string[];
  technologies?: string[];
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "Gamearena",
    logo: "/Gamearena text Logo.svg",
    designation: "Software Development Intern",
    duration: "Sep 2025 - Dec 2025",
    location: "Remote",
    type: "Internship",
    summary: "Led a UI/UX revamp of the platform, improving usability and fixing cross-device responsiveness issues.",
    companyInfo: "Early-stage startup incubated in IIM Bangalore",
    responsibilities: [
      "Led a UI/UX revamp of the platform, improving usability and fixing cross-device responsiveness issues.",
      "Developed and optimized responsive frontend components using React and JavaScript in a remote Agile environment.",
      "Resolved key UI interaction and layout consistency problems across multiple screen resolutions.",
      "Built scalable and visually polished interfaces using Aceternity UI for a smoother user experience."
    ],
    technologies: ["React", "JavaScript", "Aceternity UI", "Agile", "Slack", "Go"]
  }
];

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-24 relative bg-zinc-950 h-auto overflow-hidden">
      {/* Elegant animated beams */}
      <BackgroundBeams className="absolute inset-0 z-0 opacity-40" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <h2 className={cn(typography.sectionTitle, "mb-10")}>
          INTERNSHIP(S)
        </h2>
        
        <div className="space-y-8">
          {experiences.map((experience) => (
            <CardSpotlight
              key={experience.id}
              className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 p-6 md:p-8 rounded-none border border-white/10 bg-neutral-950/60 shadow-2xl overflow-hidden group"
              radius={400}
              color="#1e40af"
            >
              {/* Subtle background glow effect behind the logo area */}
              <div className="absolute top-0 left-0 w-full lg:w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* LEFT COLUMN - Branding & Meta */}
              <div className="flex-shrink-0 w-full lg:w-1/3 flex flex-col space-y-6 z-10 relative">
                {/* Logo Area */}
                <div className="w-full max-w-[200px] h-24 bg-black/40 rounded-none border border-white/5 flex items-center justify-center p-4 backdrop-blur-sm shadow-inner">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain brightness-110 drop-shadow-lg"
                  />
                </div>
                
                {/* Company & Badges */}
                <div>
                  <h3 className={cn(typography.weCardTitle, "mb-2 tracking-tight")}>
                    {experience.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn("px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-none shadow-sm text-sm font-semibold")}>
                      {experience.type}
                    </span>
                    {experience.companyInfo && (
                      <span className="text-xs md:text-sm text-neutral-400 font-medium px-2 border-l-2 border-neutral-700">
                        {experience.companyInfo}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Role & Meta */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div>
                    <p className={cn(typography.label, "mb-1 text-neutral-500")}>Role</p>
                    <p className={cn(typography.weDesignation, "text-white")}>
                      {experience.designation}
                    </p>
                  </div>
                  
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <div className="w-7 h-7 rounded-none bg-white/5 flex items-center justify-center border border-white/5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <div className="w-7 h-7 rounded-none bg-white/5 flex items-center justify-center border border-white/5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Content */}
              <div className="flex-1 flex flex-col space-y-6 z-10 relative">
                {/* Overview */}
                <div>
                  <h4 className={cn(typography.weSubsectionTitle, "mb-2 text-white flex items-center gap-2")}>
                    <div className="w-1.5 h-5 bg-blue-500 rounded-none" />
                    Overview
                  </h4>
                  <p className={cn(typography.weBody, "text-neutral-400 leading-relaxed text-sm md:text-base")}>
                    {experience.summary}
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className={cn(typography.weSubsectionTitle, "mb-3 text-white flex items-center gap-2")}>
                    <div className="w-1.5 h-5 bg-blue-500 rounded-none" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className={cn("flex items-start gap-3 group/item", typography.weBody)}
                      >
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-none bg-blue-500/50 group-hover/item:bg-blue-400 mt-2 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <span className="text-neutral-300 leading-relaxed group-hover/item:text-white transition-colors text-sm md:text-base">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="pt-1">
                    <h4 className={cn(typography.weSubsectionTitle, "mb-3 text-white flex items-center gap-2")}>
                      <div className="w-1.5 h-5 bg-blue-500 rounded-none" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-none text-xs md:text-sm font-medium text-neutral-300 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}

