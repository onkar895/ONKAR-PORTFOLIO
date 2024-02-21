/* eslint-disable no-unused-vars */
import React from 'react'
import About from './About'
import Footer from '../Components/Footer'

const AboutPage = () => {
  return (
    <div className='space-y-5 my-16'>
      <About />
      <Footer />
      <div className='text-center'>
        <span className='text-xs'><span className='text-gray-400'>@2024,</span> Omkar Karale 😍</span>
      </div>
    </div>
  )
}

export default AboutPage
