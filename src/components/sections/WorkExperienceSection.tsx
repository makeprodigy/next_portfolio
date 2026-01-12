"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

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
    summary: "Led a UI/UX revamp of the official website, improving usability for users and fixing cross-resolution responsiveness issues, including a cursor offset bug.",
    companyInfo: "Early-stage startup incubated in IIM Bangalore",
    responsibilities: [
      "Led comprehensive UI/UX revamp of the official website",
      "Fixed critical cross-resolution responsiveness issues, including cursor offset bugs",
      "Built and maintained frontend using React and modern UI libraries (Aceternity UI)",
      "Worked in remote Agile environment with sprint-based collaboration"
    ],
    technologies: ["React", "TypeScript", "Aceternity UI", "Agile", "Slack", "Go"]
  }
];

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-20 relative mt-24 h-auto overflow-hidden">
      {/* Dotted Glow Background */}
      <DottedGlowBackground
        gap={20}
        radius={2.5}
        color="rgba(100, 100, 100, 0.4)"
        glowColor="rgba(59, 130, 246, 0.8)"
        opacity={0.7}
        speedMin={0.3}
        speedMax={1.0}
        speedScale={1.2}
      />
      
      <div className="container mx-auto px-2 max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-24 text-white">
          Work Experience
        </h2>
        
        <div className="space-y-16">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group relative flex flex-col md:flex-row gap-8 justify-center items-start"
            >
              {/* LEFT SIDE - Hanging ID Card */}
              <div className="flex-shrink-0 w-full md:w-72 relative">
                {/* Lanyard/String - Left side going down */}
                <div className="absolute left-1/2 -translate-x-1/2 -ml-3 -top-12 w-2 h-18 bg-gray-300 shadow-md z-20 rounded-xs" />
                
                {/* Lanyard/String - Right side going back up */}
                <div className="absolute left-1/2 -translate-x-1/2 ml-3 -top-12 w-2 h-18 bg-gray-500 shadow-md z-20 rounded-xs" />

                {/* ID Card with Spotlight Effect */}
                <CardSpotlight
                  className="relative bg-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-gray-700"
                  radius={350}
                  color="#1e40af"
                >
                  {/* Hole for lanyard with wrap effect */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-6 flex items-center justify-center z-10">
                    {/* Visible hole/slot */}
                    <div className="w-16 h-4 bg-black rounded-md border-2 border-gray-700 shadow-inner relative overflow-hidden">

                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="relative flex flex-col items-center text-center space-y-4 pt-2 z-10">
                    {/* Company Logo */}
                    <div className="w-40 h-20 rounded-xl flex items-center justify-center">
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain brightness-110"
                      />
                    </div>
                    
                    {/* Company Name */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {experience.company}
                      </h3>
                      <span className="inline-block px-4 py-1.5 text-sm font-bold bg-white text-black rounded-sm shadow-lg">
                        {experience.type}
                      </span>
                    </div>
                    
                    {/* Designation */}
                    <div className="w-full pt-4 border-t-2 border-gray-700">
                      <p className="text-xs text-gray-400 mb-1.5 uppercase tracking-wider font-bold">Designation</p>
                      <p className="text-lg font-bold text-blue-400">
                        {experience.designation}
                      </p>
                    </div>
                    
                    {/* Duration & Location */}
                    <div className="w-full space-y-2.5 text-sm text-gray-300">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-extrabold">{experience.duration}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-semibold">{experience.location}</span>
                      </div>
                    </div>

                    {/* Decorative barcode/pattern at bottom */}
                    <div className="w-full pt-4 border-t-2 border-gray-700">
                      <div className="flex justify-center gap-1">
                        <div className="w-1 h-8 bg-white"></div>
                        <div className="w-0.5 h-8 bg-gray-400"></div>
                        <div className="w-1 h-8 bg-white"></div>
                        <div className="w-1 h-8 bg-gray-400"></div>
                        <div className="w-0.5 h-8 bg-white"></div>
                        <div className="w-1 h-8 bg-gray-400"></div>
                        <div className="w-0.5 h-8 bg-white"></div>
                        <div className="w-1 h-8 bg-white"></div>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>
              </div>

              {/* RIGHT SIDE - Free Text Details */}
              <div className="flex-1 space-y-8 pt-4">
                {/* Company Info */}
                {experience.companyInfo && (
                  <div className="bg-blue-500/10 border-l-6 border-blue-500 p-4">
                    <p className="text-blue-300 text-lg font-bold flex items-center gap-2">
                      {experience.companyInfo}
                    </p>
                  </div>
                )}

                {/* Summary */}
                <div>
                  <h4 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-7 bg-blue-500" />
                    Overview
                  </h4>
                  <p className="text-gray-200 text-xl leading-relaxed font-semibold">
                    {experience.summary}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-3xl font-bold text-white mb-5 flex items-center gap-3">
                    <span className="w-1.5 h-7 bg-blue-500" />
                    Key Responsibilities
                  </h4>
                  <ul className="">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-200 text-lg font-semibold"
                      >
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2.5" />
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-5 flex items-center gap-3">
                      <span className="w-1.5 h-7 bg-blue-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-5 py-2.5 text-base font-semibold text-gray-200 rounded-lg border-2 border-gray-600 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
