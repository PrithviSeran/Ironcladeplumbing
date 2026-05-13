export function AboutSection() {
  return (
    <section className="lk-about-section">
      <div className="lk-about-wrap">
        <div className="lk-about-content">
          <div className="lk-about-kicker">About Ironclad Plumbing</div>
          <h2 className="lk-about-title">Committed to Fast Plumbing Access in Aurora</h2>
          <div className="lk-about-text">
            <p>
              Ironclad Plumbing concentrates on pairing residential clients with dependable pros for{' '}
              <strong>
                emergency leaks, clogged drains, water heaters, renovations, toilets, sump work
              </strong>{' '}
              and broader fixture installs across Aurora plus nearby York Region communities.
            </p>
            <p>
              Inspired by homeowner experiences like Theresa&apos;s, we highlight{' '}
              <strong>show-up-on-time service, meticulous clean-up, upfront pricing,</strong>
              {' '}and approachable technicians—because plumbing stress is already stressful enough.
            </p>
            <p>
              We&apos;re obsessed with simplifying the pathway from “something&apos;s dripping” to
              someone qualified being on-site and ready—keeping your family comfortable through every
              season.
            </p>
          </div>
          <div className="lk-about-badges">
            <div className="lk-about-badge">
              <span>★</span> 5-Star Google Signals
            </div>
            <div className="lk-about-badge">
              <span>✓</span> 24/7 Emergency Messaging
            </div>
            <div className="lk-about-badge">
              <span>✓</span> Aurora &amp; York Region Roots
            </div>
          </div>
        </div>
        <div className="lk-about-image">
          <img
            src="/images/ironclad-service-drains.webp"
            alt="A skilled plumber inspecting bathroom plumbing fixtures"
            loading="lazy"
            width={1024}
            height={737}
          />
        </div>
      </div>
    </section>
  )
}
