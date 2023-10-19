import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type ToggleTheme } from '@models/toggle-theme.interface.ts'

export const useToggleThemeStore = create<ToggleTheme>()(devtools(persist((set, get) => ({
  theme: '',
  getColorPreference: () => {
    const { theme } = get()
    const preferenceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return theme || preferenceTheme
  },
  setInitialTheme: () => {
    const { getColorPreference } = get()
    const theme = getColorPreference()
    set({ theme }, false, 'SET_INITIAL_THEME')
  },
  setColorPreferenceInDocument: () => {
    const { theme } = get()

    if (!document.firstElementChild) return
    document.firstElementChild.setAttribute('data-theme', theme)
    document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme)
  },
  syncColorPreference: (mqList) => {
    const { matches } = mqList
    const newTheme = matches ? 'dark' : 'light'
    set({ theme: newTheme }, false, 'SYNC_COLOR_PREFERENCE')
  },
  toggleTheme: () => {
    const { theme } = get()
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    set({ theme: newTheme }, false, 'TOGGLE_THEME')
  }

}), {
  name: 'toggle-theme-store'
})))
