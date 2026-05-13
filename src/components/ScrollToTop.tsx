import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to top on path changes; scroll to `#id` when the location includes a hash. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      requestAnimationFrame(() => {
        requestAnimationFrame(run)
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
