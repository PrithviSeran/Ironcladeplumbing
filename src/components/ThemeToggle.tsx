import { useTheme } from '../context/ThemeContext'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={className ?? 'site-header__themeToggle'}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg className="site-header__themeIcon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 2.75v2.5M12 18.75v2.5M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M2.75 12h2.5M18.75 12h2.5M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77"
          />
        </svg>
      ) : (
        <svg className="site-header__themeIcon" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
