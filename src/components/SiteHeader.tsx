import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

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

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-header__logo" to="/" end onClick={() => setOpen(false)}>
          <img
            src="/images/ironclad-logo.png"
            alt="Ironclad Plumbing"
            width={224}
            height={214}
          />
        </NavLink>
        <button
          type="button"
          className="site-header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 1000 1000" aria-hidden>
              <path
                fill="currentColor"
                d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 1000 1000" aria-hidden>
              <path
                fill="currentColor"
                d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"
              />
            </svg>
          )}
        </button>
        <nav
          className={`site-header__navWrap ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
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
          <div className="site-header__cta">
            <a
              className="site-header__phone"
              href={PHONE_TEL}
              aria-label={`Call ${PHONE_DISPLAY}`}
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <span>
                <strong>{PHONE_DISPLAY}</strong> FOR PLUMBING INQUIRIES
              </span>
            </a>
            <a className="site-header__estimate" href={PHONE_TEL}>
              CALL NOW
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
