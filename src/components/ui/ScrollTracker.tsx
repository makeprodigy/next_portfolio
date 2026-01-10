'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GlassSurface from './GlassSurface';

export interface Section {
  id: string;
  label: string;
}

export interface ScrollTrackerProps {
  sections: Section[];
}

const ScrollTracker: React.FC<ScrollTrackerProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const { offsetTop } = section;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Animation on mount
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, {
      x: 80,
      opacity: 0,
    });

    // Animate in after delay
    gsap.to(el, {
      x: 0,
      opacity: 1,
      duration: 1.8,
      ease: 'power3.out',
      delay: 3.0,
    });
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex items-center gap-3">
        {/* Section names on the left - outside glass */}
        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="group transition-all duration-200 h-10 flex items-center justify-end"
                aria-label={`Navigate to ${section.label}`}
              >
                <span
                  className={`
                    text-base transition-all duration-300 text-right min-w-[100px]
                    ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-gray-400 dark:text-gray-500 font-medium group-hover:text-gray-300 dark:group-hover:text-gray-400'
                    }
                  `}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Vertical glass rectangle with all bullets */}
        <GlassSurface
          width={48}
          height="auto"
          borderRadius={24}
          className="py-4 px-0"
          blur={20}
          opacity={0.8}
          brightness={60}
        >
          <div className="flex flex-col gap-4 items-center">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={`bullet-${section.id}`}
                  onClick={() => handleSectionClick(section.id)}
                  className="group h-10 flex items-center justify-center"
                  aria-label={`Navigate to ${section.label}`}
                >
                  <div
                    className={`
                      w-2.5 h-2.5 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? 'bg-white shadow-lg shadow-white/50'
                          : 'bg-gray-500 dark:bg-gray-600 group-hover:bg-gray-400 dark:group-hover:bg-gray-500 group-hover:scale-125'
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </GlassSurface>
      </div>
    </div>
  );
};

export default ScrollTracker;
