"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

// Custom Header for Testimonials
export const TestimonialsHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
        Real People. <br /> Real Results.
      </h2>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Join thousands of marketers who are crushing it with LeadsHook.
        From 6-figure launches to 7-figure campaigns, see what our community is achieving.
      </p>
    </div>
  );
};

export default function TestimonialsParallax() {
  const testimonials = [
    {
      title: "Real Success Stories",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_40_42.png",
    },
    {
      title: "7-Figure Results",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_45_18.png",
    },
    {
      title: "Proven Track Record",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_47_55.png",
    },
    {
      title: "Client Testimonials",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_54_16.png",
    },
    {
      title: "Success Metrics",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_54_26.png",
    },
    {
      title: "Real Reviews",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_55_18.png",
    },
    {
      title: "Customer Feedback",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_55_28.png",
    },
    {
      title: "Community Love",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_17_58_08.png",
    },
    {
      title: "Industry Recognition",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_04_24.png",
    },
    {
      title: "User Success",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_04_32.png",
    },
    {
      title: "Amazing Results",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_05_35.png",
    },
    {
      title: "Happy Clients",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_06_28.png",
    },
    {
      title: "Growth Stories",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_06_37.png",
    },
    {
      title: "Verified Reviews",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_08_20.png",
    },
    {
      title: "Social Proof",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_19_58.png",
    },
    {
      title: "More Success Stories",
      link: "#",
      thumbnail: "/facebook.com_2025-10-24_18_22_26.png",
    },
  ];

  return <HeroParallax products={testimonials} header={<TestimonialsHeader />} />;
}
