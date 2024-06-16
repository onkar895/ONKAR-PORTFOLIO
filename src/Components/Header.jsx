/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/Character.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiDownload } from "react-icons/fi";

const Header = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <header className='py-5 lg:py-3 backdrop-blur-lg bg-black/10 shadow-2xl fixed top-0 left-0 z-40 w-full'>
      <div className='flex justify-between items-center md:px-10 lg:px-16 px-2'>
        <div data-aos="fade-down" data-aos-duration="2000" className='flex items-center gap-2'>
          <div onClick={handleClick}>
            <img src={Logo} alt='MyLogo' className='w-10 h-10 transition-all duration-500 hover:scale-95 cursor-pointer' />
          </div>
          <div>
            <span className='text-gradient text-xl tracking-widest'>OMKAR</span> &nbsp;
            <span className='text-xl tracking-widest '>KARALE</span>
          </div>
        </div>
        <div className='flex items-center gap-8 max-sm:hidden'>
          <div data-aos="fade-down" data-aos-duration="2000" className='cursor-pointer text-xs font-bold relative inline-flex items-center justify-center transition-all ease-in-out duration-700 rounded-full btn'>
            <NavLink to='https://drive.google.com/file/d/1lLnkVydJ7WPQkeLZA1XSIYkY1XHdnAUQ/view?usp=sharing' className='flex items-center gap-2 font-bold px-5 py-2 hover:-translate-y-1.5 transition-all ease-in duration-300 bg-transparent'>
              <span>RESUME</span>
              <FiDownload className='text-md' />
            </NavLink>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className='max-sm:hidden btn cursor-pointer text-xs font-bold px-3 py-2 rounded-full'>
            <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className="">
              <span>WORK WITH ME</span>
            </NavLink>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="2000" className='md:hidden btn px-7 py-2 cursor-pointer text-sm font-bold min-[320px]:px-8 min-[320px]:text-xs'>
          <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className='hover:-translate-y-1.5 transition-all duration-500'>
            <span className='hover:-translate-y-1.5 transition-all duration-500 animate-pulse'>HIRE ME</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
