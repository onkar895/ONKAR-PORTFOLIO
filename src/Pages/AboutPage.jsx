/* eslint-disable no-unused-vars */
import React from 'react'
import About from './About'
import Footer from '../Components/Footer'

const AboutPage = () => {
  return (
    <div className='space-y-5'>
      <div className='lg:mt-6 mt-12 space-y-5'>
        <About />
        <Footer />
      </div>
      <div className='text-center pb-20'>
        <span className='text-xs font-bold'><span className='text-gray-400'>@2024,</span> Omkar Karale 😍</span>
      </div>
    </div>
  )
}

export default AboutPage
