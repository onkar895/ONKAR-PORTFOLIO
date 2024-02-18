/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/Character.png'

const Header = () => {
  return (
    <header id='header' className='py-3 backdrop-blur fixed top-0 left-0 z-40 w-full'>
      <div className='container flex justify-between items-center mx-auto md:px-12'>
        <div data-aos="fade-down" className='flex items-center gap-2'>
          <a href="#" className=''>
            <img src={Logo} alt='MyLogo' className='w-10 h-10' />
          </a>
          <div>
            <span className='text-gradient font-bold text-xl tracking-widest'>OMKAR</span> &nbsp;
            <span className='text-xl font-bold'>KARALE</span>
          </div>
        </div>
        <div data-aos="fade-down" className='btn px-4 py-2 cursor-pointer text-sm'>
          WORK WITH ME
        </div>
      </div>
    </header>
  )
}

export default Header
