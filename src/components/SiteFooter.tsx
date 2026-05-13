import { Link } from 'react-router-dom'

import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <img
            src="/images/ironclad-logo.png"
            alt="Ironclad Plumbing"
            width={224}
            height={214}
            style={{ height: 56, width: 'auto', marginBottom: 16, display: 'block' }}
          />
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: 'var(--lk-muted)' }}>
            Ironclad Plumbing — residential plumbing introductions for Aurora homeowners and neighbouring
            York Region communities.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <Link to="/contact">Send a message</Link>
        </div>
        <div>
          <h3>Disclaimer</h3>
          <span style={{ fontSize: 14, lineHeight: 1.7, display: 'block', color: 'var(--lk-muted)' }}>
            Information on this marketing site summarizes services offered through Ironclad Plumbing and
            is provided for convenience only. Scheduling, pricing, licences, warranties, municipal
            permits, emergency availability, and scope of labour are finalized directly with Ironclad
            Plumbing reps or dispatched technicians—not inferred from webpage copy alone.
          </span>
          <Link
            to="/disclaimer"
            style={{
              display: 'inline-block',
              marginTop: 12,
              fontSize: 14,
              fontWeight: 700,
              color: 'var(--lk-orange)',
              textDecoration: 'none',
            }}
          >
            Read full disclaimer
          </Link>
          <span
            style={{ fontSize: 15, lineHeight: 1.7, display: 'block', marginTop: 12 }}
            aria-hidden
          >
            Aurora • Newmarket • Richmond Hill • East Gwillimbury • surrounding York Region pockets
          </span>
        </div>
      </div>
      <div className="site-footer__bottom">
        © {new Date().getFullYear()} Ironclad Plumbing •{' '}
        <a href="https://ironcladplumbing.site" style={{ display: 'inline', color: 'inherit' }}>
          ironcladplumbing.site
        </a>
      </div>
    </footer>
  )
}
