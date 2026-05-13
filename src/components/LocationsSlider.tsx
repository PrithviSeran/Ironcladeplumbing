import { PHONE_TEL } from '../lib/constants'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const LOCAL_SLIDES = [
  {
    city: 'Aurora',
    desc: 'Fast access to plumbers for clogged drains, leaks, and emergency calls.',
    bg: '/images/ironclad-aurora.jpg',
  },
  {
    city: 'Newmarket & East Gwillimbury',
    desc: 'Residential plumbing installs, heaters, toilets, and drain cleaning.',
    bg: '/images/ironclad-trusted.jpg',
  },
  {
    city: 'Richmond Hill & King City',
    desc: 'Leak repairs, renovations, fixture replacements, and more.',
    bg: '/images/ironclad-service-install.jpg',
  },
  {
    city: 'York Region & nearby',
    desc: 'Reach out to confirm timing for your neighbourhood.',
    bg: '/images/ironclad-service-leaks.jpg',
  },
]

function slideBg(url: string) {
  return `linear-gradient(to top, rgba(31, 19, 70, 0.78), rgba(31, 19, 70, 0.38)), url(${url})`
}

export function LocationsSlider() {
  return (
    <section className="locations-block" id="locations">
      <h2>Service Areas</h2>
      <Swiper
        className="ls-swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {LOCAL_SLIDES.map((slide) => (
          <SwiperSlide key={slide.city}>
            <div className="ls-loc-slide">
              <div className="ls-loc-slide__bg" style={{ backgroundImage: slideBg(slide.bg) }} />
              <div className="ls-loc-slide__inner">
                <div className="ls-loc-slide__title">{slide.city}</div>
                <div className="ls-loc-slide__desc">{slide.desc}</div>
                <a className="ls-loc-slide__cta" href={PHONE_TEL}>
                  Call Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
