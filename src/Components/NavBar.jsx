/* eslint-disable no-unused-vars */
import React from 'react'
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Character from '../assets/Character.png'

const NavBar = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/10 h-[70px] backdrop-blur rounded-full max-w-[560px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <div className="w-[42px] h-[42px] flex items-center justify-center flex-short rounded-full custom-border box-shadow bg-white group overflow-hidden hover:overflow-hidden cursor-pointer">
            <div className="scale-[1.4] transition group-hover:scale-[1.7] w-[32px]">
              <img src={Character} alt="logo" className='rounded-full' />
            </div>
          </div>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white'>
            <BiHomeAlt />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white'>
            <BiUser />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white'>
            <BsClipboardData />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white'>
            <BsBriefcase />
          </Link>
          <button className='btn text-sm cursor-pointer px-9 py-[10px]'>
            <span className='animate-pulse'>Hire Me</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
