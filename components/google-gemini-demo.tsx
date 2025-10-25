"use client";
import React, { useRef } from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useScroll, useTransform } from "motion/react";

export default function GoogleGeminiDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);

  return (
    <div
      className="h-[250vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="It Takes Just 5 Steps"
        description="LeadsHook solves your lead generation challenges with simple features done right."
        leftLabels={["Attract", "Qualify", "Convert", "Track", "Optimize"]}
        rightLabels={["Page Builder", "Quiz Maker", "Surgical Personalization", "Server-Side Tracking", "AB Testing"]}
      />
    </div>
  );
}
