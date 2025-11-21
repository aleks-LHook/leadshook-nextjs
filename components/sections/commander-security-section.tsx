"use client";

import { motion } from "motion/react";

export function CommanderSecuritySection() {
  const badges = [
    {
      id: "soc2",
      title: "SOC 2 Type II",
      description: "We are SOC 2 Type II compliant. Request our SOC 2 in our Trust Center.",
      colors: ["#1e4d3f", "#2a6b54", "#378969"],
    },
    {
      id: "gdpr",
      title: "GDPR",
      description: "Go to market anywhere in the world — let us handle compliance with local laws.",
      colors: ["#1e5a8e", "#2a78b8", "#3696e2"],
    },
    {
      id: "ccpa",
      title: "CCPA",
      description: "Support your customer base with opt out and DNC support.",
      colors: ["#a83d7e", "#ce5ba0", "#e979b8"],
    },
    {
      id: "iso",
      title: "ISO 27001 +",
      description: "Securely connect your CRM and other systems.",
      colors: ["#b85a1e", "#de781e", "#ff9624"],
    },
  ];

  return (
    <section className="relative bg-[oklch(0.23_0.05_265)] py-32">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      <div className="relative z-20 mx-auto px-8 md:px-24 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Backed by enterprise-grade security and scale
          </h2>
          
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <span 
              className="text-white font-medium text-base"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Security at LeadsHook
            </span>
            <span className="text-white group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Badge Icon */}
              <div className="relative mb-6">
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  {/* Flower petals */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const cx = 80 + Math.cos(angle) * 32;
                    const cy = 80 + Math.sin(angle) * 32;
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="20"
                        fill={badge.colors[i % 3]}
                        opacity="0.9"
                      />
                    );
                  })}
                  {/* Center circle */}
                  <circle cx="80" cy="80" r="36" fill="#FFB84D" />
                  
                  {/* Text */}
                  <text
                    x="80"
                    y="75"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="700"
                    fontFamily="Georgia, Cambria, 'Times New Roman', Times, serif"
                  >
                    {badge.id === "soc2" && (
                      <>
                        <tspan x="80" dy="0">SOC 2</tspan>
                        <tspan x="80" dy="18">TYPE II</tspan>
                      </>
                    )}
                    {badge.id === "gdpr" && "GDPR"}
                    {badge.id === "ccpa" && "CCPA"}
                    {badge.id === "iso" && (
                      <>
                        <tspan x="80" dy="0">ISO</tspan>
                        <tspan x="80" dy="18">27001</tspan>
                      </>
                    )}
                  </text>
                </svg>
              </div>

              {/* Title */}
              <h3 
                className="text-xl md:text-2xl font-light text-white mb-3"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                {badge.title}
              </h3>

              {/* Description */}
              <p 
                className="text-base text-white/70 leading-relaxed max-w-xs"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
