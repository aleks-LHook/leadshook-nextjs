"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";

type VideoStage = "attract" | "qualify" | "track" | "convert";

export function CommanderFunnelSection() {
  const [activeVideo, setActiveVideo] = useState<VideoStage>("attract");
  const attractRef = useRef<HTMLDivElement>(null);
  const qualifyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const convertRef = useRef<HTMLDivElement>(null);

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

      const triggerPoint = window.innerHeight * 0.35;

      if (attractRect.top <= triggerPoint && attractRect.bottom >= triggerPoint) {
        setActiveVideo("attract");
      } else if (qualifyRect.top <= triggerPoint && qualifyRect.bottom >= triggerPoint) {
        setActiveVideo("qualify");
      } else if (trackRect.top <= triggerPoint && trackRect.bottom >= triggerPoint) {
        setActiveVideo("track");
      } else if (convertRect.top <= triggerPoint && convertRect.bottom >= triggerPoint) {
        setActiveVideo("convert");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[oklch(0.23_0.05_265)] py-32">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      <div className="relative z-20 mx-auto px-8 md:px-24 max-w-[90vw]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-24"
        >
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Get Weeks of Work Done in Minutes <br />
            <span className="text-2xl md:text-4xl lg:text-5xl">With You Guiding Every Decision</span>
          </h2>
          <p 
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Stop wrestling with tools and templates. Commander builds, tests, and optimizes with your guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16">
          {/* Left Column - Scrollable Use Cases */}
          <div className="lg:col-span-5">
            {/* Use Case 1: Attract */}
            <motion.div
              ref={attractRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8 min-h-[90vh] flex flex-col justify-start py-20"
            >
              <p 
                className="text-sm md:text-base font-medium uppercase tracking-wider text-white/60"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander at Work: Attract
              </p>

              <h3 
                className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander Builds Landing Pages
              </h3>

              <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
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

                <div className="mt-12 space-y-6">
                  <h4 
                    className="text-xl md:text-2xl font-light text-white"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "High-converting landing pages optimized for your audience",
                      "Automatic bot filtering to keep traffic quality high",
                      "Mobile-responsive design that works on any device",
                      "Built-in A/B testing capabilities for continuous improvement",
                      "SEO-optimized pages that help you rank organically",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-white/70 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.a
                href="#website-builder"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group inline-flex items-center gap-3 mt-8 text-white/90 hover:text-white transition-colors"
              >
                <span 
                  className="text-xl font-medium underline decoration-white/40 underline-offset-4 group-hover:decoration-white transition-colors"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Explore Website Builder
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </motion.div>

            {/* Use Case 2: Qualify */}
            <motion.div
              ref={qualifyRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8 min-h-[90vh] flex flex-col justify-start py-20"
            >
              <p 
                className="text-sm md:text-base font-medium uppercase tracking-wider text-white/60"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander at Work: Qualify
              </p>

              <h3 
                className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander Shows You Exactly Who's Ready to Buy
              </h3>

              <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
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

                <div className="mt-12 space-y-6">
                  <h4 
                    className="text-xl md:text-2xl font-light text-white"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Instant visibility into which leads are worth pursuing",
                      "Automated scoring that ranks prospects by buying intent",
                      "Smart segmentation for personalized follow-up",
                      "Real-time routing to get hot leads to sales immediately",
                      "Complete context so reps know exactly what to say",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-white/70 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.a
                href="#quiz-maker"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group inline-flex items-center gap-3 mt-8 text-white/90 hover:text-white transition-colors"
              >
                <span 
                  className="text-xl font-medium underline decoration-white/40 underline-offset-4 group-hover:decoration-white transition-colors"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Explore Quiz Maker
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </motion.div>

            {/* Use Case 3: Track */}
            <motion.div
              ref={trackRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8 min-h-[90vh] flex flex-col justify-start py-20"
            >
              <p 
                className="text-sm md:text-base font-medium uppercase tracking-wider text-white/60"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander at Work: Track
              </p>

              <h3 
                className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander Recovers the Conversions You're Missing
              </h3>

              <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
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

                <div className="mt-12 space-y-6">
                  <h4 
                    className="text-xl md:text-2xl font-light text-white"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Full visibility into campaign performance across all channels",
                      "30-40% more attributed conversions from the same traffic",
                      "Confidence to scale winners and kill losers accurately",
                      "Privacy-compliant tracking that adapts to platform changes",
                      "Proof of ROI to justify budget increases",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-white/70 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.a
                href="#server-side-tracking"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group inline-flex items-center gap-3 mt-8 text-white/90 hover:text-white transition-colors"
              >
                <span 
                  className="text-xl font-medium underline decoration-white/40 underline-offset-4 group-hover:decoration-white transition-colors"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Explore Server-Side Tracking
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </motion.div>

            {/* Use Case 4: Convert */}
            <motion.div
              ref={convertRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8 min-h-[90vh] flex flex-col justify-start py-20"
            >
              <p 
                className="text-sm md:text-base font-medium uppercase tracking-wider text-white/60"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander at Work: Convert
              </p>

              <h3 
                className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
                Commander Shows Each Prospect Exactly What They Need to See
              </h3>

              <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
              >
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

                <div className="mt-12 space-y-6">
                  <h4 
                    className="text-xl md:text-2xl font-light text-white"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    What Commander Delivers:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Personalized experiences that feel custom-built for each prospect",
                      "Higher conversion rates from better message-market alignment",
                      "Faster decisions when prospects see relevant information",
                      "Dynamic recommendations based on qualification and behavior",
                      "Scalable personalization without manual segmentation",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                        <span className="text-white/70 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.a
                href="#personalization-engine"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group inline-flex items-center gap-3 mt-8 text-white/90 hover:text-white transition-colors"
              >
                <span 
                  className="text-xl font-medium underline decoration-white/40 underline-offset-4 group-hover:decoration-white transition-colors"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  Explore Personalization Engine
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Sticky Video */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-72 flex items-start">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full pt-[3.5rem]"
              >
                <div className="w-full">
                  {/* Video Container */}
                  <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Video placeholder with stage indicator */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-12">
                      {/* Stage Label */}
                      <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full">
                        <span 
                          className="text-white font-medium text-lg capitalize"
                          style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                        >
                          {activeVideo} Demo
                        </span>
                      </div>
                      
                      {/* Play Icon */}
                      <button className="group w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300">
                        <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[14px] border-y-transparent ml-2 group-hover:border-l-white transition-colors" />
                      </button>
                      
                      {/* Video Title */}
                      <div className="text-center max-w-md">
                        <h4 
                          className="text-2xl font-light text-white mb-3 leading-tight"
                          style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                        >
                          {activeVideo === "attract" && "See Commander Build Landing Pages"}
                          {activeVideo === "qualify" && "Watch Commander Qualify Leads"}
                          {activeVideo === "track" && "Commander Tracking in Action"}
                          {activeVideo === "convert" && "Commander Personalizes Every Experience"}
                        </h4>
                        <p 
                          className="text-sm text-white/60"
                          style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                        >
                          Click to watch the demo
                        </p>
                      </div>
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile: Show video placeholders for each section */}
        <div className="lg:hidden mt-20 space-y-12">
          {(["attract", "qualify", "track", "convert"] as VideoStage[]).map((stage) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full">
                  <span 
                    className="text-white font-medium text-sm capitalize"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {stage} Demo
                  </span>
                </div>
                
                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                </button>
                
                <p 
                  className="text-center text-sm text-white/70"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                >
                  {stage === "attract" && "See Commander Build Landing Pages"}
                  {stage === "qualify" && "Watch Commander Qualify Leads"}
                  {stage === "track" && "Commander Tracking in Action"}
                  {stage === "convert" && "Commander Personalizes Every Experience"}
                </p>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
