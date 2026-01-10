import CardNav from '@/components/sections/Navbar';
import StaggeredMenu from '@/components/sections/Navbar_Smaller';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
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
      <main>
        <HeroSection />
        <AboutSection />
        {/* Other portfolio sections will go here */}
      </main>
    </>
  );
}
