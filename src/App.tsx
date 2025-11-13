import { useState, useEffect } from 'react'
import TargetCursor from './React/TargetCursor/TargetCursor'
import Beams from './React/Beams/Beams'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar si es móvil al cargar
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint de Tailwind
    }

    checkMobile()

    // Actualizar si cambia el tamaño de la ventana
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      <div className="relative min-h-screen">
        <Nav />
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#c2c6ff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        {!isMobile && (
          <TargetCursor
            spinDuration={3.2}
            hideDefaultCursor={true}
          />
        )}
        <main>
          <Home />
          <About />
          <Proyects />
          <Contact />
          <Footer />

        </main>
      </div>
    </>
  )
}

export default App
