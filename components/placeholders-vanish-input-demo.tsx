"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Ask LeadsHook to build a landing page for solar services",
    "Ask LeadsHook to build a weight-loss quiz",
    "Ask LeadsHook add Google Analytics",
    "Ask Leadshook to enable phone verification",
    "Ask LeadsHook to create a multi-step form",
    "Ask LeadsHook to design an A/B test experiment",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
