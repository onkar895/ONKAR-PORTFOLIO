/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Image from '../assets/AnimatedImage.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='mx-auto md:px-12 w-full lg:h-[60vh] h-[55vh]'>
      <div className='flex max-sm:flex-col lg:justify-start justify-center items-center shadow-inner shadow-cyan-900 bg-transparent backdrop-blur rounded-xl h-full'>
        <div data-aos="fade-right" data-aos-duration="2000">
          <img src={Image} alt="GIF" className='w-full lg:h-[45vh] h-[22vh] cursor-pointer' />
        </div>
        <div className='flex flex-col gap-4 lg:w-2/4 md:w-[100vw] max-sm:w-[85vw] text-justify'>
          <div className='lg:text-3xl text-xl font-semibold'>
            <h1>Ready to ignite your project with a sprinkle of magic?</h1>
          </div>
          <div className='flex text-justify'>
            <span className='text-xs font-bold text-gray-400'>
              <span className='text-xs text-white'>
                Reach out to collaborate and make things happen ✨
              </span>
              Open for freelance projects, full-time or part-time positions, and conversations on the latest frontend innovations. Let's connect, whether it's for a job, project or simply to exchange ideas !
            </span>
          </div>
          <NavLink to="mailto:onkarkarale4@gmail.com" className='btn text-[16px] font-bold py-1 mt-1 text-center tracking-wider'>
            Let's Communicate 😉
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Footer
