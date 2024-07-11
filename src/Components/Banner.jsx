import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import HII from '../assets/HII.gif'
import { NavLink } from 'react-router-dom';
import Profile from '../assets/Profile.png'
import about from '../assets/about.png'
import PIC from '../assets/PIC.png'

const Banner = () => {

  const Icons = "text-white/80 font-extrabold transition-all ease-in-out duration-300 hover:text-white hover:brightness-200 hover:scale-110 text-2xl";

  const contact = "border-2 text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-9 w-32 rounded-full bg-neutral-800 p-2 font-extrabold hover:bg-black/90"

  const circle = "absolute group-hover:-top-1 group-hover:-right-2 z-10 rounded-full group-hover:scale-150  duration-700"

  return (
    <section className='relative flex md:mt-8' data-aos="fade-up" data-aos-duration="2000">
      <div className='md:px-4 px-1 lg:px-12'>
        <div className='lg:flex items-center justify-center lg:space-y-0 space-y-20 '>
          <div className='flex flex-col lg:gap-2 gap-4 max-sm:mt-10 max-sm:mx-auto lg:w-[100%]'>
            <div className='space-y-4 lg:w-[31vw] w-full flex flex-col max-sm:items-center md:items-center lg:items-start hide-scrollbar'>
              <h1 className='flex gap-2 lg:text-md text-2xl font-bold animate-pulse text-gray-400 cursor-pointer hover:-translate-y-1 transition-all duration-500'>Hello there ! <img src={HII} alt="" className='w-7 h-7 lg:w-5 lg:h-5' /></h1>
              <h1 className='font-extrabold py-2 lg:text-[40px] text-[36px] min-[320px]:text-[32px] min-[1024px]:text-[42px] tracking-widest img'> I'm Omkar Karale</h1>
              <div className='w-full max-sm:w-[82%] h-1 bg-gradient-to-r from-cyan-400 to-[#8124f2] animate-slideFade'></div>
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
              <div className='flex min-[1024px]:flex-nowrap min-[1024px]:gap-10 flex-wrap justify-between md:w-[100%] lg:w-[80%] w-[100%] max-sm:gap-y-10 md:gap-y-5 lg:gap-y-0 py-4 cursor-pointer'>
                <NavLink to='https://drive.google.com/file/d/1sJ6ehg9bItwwTcvBQmLRxHxGVMasL2Pz/view?usp=sharing' className='flex items-center gap-2 text-sm btn px-6 py-2 md:hidden hover:-translate-y-1.2 transition-all duration-500'>
                  <span>Resume</span>
                  <FiDownload className='text-sm' />
                </NavLink>

                <NavLink to='/contact'>
                  <button className={contact}>
                    <div className={`${circle} w-16 h-16 right-12 top-12 bg-orange-300`}></div>
                    <div className={`${circle} w-12 h-12 right-20 -top-6 bg-gradient-to-l from-cyan-400 to-purple-500`}></div>
                    <div className={`${circle} w-8 h-8  right-32 bottom-6 bg-orange-500`}></div>
                    <div className={`${circle} w-8 h-8  right-0 top-6 bg-pink-400`}></div>
                    <p className="z-10 absolute top-[15%] left-[30%] text-sm"><span>Contact</span></p>
                  </button>
                </NavLink>
                <div className="flex items-center space-x-6 w-[65%] max-sm:justify-between max-sm:w-[100%] justify-evenly overflow-hidden max-sm:mx-auto">
                  <div className={Icons}>
                    <a href="https://github.com/onkar895">
                      <AiFillGithub />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="https://www.linkedin.com/in/omkarkarale541/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="mailto:onkarkarale4@gmail.com">
                      <SiGmail />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="https://www.instagram.com/i_m_o_n_k_a_r_895/">
                      <AiFillInstagram />
                    </a>
                  </div>
                  <div className={Icons}>
                    <a href="https://twitter.com/Onkar895">
                      <AiOutlineTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-[50%] md:w-[60%] w-[100%] hover:animate-pulse lg:mx-0 md:mx-[20%]' data-aos="fade-left" data-aos-duration="2000" >
            <img src={PIC} alt="Profile" className='img lg:pb-5' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
