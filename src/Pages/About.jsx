/* eslint-disable no-unused-vars */
import React from 'react'
import Image from '../assets/Image.gif'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import Connect from '../Components/Connect'

const About = () => {

  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='section'>
      <div className='container mx-auto md:px-12 pb-7 w-full'>
        <div data-aos="fade-up" data-aos-duration="2000" className='px-2 lg:py-3 py-6 mx-auto lg:text-start text-center font-bold lg:text-xl text-3xl lg:hidden'>
          <h2>ABOUT ME</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex md:flex-wrap lg:flex-nowrap max-sm:flex-wrap lg:gap-3 gap-6'>
          <Education />
          <Skills />
          <Connect />
        </div>
      </div>
    </section>
  )
}

export default About