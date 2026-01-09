'use client';

import LightRays from '@/components/ui/LightRays';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { EncryptedText } from '@/components/ui/encrypted-text';
import AnimatedContent from '@/components/ui/AnimatedContent';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-black">
      {/* Animated Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={5.0}
          followMouse={true}
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
            <Image
              src="/github_ss.png"
              alt="GitHub Profile"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </AnimatedContent>
      </div>
    </section>
  );
}
