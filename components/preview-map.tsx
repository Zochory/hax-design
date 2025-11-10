'use client'

import { SidebarPreview } from "@/components/sidebar-preview"
import { TabBarsPreview } from "@/components/tab-bars-preview"
import { PromptInputDynamicGrowPreview } from "@/components/prompt-input-dynamic-grow-preview"
import { ReactNode } from "react"

type PreviewComponent = () => ReactNode

const previewMap: Record<string, PreviewComponent> = {
  "@sidebar": SidebarPreview,
  "@tab-bars": TabBarsPreview,
  "@prompt-input-dynamic-grow": PromptInputDynamicGrowPreview,
}

export function getPreviewComponent(name: string): PreviewComponent | null {
  return previewMap[name] || null
}

export function hasPreview(name: string): boolean {
  return name in previewMap
}

