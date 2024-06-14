/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import { LuContact } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import Character from '../assets/Character.png'

const NavBar = () => {

  const [showNavBar, setShowNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const IconStyle = "w-[40px] h-[40px] flex items-center justify-center flex-short rounded-full border-2 box-shadow border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl group overflow-hidden hover:overflow-hidden cursor-pointer"

  return (
    <nav className={`fixed bottom-2 max:sm:bottom-1 w-full overflow-hidden z-50 transition-transform duration-500 ${showNavBar ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full backdrop-blur-xl bg-black/60 shadow-2xl backdrop-contrast-125 h-[65px] rounded-full max-w-[500px] mx-auto px-5 max-sm:px-3 flex justify-between items-center text-2xl text-white/70'>
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
          <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className='btn text-sm cursor-pointer px-4 py-2 max-sm:hidden font-bold'>
            <span className='animate-pulse'>Hire Me ✨</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
