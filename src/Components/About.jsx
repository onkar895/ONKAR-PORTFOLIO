/* eslint-disable no-unused-vars */
import React from 'react'
import Image from '../assets/Image.gif'
import Education from './Education'
import Skills from './Skills'
import Connect from './Connect'

const About = () => {

  return (
    <section className='section' id='about'>
      <div className='container mx-auto md:px-12 w-full'>
        <div data-aos="fade-up" data-aos-duration="2000" className='px-2 lg:py-3 py-6 mx-auto lg:text-start text-center font-bold lg:text-2xl text-3xl'>
          <h2>ABOUT ME</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex md:flex-wrap lg:flex-nowrap max-sm:flex-wrap gap-3'>
          <Education />
          <Skills />
          <Connect />
        </div>
      </div>
    </section>
  )
}

export default About