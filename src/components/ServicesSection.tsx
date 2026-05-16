import type { ReactNode } from 'react'

import { PHONE_TEL } from '../lib/constants'

function IconDroplet(props: { className?: string }) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5c3.2 3.5 6 6.8 6 10.5a6 6 0 1 1-12 0c0-3.7 2.8-7 6-10.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconEmergency() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.25" opacity="0.35" />
      <path
        d="M24 8v6m0 20v6M8 24h6m20 0h6M13 13l4 4m14 14l4 4m0-22l-4 4M17 31l-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="5" fill="currentColor" />
    </svg>
  )
}

function IconDrain() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M10 28h28v8a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4v-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 28V18c0-5.5 4.5-10 10-10s10 4.5 10 10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 20h4M21 24h6M22 28h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconLeakPin() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 40c-7-7.5-11-12.5-11-18a11 11 0 0 1 22 0c0 5.5-4 10.5-11 18z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 13c2.2 2.4 4 4.6 4 7a4 4 0 1 1-8 0c0-2.4 1.8-4.6 4-7z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWaterHeater() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="12" y="10" width="24" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18h12M18 26h12M18 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function IconBurstPipe() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 24h10l4-8 4 16 4-8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 30l4 6m0-6l-4 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function IconToilet() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <ellipse cx="24" cy="34" rx="14" ry="8" stroke="currentColor" strokeWidth="2" />
      <path d="M14 34V22h20v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 22V14h12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconFaucet() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M24 8v10m-6 4h12v6a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6v-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 22h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 34v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconTools() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M14 34l10-10m4 4l10-10M18 14l8 8m4-4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="34" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="14" y="10" width="20" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 16h12M18 22h10M18 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 33l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconSumpPump() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="14" y="16" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M24 10v6M18 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconMainLine() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 32h12v-16l8 8 8-8v16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconValve() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="16" y="20" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14v6m0 12v8M12 26h4m16 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconWaterproof() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M24 8l14 8v12c0 9-6 16-14 20-8-4-14-11-14-20V16l14-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 24l4 4 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconTrenchless() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 28h32M8 20h32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

type MainService = {
  title: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
  ctaLabel: string
  Icon: () => ReactNode
}

const MAIN_SERVICES: MainService[] = [
  {
    title: 'Emergency Plumbing Repairs',
    description: 'Fast repairs for leaks and burst pipes.',
    bullets: [
      '24/7 emergency response',
      'Prevent costly water damage',
      'Quick repairs for burst pipes & leaks',
    ],
    image: '/images/ironclad-service-leaks.jpg',
    imageAlt: 'Plumber repairing pipes under a sink',
    ctaLabel: 'Get Emergency Help',
    Icon: IconEmergency,
  },
  {
    title: 'Drain Cleaning & Clogged Drain Repair',
    description: 'Restore proper flow and prevent clogs.',
    bullets: ['Slow or backed-up drains', 'Recurring kitchen & bathroom clogs', 'Prevent serious pipe blockages'],
    image: '/images/ironclad-service-drains.webp',
    imageAlt: 'High-pressure drain cleaning',
    ctaLabel: 'Clear Your Drain Today',
    Icon: IconDrain,
  },
  {
    title: 'Leak Detection & Pipe Repair',
    description: 'Protect your home from hidden leaks.',
    bullets: ['Hidden leaks behind walls', 'Water stains & rising bills', 'Prevent expensive damage'],
    image: '/images/ironclad-service-install.jpg',
    imageAlt: 'Copper piping inside a wall frame',
    ctaLabel: 'Claim 10% Off Now',
    Icon: IconLeakPin,
  },
  {
    title: 'Water Heater Repair & Replacement',
    description: 'Restore hot water quickly and reliably.',
    bullets: ['No hot water in your home', 'Inconsistent water temperatures', 'Repair or replace aging heaters'],
    image: '/images/IMG_0315.jpeg',
    imageAlt: 'Residential water heater with piping',
    ctaLabel: 'Restore Your Hot Water',
    Icon: IconWaterHeater,
  },
]

type AdditionalService = {
  label: string
  Icon: () => ReactNode
}

const ADDITIONAL_SERVICES: AdditionalService[] = [
  { label: 'Burst Pipe & Flood Response', Icon: IconBurstPipe },
  { label: 'Toilet Repair & Installation', Icon: IconToilet },
  { label: 'Faucet & Fixture Replacements', Icon: IconFaucet },
  { label: 'General Plumbing Installations & Renovations', Icon: IconTools },
  { label: 'Residential Plumbing Maintenance & Troubleshooting', Icon: IconClipboard },
  { label: 'Sump Pump Services', Icon: IconSumpPump },
  { label: 'Main Waterline Repair', Icon: IconMainLine },
  { label: 'Backwater Valve Installation', Icon: IconValve },
  { label: 'Waterproofing Services', Icon: IconWaterproof },
  { label: 'Trenchless Drain Repair', Icon: IconTrenchless },
]

export function ServicesSection() {
  return (
    <section className="svc-wrap" id="services" aria-labelledby="svc-heading">
      <div className="svc-inner">
        <header className="svc-intro">
          <p className="svc-eyebrow">
            <span className="svc-eyebrow__line" aria-hidden />
            <IconDroplet className="svc-eyebrow__drop" />
            <span>OUR SERVICES</span>
            <span className="svc-eyebrow__line" aria-hidden />
          </p>
          <h2 id="svc-heading" className="svc-heading">
            Plumbing Services <span className="svc-heading__accent">You Can Count On</span>
          </h2>
          <p className="svc-lede">
            Reliable plumbing service for homes in Aurora. Our plumbing company handles drain plumbing,
            clogged drains, leak detection, and plumbing repairs. Fast emergency plumbing service when you
            need it most.
          </p>
        </header>

        <div className="svc-cards">
          {MAIN_SERVICES.map((s) => (
            <article key={s.title} className="svc-card">
              <div className="svc-card__top">
                <img className="svc-card__img" src={s.image} alt={s.imageAlt} loading="lazy" width={640} height={400} />
                <div className="svc-card__iconRing" aria-hidden>
                  <span className="svc-card__icon">
                    <s.Icon />
                  </span>
                </div>
              </div>
              <div className="svc-card__body">
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.description}</p>
                <ul className="svc-card__bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span className="svc-card__check" aria-hidden>
                        <svg viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.5 8l3 3 6-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a className="svc-card__cta" href={PHONE_TEL}>
                  <span>{s.ctaLabel}</span>
                  <span className="svc-card__ctaArrow" aria-hidden>
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="svc-divider" role="presentation">
          <span className="svc-divider__line" />
          <span className="svc-divider__text">Additional Plumbing Services</span>
          <span className="svc-divider__line" />
        </div>

        <ul className="svc-extraGrid">
          {ADDITIONAL_SERVICES.map((item) => (
            <li key={item.label} className="svc-extraTile">
              <span className="svc-extraTile__icon" aria-hidden>
                <item.Icon />
              </span>
              <span className="svc-extraTile__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
