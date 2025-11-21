"use client";

import { motion } from "motion/react";

export function CTASection() {
  const actions = [
    {
      id: 1,
      title: "Create a Landing page for a Solar Company",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Create a Weight Loss Quiz",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11H3v2h6m-6-9h6v2H3m8 16l.5-1.5.5.5.5-.5.5 1.5m2-13l.5-1.5.5.5.5-.5.5 1.5M18 12h5v-2h-5m5-7h-5v2h5M9 10h1V8H9m10 2h1V8h-1" />
          <circle cx="15" cy="18" r="3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Create a split test for Ad Copy",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 3h5v5" />
          <path d="M8 3H3v5" />
          <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
          <path d="m15 9 6-6" />
          <path d="M3 21h18" />
        </svg>
      ),
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight"
            style={{
              fontFamily:
                'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            Try LeadsHook
          </h2>
          <p
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily:
                'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            See Commander in action. Make a request and watch it build your marketing funnel in seconds.
          </p>
        </motion.div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {actions.map((action, index) => (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-light text-white text-center leading-tight"
                style={{
                  fontFamily:
                    'Georgia, Cambria, "Times New Roman", Times, serif',
                }}
              >
                {action.title}
              </h3>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.button>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p
            className="text-white/60 text-lg mb-6"
            style={{
              fontFamily:
                'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            No credit card required • Free 14-day trial
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-[oklch(0.23_0.05_265)] rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              fontFamily:
                'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
