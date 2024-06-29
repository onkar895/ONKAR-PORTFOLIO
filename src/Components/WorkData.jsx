/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

const WorkData = ({ info }) => {

  return (
    <div data-aos="fade-up" data-aos-duration="2000"
      className="lg:w-[26.8vw] lg:h-[55vh] w-[85vw] h-[42vh] md:w-[50vw] md:h-[40vh] cursor-pointer relative overflow-hidden group"
    >
      <div className='lg:w-[26.8vw] lg:h-[38vh] w-[85vw] h-[28vh] md:w-[50vw] md:h-[28vh] flex items-center justify-center bg-gradient-to-br from-transparent to-white/30 shadow-inner shadow-cyan-700 backdrop-blur-3xl rounded-t-xl overflow-hidden hover:overflow-hidden cursor-pointer relative group'>
        <img
          src={info.img}
          alt={info.title}
          className="lg:w-[20vw] lg:h-[25vh] w-[72vw] h-[22vh] md:w-[40vw] md:h-[20vh] scale-[1.1] object-fit group-hover:scale-[1.4] rounded-xl transition-all ease-in-out duration-500 shadow-lg shadow-cyan-600"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-black/80 w-full h-full flex justify-center gap-6 items-center opacity-0 hover:opacity-100 transition-all ease-in-out duration-1000">
            <Link
              to={info.git}
              className="btn px-5 py-[6px]   hover:brightness-200 transition-all ease-in-out duration-500 hover:font-extrabold hover:text-black rounded-full cursor-pointer text-white text-sm"
            >
              <span className='flex items-center font-extrabold gap-x-1 hover:brightness-200 hover:scale-110 transition-all ease-in-out duration-500'>
                <FiGithub />
                GitHub
              </span>
            </Link>
            <Link
              to={info.link}
              className="btn px-6 py-[6px] hover:brightness-200 hover:font-extrabold hover:text-black rounded-full transition-all ease-in-out duration-1000 cursor-pointer text-white text-sm"
            >
              <span className='flex items-center font-extrabold gap-x-1 hover:brightness-200 hover:scale-110 transition-all ease-in-out duration-500'>
                Live
                <FiArrowUpRight className='text-lg' />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col rounded-b-xl py-2 text-center max-sm:gap-1 backdrop-blur shadow-inner shadow-cyan-900'>
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
