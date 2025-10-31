"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LovableInputProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function LovableInput({
  placeholder = "Ask Lovable to create a design...",
  onSubmit,
  className,
}: LovableInputProps) {
  const [value, setValue] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit?.(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-3xl mx-auto bg-[#faf9f6] dark:bg-zinc-900 rounded-2xl border border-neutral-200 dark:border-zinc-800 overflow-hidden transition-all duration-200",
        "focus-within:border-neutral-300 dark:focus-within:border-zinc-700",
        className
      )}
    >
      {/* Text Area */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-5 pt-4 pb-3 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 resize-none focus:outline-none text-base min-h-[60px]"
        rows={1}
        style={{
          minHeight: "60px",
          maxHeight: "200px",
          overflowY: "auto",
        }}
      />

      {/* Bottom Toolbar */}
      <div className="flex items-center justify-between px-3 pb-3 pt-1">
        {/* Left side buttons */}
        <div className="flex items-center gap-2">
          {/* Attach Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <span>Attach</span>
          </motion.button>

          {/* Public Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setIsPublic(!isPublic)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 text-sm transition-colors rounded-md",
              isPublic
                ? "text-neutral-900 dark:text-neutral-100 bg-neutral-200 dark:bg-zinc-800"
                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span>Public</span>
          </motion.button>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Voice Input Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-800"
            aria-label="Voice input"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </motion.button>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleSubmit}
            disabled={!value.trim()}
            className={cn(
              "p-2 rounded-full transition-all duration-200",
              value.trim()
                ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200"
                : "bg-neutral-200 dark:bg-zinc-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
            )}
            aria-label="Submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
