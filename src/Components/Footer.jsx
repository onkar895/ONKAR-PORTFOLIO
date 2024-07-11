/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Image from '../assets/AnimatedImage.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='mx-auto w-full lg:h-[60vh] h-[55vh]'>
      <div className='flex flex-col lg:flex-row lg:justify-start justify-center items-center shadow-inner shadow-cyan-600 bg-gradient-to-br from-[#14141b] to-[#1c132e] backdrop-blur rounded-xl h-full'>
        <div data-aos="fade-right" data-aos-duration="2000">
          <img src={Image} alt="GIF" className='w-full lg:h-[45vh] h-[22vh] cursor-pointer' />
        </div>
        <div className='flex flex-col gap-4 lg:w-2/4 md:w-[70vw] max-sm:w-[85vw] text-justify'>
          <div className='lg:text-2xl text-xl font-bold lg:text-justify text-center tracking-wider'>
            <h1>Ready to ignite your project with a sprinkle of magic?</h1>
          </div>
          <div className='flex text-justify'>
            <span className='text-xs font-bold text-gray-400'>
              <span className='text-xs text-gradient brightness-150 hover:text-gradient hover:brightness-150'>
                Reach out to collaborate and make things happen ✨
              </span>
              Open for freelance projects, full-time or part-time positions, and conversations on the latest frontend innovations. Let's connect, whether it's for a job, project or simply to exchange ideas !
            </span>
          </div>
          <NavLink to="mailto:onkarkarale4@gmail.com" className='btn text-[16px] py-1 mt-1 text-center'>
            Let's Communicate 😉
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Footer
