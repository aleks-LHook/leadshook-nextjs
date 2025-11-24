"use client";

import { Cover } from "@/components/ui/cover";
import { PlaceholdersAndVanishInputDemo } from "@/components/demos/placeholders-vanish-input-demo";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function CommanderHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-start pt-24 pb-0 px-4 md:px-24 overflow-hidden h-[70vh] bg-[oklch(0.23_0.05_265)]">
      {/* Aurora effect */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && <div
          className="after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform
          [background-image:repeating-linear-gradient(100deg,oklch(0.23_0.05_265)_0%,oklch(0.23_0.05_265)_7%,transparent_10%,transparent_12%,oklch(0.23_0.05_265)_16%),repeating-linear-gradient(100deg,oklch(0.30_0.08_265)_10%,oklch(0.35_0.10_260)_15%,oklch(0.32_0.09_270)_20%,oklch(0.28_0.07_265)_25%,oklch(0.30_0.08_265)_30%)]
          [background-size:300%,_200%] 
          [background-position:50%_50%,50%_50%]
          after:absolute after:inset-0 
          after:[background-image:repeating-linear-gradient(100deg,oklch(0.23_0.05_265)_0%,oklch(0.23_0.05_265)_7%,transparent_10%,transparent_12%,oklch(0.23_0.05_265)_16%),repeating-linear-gradient(100deg,oklch(0.30_0.08_265)_10%,oklch(0.35_0.10_260)_15%,oklch(0.32_0.09_270)_20%,oklch(0.28_0.07_265)_25%,oklch(0.30_0.08_265)_30%)]
          after:[background-size:200%,_100%] 
          after:[background-attachment:fixed] 
          after:mix-blend-difference 
          after:content-['']
          [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
        />}
      </div>

      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      {/* Content wrapper with relative positioning */}
      <div className="relative z-20 flex flex-col items-center w-full">
      {/* Main heading with fade-in animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-32 text-5xl md:text-8xl font-light text-center max-w-7xl mx-auto text-white"
        style={{ lineHeight: '1.2', fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
      >
        Build customer journeys
      </motion.h1>

      {/* New tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 text-2xl md:text-4xl text-center text-white max-w-5xl mx-auto leading-relaxed"
        style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
      >
        Your vision. AI speed. Total control.
      </motion.p>

      {/* Subheading with fade-in */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-lg md:text-2xl text-center text-white/90 max-w-5xl mx-auto leading-relaxed"
      >
        Generate leads by chatting with AI
      </motion.p>

      {/* Input with vanishing animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 w-full"
      >
        <PlaceholdersAndVanishInputDemo />
      </motion.div>

      
      </div>
    </section>
  );
}