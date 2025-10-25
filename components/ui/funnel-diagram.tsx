"use client";

import { motion, AnimatePresence, MotionValue, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface FunnelDiagramProps {
  className?: string;
  activeStage?: "top" | "middle" | "bottom" | null;
  patchProgress?: MotionValue<number> | number; // 0 = no patching, 1 = fully patched
}

// Pixel hole component
const PixelHole = ({ className, size = 24 }: { className?: string; size?: number }) => {
  const pixels = useMemo(() => {
    // Create a jagged pixel pattern for the hole
    const pattern = [
      [0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0],
    ];
    return pattern;
  }, []);

  const pixelSize = size / 7;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      {pixels.map((row, y) =>
        row.map((pixel, x) =>
          pixel ? (
            <div
              key={`${x}-${y}`}
              className="absolute bg-black/60 border border-red-500/40"
              style={{
                left: x * pixelSize,
                top: y * pixelSize,
                width: pixelSize,
                height: pixelSize,
                boxShadow: "inset 0 0 4px rgba(0,0,0,0.8), 0 0 2px rgba(239,68,68,0.3)",
              }}
            />
          ) : null
        )
      )}
    </div>
  );
};

// Pixel patch component - fills up holes gradually
const PixelPatch = ({ className, size = 32, delay = 0 }: { className?: string; size?: number; delay?: number }) => {
  const pixels = useMemo(() => {
    // Create a circular fill pattern with distance from center for animation
    const pattern = [
      [0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 0],
    ];

    // Calculate distance from center for each pixel (for animation sequencing)
    const center = 3;
    return pattern.map((row, y) =>
      row.map((pixel, x) => ({
        active: pixel === 1,
        // Distance from center - pixels closer to center appear first
        distance: pixel === 1 ? Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2)) : 0
      }))
    );
  }, []);

  const pixelSize = size / 7;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      {pixels.map((row, y) =>
        row.map((pixel, x) =>
          pixel.active ? (
            <motion.div
              key={`${x}-${y}`}
              className="absolute bg-gradient-to-br from-emerald-400 to-green-500 border border-emerald-500/40"
              style={{
                left: x * pixelSize,
                top: y * pixelSize,
                width: pixelSize,
                height: pixelSize,
                boxShadow: "0 0 3px rgba(52,211,153,0.4)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                // Animate from center outward based on distance
                delay: delay + pixel.distance * 0.08,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            />
          ) : null
        )
      )}
    </div>
  );
};

// Leaking particle component - now leaks out the sides
const LeakingParticle = ({
  holeX,
  holeY,
  index,
  patchProgress,
  direction = "left"
}: {
  holeX: string;
  holeY: string;
  index: number;
  patchProgress: MotionValue<number> | number;
  direction?: "left" | "right";
}) => {
  const randomOffset = useMemo(() => {
    // Make particles leak out to the sides with some downward motion
    const sideDistance = 80 + Math.random() * 60; // 80-140px to the side
    const downDistance = 30 + Math.random() * 50; // 30-80px down
    const xDirection = direction === "left" ? -1 : 1;

    return {
      x: sideDistance * xDirection,
      y: downDistance,
      delay: Math.random() * 0.8,
      duration: 2 + Math.random() * 1.5,
    };
  }, [direction]);

  const isMotionValue = patchProgress && typeof patchProgress === 'object' && 'get' in patchProgress;

  // Create motion values for position based on patch progress
  // As progress goes from 0 to 1, particles should move from randomOffset back to 0
  const particleX = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, [0, 1], [randomOffset.x, 0])
    : randomOffset.x * (1 - (patchProgress as number));

  const particleY = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, [0, 1], [randomOffset.y, 0])
    : randomOffset.y * (1 - (patchProgress as number));

  const particleOpacity = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, [0, 0.9, 1], [0.8, 0.3, 0])
    : (patchProgress as number) < 0.9 ? 0.8 * (1 - (patchProgress as number)) : 0;

  return (
    <motion.div
      className="absolute w-1.5 h-1.5 bg-red-400/70 rounded-sm"
      style={{
        left: holeX,
        top: holeY,
        x: particleX,
        y: particleY,
        opacity: particleOpacity,
        boxShadow: "0 0 4px rgba(248,113,113,0.8)",
        imageRendering: "pixelated",
      }}
      initial={false}
      transition={{
        duration: 0,
        ease: "linear",
      }}
    />
  );
};

