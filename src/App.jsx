
import './App.css'
import Hero from './heroSection/Hero'
import Journey from './portfolioSection/Journey'
import Bottom from './reUses/Bottom'
import Navbar from './reUses/Navbar'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Journey />
      <Bottom />
    </div>
  )
}

export default App
