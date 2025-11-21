"use client";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "cyan" | "purple" | "green";
}

export const NeonButton = ({
  href,
  children,
  className,
  variant = "cyan"
}: NeonButtonProps) => {
  const variantConfig = {
    cyan: {
      light: {
        text: "text-[#03e9f4]",
        border: "[#03e9f4]",
        hoverBg: "hover:bg-[#03e9f4]",
        hoverText: "hover:text-white",
        shadow: "hover:shadow-[0_0_10px_rgba(3,233,244,0.5),0_0_20px_rgba(3,233,244,0.3),0_0_30px_rgba(3,233,244,0.2)]"
      },
      dark: {
        text: "dark:text-[#03e9f4]",
        hoverBg: "dark:hover:bg-[#03e9f4]",
        hoverText: "dark:hover:text-[#050801]",
        shadow: "dark:hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4]"
      },
      filter: ""
    },
    purple: {
      light: {
        text: "text-[#a855f7]",
        border: "[#a855f7]",
        hoverBg: "hover:bg-[#a855f7]",
        hoverText: "hover:text-white",
        shadow: "hover:shadow-[0_0_10px_rgba(168,85,247,0.5),0_0_20px_rgba(168,85,247,0.3),0_0_30px_rgba(168,85,247,0.2)]"
      },
      dark: {
        text: "dark:text-[#a855f7]",
        hoverBg: "dark:hover:bg-[#a855f7]",
        hoverText: "dark:hover:text-white",
        shadow: "dark:hover:shadow-[0_0_5px_#a855f7,0_0_25px_#a855f7,0_0_50px_#a855f7,0_0_200px_#a855f7]"
      },
      filter: ""
    },
    green: {
      light: {
        text: "text-[#10b981]",
        border: "[#10b981]",
        hoverBg: "hover:bg-[#10b981]",
        hoverText: "hover:text-white",
        shadow: "hover:shadow-[0_0_10px_rgba(16,185,129,0.5),0_0_20px_rgba(16,185,129,0.3),0_0_30px_rgba(16,185,129,0.2)]"
      },
      dark: {
        text: "dark:text-[#10b981]",
        hoverBg: "dark:hover:bg-[#10b981]",
        hoverText: "dark:hover:text-white",
        shadow: "dark:hover:shadow-[0_0_5px_#10b981,0_0_25px_#10b981,0_0_50px_#10b981,0_0_200px_#10b981]"
      },
      filter: ""
    }
  };

  const config = variantConfig[variant];
  const borderColor = variant === "cyan" ? "#03e9f4" : variant === "purple" ? "#a855f7" : "#10b981";

  return (
    <a
      href={href}
      className={cn(
        "relative inline-block px-8 py-6 no-underline uppercase transition-all duration-500 tracking-[4px] overflow-hidden font-medium text-base",
        config.light.text,
        config.dark.text,
        config.light.hoverBg,
        config.dark.hoverBg,
        config.light.hoverText,
        config.dark.hoverText,
        config.light.shadow,
        config.dark.shadow,
        "[&:hover]:[-webkit-box-reflect:below_1px_linear-gradient(transparent,#0005)]",
        config.filter,
        className
      )}
      style={{
        border: `2px solid ${borderColor}33`,
      }}
    >
      {/* Top border animation - light theme optimized */}
      <span
        className="absolute top-0 left-0 w-full h-[2px] animate-[border-top_4s_linear_infinite]"
        style={{
          background: `linear-gradient(90deg, transparent, ${borderColor})`
        }}
      />

      {/* Right border animation */}
      <span
        className="absolute -top-full right-0 w-[2px] h-full animate-[border-right_4s_linear_infinite] [animation-delay:1s]"
        style={{
          background: `linear-gradient(180deg, transparent, ${borderColor})`
        }}
      />

      {/* Bottom border animation */}
      <span
        className="absolute bottom-0 right-0 w-full h-[2px] animate-[border-bottom_4s_linear_infinite] [animation-delay:2s]"
        style={{
          background: `linear-gradient(270deg, transparent, ${borderColor})`
        }}
      />

      {/* Left border animation */}
      <span
        className="absolute -bottom-full left-0 w-[2px] h-full animate-[border-left_4s_linear_infinite] [animation-delay:3s]"
        style={{
          background: `linear-gradient(0deg, transparent, ${borderColor})`
        }}
      />

      {children}
    </a>
  );
};
