/* eslint-disable no-unused-vars */
import React from 'react'
import About from './About'
import Footer from '../Components/Footer'

const AboutPage = () => {
  return (
    <div className='my-20 md:mx-0 mx-2 flex flex-col gap-y-8'>
      <About />
      <Footer />
      <div className='text-center mt-20'>
        <span className='text-xs font-bold'><span className='text-gray-400'>Copyright @ 2024,</span> Designed and Developed by Omkar Karale 😍</span>
      </div>
    </div>
  )
}

export default AboutPage
