"use client";

import { motion } from "motion/react";

export function CommanderControlSection() {
  const controlFeatures = [
    {
      title: "Review AI recommendations before they go live",
      description: "Every campaign, page, and test is built with your input and refined with your feedback.",
    },
    {
      title: "Override any suggestion that doesn't match your brand",
      description: "You have final say on everything. Commander suggests, you decide.",
    },
    {
      title: "Learn from your preferences to get better over time",
      description: "The more you work with Commander, the better it understands your standards.",
    },
    {
      title: "Stay in the driver's seat while AI handles the manual work",
      description: "You focus on strategy and creativity. Commander handles execution.",
    },
  ];

  return (
    <section className="relative bg-[oklch(0.23_0.05_265)] py-32">
      {/* Grainy texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-20 mx-auto px-8 md:px-24 max-w-7xl">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
            style={{
              fontFamily:
                'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            AI Without Guardrails Is Just Fast Mistakes
          </h2>

          <p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily:
                'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            Commander gives you speed, not surprises. Every campaign, page, and
            test is built with your input and refined with your feedback.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-20">
          {controlFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="space-y-4"
            >
              {/* Check icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/80"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-light text-white mb-3 leading-tight"
                    style={{
                      fontFamily:
                        'Georgia, Cambria, "Times New Roman", Times, serif',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-lg text-white/70 leading-relaxed"
                    style={{
                      fontFamily:
                        'Georgia, Cambria, "Times New Roman", Times, serif',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
