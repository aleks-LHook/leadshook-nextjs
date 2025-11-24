import NavbarWrapper from "@/components/navbar-wrapper";
import { CommanderHeroSection } from "@/components/sections/commander-hero-section";
import { HammerSection } from "@/components/sections/hammer-section";
import { CommanderFunnelSection } from "@/components/sections/commander-funnel-section";
import { CommanderControlSection } from "@/components/sections/commander-control-section";
import { CommanderControlSectionAlt } from "@/components/sections/commander-control-section-alt";
import { CommanderSecuritySection } from "@/components/sections/commander-security-section";
import { CTASection } from "@/components/sections/cta-section";
import { TopBar } from "@/components/ui/top-bar";
import { SocialTestimonialsDemo } from "@/components/demos/social-testimonials-demo";

export default function CommanderClean() {
  return (
    <div className="relative">
      <TopBar />
      <NavbarWrapper />
      <main className="flex min-h-screen flex-col">
        <CommanderHeroSection />
        
        <HammerSection />
        
        <CommanderFunnelSection />
        
        {/* <CommanderControlSection /> */}
        
        <CommanderControlSectionAlt />
        
        <CommanderSecuritySection />
        
        <SocialTestimonialsDemo />
        
        <CTASection />
        
      </main>
    </div>
  );
}