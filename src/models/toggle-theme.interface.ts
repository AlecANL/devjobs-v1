export interface ToggleTheme {
  theme: string
  getColorPreference: () => string
  setColorPreferenceInDocument: () => void
  syncColorPreference: (mqList: MediaQueryListEvent) => void
  toggleTheme: () => void
  setInitialTheme: () => void
}
