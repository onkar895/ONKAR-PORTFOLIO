import Header from './Components/Header'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Education from './Components/Education'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Banner />
        <NavBar />
        <About />
        <Education />
        <Services />
        <Work />
        <Contact />
      </div>
    </>
  )
}

export default App
