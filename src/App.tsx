import TargetCursor from './Animations/TargetCursor/TargetCursor'
import Beams from './Backgrounds/Beams/Beams'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'

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
        </main>
      </div>
    </>
  )
}

export default App
