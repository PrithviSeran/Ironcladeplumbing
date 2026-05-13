import { useState } from 'react'

import { PHONE_DISPLAY } from '../lib/constants'

const FAQS = [
  {
    q: 'Do you offer emergency plumbing?',
    a: `Yes — call ${PHONE_DISPLAY} any time leaks, bursts, or drainage backups need immediate routing to a plumber.`,
  },
  {
    q: 'Which neighbourhoods do you cover?',
    a: 'Aurora is our core focus, alongside Newmarket, East Gwillimbury, Richmond Hill, King City, and other York Region communities. Phone or message us if you live just outside municipal lines.',
  },
  {
    q: 'How fast can someone arrive?',
    a: 'Scheduling depends on call volume and your location; we prioritize active water damage scenarios and clarify realistic arrival estimates when we speak.',
  },
  {
    q: 'Will I know pricing before approving work?',
    a: 'We believe in outlining scope and labour/material expectations before tools turn on whenever possible—the same fairness highlighted in Theresa’s review.',
  },
  {
    q: 'Do you tackle renovations?',
    a: 'Yes — vanities, faucets, relocating supply lines during remodels, toilet swaps, sump-related updates, and more can be coordinated with your contractor timelines.',
  },
  {
    q: 'Are you insured/licensed plumbers?',
    a: 'We only align homeowners with bonded, reputable plumbing professionals compliant with provincial standards; ask during booking if you’d like specifics for your municipality.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq-section">
      <div className="faq-wrap">
        <div className="faq-title">Frequently Asked Plumbing Questions</div>
        {FAQS.map((item, idx) => {
          const isOpen = open === idx
          return (
            <div key={item.q} className={`faq-item${isOpen ? ' active' : ''}`}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : idx)}
              >
                {item.q}
              </button>
              <div className="faq-answer" style={{ maxHeight: isOpen ? 360 : 0 }}>
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
