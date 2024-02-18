/* eslint-disable no-unused-vars */
import React from 'react'
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { MdOutlineContactPage } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { Link } from 'react-scroll'
import Character from '../assets/Character.png'

const NavBar = () => {

  const IconStyle = "w-[40px] h-[40px] flex items-center justify-center flex-short rounded-full custom-border hover:bg-white/5 box-shadow border border-white/10 shadow-2xl group overflow-hidden hover:overflow-hidden cursor-pointer"

  return (
    <nav className='fixed bottom-4 max-sm:bottom-0 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full backdrop-blur bg-white/5 h-[70px]  rounded-full max-w-[560px] mx-auto px-5 max-sm:px-3 flex justify-between items-center text-2xl text-white/50'>
          <div className="w-[40px] h-[40px] flex items-center justify-center flex-short rounded-full custom-border box-shadow bg-white group overflow-hidden hover:overflow-hidden cursor-pointer">
            <Link
              to='header'
              smooth={true}
              className="scale-[1.3] transition group-hover:scale-[1.6] w-[32px]">
              <img src={Character} alt="logo" className='rounded-full' />
            </Link>
          </div>
          <div className={IconStyle}>
            <Link
              to='home'
              activeClass='active'
              smooth={true}
              spy={true}
              offset={-200}
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BiHomeAlt />
            </Link>
          </div>
          <div className={IconStyle}>
            <Link
              to='about'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BiUser />
            </Link>
          </div>
          <div className={IconStyle}>
            <Link
              to='services'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BsClipboardData />
            </Link>
          </div>
          <div className={IconStyle}>
            <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BsBriefcase />
            </Link>
          </div>
          <div className={IconStyle}>
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <LuContact />
            </Link>
          </div>
          <button className='btn text-sm cursor-pointer px-5 py-[9px] max-sm:hidden'>
            <span className='animate-pulse'>Hire Me ✨</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
