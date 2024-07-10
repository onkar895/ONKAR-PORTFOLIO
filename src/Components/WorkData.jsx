/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

const WorkData = ({ info }) => {

  return (
    <div data-aos="fade-up" data-aos-duration="2000"
      className="relative lg:w-[26.8vw] lg:h-[60vh] w-[85vw] h-[42vh] md:w-[50vw] md:h-[40vh] cursor-pointer shadow-inner shadow-cyan-900  bg-gradient-to-b from-[#14141b] to-white/10 overflow-hidden backdrop-blur rounded-xl group"
    >
      <div className='relative lg:w-[26.8vw] lg:h-[42vh] w-[85vw] h-[28vh] md:w-[50vw] md:h-[28vh] flex items-center justify-center overflow-hidden hover:overflow-hidden cursor-pointer group'>
        <img
          src={info.img}
          alt={info.title}
          className="lg:h-[42vh] h-[32vh] md:h-[30vh] object-contain group-hover:scale-[2] rounded-xl transition-transform ease-in-out duration-300 img1"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-4 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            to={info.git}
            className="px-5 py-[6px] bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-extrabold flex items-center gap-1 hover:brightness-200 transition-all duration-500"
          >
            <span className='flex items-center gap-x-1 hover:scale-105 transition-all ease-in-out duration-500'>
              <FiGithub />
              GitHub
            </span>
          </Link>
          <Link
            to={info.link}
            className="px-6 py-[6px] bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-extrabold flex items-center gap-1 hover:brightness-200 transition-all duration-500"
          >
            <span className='flex items-center gap-x-1 hover:scale-105 transition-all ease-in-out duration-500'>
              Live
              <FiArrowUpRight className='text-lg' />
            </span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col py-2 text-center max-sm:gap-1 shadow-inner shadow-white/10'>
        <p className='font-bold text-gray-300 max-sm:text-xl'>{info.title}</p>
        <p className='text-xs md:font-bold text-gray-400'>{info.desc}</p>
        <div className='text-xs md:font-bold text-gray-400 md:mt-1'>
          <span>Note : Please hover on the Image to get the project links</span>
        </div>
      </div>
    </div>
  )
}

export default WorkData
