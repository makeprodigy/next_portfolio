'use client';

import LightRays from '@/components/ui/LightRays';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { EncryptedText } from '@/components/ui/encrypted-text';
import AnimatedContent from '@/components/ui/AnimatedContent';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Image from 'next/image';
import { socialLinks } from '@/config/social';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaFileAlt } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress,
  SiPython, 
  SiMongodb, 
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiTailwindcss
} from 'react-icons/si';
import { useState } from 'react';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Tech stack icons with colors
  const techStack = [
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express.js', color: '#FFFFFF' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPrisma, name: 'Prisma', color: '#2D3748' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  ];

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

  // Color mapping for hover effects
  const getHoverColor = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'linkedin':
        return 'hover:bg-blue-600 hover:border-blue-500';
      case 'github':
        return 'hover:bg-gray-700 hover:border-gray-600';
      case 'email':
        return 'hover:bg-red-600 hover:border-red-500';
      case 'twitter':
        return 'hover:bg-sky-500 hover:border-sky-400';
      default:
        return 'hover:bg-gray-700 hover:border-gray-600';
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
    <section id="overview" className="relative overflow-hidden bg-black pt-20 md:pt-32 pb-32">
      {/* Animated Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.7}
          rayLength={1.5}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          saturation={7}
          className="custom-rays"
        />
      </div>

      {/* Container Scroll Animation */}
      <div className="relative z-10">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={2.0}
          ease="power3.out"
          disappearEase="power3.in"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <ContainerScroll
            titleComponent={
              <div className="text-center space-y-3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white drop-shadow-lg flex flex-wrap items-center justify-center gap-3">
                  <ContainerTextFlip
                    words={["Hello!", "नमस्ते","ನಮಸ್ಕಾರ","வணக்கம்","こんにちは","నమస్తే","Hola!","നമസ്കാരം","Bonjour!","你好"]}
                    interval={2500}
                    animationDuration={500}
                    className="bg-white/20 backdrop-blur-md shadow-lg border border-white/30 text-4xl md:text-6xl lg:text-7xl"
                    textClassName="text-black"
                  />
                  <span className="text-4xl md:text-6xl lg:text-7xl">
                    <EncryptedText
                      text="I am Pushpendra"
                      revealDelayMs={80}
                      flipDelayMs={30}
                      encryptedClassName="text-gray-500"
                      revealedClassName="text-white"
                    />
                  </span>
                </h1>

              </div>
            }
          >
            {/* Compact About Card - Full Width */}
            <div className="w-full relative">
              <div className="backdrop-blur-xl bg-black/60 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
                {/* Background Beams */}
                <BackgroundBeams className="absolute inset-0 z-0" />
                
                {/* Content */}
                <div className="grid md:grid-cols-[auto_1fr] gap-5 md:gap-6 lg:gap-8 items-center w-full h-full p-4 sm:p-6 md:p-6 lg:p-8 relative z-10">
                    {/* Left Column: Portrait & Stats */}
                    <div className="flex flex-col items-center md:items-start gap-4 mx-auto md:mx-0 w-full max-w-[260px] lg:max-w-[280px]">
                      {/* Portrait */}
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-lg">
                        <Image
                          src="/my_portrait.jpeg"
                          alt="Pushpendra Portrait"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 w-full">
                        {[
                          { value: '200+', label: 'DSA Problems (LC+CF)', fullWidth: true },
                          { value: '7+',   label: 'Projects' },
                          { value: '1',    label: 'Internship' },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className={`flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg px-3 py-4 transition-all duration-200 ${stat.fullWidth ? 'col-span-2' : ''}`}
                          >
                            <span className="text-2xl sm:text-3xl font-bold text-white mb-1.5 leading-none">{stat.value}</span>
                            <span className="text-xs sm:text-sm text-neutral-400 font-medium text-center leading-tight">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3 justify-center md:justify-start w-full flex-wrap">
                        {displayedLinks.map((link) => {
                          const Icon = getIcon(link.icon || '');
                          const hoverColor = getHoverColor(link.icon || '');
                          const isEmail = link.icon?.toLowerCase() === 'email';
                          
                          if (isEmail) {
                            return (
                              <button
                                key={link.label}
                                onClick={() => handleEmailClick(link.href)}
                                className="group relative"
                                aria-label={link.label}
                              >
                                <div className={`w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 ${hoverColor}`}>
                                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                                </div>
                                
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                  {copiedEmail ? 'Copied!' : 'Copy email'}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                                    <div className="border-4 border-transparent border-t-gray-900" />
                                  </div>
                                </div>
                              </button>
                            );
                          }
                          
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative"
                              aria-label={link.label}
                            >
                              <div className={`w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 ${hoverColor}`}>
                                <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: Content Section */}
                    <div className="flex flex-col gap-4 text-left min-w-0 justify-center h-full">

                      {/* Row 1: Name and CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white leading-tight">
                          Pushpendra S. Parihar
                        </h2>
                        
                        {/* Resume CTA */}
                        <a
                          href="https://drive.google.com/file/d/1kcBOYDvm3c7NOLSKPSDTI63rS9dTRlkh/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 text-sm font-semibold rounded-xl transition-colors flex-shrink-0"
                        >
                          <FaFileAlt className="w-4 h-4" />
                          <span>View Resume</span>
                        </a>
                      </div>

                      {/* Row 2: Intro */}
                      <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                        <p className={cn(typography.body, 'text-md md:text-xl leading-relaxed text-left')}>
                          I&apos;m a <span className={typography.emphasis}>Full-stack Developer</span> passionate about building <span className={typography.emphasis}>impactful, user-centric web applications</span>. I craft elegant solutions to complex problems and bring ideas to life through code.
                        </p>
                      </div>

                      {/* Row 3: Education + Experience */}
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {/* Education */}
                        <div className="bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 transition-all duration-200">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l-3.5-2M12 20l3.5-2" />
                              </svg>
                              <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">Education</span>
                            </div>
                            <span className="text-sm font-semibold text-white bg-white/10 px-2 py-0.5 rounded-md">CGPA 8.1</span>
                          </div>
                          <p className="text-lg font-semibold text-white leading-tight mb-1">B.Tech — CS &amp; AI</p>
                          <p className="text-base text-neutral-400 mb-3">2024 – 2028</p>
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                            <span className="text-sm text-neutral-400">Currently enrolled</span>
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 transition-all duration-200">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">Experience</span>
                            </div>
                            <span className="text-sm font-semibold text-white bg-white/10 px-2 py-0.5 rounded-md">Remote</span>
                          </div>
                          <p className="text-lg font-semibold text-white leading-tight mb-1">SDE Intern — Gamearena</p>
                          <p className="text-base text-neutral-400 mb-2">Sep – Dec 2025</p>
                          <p className="text-sm text-neutral-500">Incubated at IIM Bangalore · React · JS · Agile</p>
                        </div>
                      </div>

                      {/* Row 4: Tech Stack — full-width contained card */}
                      <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                        <span className="text-sm font-semibold tracking-widest text-neutral-400 uppercase block mb-3">Tech Stack</span>
                        <div className="flex flex-wrap gap-2.5">
                          {techStack.map((tech) => {
                            const Icon = tech.icon;
                            return (
                              <div
                                key={tech.name}
                                className="group flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                              >
                                <Icon
                                  className="w-5 h-5 transition-transform group-hover:scale-110"
                                  style={{ color: tech.color }}
                                />
                                <span className="text-sm text-neutral-300 group-hover:text-white transition-colors font-medium">
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
          </ContainerScroll>
        </AnimatedContent>
      </div>
    </section>
  );
}
