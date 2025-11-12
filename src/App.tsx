import TargetCursor from './React/TargetCursor/TargetCursor'
import Beams from './React/Beams/Beams'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Proyects from './components/Proyects'
import Contact from './components/Contact'

function App() {
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
        <TargetCursor
          spinDuration={3.2}
          hideDefaultCursor={true}
        />
        <main>
          <Home />
          <About />
          <Proyects />
          <Contact />

        </main>
      </div>
    </>
  )
}

export default App
