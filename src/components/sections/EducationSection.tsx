'use client';

import { Timeline } from '@/components/ui/timeline';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export default function EducationSection() {
  const educationData = [
    {
      title: "2020",
      content: (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className={typography.educationCardTitle}>
              High School
            </p>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-lg px-4 py-2">
              <p className={typography.educationScore}>98%</p>
            </div>
          </div>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Completed high school education with strong foundation in Science and Mathematics. 
            Developed initial interest in programming and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/80 rounded-xl p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Focus Areas
              </p>
              <p className={cn(typography.educationBody, 'leading-snug')}>
                Science, Mathematics, Basic Computing
              </p>
            </div>
            <div className="bg-neutral-700/80 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-500/20">
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
    {
      title: "2022",
      content: (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className={typography.educationCardTitle}>
              Secondary Education / Intermediate
            </p>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-lg px-4 py-2">
              <p className={typography.educationScore}>87%</p>
            </div>
          </div>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Completed higher secondary education with focus on advanced mathematics and computer science. 
            Started exploring programming languages and web development seriously.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/80 rounded-xl p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Key Subjects
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>Advanced Mathematics</li>
                <li>Physics & Chemistry</li>
              </ul>
            </div>
            <div className="bg-neutral-700/80 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-500/20">
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
      title: "2024",
      content: (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className={typography.educationCardTitle}>
              B.Tech in Computer Science & AI
            </p>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-lg px-4 py-2">
              <p className={typography.educationScore}>CGPA 8.1</p>
            </div>
          </div>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Started undergraduate degree in Bachelor of Technology (B.Tech) specializing in Computer Science and Artificial Intelligence. 
            Deep diving into advanced algorithms, AI/ML, and full-stack development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/80 rounded-xl p-4">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Core Focus
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>Data Structures & Algorithms</li>
                <li>AI & Machine Learning</li>
                <li>System Design</li>
                <li>Full-Stack Development</li>
              </ul>
            </div>
            <div className="bg-neutral-700/80 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-500/20">
              <p className={cn(typography.educationBodyWhite, 'mb-2')}>
                Milestones
              </p>
              <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
                <li>100+ LeetCode problems solved</li>
                <li>7+ projects completed</li>
                <li>1 internship experience</li>
                <li>15+ technologies learned</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className={cn(typography.educationCardTitle, 'mb-4 animate-pulse')}>
            Current Journey
          </p>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Continuing B.Tech program with advanced coursework and hands-on projects. 
            Actively building impactful applications and preparing for industry challenges.
          </p>
          <div className="bg-neutral-900/60 rounded-xl p-4">
            <p className={cn(typography.educationBody, 'leading-snug')}>
              <span className={typography.emphasis}>Currently:</span> Building impactful, user-centric applications 
              and expanding expertise in AI, data science, and modern web technologies while maintaining strong focus on problem-solving and innovation.
            </p>
          </div>
          <div className={cn('mt-4 flex items-center gap-2.5', typography.educationBody, 'leading-snug')}>
            <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
            <span className="font-normal">Active Development Phase</span>
          </div>
        </div>
      ),
    },
    {
      title: "2028+",
      content: (
        <div>
          <p className={cn(typography.educationCardTitle, 'mb-4')}>
            Graduation & Beyond
          </p>
          <p className={cn(typography.educationBody, 'mb-4 leading-snug')}>
            Expected graduation with B.Tech degree in Computer Science and Artificial Intelligence. 
            Ready to make significant contributions in the tech industry and work on innovative solutions.
          </p>
          <div className="bg-neutral-900/60 rounded-xl p-4 mb-4">
            <p className={cn(typography.educationBodyWhite, 'mb-2')}>
              Future Goals
            </p>
            <ul className={cn(typography.educationList, 'space-y-1.5 leading-snug')}>
              <li>Complete B.Tech in CS & AI</li>
              <li>Build impactful AI-powered solutions</li>
              <li>Contribute to cutting-edge projects</li>
              <li>Continue innovation & learning</li>
            </ul>
          </div>
          <div className="flex items-center gap-3 mt-1.5">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className={typography.subsectionTitleWhite}>
              Journey in progress...
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="education" className="bg-black mx-auto">
      <Timeline data={educationData} />
    </div>
  );
}
