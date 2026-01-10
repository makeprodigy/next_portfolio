'use client';

import AnimatedContent from '@/components/ui/AnimatedContent';
import PixelCard from '@/components/ui/PixelCard';
import Image from 'next/image';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';

export default function AboutSection() {
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
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            About Me
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                I'm a passionate <span className="text-white font-black text-xl">Full-stack Developer</span> experienced in building <span className="text-blue-400 font-bold">responsive, user-centric web applications</span>. I love creating elegant solutions to complex problems and bringing ideas to life through code.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                With expertise in <span className="text-white font-black text-xl">JavaScript/TypeScript</span>, <span className="text-white font-black text-xl">React</span>, and modern <span className="text-white font-black text-xl">CSS</span>, I specialize in crafting seamless frontend experiences. On the backend, I'm proficient in <span className="text-white font-black text-xl">Node.js</span>, <span className="text-white font-black text-xl">Express</span>, <span className="text-white font-black text-xl">Python</span>, and both <span className="text-white font-black text-xl">SQL/MySQL</span> and <span className="text-white font-black text-xl">NoSQL/MongoDB</span> databases, with a strong foundation in <span className="text-blue-400 font-bold">data structures and algorithms</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                I also work with <span className="text-blue-400 font-bold">data science and AI tools</span>, leveraging <span className="text-white font-black text-xl">NumPy</span> and <span className="text-white font-black text-xl">Pandas</span> for data analysis and manipulation, enabling me to build intelligent, data-driven applications.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                I'm skilled in <span className="text-white font-black text-xl">UI/UX design</span> using <span className="text-blue-400 font-bold">Figma</span> and <span className="text-blue-400 font-bold">Framer</span>, and work extensively with modern UI libraries including <span className="text-white font-black text-xl">ShadCN</span>, <span className="text-white font-black text-xl">Material UI</span>, <span className="text-white font-black text-xl">React Bits</span>, and <span className="text-white font-black text-xl">Aceternity</span>. My focus is on building <span className="text-blue-400 font-bold">scalable, high-impact solutions</span> that deliver exceptional user experiences.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                When I'm not coding, you can find me staying active as an athlete, exploring new design trends, or contributing to open-source projects.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
                  <span className="text-sm font-semibold text-white">Location:</span>
                  <span className="text-sm text-gray-300 ml-2">Your Location</span>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
                  <span className="text-sm font-semibold text-white">Experience:</span>
                  <span className="text-sm text-gray-300 ml-2">X+ Years</span>
                </div>
              </div>
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
            <div className="relative flex justify-center items-center">
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
            </div>
          </AnimatedContent>
        </div>

        {/* Stats or Highlights */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={true}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
          delay={0.6}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">X+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">X+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">X+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">X+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
