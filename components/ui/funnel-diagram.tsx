"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface FunnelDiagramProps {
  className?: string;
  activeStage?: "top" | "middle" | "bottom" | null;
  isTrackingActive?: boolean;
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

// Pixel patch component
const PixelPatch = ({ className, size = 32 }: { className?: string; size?: number }) => {
  const pixels = useMemo(() => {
    // Create a checkmark pattern with pixels
    const pattern = [
      [0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1, 1, 0],
      [1, 0, 0, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    return pattern;
  }, []);

  const pixelSize = size / 7;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      {/* Green background circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-green-500"
           style={{ boxShadow: "0 0 20px rgba(52,211,153,0.6)" }} />
      {/* Checkmark pixels */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {pixels.map((row, y) =>
            row.map((pixel, x) =>
              pixel ? (
                <div
                  key={`${x}-${y}`}
                  className="absolute bg-white"
                  style={{
                    left: (x - 1) * pixelSize,
                    top: (y - 1) * pixelSize,
                    width: pixelSize,
                    height: pixelSize,
                  }}
                />
              ) : null
            )
          )}
        </div>
      </div>
    </div>
  );
};

export function FunnelDiagram({ className, activeStage = null, isTrackingActive = false }: FunnelDiagramProps) {
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
                clipPath:
                  index === 2
                    ? "polygon(15% 0%, 85% 0%, 85% 100%, 15% 100%)"
                    : "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
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

                {/* Leak holes - only visible when tracking is NOT active */}
                {!isTrackingActive && (
                  <>
                    {/* Hole 1 - Pixel style */}
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: stage.delay + 0.8, duration: 0.3, type: "spring" }}
                      className="absolute left-[15%] top-[30%]"
                    >
                      <PixelHole size={28} />
                    </motion.div>

                    {/* Hole 2 - Pixel style */}
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: stage.delay + 1, duration: 0.3, type: "spring" }}
                      className="absolute right-[20%] top-[60%]"
                    >
                      <PixelHole size={24} />
                    </motion.div>

                    {/* Hole 3 - Pixel style (smaller) */}
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: stage.delay + 0.9, duration: 0.3, type: "spring" }}
                      className="absolute left-[60%] top-[45%]"
                    >
                      <PixelHole size={20} />
                    </motion.div>

                    {/* Dripping effect - pixelated drops */}
                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: stage.delay + 1.2
                      }}
                      className="absolute left-[17%] top-[35%]"
                      style={{ imageRendering: "pixelated" }}
                    >
                      <div className="w-2 h-3 bg-red-500/50" style={{
                        boxShadow: "0 0 4px rgba(239,68,68,0.5)",
                        imageRendering: "pixelated"
                      }} />
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: stage.delay + 1.5
                      }}
                      className="absolute right-[22%] top-[65%]"
                      style={{ imageRendering: "pixelated" }}
                    >
                      <div className="w-2 h-3 bg-red-500/50" style={{
                        boxShadow: "0 0 4px rgba(239,68,68,0.5)",
                        imageRendering: "pixelated"
                      }} />
                    </motion.div>
                  </>
                )}

                {/* Patched/filled overlay - visible when tracking IS active */}
                {isTrackingActive && (
                  <>
                    {/* Patch 1 - Pixel style */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                      className="absolute left-[15%] top-[28%]"
                    >
                      <PixelPatch size={36} />
                    </motion.div>

                    {/* Patch 2 - Pixel style */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
                      className="absolute right-[20%] top-[58%]"
                    >
                      <PixelPatch size={32} />
                    </motion.div>

                    {/* Patch 3 - Pixel style */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                      className="absolute left-[60%] top-[43%]"
                    >
                      <PixelPatch size={28} />
                    </motion.div>
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
