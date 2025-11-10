'use client';

import { SidebarFooter } from "@/components/sidebar-2/sidebar-footer";
import { SidebarHeader } from "@/components/sidebar-2/sidebar-header";
import { SidebarNav } from "@/components/sidebar-2/sidebar-nav";
import { NavigationItemId } from "@/lib/sidebar-2/navigation";

interface SidebarContentProps {
  activeItem: NavigationItemId;
  onItemClick: (id: NavigationItemId) => void;
  onMenuClick: () => void;
}

export function SidebarContent({ activeItem, onItemClick, onMenuClick }: SidebarContentProps) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-between pl-0 pr-px py-0 relative size-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <SidebarHeader onMenuClick={onMenuClick} isCollapsed={false} />
        <SidebarNav activeItem={activeItem} onItemClick={onItemClick} isCollapsed={false} />
      </div>
      <div className="w-full">
        <SidebarFooter activeItem={activeItem} onItemClick={onItemClick} isCollapsed={false} />
      </div>
    </div>
  );
}
