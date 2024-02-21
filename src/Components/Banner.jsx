/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import HII from '../assets/HII.gif'
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='flex items-center md:mt-5'>
      <div className='container mx-auto md:px-12'>
        <div className='flex max-sm:flex-wrap-reverse items-center'>
          <div className='flex flex-col gap-2 max-sm:mt-10 max-sm:mx-auto text-center lg:text-start'>
            <div className='max-sm:space-y-4 space-y-2'>
              <h1 data-aos="fade-up" data-aos-duration="2000" className='flex items-center gap-2 lg:text-sm text-2xl animate-pulse text-gray-400 justify-center lg:justify-start'>Hello there ! <img src={HII} alt="" className='w-7 h-7 lg:w-5 lg:h-5 hover:scale-125 cursor-pointer' /></h1>
              <h1 data-aos="fade-up" data-aos-duration="2000" className='font-bold py-2 text-[40px]'> I'm Omkar <span>Karale</span> </h1>
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
            <div className="mt-2 flex flex-col md:gap-4 gap-6 w-full mx-auto">
              <p data-aos="fade-up" data-aos-duration="2000" className="text-[1.1rem] lg:w-[77.2%] text-gray-400 sm:text-[.95rem] text-justify">  I’m highly skilled in Frontend Development specializing in building scalable and top-notch web applications,having experience in HTML5, CSS3, Tailwind CSS, Material UI, JavaScript, React.js, Redux.js and Redux-Toolkit to create visually appealing and interactive user interfaces.
              </p>
              <div className="tracking-widest shadow-2x font-bold">
                <h1 data-aos="fade-up" data-aos-duration="2000" className='text-gray-300 max-sm:text-sm'>LET'S BUILD SOMETHING TOGETHER...</h1>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className='flex flex-wrap justify-between max-sm:px-3 lg:w-[77.2%] max-sm:gap-y-8 md:gap-y-5 lg:gap-y-0 py-1 cursor-pointer'>
                <NavLink to='https://drive.google.com/file/d/1TmtA6Ft8Pc5-cBfQF66-Xm0NvO7dEapp/view?usp=drive_link' className='flex items-center gap-2 text-sm btn px-6'>
                  <span>Resume</span>
                  <FiDownload className='text-xs' />
                </NavLink>
                <NavLink to='/contact'
                  className='border border-gray-600 rounded-full px-8 py-2 text-gradient text-sm cursor-pointer'>
                  <span className='font-bolder'>Contact</span>
                </NavLink>

                <div className="flex gap-x-8 max-sm:gap-10 max-w-max overflow-hidden text-xl max-sm:mx-auto"
                >
                  <div className="bg-transparent backdrop-blur rounded-full border border-gray-600 text-white/50 p-2 hover:bg-white hover:text-black ">
                    <a href="https://github.com/onkar895">
                      <PiGithubLogoFill className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border border-gray-600 text-white/50 p-2 hover:bg-blue-500 hover:text-white">
                    <a href="https://www.linkedin.com/in/omkarkarale541/">
                      <FaLinkedinIn className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border border-gray-600 text-white/50 p-2 hover:bg-red-500 hover:text-white">
                    <a href="mailto:onkarkarale4@gmail.com">
                      <MdEmail className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border border-gray-600 text-white/50 p-2 hover:bg-purple-600 hover:text-white">
                    <a href="https://discord.com/users/Onkar895">
                      <FaDiscord className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                  <div className="bg-transparent backdrop-blur rounded-full border border-gray-600 text-white/50 p-2 hover:bg-black hover:text-white">
                    <a href="https://twitter.com/Onkar895">
                      <FaXTwitter className='transition-all duration-500 hover:scale-125' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className='hidden lg:flex rounded-full'>
            <img
              className="object-cover md:h-[95%] lg:w-[60vw] md:w-[100vw] sm:m-0 rounded-full cursor-pointer hover:scale-110 transition-all duration-700"
              src="https://i.postimg.cc/Y2392L4K/Mypic-Photoroom-png-Photoroom.png"
              alt="MyPic"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
