"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function CommanderPoweredSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-24 overflow-hidden bg-[oklch(0.23_0.05_265)]">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left column - Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/public/images/ai-processor-icon.png"
                alt="AI Processor Icon"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center md:justify-start"
          >
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-light text-center md:text-left text-white leading-tight"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              LeadsHook is powered by Commander
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
