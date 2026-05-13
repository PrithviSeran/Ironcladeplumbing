import { Link } from 'react-router-dom'

import { PHONE_TEL } from '../lib/constants'

export function ValueSection() {
  return (
    <section className="ls-value-section">
      <div className="ls-value-wrap">
        <div className="ls-value-eyebrow">YOUR HOME. OUR PRIORITY.</div>

        <h2 className="ls-value-title">Trusted Plumbing Experts</h2>

        <p className="ls-value-subtitle">
          Connecting Aurora homeowners with fast, reliable plumbing repairs and lasting solutions —
          without the runaround.
        </p>

        <div className="ls-value-grid">
          <div className="ls-value-card">
            <div className="ls-value-icon-wrap">
              <svg className="ls-value-icon" viewBox="0 0 64 64" aria-hidden>
                <path d="M32 8L12 34h10v22h20V34h10L32 8z" />
              </svg>
            </div>
            <div className="ls-value-number">1</div>
            <h3>Responsive help</h3>
            <p>
              When a leak won&apos;t wait, you need answers fast — we prioritize connecting you with
              the right team for Aurora calls.
            </p>
            <div className="ls-value-divider" />
            <a className="ls-value-btn" href={PHONE_TEL}>
              Call now
            </a>
          </div>

          <div className="ls-value-card">
            <div className="ls-value-icon-wrap">
              <svg className="ls-value-icon" viewBox="0 0 64 64" aria-hidden>
                <circle cx="32" cy="28" r="14" />
                <path d="M16 56c4-14 44-14 48 0" />
              </svg>
            </div>
            <div className="ls-value-number">2</div>
            <h3>Clear communication</h3>
            <p>
              Straightforward, fair pricing discussions and professional workmanship — minus the pushy
              sales pitch.
            </p>
            <div className="ls-value-divider" />
            <Link className="ls-value-btn" to="/contact">
              Send a message
            </Link>
          </div>

          <div className="ls-value-card">
            <div className="ls-value-icon-wrap">
              <svg className="ls-value-icon" viewBox="0 0 64 64" aria-hidden>
                <rect x="10" y="18" width="44" height="36" rx="4" />
                <path d="M22 54v8M42 54v8M18 42h28" />
              </svg>
            </div>
            <div className="ls-value-number">3</div>
            <h3>Tidy finishes</h3>
            <p>
              Respect for your home — work areas kept as clean as possible from arrival to completion.
            </p>
            <div className="ls-value-divider" />
            <Link className="ls-value-btn" to="/#testimonials">
              Read reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