export function FunnelDiagram({ className, activeStage = null, patchProgress = 0 }: FunnelDiagramProps) {
  // Determine if patchProgress is a MotionValue or a number
  const isMotionValue = patchProgress && typeof patchProgress === 'object' && 'get' in patchProgress;

  // Create derived motion values for conditions
  const isPatching = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, (v) => v > 0)
    : (patchProgress as number) > 0;

  const isFullyPatched = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, (v) => v >= 1)
    : (patchProgress as number) >= 1;

  // Create scale transform for holes (inverse of progress)
  // As progress goes from 0 to 1, holes should shrink from 1 to 0
  const holeScale = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, [0, 1], [1, 0])
    : 1 - (patchProgress as number);

  // Create scale transform for patches (same as progress)
  // As progress goes from 0 to 1, patches should grow from 0 to 1
  const patchScale = isMotionValue
    ? useTransform(patchProgress as MotionValue<number>, [0, 1], [0, 1])
    : patchProgress as number;

  const stages = [
    {
      id: "top" as const,
      label: "TOP OF FUNNEL",
      color: "from-indigo-400 to-blue-400",
      width: "w-[550px]",
      height: "h-40",
      delay: 0,
    },
    {
      id: "middle" as const,
      label: "MIDDLE OF FUNNEL",
      color: "from-cyan-400 to-teal-400",
      width: "w-[440px]",
      height: "h-40",
      delay: 0.2,
    },
    {
      id: "bottom" as const,
      label: "BOTTOM OF FUNNEL",
      color: "from-emerald-400 to-green-400",
      width: "w-[320px]",
      height: "h-40",
      delay: 0.4,
    },
  ];

  return (
    <div className={cn("flex flex-col items-center gap-6 py-12", className)}>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-neutral-200 mb-4"
      >
        ToFu-MoFu-BoFu
      </motion.h3>

      <div className="flex flex-col items-center gap-4">
        {stages.map((stage, index) => {
          const isActive = activeStage === stage.id;
          const isInactive = activeStage !== null && !isActive;

          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: isInactive ? 0.3 : 1,
                scale: isActive ? 1.05 : 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: stage.delay,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              }}
            >
              <div
                className={cn(
                  "flex items-center justify-center relative overflow-hidden",
                  "bg-gradient-to-br transition-all duration-500",
                  stage.color,
                  stage.width,
                  stage.height,
                  isActive ? "shadow-2xl ring-2 ring-white/20" : "shadow-lg",
                  // Add pixelated border effect
                  "border-2 border-white/10"
                )}
                style={{
                  imageRendering: "pixelated",
                }}
              >
                <span className={cn(
                  "font-bold text-lg tracking-wider transition-colors duration-500 relative z-10",
                  isActive ? "text-white" : "text-white/80"
                )}>
                  {stage.label}
                </span>

                {/* TOP OF FUNNEL - 6 holes */}
                {index === 0 && (
                  <>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[10%] top-[20%]"><PixelHole size={20} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[30%] top-[35%]"><PixelHole size={18} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[50%] top-[50%]"><PixelHole size={22} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[30%] top-[25%]"><PixelHole size={19} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[15%] top-[45%]"><PixelHole size={21} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[20%] top-[65%]"><PixelHole size={17} /></motion.div>
                  </>
                )}
                {index === 0 && (
                  <>
                    {[...Array(5)].map((_, i) => <LeakingParticle key={`t1-${i}`} holeX="10%" holeY="20%" index={i} patchProgress={patchProgress} direction="left" />)}
                    {[...Array(4)].map((_, i) => <LeakingParticle key={`t2-${i}`} holeX="30%" holeY="35%" index={i} patchProgress={patchProgress} direction="left" />)}
                    {[...Array(5)].map((_, i) => <LeakingParticle key={`t3-${i}`} holeX="50%" holeY="50%" index={i} patchProgress={patchProgress} direction={i % 2 === 0 ? "left" : "right"} />)}
                    {[...Array(4)].map((_, i) => <LeakingParticle key={`t4-${i}`} holeX="70%" holeY="25%" index={i} patchProgress={patchProgress} direction="right" />)}
                    {[...Array(5)].map((_, i) => <LeakingParticle key={`t5-${i}`} holeX="85%" holeY="45%" index={i} patchProgress={patchProgress} direction="right" />)}
                    {[...Array(4)].map((_, i) => <LeakingParticle key={`t6-${i}`} holeX="20%" holeY="65%" index={i} patchProgress={patchProgress} direction="left" />)}
                  </>
                )}
                {index === 0 && (
                  <>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[10%] top-[20%]"><PixelPatch size={20} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[30%] top-[35%]"><PixelPatch size={18} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[50%] top-[50%]"><PixelPatch size={22} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[30%] top-[25%]"><PixelPatch size={19} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[15%] top-[45%]"><PixelPatch size={21} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[20%] top-[65%]"><PixelPatch size={17} delay={0} /></motion.div>
                  </>
                )}

                {/* MIDDLE OF FUNNEL - 4 holes */}
                {index === 1 && (
                  <>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[15%] top-[30%]"><PixelHole size={22} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[45%] top-[50%]"><PixelHole size={20} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[20%] top-[40%]"><PixelHole size={21} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[30%] top-[65%]"><PixelHole size={19} /></motion.div>
                  </>
                )}
                {index === 1 && (
                  <>
                    {[...Array(6)].map((_, i) => <LeakingParticle key={`m1-${i}`} holeX="15%" holeY="30%" index={i} patchProgress={patchProgress} direction="left" />)}
                    {[...Array(5)].map((_, i) => <LeakingParticle key={`m2-${i}`} holeX="45%" holeY="50%" index={i} patchProgress={patchProgress} direction={i % 2 === 0 ? "left" : "right"} />)}
                    {[...Array(6)].map((_, i) => <LeakingParticle key={`m3-${i}`} holeX="80%" holeY="40%" index={i} patchProgress={patchProgress} direction="right" />)}
                    {[...Array(5)].map((_, i) => <LeakingParticle key={`m4-${i}`} holeX="30%" holeY="65%" index={i} patchProgress={patchProgress} direction="left" />)}
                  </>
                )}
                {index === 1 && (
                  <>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[15%] top-[30%]"><PixelPatch size={22} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[45%] top-[50%]"><PixelPatch size={20} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[20%] top-[40%]"><PixelPatch size={21} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[30%] top-[65%]"><PixelPatch size={19} delay={0} /></motion.div>
                  </>
                )}

                {/* BOTTOM OF FUNNEL - 2 holes */}
                {index === 2 && (
                  <>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[25%] top-[40%]"><PixelHole size={24} /></motion.div>
                    <motion.div style={{ scale: holeScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[25%] top-[55%]"><PixelHole size={22} /></motion.div>
                  </>
                )}
                {index === 2 && (
                  <>
                    {[...Array(7)].map((_, i) => <LeakingParticle key={`b1-${i}`} holeX="25%" holeY="40%" index={i} patchProgress={patchProgress} direction="left" />)}
                    {[...Array(7)].map((_, i) => <LeakingParticle key={`b2-${i}`} holeX="75%" holeY="55%" index={i} patchProgress={patchProgress} direction="right" />)}
                  </>
                )}
                {index === 2 && (
                  <>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute left-[25%] top-[40%]"><PixelPatch size={24} delay={0} /></motion.div>
                    <motion.div style={{ scale: patchScale }} transition={{ duration: 0, ease: "linear" }} className="absolute right-[25%] top-[55%]"><PixelPatch size={22} delay={0} /></motion.div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
