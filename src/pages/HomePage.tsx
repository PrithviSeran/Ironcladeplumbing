import { AboutSection } from '../components/AboutSection'
import { FaqSection } from '../components/FaqSection'
import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { TrustSection } from '../components/TrustSection'
import { ValueSection } from '../components/ValueSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ValueSection />
      <TrustSection />
      <AboutSection />
      <FaqSection />
    </>
  )
}
