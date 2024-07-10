/* eslint-disable no-unused-vars */
import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiMui, SiRedux, SiVercel, SiFirebase } from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { FaReact, FaBootstrap, FaGithub, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full shadow-inner shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-300 bg-gradient-to-b from-[#14141b] to-white/10 backdrop-blur rounded-xl py-6 md:px-7 overflow-hidden cursor-pointer hover:scale-95 transition-transform duration-300">
      <h3 data-aos="fade-up" data-aos-duration="2000" className="font-bold lg:text-lg text-2xl text-center text-gradient tracking-wide">Skills</h3>
      <div data-aos="fade-up" data-aos-duration="2000" className="flex md:gap-x-10 gap-x-6 gap-y-10 flex-wrap lg:py-6 py-10 justify-center">
        {[
          { icon: <IoLogoHtml5 className='text-orange-500 text-3xl' />, bg: 'bg-white' },
          { icon: <IoLogoCss3 className='text-blue-600 text-3xl' />, bg: 'bg-white' },
          { icon: <IoLogoJavascript className='text-black text-3xl' />, bg: 'bg-[#FDEA31]' },
          { icon: <FaReact className='text-[#4dbfd6] text-3xl' />, bg: 'bg-black' },
          { icon: <SiRedux className='text-[#6C4EB0] text-3xl' />, bg: 'bg-white' },
          { icon: <SiTailwindcss className='text-[#54c2d8] text-3xl' />, bg: 'bg-white' },
          { icon: <SiMui className='text-[#007FFF] text-3xl' />, bg: 'bg-white' },
          { icon: <FaBootstrap className='text-[#9E64F2] text-3xl' />, bg: 'bg-white' },
          { icon: <FaGitAlt className='text-[#F34F29] text-3xl' />, bg: 'bg-white' },
          { icon: <FaGithub className='text-black text-3xl' />, bg: 'bg-white' },
          { icon: <FaGitlab className='text-[#E24329] text-3xl' />, bg: 'bg-white' },
          { icon: <SiFirebase className='text-[#FFA000] text-3xl' />, bg: 'bg-white' },
          { icon: <SiVercel className='text-white text-3xl' />, bg: 'bg-black' },
        ].map(({ icon, bg }, index) => (
          <div key={index} className={`p-2 rounded-xl transition-transform duration-300 transform hover:scale-110 shadow-md ${bg}`}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
