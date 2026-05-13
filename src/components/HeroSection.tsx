import { Link } from 'react-router-dom'

import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

/** Plumbing work photo — not brand logo artwork */
const HERO_BG = '/images/ironclad-service-leaks.jpg'

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(31,19,70,0.35) 0%, rgba(31,19,70,0.72) 55%, rgba(20,13,54,0.85) 100%), url(${HERO_BG})`,
        }}
      />
      <div className="hero__content">
        <div className="ls-hero-eyebrow">
          <strong>{PHONE_DISPLAY}</strong> FOR PLUMBING INQUIRIES
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line">Fast Access to Trusted Plumbing Help</span>
          <span className="hero__title-highlight">in Aurora.</span>
        </h1>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href={PHONE_TEL}>
            <span className="hero__btn-label">CALL NOW</span>
            <span className="hero__btn-phone">{PHONE_DISPLAY}</span>
          </a>
          <div className="hero__actions-row" aria-label="Highlights">
            <Link className="hero__btn hero__btn--ghost" to="/residential-plumbing">
              Fast, reliable repairs and installations for your home
            </Link>
          </div>
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            Rated 5.0 Stars ON GOOGLE — ★★★★★
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            Trusted Plumbing Experts
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z" />
              </svg>
            </span>
            Aurora &amp; York Region homeowners
          </div>
        </div>
      </div>
    </section>
  )
}
