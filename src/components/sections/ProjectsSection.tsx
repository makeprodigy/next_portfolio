"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// Project categories with their projects
const projectCategories = [
  {
    id: 1,
    number: "1",
    title: "Frontend & UI",
    location: "React & Design",
    projects: [
      {
        title: "OpenSearch Frontend",
        description: "Modern React UI for discovering GitHub repositories",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
        githubLink: "https://github.com/yourusername/opensearch-frontend",
        stack: ["React", "Vite", "TailwindCSS", "Radix UI", "React Router"],
        detailedDescription: "A beautiful and responsive frontend application that helps developers find welcoming GitHub repositories. Features advanced filtering, real-time search, health score visualization, and a modern UI built with TailwindCSS and shadcn-inspired components. Includes intelligent repository ranking and seamless navigation.",
      },
    ],
  },
  {
    id: 2,
    number: "2",
    title: "Backend & APIs",
    location: "Node.js & Servers",
    projects: [
      {
        title: "OpenSearch Backend",
        description: "RESTful API with intelligent repository ranking",
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
        githubLink: "https://github.com/yourusername/opensearch-backend",
        stack: ["Node.js", "Express", "Prisma", "MySQL", "JWT"],
        detailedDescription: "Robust backend API featuring custom health score algorithm (0-100 scale) for ranking GitHub repositories. Implements JWT authentication, background workers for data refresh, ETag caching, rate limiting, and automatic TTL-based cleanup. Includes comprehensive GitHub API integration with intelligent caching to optimize API usage and maintain database efficiency.",
      },
    ],
  },
  {
    id: 3,
    number: "3",
    title: "Data & AI",
    location: "Machine Learning",
    projects: [
      {
        title: "AI Project Coming Soon",
        description: "Intelligent data processing platform",
        src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80",
        githubLink: "https://github.com/username/ai-project",
        stack: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
        detailedDescription: "An advanced AI-powered platform leveraging machine learning to provide intelligent insights. Features natural language processing, predictive analytics, and automated decision-making capabilities.",
      },
    ],
  },
  {
    id: 4,
    number: "4",
    title: "Tools & Technologies",
    location: "Developer Tools",
    projects: [
      {
        title: "DevTools Coming Soon",
        description: "Developer productivity toolkit",
        src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80",
        githubLink: "https://github.com/username/devtools",
        stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "MDX"],
        detailedDescription: "A comprehensive developer toolkit designed to streamline workflows and boost productivity. Features code generation, automated testing, and seamless integration with popular development environments.",
      },
    ],
  },
];

type Project = {
  title: string;
  description: string;
  src: string;
  githubLink: string;
  stack: string[];
  detailedDescription: string;
};

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className={cn(typography.sectionTitle, "mb-12")}>
          PROJECTS
        </h2>

        {/* Expandable Modal */}
        <AnimatePresence>
          {active && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 h-full w-full z-[100]"
              />
              <div className="fixed inset-0 grid place-items-center z-[101]">
                <motion.button
                  key={`button-${active.title}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-800 rounded-full h-6 w-6 z-[102]"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden border border-neutral-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      width={500}
                      height={320}
                      src={active.src}
                      alt={active.title}
                      className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start p-3">
                      <div className="flex-1 pr-2">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className={typography.modalTitle}
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className={typography.modalDescription}
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        href={active.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("px-4 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center gap-2 border border-neutral-700 shrink-0", typography.button)}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </motion.a>
                    </div>
                    <div className="pt-3 relative px-3">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn(typography.modalBody, "h-40 md:h-fit pb-8 flex flex-col items-start gap-3 overflow-auto leading-snug [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]")}
                      >
                        <div className="space-y-3 w-full">
                          <div>
                            <h4 className={cn(typography.modalSubheading, "mb-1.5")}>Tech Stack</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {active.stack.map((tech, index) => (
                                <span
                                  key={index}
                                  className={cn("px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full", typography.tag)}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className={cn(typography.modalSubheading, "mb-1.5")}>Description</h4>
                            <p className={cn(typography.modalBody, 'leading-snug')}>{active.detailedDescription}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="flex-shrink-0 mb-6">
                <div className={cn(typography.categoryNumber, "mb-3")}>
                  {category.number}
                </div>
                <div className="space-y-1">
                  <h3 className={cn(typography.categoryTitle, "flex items-center gap-2")}>
                    {category.title}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </h3>
                  <p className={typography.categoryLocation}>{category.location}</p>
                </div>
              </div>

              {/* Project Stack */}
              <div className="flex flex-col gap-2">
                {category.projects.map((project, index) => (
                  <motion.div
                    layoutId={`card-${project.title}-${id}`}
                    key={`card-${project.title}-${id}`}
                    onClick={() => setActive(project)}
                    className="group relative overflow-hidden rounded-lg cursor-pointer border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/80 transition-all duration-300"
                  >
                    <motion.div
                      layoutId={`image-${project.title}-${id}`}
                      className="aspect-[16/9] overflow-hidden"
                    >
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                    <div className="p-3">
                      <motion.h4
                        layoutId={`title-${project.title}-${id}`}
                        className={cn(typography.cardTitle, "mb-0.5")}
                      >
                        {project.title}
                      </motion.h4>
                      <motion.p
                        layoutId={`description-${project.description}-${id}`}
                        className={cn(typography.cardDescription, "line-clamp-2")}
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
