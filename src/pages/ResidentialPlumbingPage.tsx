import { ServicesSection } from '../components/ServicesSection'

export function ResidentialPlumbingPage() {
  return (
    <>
      <section className="page-intro" style={{ padding: '48px 24px 20px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--lk-text)',
            margin: '0 0 12px',
            letterSpacing: '-0.02em',
          }}
        >
          Residential Plumbing
        </h1>
        <p
          style={{
            maxWidth: 640,
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: 'var(--lk-muted)',
          }}
        >
          From emergency leaks to everyday clogs, renovations, and fixture installs—we help Aurora-area
          homeowners get problems solved quickly.
        </p>
      </section>
      <ServicesSection />
    </>
  )
}
