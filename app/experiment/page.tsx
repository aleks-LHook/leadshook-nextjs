"use client";

import { FunnelDiagram } from "@/components/ui/funnel-diagram";
import { motion, useScroll, useTransform } from "motion/react";
import NavbarWrapper from "@/components/navbar-wrapper";
import { useEffect, useState, useRef } from "react";

export default function ExperimentPage() {
  const [activeStage, setActiveStage] = useState<"top" | "middle" | "bottom" | null>(null);
  const attractRef = useRef<HTMLDivElement>(null);
  const qualifyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const convertRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-based patch progress - tracks scroll from when Track enters viewport to when it reaches center
  const { scrollYProgress } = useScroll({
    target: trackRef,
    container: containerRef,
    offset: ["start end", "center center"], // Start when track enters from bottom, fully patched when track center reaches viewport center
  });

  // Transform scroll progress (0-1) to patch progress (0-1)
  const patchProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Debug: log scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      console.log("Scroll progress:", latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const attractSection = attractRef.current;
      const qualifySection = qualifyRef.current;
      const trackSection = trackRef.current;
      const convertSection = convertRef.current;

      if (!container || !attractSection || !qualifySection || !trackSection || !convertSection) return;

      const attractRect = attractSection.getBoundingClientRect();
      const qualifyRect = qualifySection.getBoundingClientRect();
      const trackRect = trackSection.getBoundingClientRect();
      const convertRect = convertSection.getBoundingClientRect();

      const viewportCenter = window.innerHeight / 2;

      // Check which section is in the center of the viewport
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

    const container = containerRef.current;
    if (container) {
      handleScroll(); // Initial check
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-scroll scrollbar-hide">
      <NavbarWrapper />
      <main className="px-4">
        <div className="mx-[15%]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Scrollable Use Cases */}
            <div className="lg:col-span-2">
              {/* Use Case 1: Attract */}
              <motion.div
                ref={attractRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 h-screen flex flex-col justify-center pt-24"
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full">
                  <span className="text-cyan-400 font-semibold text-sm">
                    Use Case: Attract
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Build Landing Pages That Convert
                </h1>

                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
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
                    <h3 className="text-xl font-semibold text-white">
                      Key Features:
                    </h3>
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
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span className="text-neutral-300">{feature}</span>
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
                className="space-y-6 h-screen flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full">
                  <span className="text-purple-400 font-semibold text-sm">
                    Use Case: Qualify
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Intelligent Quiz Builder for Lead Qualification
                </h2>

                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
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
                    <h3 className="text-xl font-semibold text-white">
                      Key Features:
                    </h3>
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
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                          <span className="text-neutral-300">{feature}</span>
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
                className="space-y-6 h-screen flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-full">
                  <span className="text-teal-400 font-semibold text-sm">
                    Use Case: Track
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Built-in Server-Side Tracking & Deduplication
                </h2>

                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                  <p>
                    Accurate attribution is the foundation of profitable marketing. With iOS 14+
                    limitations and ad blockers everywhere, client-side tracking alone leaves you
                    flying blind.
                  </p>

                  <p>
                    Our built-in server-side tracking combines client-side and server-side data
                    automatically, with intelligent deduplication that happens with just a few
                    clicks. No complex setup, no developers needed—just accurate data you can
                    actually trust to make decisions.
                  </p>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Hybrid tracking: Client-side + Server-side in one unified system",
                        "Automatic deduplication prevents double-counting conversions",
                        "Works seamlessly with Facebook, Google, TikTok, and more",
                        "Cookie-less tracking options for privacy compliance",
                        "Real-time attribution reports across all touchpoints",
                      ].map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                          <span className="text-neutral-300">{feature}</span>
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
                className="space-y-6 h-screen flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full">
                  <span className="text-emerald-400 font-semibold text-sm">
                    Use Case: Convert
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Personalization Engine with Decision Trees
                </h2>

                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
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
                    <h3 className="text-xl font-semibold text-white">
                      Key Features:
                    </h3>
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
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span className="text-neutral-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Fixed Funnel */}
            <div className="hidden lg:flex lg:col-span-3 h-screen items-center justify-center sticky top-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center justify-center rounded-2xl overflow-hidden"
              >
                {/* Pixelated background layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/10 rounded-2xl"
                     style={{
                       backgroundImage: `
                         repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px),
                         repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)
                       `,
                     }}
                />

                {/* Funnel content with pixelation effect */}
                <div className="relative z-10 p-8">
                  <FunnelDiagram activeStage={activeStage} patchProgress={patchProgress} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile: Show funnel separately */}
        <div className="lg:hidden mt-16">
          <div className="flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/10 p-8">
            <FunnelDiagram activeStage={activeStage} patchProgress={patchProgress} />
          </div>
        </div>
      </main>
    </div>
  );
}
