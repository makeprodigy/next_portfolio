"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 pb-8 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold max-w-4xl">
          Education Journey
        </h2>
        <p className="text-gray-300 text-lg md:text-2xl max-w-3xl font-medium leading-relaxed">
          From the beginning to graduation and beyond. Here&apos;s my academic timeline 
          showcasing milestones, learnings, and future aspirations.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isFuture = item.title.includes('+');
          const isCurrent = item.title === '2026';
          return (
            <div
              key={index}
              className={`flex justify-start md:gap-2 ${index === 0 ? 'pt-10 md:pt-16' : 'pt-10 md:pt-40'}`}
            >
              <div className="flex flex-col md:flex-row z-40 items-center md:sticky md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className={`h-10 absolute md:relative left-3 md:left-3 w-10 rounded-full flex items-center justify-center ${
                  isFuture ? 'bg-neutral-800/40' : 
                  isCurrent ? 'bg-purple-500/30 dark:bg-purple-600/30 shadow-lg shadow-purple-500/50 animate-pulse' :
                  'bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-600/30 dark:to-purple-600/30'
                }`}>
                  <div className={`h-4 w-4 rounded-full border-2 ${
                    isFuture ? 'bg-neutral-700 border-neutral-600' : 
                    isCurrent ? 'bg-purple-500 dark:bg-purple-600 border-purple-400 dark:border-purple-500 shadow-lg shadow-purple-400/50' :
                    'bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 border-blue-400 dark:border-purple-500'
                  }`} />
                </div>
                <h3 className={`hidden md:block text-xl md:pl-8 md:text-5xl font-bold ${
                  isFuture ? 'text-neutral-600 dark:text-neutral-600' : 
                  isCurrent ? 'text-purple-400 dark:text-purple-400' :
                  'text-neutral-500 dark:text-neutral-500'
                }`}>
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-2 w-full">
                <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold ${
                  isFuture ? 'text-neutral-600 dark:text-neutral-600' : 
                  isCurrent ? 'text-purple-400 dark:text-purple-400' :
                  'text-neutral-500 dark:text-neutral-500'
                }`}>
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
