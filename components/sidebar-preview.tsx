'use client'

import { Sidebar } from "@/components/sidebar/sidebar"

export function SidebarPreview() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
      <div className="absolute inset-0 flex bg-background">
        <div className="h-full">
          <Sidebar />
        </div>
        <div className="flex-1 bg-muted/20" />
      </div>
    </div>
  )
}

