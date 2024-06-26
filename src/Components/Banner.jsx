/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiDownload, FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import HII from '../assets/HII.gif'
import { NavLink } from 'react-router-dom';
import MyResume from '../assets/Omkar_Karale_Resume.pdf'
import Profile from '../assets/Profile.png'

const Banner = () => {

  const Icons = "text-white/80 font-extrabold p-2 transition-all ease-in-out duration-300 hover:text-white hover:brightness-200 hover:scale-110 text-3xl";

  // const Contact = 'bg-transparent border border-gray-600 hover:border-cyan-900 rounded-full px-8 py-2 flex items-center text-gradient text-sm cursor-pointer hover:brightness-200 md:brightness-100 brightness-150 md:shadow-[0_2px_0_-2px_#B855F9,0_5px_0_-4px_#F8829E,0_8px_16px_-3px_#42A6E3] transition-all ease-in-out duration-500'

  return (
    <section className='flex md:mt-8' data-aos="fade-up" data-aos-duration="2000">
      <div className='md:px-4 px-1'>
        <div className='lg:flex lg:space-y-0 space-y-14'>
          <div className='flex flex-col lg:gap-2 gap-4 max-sm:mt-10 max-sm:mx-auto lg:w-[80%] lg:pl-8 md:px-2 lg:px-0'>
            <div className='space-y-4 lg:w-[31vw] w-full flex flex-col max-sm:items-center md:items-center lg:items-start hide-scrollbar'>
              <h1 className='flex gap-2 lg:text-md text-2xl font-bold animate-pulse text-gray-400 cursor-pointer hover:-translate-y-1 transition-all duration-500'>Hello there ! <img src={HII} alt="" className='w-7 h-7 lg:w-5 lg:h-5' /></h1>
              <h1 className='font-extrabold py-2 lg:text-[40px] text-[36px] min-[320px]:text-[32px] min-[1024px]:text-[42px] tracking-widest img'> I'm Omkar Karale</h1>
              <div className='w-full h-1 bg-gradient-to-l from-purple-400 to-blue-500 animate-slideFade'></div>
              <div className='text-[20px] min-[320px]:text-[18px] min-[1024px]:text-[16px] font-semibold uppercase'>
                <TypeAnimation
                  sequence={["Aspiring Frontend Enthusiast", 2000, "Passionate Web Developer", 2000, "Eager Learner of Web Wizardry", 2000]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gradient"
                />
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center md:gap-6 gap-8 w-full mx-auto">
              <p className="text-[1.1rem] lg:w-[77.2%] text-gray-400 sm:text-[.95rem] text-justify">  I’m highly skilled in Frontend Development specialized in React.js, JavaScript, and modern web development frameworks and CSS libraries. Passionate about delivering user-friendly, engaging and performance-optimized user interfaces.
              </p>
              <div className="tracking-widest shadow-2x font-bold hide-scrollbar">
                <h1 data-aos="fade-up" data-aos-duration="2000" className='text-gray-300 max-sm:text-sm'>LET'S BUILD SOMETHING TOGETHER...✨</h1>
              </div>
              <div className='flex min-[1024px]:flex-nowrap min-[1024px]:gap-10 flex-wrap justify-between md:w-[70%] w-[100%] max-sm:gap-y-10 md:gap-y-5 lg:gap-y-0 py-4 cursor-pointer'>
                <NavLink to='https://drive.google.com/file/d/12c7P3RFzzo-7xWmmPeDOFt5JIkaebgQG/view?usp=sharing' className='flex items-center gap-2 text-sm btn px-6 py-2 md:hidden hover:-translate-y-1.2 transition-all duration-500'>
                  <span>Resume</span>
                  <FiDownload className='text-sm' />
                </NavLink>

                <NavLink to='/contact'>
                  <button class="border-2 text-gray-50  duration-300 relative group cursor-pointer overflow-hidden h-10 w-32 rounded-full bg-neutral-800 p-2  font-extrabold hover:bg-black/90">
                    <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-purple-500"></div>
                    <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-gradient-to-l from-purple-400 to-blue-500"></div>
                    <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 bottom-6 bg-orange-300"></div>
                    <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-0 top-6 bg-pink-400"></div>
                    <p class="z-10 absolute bottom-2 left-9 text-sm"><span className=''>Contact</span></p>
                  </button>
                </NavLink>
                <div className="flex items-center space-x-6 w-[65%] max-sm:justify-between max-sm:w-[100%] justify-evenly overflow-hidden max-sm:mx-auto">
                  <div className={Icons}>
                    <a href="https://github.com/onkar895">
                      <FiGithub />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="https://www.linkedin.com/in/omkarkarale541/">
                      <PiLinkedinLogoBold />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="mailto:onkarkarale4@gmail.com">
                      <MdOutlineMailOutline />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="https://wa.me/9921374887">
                      <FaWhatsapp />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="https://twitter.com/Onkar895">
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-[40%] hover:animate-pulse' data-aos="fade-left" data-aos-duration="2000" >
            <img src={Profile} alt="Profile" className='img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
