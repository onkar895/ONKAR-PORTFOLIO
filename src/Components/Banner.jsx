/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className='max-sm:section flex items-center md:min-h-[60vh] lg:min-h-[100vh]' id='home'>
      <div className='container mx-auto md:px-12'>
        <div className='flex max-sm:flex-wrap-reverse items-center'>
          <div className='flex flex-col max-sm:mt-5'>
            <div className='text-[40px] max-sm:text-[30px]'>
              <h1 data-aos="fade-up" className='font-bold py-2'>Hello, I'm Omkar <span>Karale</span> </h1>
              <div className='text-[20px] max-sm:text-[16px] lg:text-[22px] font-semibold uppercase'>
                <TypeAnimation
                  sequence={["Passionate Web Developer", 2000, "Specialized in FrontEnd Developement", 2000, ""]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  data-aos="fade-up"
                  className="text-gradient"
                />
              </div>
            </div>
            <div className="mt-2 flex flex-col md:gap-4 gap-6 mx-auto">
              <p data-aos="fade-up" className="text-[1.1rem] md:w-full text-gray-400 sm:text-[.95rem] text-justify">  I’m highly skilled in Frontend Development specializing in building scalable and top-notch web applications,having experience in HTML5, CSS3, Tailwind CSS, Material UI, JavaScript, React.js, Redux.js and Redux-Toolkit to create visually appealing and interactive user interfaces
              </p>
              <div className="tracking-widest shadow-2x font-bold">
                <h1 data-aos="fade-up" className='text-gray-300 max-sm:text-sm'>LET'S BUILD SOMETHING TOGETHER...</h1>
              </div>
              <div data-aos="fade-up" className='flex max-sm:flex-wrap gap-x-8 max-sm:gap-x-16 max-w-max max-sm:gap-y-5 md:gap-y-5 lg:gap-y-0 py-1 '>
                <div className='flex items-center gap-2 text-sm btn px-3 max-sm:mx-auto'>
                  <a href="https://drive.google.com/file/d/1TmtA6Ft8Pc5-cBfQF66-Xm0NvO7dEapp/view?usp=drive_link" >Download My Resume
                  </a>
                  <FiDownload className='text-xs' />
                </div>
                <button className='border border-gray-600 rounded-full px-6 py-2 text-gradient text-sm max-sm:mx-auto'>Contact</button>

                <div className="flex gap-x-8 max-sm:gap-10 max-w-max max-sm:mx-auto overflow-hidden text-xl"
                >
                  <div className="bg-black/10 backdrop-blur rounded-full border border-gray-600 text-white/50 hover:scale-90 p-2 hover:bg-white hover:text-black">
                    <a href="https://github.com/onkar895">
                      <PiGithubLogoFill />
                    </a>
                  </div>
                  <div className="bg-black/10 backdrop-blur rounded-full border border-gray-600 text-white/50 hover:scale-90 p-2 hover:bg-blue-500 hover:text-white">
                    <a href="https://www.linkedin.com/in/omkarkarale541/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="bg-black/10 backdrop-blur rounded-full border border-gray-600 text-white/50 hover:scale-90 p-2 hover:bg-red-500 hover:text-white">
                    <a href="mailto:onkarkarale4@gmail.com">
                      <MdEmail />
                    </a>
                  </div>
                  <div className="bg-black/10 backdrop-blur rounded-full border border-gray-600 text-white/50 hover:scale-90 p-2 hover:bg-purple-600 hover:text-white">
                    <a href="https://discord.com/users/Onkar895">
                      <FaDiscord />
                    </a>
                  </div>
                  <div className="bg-black/10 backdrop-blur rounded-full border border-gray-600 text-white/50 hover:scale-90 p-2 hover:bg-black hover:text-white">
                    <a href="https://twitter.com/Onkar895">
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex'>
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
