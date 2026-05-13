import type { FormEvent } from 'react'
import { useState } from 'react'

import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../lib/constants'

const CONTACT_BG = '/images/ironclad-aurora.jpg'

/** FormSubmit free tier forwards JSON POST to the recipient inbox (requires one-time inbox activation email on first submission). */
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    setStatus('sending')

    const payload: Record<string, string> = {
      _subject: 'Ironclad Plumbing — Website contact form',
      name,
      phone,
      message,
    }

    if (email) payload._replyto = email

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-shell" id="contact">
      <div
        className="contact-shell__bg"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(235,228,255,0.9) 0%, rgba(242,243,246,0.95) 100%), url(${CONTACT_BG})`,
          backgroundAttachment: 'scroll',
        }}
      />
      <div className="hero__content" style={{ maxWidth: '1100px' }}>
        <h2 className="contact-heading">Get in Touch</h2>
        <p
          style={{
            textAlign: 'center',
            maxWidth: 640,
            margin: '-14px auto 28px',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: 'var(--lk-muted)',
          }}
        >
          Have questions? Reach out by phone or send us a message below.
        </p>
        <div
          className="contact-call"
          style={{ flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 28 }}
        >
          <a className="contact-call__btn" href={PHONE_TEL}>
            <svg width="22" height="22" viewBox="0 0 512 512" aria-hidden>
              <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              />
            </svg>
            Phone — {PHONE_DISPLAY}
          </a>
          <a className="contact-call__btn" href={`mailto:${CONTACT_EMAIL}`}>
            Email — {CONTACT_EMAIL}
          </a>
        </div>
        <form className="contact-form-panel" onSubmit={onSubmit}>
          {status === 'success' ? (
            <p className="contact-form-status contact-form-status--success" role="status">
              Thanks — your message was sent. We&apos;ll reply soon.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="contact-form-status contact-form-status--error" role="alert">
              Something went wrong. Please try again or call {PHONE_DISPLAY}.
            </p>
          ) : null}
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your Name" />
          <label htmlFor="email">Email (optional)</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
          <label htmlFor="phone">
            Phone Number <span style={{ color: 'var(--lk-orange)' }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="647-..."
            required
          />
          <label htmlFor="message">
            Message <span style={{ color: 'var(--lk-orange)' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us what's going on (leak, clog, renovation, etc.)"
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
