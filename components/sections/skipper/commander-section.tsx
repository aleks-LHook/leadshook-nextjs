"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export function CommanderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Use Framer Motion's useScroll to track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to animation values
  // Text mask opacity: starts visible (1), fades out as image appears
  const textMaskOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0]);
  
  // Image opacity: starts hidden (0), reveals fully (1)
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  
  // Text scale: starts large (2), shrinks (0.2)
  const textScale = useTransform(scrollYProgress, [0.2, 0.6], [2, 0.2]);
  
  // Text Y position: starts centered (0), moves to top (30% from top)
  const textY = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-20%"]);

  return (
    <div
      className="h-[300vh] w-full relative"
      ref={sectionRef}
    >
      {/* Fixed background that becomes sticky - full viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white dark:bg-black">
        {/* Text with image clipping effect - visible from start */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            opacity: textMaskOpacity,
          }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-4"
            style={{
              scale: textScale,
              y: textY,
            }}
          >
            {/* Powered by text */}
            <div
              className="text-sm md:text-base font-semibold tracking-wider uppercase"
              style={{
                color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.5)' : '0 2px 4px rgba(255,255,255,0.5)',
              }}
            >
              Powered by
            </div>
            
            {/* Image clipped to text shape */}
            <div
              className="font-black tracking-tighter uppercase select-none whitespace-nowrap"
              style={{
                fontSize: '14vh',
                lineHeight: 1.2,
                background: 'url(/images/lantern-person.png) center/cover',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: isDark ? 'drop-shadow(0 0 2px white)' : 'drop-shadow(0 0 2px rgba(0,0,0,0.8))',
                color: 'transparent',
              } as React.CSSProperties}
            >
              COMMANDER
            </div>
          </motion.div>
        </motion.div>

        {/* Full image that fades in as you scroll */}
        <motion.div 
          className="absolute inset-0"
          style={{
            opacity: imageOpacity,
          }}
        >
          <Image
            src="/images/lantern-person.png"
            alt="Person using tablet overlooking scenic mountain vista at dusk"
            fill
            className="object-cover"
            priority={false}
            quality={100}
          />
        </motion.div>

        {/* Scrolling text overlay - movie credits style */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end overflow-hidden"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
          }}
        >
          {/* Dark gradient overlay for text visibility */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"
            style={{
              opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
            }}
          />
          
          <motion.div
            className="w-full text-center px-8 pb-16 relative z-10"
            style={{
              y: useTransform(scrollYProgress, [0.6, 1.0], [400, -600]),
            }}
          >
            {/* Main heading */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl [text-shadow:_0_0_30px_rgb(0_0_0_/_80%),_0_2px_8px_rgb(0_0_0_/_100%)] bg-black/20 backdrop-blur-sm px-8 py-4 rounded-2xl inline-block">
                Marketing Tools Should Work Like a Hammer
              </h2>
            </div>

            {/* Subtitle */}
            <div className="mb-12">
              <p className="text-2xl md:text-5xl text-white/90 leading-relaxed drop-shadow-xl font-medium [text-shadow:_0_0_20px_rgb(0_0_0_/_90%),_0_2px_6px_rgb(0_0_0_/_100%)]">
                Pick it up. Use it. Get results.
              </p>
            </div>

            {/* Separator */}
            <div className="mb-12 flex justify-center">
              <div className="w-32 h-px bg-white/40"></div>
            </div>

            {/* Description */}
            <div className="mb-16 max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl text-white leading-relaxed drop-shadow-xl font-light [text-shadow:_0_0_20px_rgb(0_0_0_/_90%),_0_2px_6px_rgb(0_0_0_/_100%)] bg-black/15 backdrop-blur-md px-8 py-6 rounded-xl">
                Commander combines AI speed of accomplishment with LeadsHook's proven tools to hook your leads.
              </p>
            </div>

            {/* Separator */}
            <div className="mb-16 flex justify-center">
              <div className="w-24 h-px bg-white/30"></div>
            </div>

            {/* Two column grid for key statements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto mb-16">
              <div className="text-center md:text-right">
                <p className="text-3xl md:text-4xl text-white leading-relaxed drop-shadow-xl font-light [text-shadow:_0_0_20px_rgb(0_0_0_/_90%),_0_2px_6px_rgb(0_0_0_/_100%)] bg-black/15 backdrop-blur-md px-6 py-6 rounded-xl">
                  Commander, an agent which navigates the chaotic ocean of data and marketing psychology.
                </p>
              </div>
              
              <div className="text-center md:text-left space-y-8">
                <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-xl font-light italic [text-shadow:_0_0_20px_rgb(0_0_0_/_90%),_0_2px_6px_rgb(0_0_0_/_100%)] bg-black/15 backdrop-blur-md px-6 py-6 rounded-xl">
                  Built to eliminate the struggle by handling building, testing, and optimization  
                  so you can focus on scaling revenue.
                </p>
                
                {/* CTA Button */}
                <div className="flex justify-center md:justify-start">
                  <button className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <span className="text-white font-semibold text-base drop-shadow-lg flex items-center gap-2">
                      <span>How Commander Works</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">🧭</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Final separator */}
            <div className="mb-16 flex justify-center">
              <div className="w-16 h-px bg-white/20"></div>
            </div>

            {/* Spacer for complete scroll */}
            <div className="h-96"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
