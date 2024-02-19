/* eslint-disable no-unused-vars */
import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiMongodb, SiMui, SiExpress, SiRedux, SiVercel, SiGitlab, SiFirebase } from "react-icons/si";
import { FaGitlab } from "react-icons/fa6";
import { FaReact, FaBootstrap, FaGithub, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="lg:w-[33.33%] h-[] w-full shadow-inner shadow-cyan-200 hover:shadow hover:shadow-cyan-300  bg-transparent backdrop-blur-2xl rounded-xl py-6 px-7 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300">
      <h3 className="font-bold text-lg text-gradient tracking-wide">Skills</h3>
      <div className="flex gap-x-10 gap-y-6 flex-wrap py-6">
        <div className='bg-white p-2 rounded-xl'>
          <IoLogoHtml5 className='text-orange-500 text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <IoLogoCss3 className='text-blue-600 text-3xl' />
        </div>
        <div className='bg-[#FDEA31] p-2 rounded-xl'>
          <IoLogoJavascript className='text-black text-3xl' />
        </div>
        <div className='bg-black shadow-inner shadow-gray-400 p-2 rounded-xl'>
          <FaReact className='text-[#4dbfd6] text-3xl font-bolder' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <SiRedux className='text-[#6C4EB0] text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <SiTailwindcss className='text-[#54c2d8] text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <SiMui className='text-[#007FFF] text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <FaBootstrap className='text-[#9E64F2] text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <FaGitAlt className='text-[#F34F29] text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <FaGithub className='text-black text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <FaGitlab className='text-[#E24329] text-3xl' />
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <SiFirebase className='text-[#FFA000] text-3xl' />
        </div>
        <div className='bg-black shadow-inner shadow-gray-400 p-2 rounded-xl'>
          <SiVercel className='text-white text-3xl font-bolder' />
        </div>
      </div>
    </div>
  )
}

export default Skills
