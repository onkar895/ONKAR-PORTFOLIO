/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiGithubLogoFill } from 'react-icons/pi';
import Character from '../assets/Character.png';
import { NavLink } from 'react-router-dom';

const Connect = () => {
  return (
    <div className="lg:w-[33.33%] w-full shadow-inner shadow-cyan-900 hover:shadow hover:shadow-cyan-300 bg-transparent backdrop-blur rounded-xl py-6 px-7 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300">
      <h3 className="font-bold lg:text-lg text-2xl text-gradient tracking-wide text-center">Connect & Follow</h3>
      <div className='flex flex-wrap gap-12 lg:py-6 py-10 mx-auto px-6'>
        <div className='flex items-center gap-12'>
          <NavLink to="https://github.com/onkar895" className='flex items-center gap-2'>
            <div className="backdrop-blur rounded-full p-2 bg-white text-black">
              <PiGithubLogoFill className='transition-all duration-500 hover:scale-125 text-2xl' />
            </div>
            <div className='text-sm text-gray-400 hover:text-white'>
              <span>GitHub</span>
            </div>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/omkarkarale541/" className='flex items-center gap-2'>
            <div className="backdrop-blur rounded-full p-2 bg-blue-500 text-white">
              <FaLinkedinIn className='transition-all duration-500 hover:scale-125 text-2xl' />
            </div>
            <div className='text-sm text-gray-400 hover:text-white'>
              <span>LinkedIn</span>
            </div>
          </NavLink>
        </div>
        <div className='flex items-center gap-12'>
          <NavLink to="https://twitter.com/Onkar895" className='flex items-center gap-2'>
            <div className="backdrop-blur rounded-full p-2 bg-black text-white shadow-inner shadow-gray-400">
              <FaXTwitter className='transition-all duration-500 hover:scale-125 text-2xl' />
            </div>
            <div className='text-sm text-gray-400 hover:text-white'>
              <span>Twitter</span>
            </div>
          </NavLink>
          <NavLink to="https://wa.me/9921374887" className='flex items-center gap-2'>
            <div className="backdrop-blur rounded-full p-2 bg-green-500 text-white">
              <FaWhatsapp className='transition-all duration-500 hover:scale-125 text-2xl' />
            </div>
            <div className='text-sm text-gray-400 hover:text-white'>
              <span>Whatsapp</span>
            </div>
          </NavLink>
        </div>
        <NavLink to="mailto:onkarkarale4@gmail.com" className='flex items-center gap-2 ml-[2px]'>
          <div className="backdrop-blur rounded-full p-2 bg-red-500 text-white">
            <MdEmail className='transition-all duration-500 hover:scale-125 text-2xl' />
          </div>
          <div className='text-sm text-gray-400 hover:text-white'>
            <span>E-mail</span>
          </div>
        </NavLink>
      </div>
      <div className='w-[100%] h-[0.3px] bg-gray-700 mt-10'>

      </div>
      <div className='flex items-center gap-3 mt-[1.5rem] mx-auto justify-center'>
        <div className="w-[40px] h-[40px] flex items-center justify-center flex-short rounded-full custom-border box-shadow bg-white group overflow-hidden hover:overflow-hidden cursor-pointer">
          <div className="scale-[1.3] transition group-hover:scale-[1.6] w-[32px]">
            <img src={Character} alt="logo" className='rounded-full' />
          </div>
        </div>
        <div className='text-xs flex flex-col gap-1 text-gray-400 font-bold'>
          <span>Let's Build Something Together!</span>
          <p><span className='text-white'>Send Email to :</span> onkarkarale4@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
