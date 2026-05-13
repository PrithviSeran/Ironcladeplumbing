import type { ReactNode } from 'react'

import { PHONE_TEL } from '../lib/constants'

type ServiceCard = {
  title: string
  subtitle?: string
  body: ReactNode[]
  image: string
  cta?: { href: string; label: string }
}

const SERVICES: ServiceCard[] = [
  {
    title: 'Leaks, Pipes & Emergencies',
    subtitle: 'If you need help with:',
    body: [
      <>Fast 24/7 repair for any leak, burst pipe, or flood — roof, sink, wall, or basement.</>,
      <>Urgent troubleshooting when water won&apos;t shut off or damage is spreading.</>,
      <>
        Reliable support so your home stays <strong>protected</strong>.
      </>,
    ],
    image: '/images/ironclad-service-leaks.jpg',
    cta: { href: PHONE_TEL, label: 'CALL NOW' },
  },
  {
    title: 'Drains, Toilets & Water Heaters',
    subtitle: 'If you need help with:',
    body: [
      <>Clear every clog and fix or replace heaters, toilets, and drains.</>,
      <>
        Comfortable, dependable hot water for <strong>baths, kitchens, and laundry</strong>.
      </>,
      <>Straightforward explanations and options before work begins.</>,
    ],
    image: '/images/ironclad-service-drains.webp',
    cta: { href: PHONE_TEL, label: 'CALL NOW' },
  },
  {
    title: 'Installations & Renovations',
    subtitle: "If you're upgrading:",
    body: [
      <>
        Fixtures, vanities, sump lines, and other plumbing installs done with care during
        renos.
      </>,
      <>Careful workmanship that fits your timeline and finishes.</>,
      <>
        Guidance on products and layouts that <strong>work for your household</strong>.
      </>,
    ],
    image: '/images/ironclad-service-install.jpg',
    cta: { href: PHONE_TEL, label: 'CALL NOW' },
  },
]

export function ServicesSection() {
  return (
    <section className="services-wrap" id="services">
      <div className="services-header">
        <div className="services-main-title">Our Services</div>
        <div className="services-description">
          Have a problem? We can connect you with a plumber to solve it ASAP — from emergency leaks
          to everyday drains, toilets, heaters, installs, and more.
        </div>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <article key={s.title} className="service-card">
            <img src={s.image} alt="" loading="lazy" width={1024} height={768} />
            <div className="service-content">
              <div className="service-copy">
                <div className="service-title">{s.title}</div>
                {s.subtitle ? <div className="service-subtitle">{s.subtitle}</div> : null}
                <div className="service-list">
                  {s.body.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
              {s.cta ? (
                <a className="service-cta" href={s.cta.href}>
                  {s.cta.label}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
