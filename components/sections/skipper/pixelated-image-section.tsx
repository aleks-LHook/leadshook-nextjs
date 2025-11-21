"use client";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { useEffect, useState, useRef } from "react";

export function PixelatedImageSection() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section ref={containerRef} className="relative w-[70%] mx-auto aspect-video overflow-hidden bg-black">
      <div className="absolute inset-0">
        <PixelatedCanvas
          src="/images/lantern-person.jpg.png"
          width={dimensions.width}
          height={dimensions.height}
          cellSize={4}
          dotScale={0.85}
          shape="circle"
          backgroundColor="#0a0a0a"
          grayscale={false}
          interactive={true}
          distortionStrength={5}
          distortionRadius={100}
          distortionMode="swirl"
          followSpeed={0.15}
          dropoutStrength={0.3}
          sampleAverage={true}
          tintColor="#03e9f4"
          tintStrength={0.15}
          maxFps={60}
          objectFit="contain"
          jitterStrength={3}
          jitterSpeed={3}
          fadeOnLeave={true}
          fadeSpeed={0.08}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
