/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Image from '../assets/AnimatedImage.png'

const Footer = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='container mx-auto md:px-12 w-full'>
      <div className='flex max-sm:flex-col items-center shadow-inner shadow-cyan-900 bg-transparent backdrop-blur rounded-xl py-8 px-20'>
        <div data-aos="fade-right" data-aos-duration="2000" className='lg:w-[30vw]'>
          <img src={Image} alt="GIF" className='w-full lg:h-[45vh] h-[20vh]' />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='flex flex-col gap-4 lg:w-2/4 md:w-[100vw] max-sm:w-[85vw] lg:text-justify'>
          <div className='lg:text-3xl text-xl font-semibold'>
            <h1>Ready to ignite your project with a sprinkle of magic?</h1>
          </div>
          <div className='flex text-justify'>
            <span className='text-xs text-gray-400'>
              <span className='text-xs text-white'>
                Reach out to collaborate and make things happen ✨
              </span>
              Open for freelance projects, full-time or part-time positions, and conversations on the latest frontend innovations. Let's connect, whether it's for a job, project or simply to exchange ideas !
            </span>
          </div>
          <button className='btn text-sm py-2 mt-1'>
            Let's communicate 😉
          </button>
        </div>
      </div>
    </section>
  )
}

export default Footer
