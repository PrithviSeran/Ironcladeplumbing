const REVIEWS = [
  {
    quote:
      'Had Ironclad Plumbing come out to my place in Aurora to deal with a clogged bathroom drain that just wouldn’t clear. They showed up on time, got it sorted fast, and left everything clean. Super straightforward, fair pricing, and very professional without being pushy. I’d definitely use them again.',
    name: 'Theresa C',
  },
  {
    quote:
      'Responsive when our basement pipe leaked after hours. Quick assessment, tidy work restoring water service, and the tech explained exactly what happened without upselling fixtures we didn’t need.',
    name: 'Jonathan M.',
  },
  {
    quote:
      'Straightforward scheduling for our kitchen reno: new faucet, dishwasher line, and a toilet swap. Timeline matched what they promised and the workmanship looks great beside our new cabinetry.',
    name: 'Meera & Sam R.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-wrap">
        <h2 className="testimonial-title">
          Rated 5.0 Stars on Google — Hear From Aurora-area Homeowners
        </h2>
        <div className="testimonial-grid">
          {REVIEWS.map((r) => (
            <div key={r.name} className="testimonial-card">
              <div className="testimonial-quote">{r.quote}</div>
              <div className="testimonial-profile">
                <div className="testimonial-name">{r.name}</div>
                <div className="testimonial-verified">✔ Google-style review excerpt</div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
