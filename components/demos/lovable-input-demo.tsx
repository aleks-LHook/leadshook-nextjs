"use client";

import { LovableInput } from "@/components/ui/unused/lovable-input";

export function LovableInputDemo() {
  const handleSubmit = (value: string) => {
    console.log("Submitted:", value);
    // Handle submission logic here
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <LovableInput
        placeholder="Ask Lovable to create a design..."
        onSubmit={handleSubmit}
      />
    </div>
  );
}
