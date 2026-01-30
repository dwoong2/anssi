import { LanguageProvider } from './hooks/useLanguage'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollTellingContainer from './components/ScrollTellingContainer'
import Location from './components/Location'
import Footer from './components/Footer' // We will create this
// import FAB from './components/FAB' // Removed as per request (duplicate text)
import StickyBookingButton from './components/StickyBookingButton'

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <main>
          <Hero />
          <ScrollTellingContainer />
          <Location />
        </main>
        <Footer />
        <Footer />
        {/* <FAB /> Removed */}
        <StickyBookingButton />
      </div>
    </LanguageProvider>
  )
}

export default App
