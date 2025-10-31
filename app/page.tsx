import NavbarWrapper from "@/components/navbar-wrapper";
import GoogleGeminiDemo from "@/components/google-gemini-demo";
import FacebookTestimonials from "@/components/facebook-testimonials";
import FunnelFeaturesSection from "@/components/funnel-features-section";
import FeaturesSectionDemo3 from "@/components/features-section-demo-3";
import BotTrafficSection from "@/components/bot-traffic-section";
import { GlowingGridSection } from "@/components/glowing-grid-section";
import { HeroSection } from "@/components/hero-section";
import { TopBar } from "@/components/ui/top-bar";

export default function Home() {
  return (
    <div className="relative">
      <TopBar />
      <NavbarWrapper />
      <main className="flex min-h-screen flex-col">
        <HeroSection />

        <section>
          <GoogleGeminiDemo />
        </section>

        <section>
          <FacebookTestimonials />
        </section>

        <section>
          <FunnelFeaturesSection />
        </section>

        <section className="py-20">
          <FeaturesSectionDemo3 />
        </section>

        <BotTrafficSection />

        <GlowingGridSection />
      </main>
    </div>
  );
}
