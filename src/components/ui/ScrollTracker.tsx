'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { IconType } from 'react-icons';
import { MdOutlineHome, MdOutlineWorkOutline, MdOutlineMailOutline } from 'react-icons/md';
import { HiOutlineUser } from 'react-icons/hi';
import { PiGraduationCap } from 'react-icons/pi';
import { LuLayoutGrid } from 'react-icons/lu';
import { TbBolt } from 'react-icons/tb';

// Icon map lives here in the Client Component — never crosses the server boundary
const SECTION_ICONS: Record<string, IconType> = {
  'overview':        MdOutlineHome,
  'about':           HiOutlineUser,
  'education':       PiGraduationCap,
  'work-experience': MdOutlineWorkOutline,
  'projects':        LuLayoutGrid,
  'skills':          TbBolt,
  'contact':         MdOutlineMailOutline,
};

export interface Section {
  id: string;
  label: string;
}

export interface ScrollTrackerProps {
  sections: Section[];
}

const ScrollTracker: React.FC<ScrollTrackerProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Animate in on mount
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.set(el, { x: 80, opacity: 0 });
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
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphic pill container */}
      <div
        className="flex flex-col gap-1 rounded-lg px-1.5 py-2 transition-all duration-500"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const Icon = SECTION_ICONS[section.id];

          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              aria-label={`Navigate to ${section.label}`}
              className="group relative flex items-center justify-end gap-3 py-2 transition-all duration-300"
              style={{
                padding: isHovered ? '11px 14px' : '11px',
                background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                borderLeft: isActive ? '2px solid rgba(210,210,210,0.7)' : '2px solid transparent',
                borderRadius: isActive ? '0 6px 6px 0' : '6px',
              }}
            >
              {/* Label — slides in when hovered */}
              <span
                className="text-sm font-medium whitespace-nowrap overflow-hidden"
                style={{
                  maxWidth: isHovered ? '120px' : '0px',
                  opacity: isHovered ? 1 : 0,
                  color: isActive ? '#e5e5e5' : 'rgba(120,120,120,0.8)',
                  fontWeight: isActive ? 700 : 400,
                  transitionProperty: 'max-width, opacity',
                  transitionDuration: '350ms',
                  transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {section.label}
              </span>

              {/* Icon */}
              {Icon && (
                <Icon
                  size={22}
                  style={{
                    color: isActive ? '#d4d4d4' : 'rgba(100,100,100,0.7)',
                    transition: 'color 300ms, transform 300ms',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                    flexShrink: 0,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollTracker;
