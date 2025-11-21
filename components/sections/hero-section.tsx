"use client";

import { Cover } from "@/components/ui/cover";
import { TrustBanner } from "@/components/ui/trust-badges";
import { PlaceholdersAndVanishInputDemo } from "@/components/demos/placeholders-vanish-input-demo";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-start pt-24 pb-40 px-4 md:px-24 overflow-hidden">
      {/* Subtle grid pattern background for light theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] dark:bg-[size:24px_24px]" />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(3,233,244,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(3,233,244,0.15),transparent_50%)]" />

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Trust Banner with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TrustBanner />
        </motion.div>

      {/* Main heading with fade-in animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-8xl font-bold text-center max-w-7xl mx-auto text-[#262C5B] dark:text-white"
        style={{ lineHeight: '1.2' }}
      >
        Build marketing at <Cover>warp speed</Cover>
      </motion.h1>

      {/* Subheading with fade-in */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-xl md:text-3xl text-center text-neutral-800 dark:text-neutral-400 max-w-5xl mx-auto leading-relaxed"
      >
        Generate leads by chatting with AI.
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
