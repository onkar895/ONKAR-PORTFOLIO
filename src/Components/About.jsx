/* eslint-disable no-unused-vars */
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from '../assets/Image.gif'
import Education from './Education'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto md:px-12 w-full'>
        <div data-aos="fade-up" data-aos-duration="2000">
          <Education />
        </div>
      </div>
    </section>
  )
}

export default About