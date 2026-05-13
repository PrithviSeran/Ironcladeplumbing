import { Link } from 'react-router-dom'

import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

export function CareersPage() {
  return (
    <section className="careers-page" style={{ padding: '56px 24px 80px', maxWidth: 720, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
          fontWeight: 800,
          color: 'var(--lk-text)',
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
        }}
      >
        Careers
      </h1>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--lk-muted)', margin: '0 0 24px' }}>
        Ironclad Plumbing connects homeowners with reliable plumbing professionals. If you&apos;re
        interested in working with our team—whether in the field or behind the scenes—reach out with
        your experience and availability.
      </p>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--lk-muted)', margin: '0 0 28px' }}>
        Send a brief note and your resume (if applicable) to{' '}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Careers%20inquiry`} style={{ color: 'var(--lk-orange)', fontWeight: 700 }}>
          {CONTACT_EMAIL}
        </a>
        , or call{' '}
        <a href={PHONE_TEL} style={{ color: 'var(--lk-orange)', fontWeight: 700 }}>
          {PHONE_DISPLAY}
        </a>
        .
      </p>
      <Link
        to="/contact"
        className="careers-page__cta"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px 24px',
          background: 'var(--lk-orange)',
          color: '#fff',
          fontWeight: 700,
          textDecoration: 'none',
          borderRadius: 10,
        }}
      >
        Use the contact form
      </Link>
    </section>
  )
}
