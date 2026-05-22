export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'ironclad-theme'

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

export function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const stored = getStoredTheme()
  if (stored) return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore quota / private mode */
  }
}
