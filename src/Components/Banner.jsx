/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import HII from '../assets/HII.gif'
import { NavLink } from 'react-router-dom';
import MyResume from '../assets/Omkar_Karale_Resume.pdf'
import Profile from '../assets/Profile.png'

const Banner = () => {
  return (
    <section className='flex md:mt-5'>
      <div className='container mx-auto'>
        <div className='lg:flex lg:space-y-0 space-y-14'>
          <div className='flex flex-col lg:gap-2 gap-4 max-sm:mt-10 max-sm:mx-auto lg:w-[80%] lg:pl-8 md:px-2 lg:px-0'>
            <div className='space-y-4 lg:w-[30vw] w-full flex flex-col max-sm:items-center md:items-center lg:items-start'>
              <h1 data-aos="fade-up" data-aos-duration="2000" className='flex gap-2 lg:text-sm text-2xl font-bold animate-pulse text-gray-400'>Hello there ! <img src={HII} alt="" className='w-7 h-7 lg:w-5 lg:h-5 hover:scale-125 cursor-pointer' /></h1>
              <h1 data-aos="fade-up" data-aos-duration="2000" className='font-bold py-2 lg:text-[40px] text-[36px] tracking-widest'> I'm Omkar <span>Karale</span></h1>
              <div className='text-[20px] font-semibold uppercase'>
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
              <p data-aos="fade-up" data-aos-duration="2000" className="text-[1.1rem] lg:w-[77.2%] text-gray-400 sm:text-[.95rem] text-justify">  I’m highly skilled in Frontend Development specialized in React.js, JavaScript, and modern web development frameworks and CSS libraries. Passionate about delivering user-friendly, engaging and performance-optimized user interfaces.
              </p>
              <div className="md:tracking-widest tracking-widest shadow-2x font-bold">
                <h1 data-aos="fade-up" data-aos-duration="2000" className='text-gray-300 max-sm:text-sm'>LET'S BUILD SOMETHING TOGETHER...✨</h1>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className='flex flex-wrap justify-between md:w-[70.2%] w-[100%] max-sm:gap-y-10 md:gap-y-5 lg:gap-y-0 py-1 cursor-pointer'>
                <NavLink to='https://drive.google.com/file/d/14X_rdNAwv1ZD9LmFS4-pR9_T6fSay2Kd/view?usp=sharing' className='flex items-center gap-2 text-sm btn px-6 md:hidden'>
                  <span>Resume</span>
                  <FiDownload className='text-sm' />
                </NavLink>
                <NavLink to='/contact'
                  className='bg-transparent border-2 border-gray-600 rounded-full px-8 py-2 text-gradient text-sm cursor-pointer shadow-2xl transition-all duration-500 hover:scale-95'>
                  <span className='font-bolder'>Contact</span>
                </NavLink>

                <div className="flex items-center space-x-8 max-sm:w-[100%] justify-between overflow-hidden text-2xl max-sm:mx-auto"
                >
                  <div className="bg-transparent backdrop-blur rounded-full border-2 border-gray-600 text-white p-2 hover:bg-white hover:text-black">
                    <a href="https://github.com/onkar895">
                      <PiGithubLogoFill className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border-2 border-gray-600 text-white p-2 hover:bg-blue-500 hover:text-white">
                    <a href="https://www.linkedin.com/in/omkarkarale541/">
                      <FaLinkedinIn className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border-2 border-gray-600 text-white p-2 hover:bg-red-500 hover:text-white">
                    <a href="mailto:onkarkarale4@gmail.com">
                      <MdEmail className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border-2 border-gray-600 text-white p-2 hover:bg-green-500 hover:text-white">
                    <a href=" https://wa.me/9921374887">
                      <FaWhatsapp className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border-2 border-gray-600 text-white p-2 hover:bg-black hover:text-white">
                    <a href="https://twitter.com/Onkar895">
                      <FaXTwitter className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-[35%]' >
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
