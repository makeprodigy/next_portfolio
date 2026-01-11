'use client';

import { Timeline } from '@/components/ui/timeline';

export default function EducationSection() {
  const educationData = [
    {
      title: "2020",
      content: (
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-white text-xl md:text-2xl font-bold">
              High School
            </p>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-lg px-4 py-2">
              <p className="text-white text-lg md:text-xl font-bold">98%</p>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-xl mb-6 leading-relaxed">
            Completed high school education with strong foundation in Science and Mathematics. 
            Developed initial interest in programming and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/80 border border-neutral-700 rounded-xl p-6">
              <p className="text-base md:text-lg font-bold text-blue-400 mb-3">
                Focus Areas
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                Science, Mathematics, Basic Computing
              </p>
            </div>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-xl p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <p className="text-base md:text-lg font-bold text-blue-400 mb-3">
                Achievements
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
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
          <div className="flex items-center justify-between mb-6">
            <p className="text-white text-xl md:text-2xl font-bold">
              Secondary Education / Intermediate
            </p>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-lg px-4 py-2">
              <p className="text-white text-lg md:text-xl font-bold">87%</p>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-xl mb-6 leading-relaxed">
            Completed higher secondary education with focus on advanced mathematics and computer science. 
            Started exploring programming languages and web development seriously.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/80 border border-neutral-700 rounded-xl p-6">
              <p className="text-base md:text-lg font-bold text-blue-400 mb-4">
                Key Subjects
              </p>
              <ul className="text-base md:text-lg text-gray-200 list-disc list-inside space-y-2 leading-relaxed">
                <li>Advanced Mathematics</li>
                <li>Physics & Chemistry</li>
                <li>Computer Science</li>
              </ul>
            </div>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-xl p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <p className="text-base md:text-lg font-bold text-blue-400 mb-4">
                Milestones
              </p>
              <ul className="text-base md:text-lg text-gray-200 list-disc list-inside space-y-2 leading-relaxed">
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
          <div className="flex items-center justify-between mb-6">
            <p className="text-white text-xl md:text-2xl font-bold">
              B.Tech in Computer Science & AI
            </p>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-lg px-4 py-2">
              <p className="text-white text-lg md:text-xl font-bold">CGPA 8.1</p>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-xl mb-6 leading-relaxed">
            Started undergraduate degree in Bachelor of Technology (B.Tech) specializing in Computer Science and Artificial Intelligence. 
            Deep diving into advanced algorithms, AI/ML, and full-stack development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/80 border border-neutral-700 rounded-xl p-6">
              <p className="text-base md:text-lg font-bold text-blue-400 mb-4">
                Core Focus
              </p>
              <ul className="text-base md:text-lg text-gray-200 list-disc list-inside space-y-2 leading-relaxed">
                <li>Data Structures & Algorithms</li>
                <li>AI & Machine Learning</li>
                <li>System Design</li>
                <li>Full-Stack Development</li>
              </ul>
            </div>
            <div className="bg-neutral-900/80 border-2 border-neutral-600 rounded-xl p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <p className="text-base md:text-lg font-bold text-blue-400 mb-4">
                Achievements
              </p>
              <ul className="text-base md:text-lg text-gray-200 list-disc list-inside space-y-2 leading-relaxed">
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
          <p className="text-white text-xl md:text-2xl font-bold mb-6 animate-pulse">
            Current Journey
          </p>
          <p className="text-gray-300 text-base md:text-xl mb-6 leading-relaxed">
            Continuing B.Tech program with advanced coursework and hands-on projects. 
            Actively building impactful applications and preparing for industry challenges.
          </p>
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-500/50 rounded-xl p-6 shadow-lg shadow-blue-500/20">
            <p className="text-base md:text-lg text-blue-200 leading-relaxed">
              <span className="font-bold text-blue-300">Currently:</span> Building impactful, user-centric applications 
              and expanding expertise in AI, data science, and modern web technologies while maintaining strong focus on problem-solving and innovation.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3 text-blue-400 text-base md:text-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">Active Development Phase</span>
          </div>
        </div>
      ),
    },
    {
      title: "2028+",
      content: (
        <div>
          <p className="text-white text-xl md:text-2xl font-bold mb-6">
            Graduation & Beyond
          </p>
          <p className="text-gray-300 text-base md:text-xl mb-6 leading-relaxed">
            Expected graduation with B.Tech degree in Computer Science and Artificial Intelligence. 
            Ready to make significant contributions in the tech industry and work on innovative solutions.
          </p>
          <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 mb-6">
            <p className="text-base md:text-lg font-bold text-blue-400 mb-4">
              Future Goals
            </p>
            <ul className="text-base md:text-lg text-gray-200 list-disc list-inside space-y-2 leading-relaxed">
              <li>Complete B.Tech in CS & AI</li>
              <li>Build impactful AI-powered solutions</li>
              <li>Contribute to cutting-edge projects</li>
              <li>Continue innovation & learning</li>
            </ul>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <svg className="w-7 h-7 md:w-9 md:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-xl md:text-3xl font-bold text-white">
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
