import { PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

/** Hero photography */
const HERO_IMAGE = '/images/photo-1676210134188-4c05dd172f89.avif'

const CHECK_PATH = 'M9 16.2 4.8 12l1.4-1.4 2.8 2.8 6.8-6.8 1.4 1.4z'

export function HeroSection() {
  return (
    <section className="hero hero--light" id="top" aria-labelledby="hero-heading">
      <div className="hero__bgMotion" aria-hidden={true} />
      <div className="hero__shell">
        <div className="hero__top">
          <div className="hero__grid">
            <div className="hero__copy">
              <div className="hero__copyText">
                <h1 id="hero-heading" className="hero__display">
                  <span className="hero__display-line">Licensed</span>
                  <span className="hero__display-line hero__display-line--lead">Plumber</span>
                  <span className="hero__display-line">in Aurora</span>
                </h1>

                <div className="hero__rule" aria-hidden />

                <p className="hero__tagline">
                  Done right the first time – Open 6:00 AM – 9:00 PM
                </p>
              </div>

              <div className="hero__ctaRow">
                <div className="hero__loc">
                  <svg className="hero__loc-icon" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  <span>Aurora | Newmarket</span>
                </div>

                <a className="hero__cta" href={PHONE_TEL}>
                  <span className="hero__cta-iconWrap" aria-hidden>
                    <svg className="hero__cta-icon" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      />
                    </svg>
                  </span>
                  <span className="hero__cta-copy">
                    <span className="hero__cta-promo">Call today to get 10% off!</span>
                    <span className="hero__cta-phone">{PHONE_DISPLAY}</span>
                  </span>
                </a>
              </div>

              <div
                className="hero__features"
                aria-label="Why homeowners choose Iron Clad Plumbing"
              >
                <div className="hero__feature">
                  <span className="hero__feat-icon" aria-hidden>
                    <svg viewBox="0 0 24 24">
                      <path d={CHECK_PATH} />
                    </svg>
                  </span>
                  <div className="hero__feature-copy">
                    <p className="hero__feat-title">Warranties available</p>
                    <p className="hero__feat-desc">Quality work you can count on.</p>
                  </div>
                </div>
                <div className="hero__feature">
                  <span className="hero__feat-icon" aria-hidden>
                    <svg viewBox="0 0 24 24">
                      <path d={CHECK_PATH} />
                    </svg>
                  </span>
                  <div className="hero__feature-copy">
                    <p className="hero__feat-title">35+ years of experience</p>
                    <p className="hero__feat-desc">Decades of trusted service.</p>
                  </div>
                </div>
                <div className="hero__feature">
                  <span className="hero__feat-icon" aria-hidden>
                    <svg viewBox="0 0 24 24">
                      <path d={CHECK_PATH} />
                    </svg>
                  </span>
                  <div className="hero__feature-copy">
                    <p className="hero__feat-title">Emergency services</p>
                    <p className="hero__feat-desc">
                      We&apos;re here when you need us most.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero__visual">
              <img
                className="hero__visualImg"
                src={HERO_IMAGE}
                alt="Iron Clad Plumbing — professional plumbing service"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
