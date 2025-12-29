import { render } from '@testing-library/react'
import { TabBars } from '../components/sidebar/tab-bars'
import { describe, it, expect, vi } from 'vitest'

// Mock dependencies
vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ theme: 'light' }),
}))

vi.mock('@/components/sidebar/menu-button', () => ({
  MenuButton: () => <button>Menu</button>,
}))

vi.mock('@/components/sidebar/search-icon-button', () => ({
  SearchIconButton: () => <button>Search</button>,
}))

vi.mock('@/components/sidebar/tab-bars-tab-item', () => ({
  TabBarsTabItem: ({ label }: { label: string }) => <button>{label}</button>,
}))

vi.mock('@/components/sidebar/user-avatar', () => ({
  UserAvatar: () => <div>Avatar</div>,
}))

describe('TabBars', () => {
  it('renders without crashing', () => {
    // This test ensures the file is valid and can be imported/rendered
    render(
      <TabBars
        activeItem="search"
        onItemClick={() => {}}
        onMenuClick={() => {}}
      />
    )
    expect(true).toBe(true)
  })
})
