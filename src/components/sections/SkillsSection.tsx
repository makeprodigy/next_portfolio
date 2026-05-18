'use client';

import AnimatedContent from '@/components/ui/AnimatedContent';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

import {
  FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaChartPie, FaCogs, FaProjectDiagram, 
  FaChartLine, FaBrain, FaRobot, FaLink, FaSearch, FaTree, FaMicrochip, 
  FaChartBar, FaChartArea, FaFilter, FaServer, FaLock, FaSync, FaCube, 
  FaShieldAlt, FaPuzzlePiece, FaCode, FaCloud, FaLaptopCode, FaNetworkWired, 
  FaNodeJs, FaReact, FaFileExcel, FaTable, FaGitAlt
} from 'react-icons/fa';

import {
  SiTypescript, SiJavascript, SiScikitlearn, SiPandas, SiNumpy, SiTableau,
  SiNextdotjs, SiExpress, SiTailwindcss, SiPostgresql, SiMysql, SiMongodb, SiPrisma,
  SiStreamlit, SiVercel, SiRender, SiGithubactions
} from 'react-icons/si';

// ─── Skill categories ────────────────────────────────────────────────────────

type Category = {
  id: string;
  label: string;
  icon: IconType;
  color: string;
  bgClass: string;
  glowClass: string;
  gradientLeft: string;
  gradientRight: string;
  skills: { name: string; icon: IconType; color: string }[];
};

