/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Connect from '../Components/Connect'

const ContactPage = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='container mx-auto md:px-12 my-20 w-full'>
      <div className='flex flex-col items-center max-sm:justify-center text-center gap-y-3 px-3'>
        <h2 className='text-xl font-bold'>Contact Me</h2>
        <span className='text-sm text-gray-400'>Appreciate you taking the time to browse my portfolio ! If you have any inquiries or opportunities, feel free to reach out. I'm always up for collaboration and embracing new challenges.</span>
      </div>
      <div className='shadow-inner shadow-cyan-900 bg-transparent backdrop-blur rounded-xl pt-8 mt-10'>
        <div className=''>
          <div>
            <Connect />
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
