'use client'

import { SidebarPreview } from "@/components/sidebar-preview"
import { Sidebar2Preview } from "@/components/sidebar-2-preview"
import { TabBarsPreview } from "@/components/tab-bars-preview"
import { ReactNode } from "react"

type PreviewComponent = () => ReactNode

const previewMap: Record<string, PreviewComponent> = {
  "@sidebar": SidebarPreview,
  "@sidebar-2": Sidebar2Preview,
  "@tab-bars": TabBarsPreview,
}

export function getPreviewComponent(name: string): PreviewComponent | null {
  return previewMap[name] || null
}

export function hasPreview(name: string): boolean {
  return name in previewMap
}

