/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/Character.png'
import { NavLink } from 'react-router-dom'
import { FiDownload } from "react-icons/fi";

const Header = () => {

  return (
    <header className='py-5 lg:py-3 backdrop-blur-lg bg-black/10 shadow-2xl fixed top-0 left-0 z-40 w-full bg-gray-600'>
      <div className='container flex justify-between items-center mx-auto md:px-10'>
        <div data-aos="fade-down" data-aos-duration="2000" className='flex items-center gap-2'>
          <div>
            <img src={Logo} alt='MyLogo' className='w-10 h-10 transition-all duration-500 hover:scale-95 cursor-pointer' />
          </div>
          <div>
            <span className='text-gradient text-xl tracking-widest'>OMKAR</span> &nbsp;
            <span className='text-xl tracking-widest '>KARALE</span>
          </div>
        </div>
        <div className='flex gap-4 max-sm:hidden'>
          <div data-aos="fade-down" data-aos-duration="2000" className='btn px-2 py-2 cursor-pointer text-sm font-bold'>
            <NavLink to='https://drive.google.com/file/d/14X_rdNAwv1ZD9LmFS4-pR9_T6fSay2Kd/view?usp=sharing' className='flex items-center gap-2 font-bold btn px-6 transition-all duration-500 hover:scale-95'>
              <span>RESUME</span>
              <FiDownload className='text-md' />
            </NavLink>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className='max-sm:hidden btn px-4 py-2 cursor-pointer text-sm font-bold'>
            <NavLink to="https://www.linkedin.com/in/omkarkarale541/">
              <span>WORK WITH ME</span>
            </NavLink>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="2000" className='md:hidden btn px-8 py-2 cursor-pointer text-sm font-bold min-[320px]:px-5 min-[320px]:text-xs'>
          <NavLink to="https://www.linkedin.com/in/omkarkarale541/">
            <span className='animate-pulse'>HIRE ME</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
