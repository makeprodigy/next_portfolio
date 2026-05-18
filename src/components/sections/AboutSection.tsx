'use client';

import AnimatedContent from '@/components/ui/AnimatedContent';
import CountUp from '@/components/ui/CountUp';
import Image from 'next/image';

import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaFileAlt } from 'react-icons/fa';
import { socialLinks } from '@/config/social';
import { useState } from 'react';
import { LinkPreview } from '@/components/ui/link-preview';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'linkedin':
        return FaLinkedin;
      case 'github':
        return FaGithub;
      case 'email':
        return FaEnvelope;
      case 'twitter':
        return FaTwitter;
      default:
        return FaEnvelope;
    }
  };

  // Filter to only show LinkedIn, GitHub, and Email
  const displayedLinks = socialLinks.filter(link => 
    ['linkedin', 'github', 'email'].includes(link.icon?.toLowerCase() || '')
  );

  // Handle email copy
  const handleEmailClick = (href: string) => {
    const email = href.replace('mailto:', '');
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <AuroraBackground id="about" className="py-20 bg-zinc-950 dark:bg-zinc-950 -mt-[12.5rem] relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.2}
          >
            <h2 className={cn(typography.sectionTitle, 'mb-10')}>
              ABOUT ME
            </h2>
            <div className="space-y-8 leading-snug">
              <div className="space-y-6">
                <p className={cn(typography.body, 'text-neutral-400')}>
                  I'm a curiosity-driven problem solver who finds genuine joy in untangling complex challenges—for me, the process is just as rewarding as crossing the finish line.
                </p>
                <p className={cn(typography.body, 'text-neutral-400')}>
                  I hold my work to a high standard, whether that means architecting clean, maintainable code or ensuring the final product makes intuitive sense to its users. I thrive both independently and in teams, and I'm always the person asking 'but why does it work this way?' before accepting the status quo.
                </p>
                <p className={cn(typography.body, 'text-neutral-400')}>
                  I'm constantly learning—not out of obligation, but because stagnation genuinely bothers me. Every new project is an opportunity to dive deeper and build something better.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Technical Arsenal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">Languages</h4>
                    <p className="text-base text-neutral-200 leading-relaxed">Python, TypeScript, JavaScript, SQL, HTML, CSS</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">Frontend & Backend</h4>
                    <p className="text-base text-neutral-200 leading-relaxed">React, Next.js, Node.js, Express.js, REST APIs, Tailwind CSS, JWT, OAuth 2.0</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">Databases & Data</h4>
                    <p className="text-base text-neutral-200 leading-relaxed">MongoDB, PostgreSQL, MySQL, Prisma ORM, NumPy, Pandas, Scikit-learn, Tableau, MS Excel, Looker, Google Studio</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">System Design</h4>
                    <p className="text-base text-neutral-200 leading-relaxed">DSA, OOP, SOLID, Design Patterns, Agile, Git, GitHub Actions</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Image or Visual Element */}
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={true}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={0.4}
          >
            <div className="relative flex flex-col justify-center items-center gap-8 mt-12 md:mt-0">
              <div className="mx-auto h-[450px] w-[350px] md:h-[550px] md:w-[420px] rounded-none overflow-hidden border border-white/10 relative group bg-zinc-900">
                {/* Sharp corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/60 z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/60 z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/60 z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/60 z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

                <Image
                  src="/my_portrait.jpeg"
                  alt="Pushpendra Portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              {/* Name and Social Links */}
              <div className="flex flex-col items-center gap-5 w-full max-w-[420px]">
                <div className="flex w-full items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xl font-semibold text-white tracking-wide">
                    Pushpendra S. Parihar
                  </h3>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">
                    Developer
                  </span>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex gap-4 w-full justify-between">
                  {displayedLinks.map((link) => {
                    const Icon = getIcon(link.icon || '');
                    const isEmail = link.icon?.toLowerCase() === 'email';
                    const hasPreview = ['github', 'linkedin'].includes(link.icon?.toLowerCase() || '');
                    
                    const btnClass = "w-12 h-12 rounded-none border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black group relative bg-zinc-950";
                    const iconClass = "w-5 h-5 text-neutral-400 group-hover:text-black transition-colors";

                    if (isEmail) {
                      return (
                        <button
                          key={link.label}
                          onClick={() => handleEmailClick(link.href)}
                          className={btnClass}
                          aria-label={link.label}
                        >
                          <Icon className={iconClass} />
                          
                          {/* Tooltip */}
                          <div className={cn('absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-white text-black text-xs font-medium uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none')}>
                            {copiedEmail ? 'Copied!' : 'Copy email'}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                              <div className="border-4 border-transparent border-t-white" />
                            </div>
                          </div>
                        </button>
                      );
                    }
                    
                    if (hasPreview) {
                      return (
                        <LinkPreview
                          key={link.label}
                          url={link.href}
                          className={btnClass}
                        >
                          <Icon className={iconClass} />
                        </LinkPreview>
                      );
                    }
                    
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnClass}
                        aria-label={link.label}
                      >
                        <Icon className={iconClass} />
                      </a>
                    );
                  })}
                  
                  {/* Resume CTA */}
                  <a
                    href="https://drive.google.com/file/d/1kcBOYDvm3c7NOLSKPSDTI63rS9dTRlkh/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 rounded-none border border-white/10 transition-all duration-300 hover:bg-white hover:text-black group bg-zinc-950 px-4"
                    aria-label="View Resume"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-300 group-hover:text-black transition-colors">Resume</span>
                    <FaFileAlt className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Stats Ribbon (Full Width) */}
      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        threshold={0.1}
        delay={0.6}
      >
        <div className="mt-32 w-full border-t border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl py-10 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-white/10">
              <div className="text-center flex flex-col items-center justify-center px-4 group">
                <div className="text-5xl md:text-6xl font-semibold mb-3 text-white">
                  <CountUp to={200} duration={2.5} />+
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Problems Solved (LC & CF)</div>
              </div>
              <div className="text-center flex flex-col items-center justify-center px-4 group">
                <div className="text-5xl md:text-6xl font-semibold mb-3 text-white">
                  <CountUp to={1165} duration={2.5} />
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Max Rating (Codeforces)</div>
              </div>
              <div className="text-center flex flex-col items-center justify-center px-4 group">
                <div className="text-5xl md:text-6xl font-semibold mb-3 text-white">
                  <CountUp to={7} duration={2} />+
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Projects</div>
              </div>
              <div className="text-center flex flex-col items-center justify-center px-4 group">
                <div className="text-5xl md:text-6xl font-semibold mb-3 text-white">
                  <CountUp to={1} duration={1.5} />
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Internship</div>
              </div>
            </div>  
          </div>
        </div>
      </AnimatedContent>
    </AuroraBackground>
  );
}