const categories: Category[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: FaCode,
    color: 'text-blue-400',
    bgClass: 'bg-blue-500/10 hover:bg-blue-500/25',
    glowClass: 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]',
    gradientLeft: 'from-blue-500/30 to-transparent',
    gradientRight: 'from-blue-500/30 to-transparent',
    skills: [
      { name: 'Python', icon: FaPython, color: 'text-blue-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'SQL', icon: FaDatabase, color: 'text-sky-500' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    ],
  },
  {
    id: 'ml-ai',
    label: 'Machine Learning & AI',
    icon: FaBrain,
    color: 'text-purple-400',
    bgClass: 'bg-purple-500/10 hover:bg-purple-500/25',
    glowClass: 'bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]',
    gradientLeft: 'from-purple-500/30 to-transparent',
    gradientRight: 'from-purple-500/30 to-transparent',
    skills: [
      { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-500' },
      { name: 'Generative AI', icon: FaBrain, color: 'text-emerald-400' },
      { name: 'RAG', icon: FaRobot, color: 'text-blue-400' },
      { name: 'LangChain', icon: FaLink, color: 'text-green-500' },
      { name: 'LangGraph', icon: FaProjectDiagram, color: 'text-rose-400' },
      { name: 'FAISS', icon: FaSearch, color: 'text-cyan-400' },
      { name: 'ChromaDB', icon: FaDatabase, color: 'text-pink-400' },
      { name: 'Pinecone', icon: FaTree, color: 'text-violet-400' },
      { name: 'LLM Apps', icon: FaMicrochip, color: 'text-indigo-400' },
      { name: 'Feature Eng.', icon: FaCogs, color: 'text-amber-500' },
      { name: 'SMOTE', icon: FaChartPie, color: 'text-teal-400' },
      { name: 'ROC / PRC', icon: FaChartLine, color: 'text-purple-400' },
    ],
  },
  {
    id: 'data-bi',
    label: 'Data & BI',
    icon: FaChartBar,
    color: 'text-green-400',
    bgClass: 'bg-green-500/10 hover:bg-green-500/25',
    glowClass: 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]',
    gradientLeft: 'from-green-500/30 to-transparent',
    gradientRight: 'from-green-500/30 to-transparent',
    skills: [
      { name: 'Pandas', icon: SiPandas, color: 'text-indigo-400' },
      { name: 'NumPy', icon: SiNumpy, color: 'text-sky-400' },
      { name: 'Tableau', icon: SiTableau, color: 'text-orange-500' },
      { name: 'Matplotlib', icon: FaChartBar, color: 'text-blue-400' },
      { name: 'Seaborn', icon: FaChartArea, color: 'text-cyan-500' },
      { name: 'EDA', icon: FaSearch, color: 'text-emerald-400' },
      { name: 'ETL Pipelines', icon: FaFilter, color: 'text-amber-400' },
      { name: 'Excel', icon: FaFileExcel, color: 'text-green-600' },
      { name: 'Google Sheets', icon: FaTable, color: 'text-green-500' },
    ],
  },
  {
    id: 'frontend-backend',
    label: 'Frontend & Backend',
    icon: FaLaptopCode,
    color: 'text-orange-400',
    bgClass: 'bg-orange-500/10 hover:bg-orange-500/25',
    glowClass: 'bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]',
    gradientLeft: 'from-orange-500/30 to-transparent',
    gradientRight: 'from-orange-500/30 to-transparent',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-sky-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-white' },
      { name: 'REST APIs', icon: FaServer, color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'JWT', icon: FaLock, color: 'text-pink-500' },
      { name: 'OAuth 2.0', icon: FaLock, color: 'text-indigo-400' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: FaDatabase,
    color: 'text-cyan-400',
    bgClass: 'bg-cyan-500/10 hover:bg-cyan-500/25',
    glowClass: 'bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]',
    gradientLeft: 'from-cyan-500/30 to-transparent',
    gradientRight: 'from-cyan-500/30 to-transparent',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'MySQL', icon: SiMysql, color: 'text-sky-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Prisma ORM', icon: SiPrisma, color: 'text-white' },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment & DevOps',
    icon: FaCloud,
    color: 'text-rose-400',
    bgClass: 'bg-rose-500/10 hover:bg-rose-500/25',
    glowClass: 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.8)]',
    gradientLeft: 'from-rose-500/30 to-transparent',
    gradientRight: 'from-rose-500/30 to-transparent',
    skills: [
      { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-500' },
      { name: 'Vercel', icon: SiVercel, color: 'text-white' },
      { name: 'Render', icon: SiRender, color: 'text-emerald-400' },
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-500' },
      { name: 'Agile', icon: FaSync, color: 'text-green-400' },
    ],
  },
  {
    id: 'system-design',
    label: 'System Design',
    icon: FaNetworkWired,
    color: 'text-amber-400',
    bgClass: 'bg-amber-500/10 hover:bg-amber-500/25',
    glowClass: 'bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)]',
    gradientLeft: 'from-amber-500/30 to-transparent',
    gradientRight: 'from-amber-500/30 to-transparent',
    skills: [
      { name: 'DSA', icon: FaProjectDiagram, color: 'text-rose-400' },
      { name: 'OOP', icon: FaCube, color: 'text-blue-500' },
      { name: 'SOLID', icon: FaShieldAlt, color: 'text-emerald-400' },
      { name: 'Design Patterns', icon: FaPuzzlePiece, color: 'text-amber-500' },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Header Container */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-20 mb-10">
        <AnimatedContent
          distance={60}
          direction="vertical"
          reverse={false}
          duration={0.9}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.15}
          delay={0.1}
        >
          <h2 className={cn(typography.sectionTitle, 'mb-4')}>SKILLS</h2>
          <p className={cn(typography.body, 'max-w-2xl')}>
            A comprehensive overview of my technical expertise, spanning AI, full-stack development, and data engineering.
          </p>
        </AnimatedContent>
      </div>

      {/* Row-wise Categories Full-Width */}
      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        threshold={0.1}
        delay={0.2}
      >
        <div className="flex flex-col relative z-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={cn(
                "group relative w-full border-t border-white/5 transition-colors duration-300",
                cat.bgClass,
                "last:border-b"
              )}
            >
              {/* Left Edge Glow & Gradient */}
              <div className={cn("absolute inset-y-0 left-0 w-[2px] transition-opacity duration-300 opacity-60 group-hover:opacity-100", cat.glowClass)} />
              <div className={cn("absolute inset-y-0 left-0 w-32 md:w-64 transition-opacity duration-300 opacity-30 group-hover:opacity-100 bg-gradient-to-r pointer-events-none", cat.gradientLeft)} />

              {/* Right Edge Glow & Gradient */}
              <div className={cn("absolute inset-y-0 right-0 w-[2px] transition-opacity duration-300 opacity-60 group-hover:opacity-100", cat.glowClass)} />
              <div className={cn("absolute inset-y-0 right-0 w-32 md:w-64 transition-opacity duration-300 opacity-30 group-hover:opacity-100 bg-gradient-to-l pointer-events-none", cat.gradientRight)} />

              {/* Content Container */}
              <div className="container mx-auto px-4 md:px-8 max-w-6xl py-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative z-10">
                
                {/* Category Heading */}
                <div className="w-full md:w-64 flex-shrink-0 flex items-center gap-3">
                  <cat.icon className={cn("w-6 h-6 transition-transform duration-300 group-hover:scale-110", cat.color)} />
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                    {cat.label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 flex-1">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-3 py-1.5 transition-all duration-200",
                        "bg-white/5 border border-white/10",
                        "hover:bg-white/10 hover:border-white/30 cursor-default hover:shadow-lg"
                      )}
                    >
                      <skill.icon className={cn("w-4 h-4", skill.color)} />
                      <span className="text-sm md:text-base text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </section>
  );
}
