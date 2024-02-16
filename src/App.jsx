import Header from './Components/Header'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Education from './Components/Education'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from './Components/Contact'
import BgSite from './assets/site-bg.jpg'

function App() {

  return (
    <>
      <div style={{ backgroundImage: `url(${BgSite})` }} className='bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Banner />
        <NavBar />
        <About />
        <Education />
        <Services />
        <Work />
        <Contact />
      </div>
      {/* <div className='h-[4000px]'></div> */}
    </>
  )
}

export default App
