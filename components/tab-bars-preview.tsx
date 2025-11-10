'use client'

import { useState } from "react"
import { TabBars } from "@/components/sidebar/tab-bars"
import { DEFAULT_ACTIVE_ITEM } from "@/lib/sidebar/navigation"
import type { NavigationItemId } from "@/types/navigation"

export function TabBarsPreview() {
  const [activeItem, setActiveItem] = useState<NavigationItemId>(DEFAULT_ACTIVE_ITEM)

  const handleMenuClick = () => {
    // Menu button handler for preview
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '600px' }}>
      <div className="absolute inset-0 flex bg-background">
        <div className="h-full w-full flex items-center justify-center p-4">
          <TabBars 
            activeItem={activeItem} 
            onItemClick={setActiveItem}
            onMenuClick={handleMenuClick}
          />
        </div>
      </div>
    </div>
  )
}

