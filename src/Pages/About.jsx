/* eslint-disable no-unused-vars */
import React from 'react'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import Connect from '../Components/Connect'

const About = () => {

  return (
    <section data-aos="fade-up" data-aos-duration="2000">
      <div className='container mx-auto md:px-12 w-full h-full mt-16 max-sm:mt-10'>
        <div data-aos="fade-up" data-aos-duration="2000" className='pb-6 mx-auto text-center font-bold lg:text-xl text-2xl'>
          <h2>About Me</h2>
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