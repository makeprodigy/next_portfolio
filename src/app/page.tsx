import CardNav from '@/components/sections/Navbar';
import StaggeredMenu from '@/components/sections/Navbar_Smaller';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WorkExperienceSection from '@/components/sections/WorkExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollTracker from '@/components/ui/ScrollTracker';

export default function Home() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work-experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* <div className="hidden md:block">
        <CardNav logo="/next.svg" logoAlt="Portfolio Logo" />
      </div> */}
      <div className="block md:hidden">
        <StaggeredMenu
          isFixed
          menuButtonColor="#ffffff"
          openMenuButtonColor="#111111"
        />
      </div>
      
      {/* Scroll Tracker */}
      <ScrollTracker sections={sections} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
