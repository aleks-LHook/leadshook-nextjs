"use client";

import { FunnelDiagram } from "@/components/ui/funnel-diagram";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";

type VideoStage = "attract" | "qualify" | "track" | "convert";

export default function FunnelFeaturesSection() {
  const [activeStage, setActiveStage] = useState<"top" | "middle" | "bottom" | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoStage>("attract");
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

      const triggerPoint = window.innerHeight * 0.35; // Trigger at 35% from top instead of center

      if (attractRect.top <= triggerPoint && attractRect.bottom >= triggerPoint) {
        setActiveStage("top");
        setActiveVideo("attract");
      } else if (qualifyRect.top <= triggerPoint && qualifyRect.bottom >= triggerPoint) {
        setActiveStage("middle");
        setActiveVideo("qualify");
      } else if (trackRect.top <= triggerPoint && trackRect.bottom >= triggerPoint) {
        setActiveStage("middle");
        setActiveVideo("track");
      } else if (convertRect.top <= triggerPoint && convertRect.bottom >= triggerPoint) {
        setActiveStage("bottom");
        setActiveVideo("convert");
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#262C5B] dark:text-white mb-4 leading-tight">
            What Takes Teams Weeks, Commander Does in Minutes
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Stop wrestling with tools and templates. Commander handles the building, testing, and optimization automatically.
          </p>
        </motion.div>

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
              className="space-y-6 min-h-[800px] flex flex-col justify-center py-20"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-full w-fit shadow-sm shadow-cyan-200/50 dark:shadow-none">
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm">
                  Commander at Work: Attract
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Commander Builds Landing Pages While You Focus on Your Business
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  You know your offer and who needs it. Commander turns that into 
                  high-converting landing pages.
                </p>

                <p>
                  Using LeadsHook's page builder, Commander creates conversion-optimized 
                  pages that are mobile-friendly, fast-loading, and designed to attract 
                  your ideal customers. Built-in bot protection ensures you're only 
                  seeing real prospects, not bots inflating your traffic numbers.
                </p>

                <p>
                  You provide the message and goals. Commander builds the page. Qualified 
                  visitors start arriving.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "High-converting landing pages optimized for your audience",
                      "Automatic bot filtering to keep traffic quality high",
                      "Mobile-responsive design that works on any device",
                      "Built-in A/B testing capabilities for continuous improvement",
                      "SEO-optimized pages that help you rank organically",
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
              className="space-y-6 min-h-[800px] flex flex-col justify-center py-20"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full w-fit shadow-sm shadow-purple-200/50 dark:shadow-none">
                <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">
                  Commander at Work: Qualify
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Commander Shows You Exactly Who's Ready to Buy
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  Not all leads are created equal. Some are ready to buy today. 
                  Others need nurturing. Many will never convert. Commander tells 
                  you which is which.
                </p>

                <p>
                  Using LeadsHook's quiz builder, Commander asks the right questions 
                  to uncover budget, timeline, pain points, and urgency. Every 
                  response is scored automatically, segmenting leads in real-time 
                  so your team knows exactly who to prioritize.
                </p>

                <p>
                  You define what makes a qualified lead. Commander finds them for you.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Instant visibility into which leads are worth pursuing",
                      "Automated scoring that ranks prospects by buying intent",
                      "Smart segmentation for personalized follow-up",
                      "Real-time routing to get hot leads to sales immediately",
                      "Complete context so reps know exactly what to say",
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
              className="space-y-6 min-h-[800px] flex flex-col justify-center py-20"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-500/10 dark:to-emerald-500/10 border border-teal-200 dark:border-teal-500/20 rounded-full w-fit shadow-sm shadow-teal-200/50 dark:shadow-none">
                <span className="text-teal-700 dark:text-teal-400 font-semibold text-sm">
                  Commander at Work: Track
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Commander Recovers the Conversions You're Missing
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  You're generating more conversions than your dashboard shows. 
                  The problem? iOS privacy changes, ad blockers, and browser 
                  restrictions create blind spots in your tracking—you're losing 
                  attribution on 30-40% of results.
                </p>

                <p>
                  Commander fixes this automatically using LeadsHook's hybrid tracking 
                  system. It captures data both client-side and server-side, patches 
                  the gaps with intelligent deduplication, and gives you the complete 
                  picture of campaign performance.
                </p>

                <p>
                  You launch campaigns. Commander ensures accurate tracking. You make 
                  better decisions.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Full visibility into campaign performance across all channels",
                      "30-40% more attributed conversions from the same traffic",
                      "Confidence to scale winners and kill losers accurately",
                      "Privacy-compliant tracking that adapts to platform changes",
                      "Proof of ROI to justify budget increases",
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
              className="space-y-6 min-h-[800px] flex flex-col justify-center py-20"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-500/10 dark:to-green-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-full w-fit shadow-sm shadow-emerald-200/50 dark:shadow-none">
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  Commander at Work: Convert
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[#262C5B] dark:text-white leading-tight">
                Commander Shows Each Prospect Exactly What They Need to See
              </h3>

              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                <p>
                  Prospects don't want generic pitches. They want to know how 
                  you solve their specific problem. When messaging doesn't 
                  match their needs, they leave.
                </p>

                <p>
                  Commander uses LeadsHook's personalization engine to adapt every 
                  touchpoint based on what each prospect has told you and how 
                  they've behaved. Every visitor sees pricing, case studies, and 
                  messaging tailored to their situation, pain points, and stage 
                  in the buying journey.
                </p>

                <p>
                  You create the content options. Commander matches prospects to 
                  what converts them. Sales increase.
                </p>

                <div className="mt-8 space-y-4">
                  <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white">
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Personalized experiences that feel custom-built for each prospect",
                      "Higher conversion rates from better message-market alignment",
                      "Faster decisions when prospects see relevant information",
                      "Dynamic recommendations based on qualification and behavior",
                      "Scalable personalization without manual segmentation",
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

          {/* Right Column - Sticky Video */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-24 flex items-start">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-start justify-center w-full py-20"
              >
                <div className="w-full space-y-6">
                <div className="space-y-6" />
                {/* Spacer to match badge + gap */}
                {/* Video Container */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-100/40 to-blue-100/40 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/40 dark:border-purple-500/10 rounded-2xl shadow-xl shadow-purple-200/20 dark:shadow-none overflow-hidden">
                  {/* Video placeholder with stage indicator */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                    {/* Stage Label */}
                    <div className="px-6 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-purple-300 dark:border-purple-500/30 rounded-full">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold text-lg capitalize">
                        {activeVideo} Demo
                      </span>
                    </div>
                    
                    {/* Play Icon */}
                    <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border-2 border-purple-400 dark:border-purple-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <div className="w-0 h-0 border-l-[20px] border-l-purple-600 dark:border-l-purple-400 border-y-[12px] border-y-transparent ml-1" />
                    </div>
                    
                    {/* Video Title */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-[#262C5B] dark:text-white mb-2">
                        {activeVideo === "attract" && "See Commander Build Landing Pages"}
                        {activeVideo === "qualify" && "Watch Commander Qualify Leads"}
                        {activeVideo === "track" && "Commander Tracking in Action"}
                        {activeVideo === "convert" && "Commander Personalizes Every Experience"}
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Click to watch the demo
                      </p>
                    </div>
                    
                    {/* Subtle pixelated background pattern */}
                    <div
                      className="absolute inset-0 opacity-30 -z-10"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(138,43,226,0.08) 3px, rgba(138,43,226,0.08) 4px),
                          repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(138,43,226,0.08) 3px, rgba(138,43,226,0.08) 4px)
                        `,
                      }}
                    />
                  </div>
                </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile: Show video placeholders for each section */}
        <div className="lg:hidden mt-16 space-y-8">
          {(["attract", "qualify", "track", "convert"] as VideoStage[]).map((stage) => (
            <div
              key={stage}
              className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-100/40 to-blue-100/40 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200/40 dark:border-purple-500/10 rounded-2xl shadow-lg shadow-purple-200/20 dark:shadow-none overflow-hidden"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                <div className="px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-purple-300 dark:border-purple-500/30 rounded-full">
                  <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm capitalize">
                    {stage} Demo
                  </span>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border-2 border-purple-400 dark:border-purple-500 flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[16px] border-l-purple-600 dark:border-l-purple-400 border-y-[10px] border-y-transparent ml-1" />
                </div>
                
                <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                  {stage === "attract" && "See Commander Build Landing Pages"}
                  {stage === "qualify" && "Watch Commander Qualify Leads"}
                  {stage === "track" && "Commander Tracking in Action"}
                  {stage === "convert" && "Commander Personalizes Every Experience"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
