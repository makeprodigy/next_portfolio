import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className={cn(typography.sectionTitle, 'mb-8')}>SKILLS</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {/* Skill tags/badges will go here */}
        </div>
      </div>
    </section>
  );
}
