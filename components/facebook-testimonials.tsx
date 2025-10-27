"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface TestimonialImage {
  src: string;
  alt: string;
}

export const InfiniteMovingImages = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialImage[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[500px] h-[150px] max-w-full shrink-0 rounded-xl border border-zinc-700 bg-zinc-900/50 overflow-hidden hover:scale-105 transition-transform duration-300"
            key={`${item.src}-${idx}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={150}
              className="w-full h-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FacebookTestimonials() {
  // Split images into two rows
  const row1Images: TestimonialImage[] = [
    { src: "/facebook.com_2025-10-24_17_40_42.png", alt: "Facebook testimonial 1" },
    { src: "/facebook.com_2025-10-24_17_45_18.png", alt: "Facebook testimonial 2" },
    { src: "/facebook.com_2025-10-24_17_47_55.png", alt: "Facebook testimonial 3" },
    { src: "/facebook.com_2025-10-24_17_54_16.png", alt: "Facebook testimonial 4" },
    { src: "/facebook.com_2025-10-24_17_54_26.png", alt: "Facebook testimonial 5" },
    { src: "/facebook.com_2025-10-24_17_55_18.png", alt: "Facebook testimonial 6" },
    { src: "/facebook.com_2025-10-24_17_55_28.png", alt: "Facebook testimonial 7" },
    { src: "/facebook.com_2025-10-24_17_58_08.png", alt: "Facebook testimonial 8" },
  ];

  const row2Images: TestimonialImage[] = [
    { src: "/facebook.com_2025-10-24_18_04_24.png", alt: "Facebook testimonial 9" },
    { src: "/facebook.com_2025-10-24_18_04_32.png", alt: "Facebook testimonial 10" },
    { src: "/facebook.com_2025-10-24_18_05_35.png", alt: "Facebook testimonial 11" },
    { src: "/facebook.com_2025-10-24_18_06_28.png", alt: "Facebook testimonial 12" },
    { src: "/facebook.com_2025-10-24_18_06_37.png", alt: "Facebook testimonial 13" },
    { src: "/facebook.com_2025-10-24_18_08_20.png", alt: "Facebook testimonial 14" },
    { src: "/facebook.com_2025-10-24_18_19_58.png", alt: "Facebook testimonial 15" },
    { src: "/facebook.com_2025-10-24_18_22_26.png", alt: "Facebook testimonial 16" },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
          Loved by Marketers
        </h2>
        <p className="text-xl text-neutral-400 text-center mb-12">
          See what our customers are saying on Facebook
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <InfiniteMovingImages
          items={row1Images}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingImages
          items={row2Images}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
