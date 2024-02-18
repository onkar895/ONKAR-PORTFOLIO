/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'


const Banner = () => {
  return (
    <section className='mt-10' id='home'>
      <div className='container mx-auto'>
        <div className='flex max-sm:flex-wrap-reverse items-center'>
          <div className='flex flex-col max-sm:mt-5'>
            <div className="tracking-widest shadow-2x font-bold">
              <h1 className='text-gray-300 max-sm:text-sm'>LET'S BUILD SOMETHING TOGETHER...</h1>
            </div>
            <div className='mt-3 text-[42px] max-sm:text-[30px]'>
              <h1 className='font-bold'> OMKAR <span>KARALE</span> </h1>
              <div className='mt-2 text-[20px] max-sm:text-[14px] lg:text-[22px] font-semibold uppercase overflow-hidden'>
                <span className='text-white mr-2'>I'm a</span>
                <TypeAnimation
                  sequence={["Passionate Web Developer", 2000, "Specialized in FrontEnd Developement", 2000, ""]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-gradient"
                />
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-4">
              <p className="text-[1.1rem] md:w-4/5 text-gray-400 sm:text-[.95rem] text-justify">  I’m highly skilled in Frontend Development specializing in building scalable and top-notch web applications,having experience in HTML5, CSS3, Tailwind CSS, Material UI, JavaScript, React.js, Redux.js and Redux-Toolkit to create visually appealing and interactive user interfaces
              </p>
              <div className='flex max-sm:flex-wrap md:flex-wrap gap-x-8 max-sm:gap-x-4 max-w-max '>
                <div className='flex items-center gap-2 text-sm mx-auto'>
                  <a href="https://drive.google.com/file/d/1TmtA6Ft8Pc5-cBfQF66-Xm0NvO7dEapp/view?usp=drive_link" className='text-gradient text-sm'>Download My Resume
                  </a>
                  <FiDownload className='text-pink-300' />
                </div>
                <button className='border border-gray-600 max-sm:border-none rounded-full md:px-5 md:py-2 text-gradient text-sm'>Contact</button>

                <div className="flex gap-x-8 max-sm:gap-6 max-w-max mx-auto lg:mx-0 overflow-hidden text-xl"
                >
                  <div className="bg-black rounded-full text-gray-300 hover:scale-110 p-2">
                    <a href="https://github.com/onkar895">
                      <PiGithubLogoFill />
                    </a>
                  </div>
                  <div className="bg-black rounded-full text-gray-300 hover:scale-110 p-2">
                    <a href="https://www.linkedin.com/in/omkarkarale541/">
                      {" "}
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="bg-black rounded-full text-gray-300 hover:scale-110 p-2">
                    <a href="mailto:onkarkarale4@gmail.com">
                      {" "}
                      <MdEmail />
                    </a>
                  </div>
                  <div className="bg-black rounded-full text-gray-300 hover:scale-110 p-2">
                    <a href="https://discord.com/users/Onkar895">
                      {" "}
                      <FaDiscord />
                    </a>
                  </div>
                  <div className="bg-black rounded-full  text-gray-300 hover:scale-110 p-2">
                    <a href="https://twitter.com/Onkar895">
                      {" "}
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-5 max-sm:mr-6'>
            <img
              className="object-cover md:h-[95%] lg:w-[60vw] md:w-[100vw] sm:m-0 rounded-full"
              src="https://i.postimg.cc/Y2392L4K/Mypic-Photoroom-png-Photoroom.png"
              alt="minePic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
