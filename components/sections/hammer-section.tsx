"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HammerSection() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen px-4 md:px-24 overflow-hidden bg-[oklch(0.23_0.05_265)]">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      {/* Content */}
      <div className="relative z-20 pt-24 pb-24 space-y-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-light text-center max-w-5xl mx-auto text-white"
          style={{ lineHeight: '1.3', fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
        >
          Stop Doing Work a Machine Can Handle
        </motion.h2>

        {/* Subheading - revealed on scroll */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-4xl font-light text-center max-w-4xl mx-auto text-white/90"
          style={{ lineHeight: '1.4', fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
        >
          Start doing what only you can do.
        </motion.p>

        {/* Two-column grid - Icon and Text */}
        <div className="pt-32 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-16 md:gap-24 items-center">
            {/* Left column - Icon (35%) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm aspect-square">
                <Image
                  src="/images/ai-processor-icon.png"
                  alt="Commander AI Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Right column - Text with eyebrow and description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center md:items-start justify-center space-y-8"
            >
              <p className="text-sm md:text-base font-medium uppercase tracking-wider text-white/60"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Introducing Commander
              </p>
              <h2 
                className="text-4xl md:text-6xl lg:text-7xl font-light text-center md:text-left text-white leading-tight"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Automate the Gruntwork
              </h2>
              <p className="text-lg md:text-xl font-light text-center md:text-left text-white/70"
                style={{ lineHeight: '1.6', fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander combines AI speed of accomplishment with LeadsHook's proven tools to hook your leads.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Second grid - Text columns with CTA */}
        <div className="pt-40 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
            {/* Left column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-2xl md:text-4xl font-light text-white/80"
                style={{ lineHeight: '1.6', fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander, an agent which processes marketing data and executes campaigns.
              </p>
            </motion.div>

            {/* Right column - Text with CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl font-light text-white/80"
                style={{ lineHeight: '1.6', fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                LeadsHook is powerful. It's also complicated. We built Commander to eliminate the learning curve so you can use that power without the complexity.
              </p>
              
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-medium text-lg flex items-center gap-3"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  <span>How Commander Works</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
