/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import { LuContact } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import Character from '../assets/Character.png'

const NavBar = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const IconStyle = "w-[40px] h-[40px] flex items-center justify-center flex-short rounded-full custom-border hover:bg-white/5 box-shadow border border-white/10 shadow-2xl group overflow-hidden hover:overflow-hidden cursor-pointer"

  return (
    <nav className='fixed bottom-0 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full backdrop-blur backdrop-contrast-125 h-[55px] rounded-full max-w-[500px] mx-auto px-5 max-sm:px-3 flex justify-between items-center text-2xl text-white/50'>
          <div className="w-[40px] h-[40px] flex items-center justify-center flex-short rounded-full custom-border box-shadow bg-white group overflow-hidden hover:overflow-hidden cursor-pointer">
            <div
              className="scale-[1.3] transition group-hover:scale-[1.6] w-[32px]">
              <img src={Character} alt="logo" className='rounded-full' />
            </div>
          </div>
          <div className={IconStyle}>
            <NavLink
              to='/'
              activeClass='active'
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BiHomeAlt />
            </NavLink>
          </div>
          <div className={IconStyle}>
            <NavLink
              to='/about'
              activeClass='active'
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BiUser />
            </NavLink>
          </div>
          <div className={IconStyle}>
            <NavLink
              to='/work'
              activeClass='active'
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <BsBriefcase />
            </NavLink>
          </div>
          <div className={IconStyle}>
            <NavLink
              to='/contact'
              activeClass='active'
              className='cursor-pointer flex items-center justify-center hover:text-white'>
              <LuContact />
            </NavLink>
          </div>
          <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className='btn text-sm cursor-pointer px-5 py-[9px] max-sm:hidden'>
            <span className='animate-pulse'>Hire Me ✨</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
