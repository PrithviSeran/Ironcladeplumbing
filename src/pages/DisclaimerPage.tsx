export function DisclaimerPage() {
  return (
    <section className="disclaimer-page" style={{ padding: '56px 24px 88px', maxWidth: 800, margin: '0 auto' }}>
      <h1
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
          fontWeight: 800,
          color: 'var(--lk-text)',
          margin: '0 0 24px',
          letterSpacing: '-0.02em',
        }}
      >
        Disclaimer
      </h1>
      <div
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: 'var(--lk-muted)',
        }}
      >
        <p>
          Information on this marketing site summarizes services offered through Ironclad Plumbing and
          is provided for convenience only. Scheduling, pricing, licences, warranties, municipal
          permits, emergency availability, and scope of labour are finalized directly with Ironclad
          Plumbing representatives or dispatched technicians—not inferred from webpage copy alone.
        </p>
        <p>
          Nothing on this website constitutes plumbing, legal, or insurance advice. You should confirm
          all details—including estimates, timelines, and compliance with local codes—with the
          professional handling your job before authorizing work.
        </p>
        <p>
          References to neighbourhoods, testimonials, ratings, availability, response times, and
          service categories are illustrative and may change without notice. Ironclad Plumbing does not
          guarantee specific outcomes for any given visit.
        </p>
        <p style={{ marginBottom: 0 }}>
          By using this site or submitting a contact form, you agree that communications may be stored
          and used to respond to your request in line with applicable privacy laws.
        </p>
      </div>
    </section>
  )
}
