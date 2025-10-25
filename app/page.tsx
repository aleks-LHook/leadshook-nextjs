import { Cover } from "@/components/ui/cover";
import NavbarWrapper from "@/components/navbar-wrapper";
import GoogleGeminiDemo from "@/components/google-gemini-demo";
import { NeonButton } from "@/components/ui/neon-button";
import { TrustBanner } from "@/components/ui/trust-badges";
import FacebookTestimonials from "@/components/facebook-testimonials";
import FunnelFeaturesSection from "@/components/funnel-features-section";
import FeaturesSectionDemo3 from "@/components/features-section-demo-3";

export default function Home() {
  return (
    <div className="relative">
      <NavbarWrapper />
      <main className="flex min-h-screen flex-col">
        <section className="flex flex-col items-center justify-start pt-24 pb-24 px-24">
          <TrustBanner />
          <h1 className="text-5xl md:text-8xl font-bold text-center max-w-7xl mx-auto" style={{ lineHeight: '1.2' }}>
            Build unhackable funnels<br className="mb-2" />
            at <Cover>warp speed</Cover>
          </h1>
          <p className="mt-12 text-xl md:text-3xl text-center text-neutral-600 dark:text-neutral-400 max-w-5xl mx-auto leading-relaxed">
            Generate higher quality leads at a lower cost than your competitors… Indefinitely
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-8 items-center justify-center">
            <NeonButton href="#templates" variant="cyan">
              Browse Templates
            </NeonButton>
            <NeonButton href="#how-it-works" variant="purple">
              See How It Works
            </NeonButton>
          </div>
        </section>

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
      </main>
    </div>
  );
}
