"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  className?: string;
}

export const TrustBadges = ({ className }: TrustBadgeProps) => {
  const badges = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: "200,000",
      subtitle: "Daily Leads"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "$20M",
      subtitle: "Monthly Ad Spend"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: "Enterprise",
      subtitle: "Scale Ready"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12",
        className
      )}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex items-center gap-3 px-4 md:px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#03e9f4]/50 transition-all duration-300 group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03e9f4]/10 text-[#03e9f4] group-hover:bg-[#03e9f4]/20 transition-colors duration-300">
            {badge.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-white leading-tight">
              {badge.label}
            </span>
            <span className="text-xs md:text-sm text-neutral-400 leading-tight">
              {badge.subtitle}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const TrustBanner = ({ className }: TrustBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center justify-center mb-8 md:mb-12 px-4",
        className
      )}
    >
      <div className="relative w-full max-w-4xl">
        {/* Glowing background effect - adapts to theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03e9f4]/0 via-[#03e9f4]/5 dark:via-[#03e9f4]/10 to-[#03e9f4]/0 blur-xl" />

        {/* Content with theme-aware styling */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-6 py-4 rounded-full bg-gradient-to-r from-cyan-50/80 via-white/90 to-cyan-50/80 dark:bg-white/5 backdrop-blur-md border border-cyan-200/60 dark:border-white/10 shadow-lg shadow-cyan-500/10 dark:shadow-none">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#03e9f4] dark:text-[#03e9f4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base font-semibold text-[#262C5B] dark:text-white">
              Enterprise Scalability:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <span className="flex items-center gap-1">
              <span className="font-bold text-[#03e9f4]">200K+</span>
              <span>Daily Leads</span>
            </span>
            <span className="hidden md:inline text-neutral-400 dark:text-neutral-600">•</span>
            <span className="flex items-center gap-1">
              <span className="font-bold text-[#03e9f4]">$20M</span>
              <span>Monthly Ad Spend</span>
            </span>
            <span className="hidden md:inline text-neutral-400 dark:text-neutral-600">•</span>
            <span className="text-neutral-600 dark:text-neutral-400">From Individual Users</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
