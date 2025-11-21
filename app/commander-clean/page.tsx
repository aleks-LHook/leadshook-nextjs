import NavbarWrapper from "@/components/navbar-wrapper";
import { CommanderHeroSection } from "@/components/sections/commander-hero-section";
import { HammerSection } from "@/components/sections/hammer-section";
import { CommanderFunnelSection } from "@/components/sections/commander-funnel-section";
import { CommanderSecuritySection } from "@/components/sections/commander-security-section";
import { CTASection } from "@/components/sections/cta-section";
import { TopBar } from "@/components/ui/top-bar";

export default function CommanderClean() {
  return (
    <div className="relative">
      <TopBar />
      <NavbarWrapper />
      <main className="flex min-h-screen flex-col">
        <CommanderHeroSection />
        
        <HammerSection />
        
        <CommanderFunnelSection />
        
        <CommanderSecuritySection />
        
        <CTASection />
        
      </main>
    </div>
  );
}