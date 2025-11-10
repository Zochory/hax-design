'use client'

import { PromptInputDynamicGrow } from "@/components/ui/prompt-input-dynamic-grow"

export function PromptInputDynamicGrowPreview() {
  return (
    <div className="w-full h-[600px] relative bg-background flex items-end justify-center pb-8">
      <PromptInputDynamicGrow
        placeholder="Ask Qlaus"
        onSubmit={(value) => console.log("Submitted:", value)}
        glowIntensity={0.4}
        expandOnFocus={true}
        showEffects={true}
      />
    </div>
  )
}

