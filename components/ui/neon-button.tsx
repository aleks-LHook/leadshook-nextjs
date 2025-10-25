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
  const variantStyles = {
    cyan: "",
    purple: "hue-rotate-[270deg]",
    green: "hue-rotate-[110deg]",
  };

  return (
    <a
      href={href}
      className={cn(
        "relative inline-block px-8 py-6 text-[#03e9f4] no-underline uppercase transition-all duration-500 tracking-[4px] overflow-hidden",
        "hover:bg-[#03e9f4] hover:text-[#050801] hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4]",
        "[&:hover]:[-webkit-box-reflect:below_1px_linear-gradient(transparent,#0005)]",
        variantStyles[variant],
        className
      )}
    >
      {/* Top border animation */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-[#03e9f4] animate-[border-top_4s_linear_infinite]" />

      {/* Right border animation */}
      <span className="absolute -top-full right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-[#03e9f4] animate-[border-right_4s_linear_infinite] [animation-delay:1s]" />

      {/* Bottom border animation */}
      <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-[#03e9f4] animate-[border-bottom_4s_linear_infinite] [animation-delay:2s]" />

      {/* Left border animation */}
      <span className="absolute -bottom-full left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-[#03e9f4] animate-[border-left_4s_linear_infinite] [animation-delay:3s]" />

      {children}
    </a>
  );
};
