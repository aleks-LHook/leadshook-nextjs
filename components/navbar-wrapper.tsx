"use client";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo visible={isScrolled} />
        <NavItems items={navItems} />
        <div className="flex items-center gap-2">
          <NavbarButton variant="secondary" href="#login">
            Login
          </NavbarButton>
          <NavbarButton variant="gradient" href="#signup">
            Sign Up
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo visible={isScrolled} />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-600 dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-2 pt-4">
            <NavbarButton variant="secondary" href="#login" className="w-full">
              Login
            </NavbarButton>
            <NavbarButton variant="gradient" href="#signup" className="w-full">
              Sign Up
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
