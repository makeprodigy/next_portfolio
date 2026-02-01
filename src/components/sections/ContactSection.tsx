import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className={cn(typography.sectionTitle, 'mb-8')}>CONTACT</h2>
        <div className="max-w-md mx-auto">
          {/* Contact form or contact information will go here */}
        </div>
      </div>
    </section>
  );
}
