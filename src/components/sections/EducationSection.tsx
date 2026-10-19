'use client';

import { Timeline } from '@/components/ui/timeline';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export default function EducationSection() {
  const educationData = [
    {
      title: "2026",
      content: (
        <div>
          <p className={cn(typography.educationCardTitle, 'mb-4 animate-pulse')}>
            Current Journey
          </p>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Continuing B.Tech program with advanced coursework and hands-on projects.
            Actively building impactful applications and ready for industry challenges.
          </p>
          <div className="bg-transparent border border-white/10 rounded-none p-4 hover:bg-white/[0.02] transition-colors">
            <p className={cn(typography.educationBody, 'leading-snug')}>
              <span className={typography.emphasis}>Currently:</span> Building impactful, user-centric applications
              and expanding expertise in AI, data science, and modern web technologies while maintaining strong focus on problem-solving and innovation.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className={typography.educationCardTitle}>
              B.Tech in Computer Science &amp; AI
            </p>
            <div className="bg-transparent border border-white/20 rounded-none px-4 py-2">
              <p className={typography.educationScore}>CGPA 8.1</p>
            </div>
          </div>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Started undergraduate degree in Bachelor of Technology (B.Tech) specializing in Computer Science and Artificial Intelligence.
            Deep diving into advanced algorithms, AI/ML, and full-stack development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-transparent border border-white/10 hover:bg-white/[0.02] transition-colors rounded-none p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Core Focus
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>Data Structures &amp; Algorithms</li>
                <li>AI &amp; Machine Learning</li>
                <li>System Design</li>
                <li>Full-Stack Development</li>
              </ul>
            </div>
            <div className="bg-transparent border border-white/10 hover:bg-white/[0.02] transition-colors rounded-none p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Milestones
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>400+ DSA problems solved</li>
                <li>10+ projects completed</li>
                <li>2 internships</li>
                <li>17+ technologies learned</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className={typography.educationCardTitle}>
              Secondary Education / Intermediate
            </p>
            <div className="bg-transparent border border-white/20 rounded-none px-4 py-2">
              <p className={typography.educationScore}>87%</p>
            </div>
          </div>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Completed higher secondary education with focus on advanced mathematics and computer science.
            Started exploring programming languages and web development seriously.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-transparent border border-white/10 hover:bg-white/[0.02] transition-colors rounded-none p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Key Subjects
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>Advanced Mathematics</li>
                <li>Physics &amp; Chemistry</li>
              </ul>
            </div>
            <div className="bg-transparent border border-white/10 hover:bg-white/[0.02] transition-colors rounded-none p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Milestones
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>First web development projects</li>
                <li>Started learning programming</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className={typography.educationCardTitle}>
              High School
            </p>
            <div className="bg-transparent border border-white/20 rounded-none px-4 py-2">
              <p className={typography.educationScore}>98%</p>
            </div>
          </div>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Completed high school education with a strong foundation in Science and Mathematics.
            Developed initial interest in programming and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-transparent border border-white/10 hover:bg-white/[0.02] transition-colors rounded-none p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Focus Areas
              </p>
              <p className={cn(typography.educationBody, 'leading-snug')}>
                Science, Mathematics, Basic Computing
              </p>
            </div>
            <div className="bg-transparent border border-white/10 hover:bg-white/[0.02] transition-colors rounded-none p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Milestones
              </p>
              <p className={cn(typography.educationBody, 'leading-snug')}>
                Strong academic foundation, Introduction to coding
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="education" className="bg-zinc-950 mx-auto">
      <Timeline data={educationData} />
    </div>
  );
}
