/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../Components/Banner';
import About from './About';
import Work from './Work'
import Contact from './Contact';

const Home = () => {
  return (
    <div className='my-28'>
      <Banner />
      <div className='flex flex-col gap-3 my-24'>
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default Home
