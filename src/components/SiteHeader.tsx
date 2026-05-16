import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

/** Below this width the CSS breakpoint shows the hamburger; above it we still collapse when the row overflows. */
const DRAWER_BREAKPOINT_PX = 1600

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '/careers' },
  { label: 'Residential Plumbing', to: '/residential-plumbing' },
  { label: 'Disclaimer', to: '/disclaimer' },
] as const

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'is-active' : undefined
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const innerRef = useRef<HTMLDivElement>(null)
  /** Wide viewport but header row overflows — keep drawer until the window is noticeably wider (avoids measure flicker once the menu hides). */
  const overflowLatchRef = useRef<{ active: boolean; widthPx: number }>({
    active: false,
    widthPx: 0,
  })
  const [overflowDrawer, setOverflowDrawer] = useState(false)
  const [narrowMq, setNarrowMq] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia(`(max-width: ${DRAWER_BREAKPOINT_PX - 1}px)`).matches,
  )

  const sidebarLayout = narrowMq || overflowDrawer

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${DRAWER_BREAKPOINT_PX - 1}px)`)
    const u = () => setNarrowMq(mq.matches)
    u()
    mq.addEventListener('change', u)
    return () => mq.removeEventListener('change', u)
  }, [])

  useLayoutEffect(() => {
    const root = innerRef.current
    if (!root) return

    const mq = window.matchMedia(`(max-width: ${DRAWER_BREAKPOINT_PX - 1}px)`)

    const sync = () => {
      if (mq.matches) {
        overflowLatchRef.current = { active: false, widthPx: 0 }
        setOverflowDrawer(false)
        return
      }

      const latch = overflowLatchRef.current

      if (!latch.active) {
        const overflowing = root.scrollWidth > root.clientWidth + 2
        if (overflowing) {
          overflowLatchRef.current = { active: true, widthPx: window.innerWidth }
          setOverflowDrawer(true)
        } else {
          setOverflowDrawer(false)
        }
        return
      }

      const w = window.innerWidth
      if (w >= latch.widthPx + 140) {
        overflowLatchRef.current = { active: false, widthPx: 0 }
        setOverflowDrawer(false)
        requestAnimationFrame(sync)
      } else {
        setOverflowDrawer(true)
      }
    }

    sync()
    mq.addEventListener('change', sync)
    const ro = new ResizeObserver(sync)
    ro.observe(root)
    window.addEventListener('resize', sync)

    return () => {
      mq.removeEventListener('change', sync)
      ro.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [])

  useLayoutEffect(() => {
    if (!overflowDrawer) setOpen(false)
  }, [overflowDrawer])

  useEffect(() => {
    if (!open || !sidebarLayout) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open, sidebarLayout])

  useEffect(() => {
    if (!open || !sidebarLayout) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, sidebarLayout])

  const sidebarIconClose = (
    <svg viewBox="0 0 1000 1000" aria-hidden>
      <path
        fill="currentColor"
        d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"
      />
    </svg>
  )

  return (
    <header
      className={
        overflowDrawer ? 'site-header site-header--overflow-drawer' : 'site-header'
      }
    >
      <button
        type="button"
        className={`site-header__navBackdrop ${open ? 'is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
      <div className="site-header__inner" ref={innerRef}>
        <NavLink className="site-header__brand" to="/" end onClick={() => setOpen(false)}>
          <img
            className="site-header__logoImg"
            src="/images/ironclad-logo.png"
            alt="Iron Clad Plumbing"
            width={224}
            height={214}
          />
        </NavLink>
        <nav
          className={`site-header__navWrap ${open ? 'is-open' : ''}`}
          aria-label="Primary"
          inert={sidebarLayout && !open ? true : undefined}
        >
          <div className="site-header__sidebarHead">
            <span className="site-header__sidebarTitle">Menu</span>
            <button
              type="button"
              className="site-header__sidebarClose"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              {sidebarIconClose}
            </button>
          </div>
          <div className="site-header__nav">
            {NAV.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="site-header__barEnd">
          <a
            className="site-header__phone"
            href={PHONE_TEL}
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              />
            </svg>
            <span>{PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            className="site-header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              sidebarIconClose
            ) : (
              <svg viewBox="0 0 1000 1000" aria-hidden>
                <path
                  fill="currentColor"
                  d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
