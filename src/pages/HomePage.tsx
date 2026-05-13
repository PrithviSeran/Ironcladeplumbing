import { AboutSection } from '../components/AboutSection'
import { FaqSection } from '../components/FaqSection'
import { HeroSection } from '../components/HeroSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { TrustSection } from '../components/TrustSection'
import { ValueSection } from '../components/ValueSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <TestimonialsSection />
      <TrustSection />
      <AboutSection />
      <FaqSection />
    </>
  )
}
