"use client";

import { FunnelDiagram } from "@/components/ui/funnel-diagram";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";

export default function FunnelFeaturesSection() {
  const [activeStage, setActiveStage] = useState<"top" | "middle" | "bottom" | null>(null);
  const attractRef = useRef<HTMLDivElement>(null);
  const qualifyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const convertRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based patch progress - tracks scroll from when Track enters viewport to when it reaches center
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "center center"],
  });

  const patchProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const attractSection = attractRef.current;
      const qualifySection = qualifyRef.current;
      const trackSection = trackRef.current;
      const convertSection = convertRef.current;

      if (!attractSection || !qualifySection || !trackSection || !convertSection) return;

      const attractRect = attractSection.getBoundingClientRect();
      const qualifyRect = qualifySection.getBoundingClientRect();
      const trackRect = trackSection.getBoundingClientRect();
      const convertRect = convertSection.getBoundingClientRect();

      const viewportCenter = window.innerHeight / 2;

      if (attractRect.top <= viewportCenter && attractRect.bottom >= viewportCenter) {
        setActiveStage("top");
      } else if (qualifyRect.top <= viewportCenter && qualifyRect.bottom >= viewportCenter) {
        setActiveStage("middle");
      } else if (trackRect.top <= viewportCenter && trackRect.bottom >= viewportCenter) {
        setActiveStage("middle");
      } else if (convertRect.top <= viewportCenter && convertRect.bottom >= viewportCenter) {
        setActiveStage("bottom");
      } else {
        setActiveStage(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-b from-white via-neutral-50/50 to-white dark:from-black dark:via-neutral-950/50 dark:to-black py-20">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* Radial gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(3,233,244,0.04),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(3,233,244,0.08),transparent_70%)]" />

      <div className="mx-auto px-8 max-w-[90vw]">
        {/* Section Title */}
        <div className="relative z-10 text-center pb-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#262C5B] to-[#1a1f3d] dark:from-white dark:to-neutral-300 mb-4">
            How to Use LeadsHook
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Four powerful use cases to attract, qualify, track, and convert your leads
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 relative z-10">
          {/* Left Column - Scrollable Use Cases */}
          <div className="lg:col-span-5">
            {/* Use Case 1: Attract */}
            <motion.div
              ref={attractRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 min-h-screen flex flex-col justify-center py-24"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-full w-fit shadow-sm shadow-cyan-200/50 dark:shadow-none">
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm">
                  Use Case: Attract
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Build Landing Pages That Convert
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  At the top of your funnel, you need to capture attention and
                  generate interest. That's where our intuitive page builder
                  comes in.
                </p>

                <p>
                  Create stunning, high-converting landing pages in minutes—no
                  coding required. Our drag-and-drop interface gives you
                  complete creative control while maintaining best practices for
                  conversion optimization.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Drag-and-drop page builder with pre-built sections",
                      "Mobile-responsive templates optimized for conversion",
                      "A/B testing capabilities to maximize performance",
                      "SEO-friendly structure for organic traffic growth",
                      "Fast-loading pages with built-in performance optimization",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Use Case 2: Qualify */}
            <motion.div
              ref={qualifyRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 min-h-screen flex flex-col justify-center py-24"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full w-fit shadow-sm shadow-purple-200/50 dark:shadow-none">
                <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">
                  Use Case: Qualify
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Intelligent Quiz Builder for Lead Qualification
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  In the middle of your funnel, you need to understand who your
                  leads are and what they need. Our quiz builder goes beyond
                  engagement—it's a powerful qualification engine.
                </p>

                <p>
                  Create interactive quizzes that assess and segment leads in
                  real-time based on their responses. Each answer reveals more
                  about their needs, budget, timeline, and readiness to buy,
                  allowing you to personalize their journey instantly.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Conditional logic that adapts questions based on previous answers",
                      "Real-time lead scoring and automatic segmentation",
                      "Dynamic result pages personalized to each respondent",
                      "Multi-path branching for complex qualification flows",
                      "Integration with CRM to route qualified leads instantly",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Use Case 3: Track */}
            <motion.div
              ref={trackRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 min-h-screen flex flex-col justify-center py-24"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-500/10 dark:to-emerald-500/10 border border-teal-200 dark:border-teal-500/20 rounded-full w-fit shadow-sm shadow-teal-200/50 dark:shadow-none">
                <span className="text-teal-700 dark:text-teal-400 font-semibold text-sm">
                  Use Case: Track
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Patch Your Leaky Funnel with Server-Side Tracking
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  See those holes bleeding leads? That's what happens without proper tracking.
                  iOS 14+ privacy changes, ad blockers, and browser restrictions punch holes in
                  your funnel—you're losing attribution on 30-40% of your conversions.
                </p>

                <p>
                  Our built-in server-side tracking patches every leak automatically. By combining
                  client-side and server-side data with intelligent deduplication, you capture the
                  full picture. No complex setup, no developers needed—just watch your funnel seal
                  up and your attribution become bulletproof.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    How We Patch The Leaks:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Hybrid tracking catches conversions client-side tracking misses",
                      "Automatic deduplication patches attribution gaps without double-counting",
                      "Works seamlessly with Facebook, Google, TikTok to seal all platforms",
                      "Cookie-less tracking fills holes created by privacy restrictions",
                      "Real-time reports show exactly where leaks were and how they're fixed",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Use Case 4: Convert */}
            <motion.div
              ref={convertRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 min-h-screen flex flex-col justify-center py-24"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-500/10 dark:to-green-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full w-fit shadow-sm shadow-emerald-200/50 dark:shadow-none">
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  Use Case: Convert
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Personalization Engine with Decision Trees
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  At the bottom of your funnel, generic personalization doesn't cut it anymore.
                  In the era of LLMs, "Hey {"{"}first_name{"}"}" feels robotic and impersonal.
                </p>

                <p>
                  Our decision tree-powered personalization engine creates truly individualized
                  experiences based on every interaction, answer, and behavioral signal. Each
                  prospect sees content, offers, and messaging uniquely tailored to their specific
                  needs, pain points, and stage in the buying journey.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Visual decision tree builder for complex personalization logic",
                      "Dynamic content that adapts in real-time based on user behavior",
                      "Personalized pricing, product recommendations, and case studies",
                      "Multi-variable targeting beyond just demographics",
                      "AI-assisted optimization that learns which paths convert best",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 flex-shrink-0" />
                        <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sticky Funnel */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-24 h-screen flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center justify-center rounded-2xl overflow-hidden w-full"
              >
                {/* Pixelated background layer with theme-aware styling */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-blue-100/40 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/40 dark:border-purple-500/10 rounded-2xl shadow-xl shadow-purple-200/20 dark:shadow-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(138,43,226,0.04) 3px, rgba(138,43,226,0.04) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(138,43,226,0.04) 3px, rgba(138,43,226,0.04) 4px)
                    `,
                  }}
                />

                {/* Funnel content with pixelation effect */}
                <div className="relative z-10 p-8 w-full">
                  <FunnelDiagram activeStage={activeStage} patchProgress={patchProgress} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile: Show funnel separately */}
        <div className="lg:hidden mt-16">
          <div className="flex items-center justify-center bg-gradient-to-br from-purple-100/40 to-blue-100/40 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl border border-purple-200/40 dark:border-purple-500/10 p-8 shadow-lg shadow-purple-200/20 dark:shadow-none">
            <FunnelDiagram activeStage={activeStage} patchProgress={patchProgress} />
          </div>
        </div>
      </div>
    </div>
  );
}
