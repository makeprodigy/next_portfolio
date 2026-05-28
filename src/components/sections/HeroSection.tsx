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
    <section id="overview" className="relative overflow-hidden bg-zinc-950 pt-20 md:pt-32 pb-32">
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
          className="custom-rays opacity-50"
        />
      </div>

      {/* Sharp grid background lines instead of a blurred orb */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

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
              <div className="text-center space-y-4 mb-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white flex flex-wrap items-center justify-center gap-4 uppercase tracking-wide">
                  <ContainerTextFlip
                    words={["Hello!", "नमस्ते","ನಮಸ್ಕಾರ","வணக்கம்","こんにちは","నమస్తే","Hola!","നമസ്കാരം","Bonjour!","你好"]}
                    interval={2500}
                    animationDuration={500}
                    className="bg-white border border-white/30 text-4xl md:text-6xl lg:text-7xl rounded-none px-4"
                    textClassName="text-black"
                  />
                  <span className="text-4xl md:text-6xl lg:text-7xl">
                    <EncryptedText
                      text="I am Pushpendra"
                      revealDelayMs={80}
                      flipDelayMs={30}
                      encryptedClassName="text-neutral-600"
                      revealedClassName="text-white"
                    />
                  </span>
                </h1>
              </div>
            }
          >
            {/* Compact About Card - Full Width */}
            <div className="w-full relative">
              <div className="bg-zinc-950/80 backdrop-blur-md rounded-none border border-white/10 shadow-2xl overflow-hidden relative">
                {/* Background Beams */}
                <BackgroundBeams className="absolute inset-0 z-0 opacity-50" />
                
                {/* Content */}
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 lg:gap-12 items-center w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                    {/* Left Column: Portrait & Stats */}
                    <div className="flex flex-col items-center md:items-start gap-6 mx-auto md:mx-0 w-full max-w-[280px]">
                      {/* Portrait */}
                      <div className="relative w-full aspect-square rounded-none overflow-hidden border border-white/20 shadow-lg group bg-zinc-900 p-1">
                        {/* Sharp corner accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                        
                        <div className="relative w-full h-full border border-white/10">
                          <Image
                            src="/my_portrait.jpeg"
                            alt="Pushpendra Portrait"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                          />
                        </div>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-px w-full bg-white/10 border border-white/10">
                        {[
                          { value: '200+', label: 'DSA Problems (LC+CF)', fullWidth: true },
                          { value: '7+',   label: 'Projects' },
                          { value: '1',    label: 'Internship' },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className={`flex flex-col items-center justify-center bg-zinc-950 px-3 py-4 transition-all duration-300 hover:bg-zinc-900 ${stat.fullWidth ? 'col-span-2' : ''}`}
                          >
                            <span className="text-2xl sm:text-3xl font-semibold text-white mb-1.5 leading-none">{stat.value}</span>
                            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 font-medium text-center leading-tight">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-4 justify-center md:justify-start w-full flex-wrap">
                        {displayedLinks.map((link) => {
                          const Icon = getIcon(link.icon || '');
                          const isEmail = link.icon?.toLowerCase() === 'email';
                          
                          const btnClass = "w-11 h-11 rounded-none border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white group relative bg-transparent hover:text-black hover:border-white shadow-sm hover:shadow-white/20 hover:-translate-y-1";
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
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-white text-black text-xs font-medium uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                  {copiedEmail ? 'Copied!' : 'Copy email'}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                                    <div className="border-4 border-transparent border-t-white" />
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
                              className={btnClass}
                              aria-label={link.label}
                            >
                              <Icon className={iconClass} />
                            </a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column: Content Section */}
                    <div className="flex flex-col gap-6 text-left min-w-0 justify-center h-full">

                      {/* Row 1: Name and CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
                        <div className="space-y-2">
                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight uppercase tracking-wide">
                            Pushpendra S. Parihar
                          </h2>
                          <p className="text-sm uppercase tracking-widest text-neutral-500">
                            Full-Stack Developer
                          </p>
                        </div>
                        
                        {/* Resume CTA */}
                        <a
                          href="https://drive.google.com/file/d/18a5FrrKkuZmP5ZaDf26m_AZLEIotqb1C/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-white/20 hover:bg-white text-white hover:text-black text-xs font-semibold uppercase tracking-widest rounded-none transition-all flex-shrink-0 group"
                        >
                          <FaFileAlt className="w-4 h-4 group-hover:text-black transition-colors" />
                          <span>Resume</span>
                        </a>
                      </div>

                      {/* Row 2: Intro */}
                      <div className="bg-transparent border-l-2 border-white/30 pl-6 py-2">
                        <p className={cn(typography.body, 'text-md md:text-xl leading-relaxed text-left text-neutral-400')}>
                          I'm a <span className="text-white font-medium">Full-stack Developer</span> passionate about building <span className="text-white font-medium">impactful, user-centric web applications</span>. I craft elegant solutions to complex problems and bring ideas to life through code.
                        </p>
                      </div>

                      {/* Row 3: Education + Experience */}
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        {/* Education */}
                        <div className="bg-transparent hover:bg-white/[0.02] border border-white/10 hover:border-white/30 rounded-none px-6 py-6 transition-all duration-300 relative group">
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-white/50 transition-colors duration-300" />
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-neutral-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l-3.5-2M12 20l3.5-2" />
                              </svg>
                              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Education</span>
                            </div>
                            <span className="text-xs font-semibold text-white bg-white/10 px-2 py-1 rounded-none uppercase tracking-widest border border-white/10">CGPA 8.1</span>
                          </div>
                          <p className="text-lg font-semibold text-white leading-tight mb-2 tracking-wide uppercase">B.Tech — CS & AI</p>
                          <p className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">2024 – 2028</p>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-none bg-white animate-pulse flex-shrink-0" />
                            <span className="text-xs text-neutral-400 uppercase tracking-widest">Currently enrolled</span>
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="bg-transparent hover:bg-white/[0.02] border border-white/10 hover:border-white/30 rounded-none px-6 py-6 transition-all duration-300 relative group">
                          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/0 group-hover:border-white/50 transition-colors duration-300" />
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-neutral-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Experience</span>
                            </div>
                            <span className="text-xs font-semibold text-white bg-white/10 px-2 py-1 rounded-none uppercase tracking-widest border border-white/10">Remote</span>
                          </div>
                          <p className="text-lg font-semibold text-white leading-tight mb-2 tracking-wide uppercase">SDE Intern — Gamearena</p>
                          <p className="text-sm text-neutral-500 mb-3 uppercase tracking-widest">Sep – Dec 2025</p>
                          <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-widest">Incubated at IIM Bangalore · React · JS · Agile</p>
                        </div>
                      </div>

                      {/* Row 4: Tech Stack — full-width contained card */}
                      <div className="bg-transparent border border-white/10 rounded-none px-6 py-6 relative">
                        <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-4">Tech Stack</span>
                        <div className="flex flex-wrap gap-3">
                          {techStack.map((tech) => {
                            const Icon = tech.icon;
                            return (
                              <div
                                key={tech.name}
                                className="group flex items-center gap-2 px-3 py-2 bg-transparent hover:bg-white/5 rounded-none border border-white/10 hover:border-white/30 transition-all duration-200"
                              >
                                <Icon
                                  className="w-4 h-4 transition-transform group-hover:scale-110 grayscale group-hover:grayscale-0"
                                  style={{ color: tech.color }}
                                />
                                <span className="text-xs tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors font-medium">
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
