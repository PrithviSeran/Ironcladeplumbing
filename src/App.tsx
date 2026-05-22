import { Route, Routes } from 'react-router-dom'

import './page.css'

import { ThemeProvider } from './context/ThemeContext'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { DisclaimerPage } from './pages/DisclaimerPage'
import { HomePage } from './pages/HomePage'
import { ResidentialPlumbingPage } from './pages/ResidentialPlumbingPage'
import { ServiceAreasPage } from './pages/ServiceAreasPage'

function App() {
  return (
    <ThemeProvider>
      <SiteHeader />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/residential-plumbing" element={<ResidentialPlumbingPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </ThemeProvider>
  )
}

export default App
