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
  SiPython, 
  SiMongodb, 
  SiMysql,
  SiTailwindcss,
  SiFigma
} from 'react-icons/si';
import { useState } from 'react';

export default function HeroSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Tech stack icons with colors
  const techStack = [
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
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
    <section id="overview" className="relative overflow-hidden bg-black pb-20">
      {/* Animated Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={2.0}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          className="custom-rays"
        />
      </div>

      {/* Container Scroll Animation */}
      <div className="relative z-10">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
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
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg flex flex-wrap items-center justify-center gap-4">
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
                <p className="text-base md:text-xg lg:text-2xl text-white font-bold max-w-2xl mx-auto px-4 drop-shadow-md">
                  <EncryptedText
                    text="Full Stack Developer . Designer . Athlete"
                    revealDelayMs={40}
                    flipDelayMs={40}
                    encryptedClassName="text-gray-500"
                    revealedClassName="text-white"
                  />
                </p>
              </div>
            }
          >
            {/* Compact About Card - Full Width */}
            <div className="w-full h-full relative">
              <div className="backdrop-blur-xl bg-black/60 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-full relative">
                {/* Background Beams */}
                <BackgroundBeams className="absolute inset-0 z-0" />
                
                {/* Content */}
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 lg:gap-16 items-center w-full h-full p-8 sm:p-10 md:p-12 lg:p-16 relative z-10">
                    {/* Portrait Section */}
                    <div className="flex flex-col items-center md:items-start gap-4 mx-auto md:mx-0">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-lg">
                        <Image
                          src="/my_portrait.jpeg"
                          alt="Pushpendra Portrait"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex gap-3 justify-center md:justify-start">
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
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 ${hoverColor}`}>
                                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-white transition-colors" />
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
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 ${hoverColor}`}>
                                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-white transition-colors" />
                              </div>
                            </a>
                          );
                        })}
                        
                        {/* Resume CTA */}
                        <a
                          href="https://drive.google.com/file/d/1m9TPGTcvg8NhbSwnN4MaHK-ZyiE6UG5K/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          aria-label="View Resume"
                        >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 hover:bg-green-600 hover:border-green-500">
                            <FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-white transition-colors" />
                          </div>
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            View Resume
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                              <div className="border-4 border-transparent border-t-gray-900" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-5 text-center md:text-left">
                      {/* Name */}
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                          Pushpendra S. Parihar
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-400 font-normal">
                          Full Stack Developer • Designer • Athlete
                        </p>
                      </div>

                      {/* Brief Introduction */}
                      <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                        I'm a <span className="text-white font-bold">Full-stack Developer</span> passionate about building <span className="text-blue-400 font-semibold">impactful, user-centric web applications</span>. I love creating elegant solutions to complex problems and bringing ideas to life through code.
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-400 mb-3">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 justify-center md:justify-start">
                          {techStack.map((tech) => {
                            const Icon = tech.icon;
                            return (
                              <div
                                key={tech.name}
                                className="group relative flex items-center gap-2 px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                              >
                                <Icon 
                                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" 
                                  style={{ color: tech.color }}
                                />
                                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
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
