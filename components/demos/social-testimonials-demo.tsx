"use client";

import { SocialTestimonialCard } from "@/components/ui/social-testimonial-card";
import { motion } from "motion/react";

export function SocialTestimonialsDemo() {
  return (
    <section className="relative bg-[oklch(0.23_0.05_265)] py-32">
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      <div className="relative z-20 mx-auto px-8 md:px-24 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Loved by marketers worldwide
          </h2>
          <p 
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            See what our customers are saying about LeadsHook
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <SocialTestimonialCard
              name="The Jack Forge"
              handle="@TheJackForge"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=jack"
              content="I've been exclusively using Windsurf for the past 3 weeks. They are not paying me to say this. It's really good. Really really good."
              platform="twitter"
              verified={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SocialTestimonialCard
              name="Sarah Chen"
              handle="@sarahchen"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
              content="Just launched my first product using LeadsHook! The customer journey builder is incredible. Cut my development time by 60%."
              platform="linkedin"
              verified={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SocialTestimonialCard
              name="Mike Rodriguez"
              handle="@mikethegrowth"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=mike"
              content="Best decision we made this year was switching to LeadsHook. Our conversion rates are up 3x and our team is actually enjoying the process."
              platform="twitter"
              verified={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SocialTestimonialCard
              name="Emma Wilson"
              handle="@emmawilson"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=emma"
              content="LeadsHook has completely transformed how we build funnels. What used to take weeks now takes hours. Absolutely game-changing."
              platform="facebook"
              verified={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SocialTestimonialCard
              name="David Park"
              handle="@davidpark"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=david"
              content="Finally, a funnel builder that doesn't make me want to pull my hair out. The AI assistance is next level. Highly recommend!"
              platform="producthunt"
              verified={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SocialTestimonialCard
              name="Lisa Thompson"
              handle="u/lisathompson"
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=lisa"
              content="I was skeptical at first, but LeadsHook exceeded all my expectations. The customer support is top-notch and the platform is incredibly intuitive."
              platform="reddit"
              verified={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
