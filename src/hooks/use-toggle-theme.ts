import { useToggleThemeStore } from '@store/toggle-theme-store.ts'
import { useEffect } from 'react'

export function useToggleTheme () {
  const {
    setColorPreferenceInDocument,
    syncColorPreference,
    theme,
    toggleTheme,
    setInitialTheme
  } = useToggleThemeStore()

  useEffect(() => {
    setInitialTheme()
  }, [])

  useEffect(() => {
    setColorPreferenceInDocument()
  }, [theme])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncColorPreference)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', syncColorPreference)
    }
  }, [theme])

  const isDarkTheme = theme === 'dark'

  return {
    toggleTheme,
    isDarkTheme
  }
}
