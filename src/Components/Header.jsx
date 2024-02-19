/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/Character.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className='py-5 lg:py-3 backdrop-blur fixed top-0 left-0 z-40 w-full'>
      <div className='container flex justify-between items-center mx-auto md:px-10'>
        <div data-aos="fade-down" data-aos-duration="2000" className='flex items-center gap-2'>
          <div>
            <img src={Logo} alt='MyLogo' className='w-10 h-10' />
          </div>
          <div>
            <span className='text-gradient font-bold text-xl tracking-widest'>OMKAR</span> &nbsp;
            <span className='text-xl font-bold'>KARALE</span>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="2000" className='max-sm:hidden btn px-4 py-2 cursor-pointer text-sm'>
          WORK WITH ME
        </div>
        <div data-aos="fade-down" data-aos-duration="2000" className='md:hidden btn px-8 py-2 cursor-pointer text-sm'>
          <span className='animate-pulse'>HIRE ME</span>
        </div>
      </div>
    </header>
  )
}

export default Header
