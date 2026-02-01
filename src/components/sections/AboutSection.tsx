'use client';

import AnimatedContent from '@/components/ui/AnimatedContent';
import PixelCard from '@/components/ui/PixelCard';
import CountUp from '@/components/ui/CountUp';
import Image from 'next/image';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaFileAlt } from 'react-icons/fa';
import { socialLinks } from '@/config/social';
import { useState } from 'react';
import { LinkPreview } from '@/components/ui/link-preview';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

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
    <section id="about" className="py-20 bg-black -mt-[12.5rem] relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
            <h2 className={cn(typography.sectionTitle, 'mb-8')}>
              ABOUT ME
            </h2>
            <div className="space-y-4 leading-snug">
              <p className={cn(typography.body, 'leading-snug')}>
                I'm a <span className={typography.emphasis}>Full-stack Developer</span> experienced in building <span className={typography.emphasis}>impactful, user-centric web applications</span>. I love creating elegant solutions to complex problems and bringing ideas to life through code.
              </p>
              
              <p className={cn(typography.body, 'leading-snug')}>
                With expertise in <span className={typography.emphasis}>TypeScript/JavaScript</span>, <span className={typography.emphasis}>Next.js, React</span>, and modern <span className={typography.emphasis}>CSS</span>, I craft seamless frontend experiences and I'm proficient in <span className={typography.emphasis}>Node.js</span>, <span className={typography.emphasis}>Express</span>, <span className={typography.emphasis}>Python</span>, and both <span className={typography.emphasis}>SQL/MySQL</span> and <span className={typography.emphasis}>NoSQL/MongoDB</span> databases, with a strong foundation in <span className={typography.emphasis}>data structures and algorithms</span>.
              </p>

              <p className={cn(typography.body, 'leading-snug')}>
                I also work with <span className={typography.emphasis}>data science and AI tools</span>, leveraging <span className={typography.emphasis}>NumPy</span> and <span className={typography.emphasis}>Pandas</span> for data analysis and manipulation, enabling me to build intelligent, data-driven applications.
              </p>

              <p className={cn(typography.body, 'leading-snug')}>
                I have experience in <span className={typography.emphasis}>UI/UX design</span> using <span className={typography.emphasis}>Figma</span> and <span className={typography.emphasis}>Framer</span>. I work extensively with modern UI libraries including <span className={typography.emphasis}>ShadCN</span>, <span className={typography.emphasis}>Material UI</span>, <span className={typography.emphasis}>React Bits</span>, and <span className={typography.emphasis}>Aceternity</span>. My focus is on building <span className={typography.emphasis}>scalable, high-impact solutions</span> that deliver exceptional user experiences.
              </p>

              <p className={cn(typography.body, 'leading-snug')}>
                When I'm not coding, you can find me staying active as an athlete, exploring new design trends, or contributing to open-source projects.
              </p>

              {/* <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
                  <span className="text-sm font-semibold text-white">Location:</span>
                  <span className="text-sm text-gray-300 ml-2">Your Location</span>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
                  <span className="text-sm font-semibold text-white">Experience:</span>
                  <span className="text-sm text-gray-300 ml-2">X+ Years</span>
                </div>
              </div> */}
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
            <div className="relative flex flex-col justify-center items-center gap-4">
              <PixelCard variant="blue" className="mx-auto h-[500px] w-[400px] md:h-[600px] md:w-[480px]">
                <div className="absolute inset-0 p-2 flex items-center justify-center overflow-hidden rounded-[20px]">
                  <div className="relative w-full h-full rounded-[15px] overflow-hidden">
                    <Image
                      src="/my_portrait.jpeg"
                      alt="Pushpendra Portrait"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </PixelCard>
              
              {/* Name and Social Links */}
              <div className="flex flex-col items-center gap-3">
                <h3 className={typography.subsectionTitleWhite}>
                  Pushpendra S. Parihar
                </h3>
                
                {/* Social Media Icons */}
                <div className="flex gap-4">
                  {displayedLinks.map((link) => {
                    const Icon = getIcon(link.icon || '');
                    const hoverColor = getHoverColor(link.icon || '');
                    const isEmail = link.icon?.toLowerCase() === 'email';
                    const hasPreview = ['github', 'linkedin'].includes(link.icon?.toLowerCase() || '');
                    
                    if (isEmail) {
                      return (
                        <button
                          key={link.label}
                          onClick={() => handleEmailClick(link.href)}
                          className="group relative"
                          aria-label={link.label}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-100 ${hoverColor}`}>
                            <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                          </div>
                          
                          {/* Tooltip */}
                          <div className={cn('absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none', typography.tooltip)}>
                            {copiedEmail ? 'Copied!' : 'Copy email'}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                              <div className="border-4 border-transparent border-t-gray-900" />
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
                          className="group relative"
                        >
                          <div className={`w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-100 ${hoverColor} cursor-pointer`}>
                            <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                          </div>
                        </LinkPreview>
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
                        <div className={`w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-100 ${hoverColor}`}>
                          <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
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
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center transition-all duration-100 hover:bg-green-600 hover:border-green-500">
                      <FaFileAlt className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className={cn('absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none', typography.tooltip)}>
                      View Resume
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                        <div className="border-4 border-transparent border-t-gray-900" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Stats or Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <div className={cn(typography.statNumber, 'mb-3')}>
              <CountUp to={100} duration={2.5} />+
            </div>
            <div className={typography.statLabel}>Problems Solved on LeetCode</div>
          </div>
          <div className="text-center">
            <div className={cn(typography.statNumber, 'mb-2')}>
              <CountUp to={7} duration={2} />+
            </div>
            <div className={typography.statLabel}>Projects</div>
          </div>
          <div className="text-center">
            <div className={cn(typography.statNumber, 'mb-2')}>
              <CountUp to={15} duration={2.5} />+
            </div>
            <div className={typography.statLabel}>Technologies Learned</div>
          </div>
          <div className="text-center">
            <div className={cn(typography.statNumber, 'mb-2')}>
              <CountUp to={1} duration={1.5} />
            </div>
            <div className={typography.statLabel}>Internship</div>
          </div>
        </div>  
      </div>
    </section>
  );
}
