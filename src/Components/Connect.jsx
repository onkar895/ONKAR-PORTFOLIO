/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";

const Connect = () => {
  return (
    <div className="lg:w-[33.33%] w-full shadow-inner shadow-cyan-200 hover:shadow hover:shadow-cyan-300  bg-transparent backdrop-blur-2xl rounded-xl py-6 px-7 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300">
      <h3 className="font-bold text-lg text-gradient tracking-wide">Connect & Follow</h3>
      <div className='flex flex-wrap gap-x-12 gap-y-10 py-6'>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-3'>
            <div className="backdrop-blur rounded-full p-2 bg-white text-black">
              <a href="https://github.com/onkar895">
                <PiGithubLogoFill className='transition-all duration-500 hover:scale-125' />
              </a>
            </div>
            <div className='text-sm'>
              <span>GitHub</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className="backdrop-blur rounded-full p-2 bg-blue-500 text-white">
              <a href="https://www.linkedin.com/in/omkarkarale541/">
                <FaLinkedinIn className='transition-all duration-500 hover:scale-125' />
              </a>
            </div>
            <div className='text-sm'>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-4'>
            <div className="backdrop-blur rounded-full p-2 bg-red-500 text-white">
              <a href="mailto:onkarkarale4@gmail.com">
                <MdEmail className='transition-all duration-500 hover:scale-125' />
              </a>
            </div>
            <div className='text-sm'>
              <span>E-mail</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className="backdrop-blur rounded-full p-2 bg-purple-600 text-white">
              <a href="https://discord.com/users/Onkar895">
                <FaDiscord className='transition-all duration-500 hover:scale-125' />
              </a>
            </div>
            <div className='text-sm'>
              <span>Discord</span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className="backdrop-blur rounded-full p-2 bg-black text-white shadow-inner shadow-gray-400">
            <a href="https://twitter.com/Onkar895">
              <FaXTwitter className='transition-all duration-500 hover:scale-125' />
            </a>
          </div>
          <div className='text-sm'>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
