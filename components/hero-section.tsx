"use client";

import { Cover } from "@/components/ui/cover";
import { NeonButton } from "@/components/ui/neon-button";
import { TrustBanner } from "@/components/ui/trust-badges";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-start pt-24 pb-24 px-4 md:px-24">
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
        className="text-5xl md:text-8xl font-bold text-center max-w-7xl mx-auto"
        style={{ lineHeight: '1.2' }}
      >
        Build unhackable funnels<br className="mb-2" />
        at <Cover>warp speed</Cover>
      </motion.h1>

      {/* Subheading with fade-in */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-xl md:text-3xl text-center text-neutral-600 dark:text-neutral-400 max-w-5xl mx-auto leading-relaxed"
      >
        Generate higher quality leads at a lower cost than your competitors… Indefinitely
      </motion.p>

      {/* CTA buttons with fade-in and hover effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-12 flex flex-col sm:flex-row gap-8 items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <NeonButton href="#templates" variant="cyan">
            Browse Templates
          </NeonButton>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <NeonButton href="#how-it-works" variant="purple">
            See How It Works
          </NeonButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
