import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-cinematic relative min-h-screen overflow-x-hidden">
      {/* Infinite looped starfield sits behind everything */}
      <div className="starfield" aria-hidden="true">
        <span className="stars-1" />
        <span className="stars-2" />
        <span className="stars-3" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
    </div>
  )
}
