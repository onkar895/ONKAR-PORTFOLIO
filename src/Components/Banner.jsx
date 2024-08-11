import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import HII from '../assets/HII.gif'
import { NavLink } from 'react-router-dom';
import PIC from '../assets/PIC.png'
import { FaPhone } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";


const Banner = () => {

  const Icons = "text-white/80 font-extrabold transition-all ease-in-out duration-300 hover:text-white hover:brightness-200 hover:scale-110 text-2xl";

  // const work = "text-sm space-y-1 transition-all ease-in-out duration-700 cursor-pointer font-extrabold text-gradient brightness-150 hover:brightness-200 hover:text-gradient hover:-translate-y-1"

  // const Hline = "w-full h-1 mt-1 bg-gradient-to-r from-cyan-400 to-[#8124f2] animate-slideFade"

  return (
    <section className='relative flex' data-aos="fade-up" data-aos-duration="2000">
      <div className=''>
        <div className='lg:flex items-center justify-center lg:space-y-0 space-y-20 '>
          <div className='flex flex-col sm:mt-12 lg:gap-2 gap-4 max-sm:mt-10 max-sm:mx-auto lg:w-[100%]'>
            <div className='space-y-4 lg:w-[31vw] w-full flex flex-col max-sm:items-center sm:items-center md:items-center lg:items-start hide-scrollbar'>
              <h1 className='flex gap-2 items-center lg:text-md text-xl font-bold animate-pulse text-gray-400 cursor-pointer hover:-translate-y-1 transition-all duration-500'>Hello there ! <img src={HII} alt="" className='w-7 h-7 lg:w-5 lg:h-5' /></h1>
              <h1 className='font-extrabold py-2 lg:text-[2.5rem] text-[2.25rem] min-[320px]:text-[2rem] min-[1024px]:text-[2.625rem] tracking-widest img'> I'm Omkar Karale</h1>
              <div className='lg:w-full max-sm:w-[82%] md:w-[60%] h-1 bg-gradient-to-r from-cyan-400 to-[#8124f2] animate-slideFade brightness-125'></div>
              <div className='text-xl font-semibold text-gradient brightness-125 hover:brightness-150 hover:text-gradient'>
                <TypeAnimation
                  sequence={["Aspiring Frontend Enthusiast", 2000, "Passionate Web Developer", 2000, "Eager Learner of Web Wizardry", 2000]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
            </div>
            <div className="flex flex-col lg:items-start items-center md:gap-6 gap-8 w-full mx-auto">
              <p className="text-[1.1rem] lg:w-[77.2%] text-gray-400 sm:text-[.95rem] text-justify">  I’m highly skilled in Frontend Development specialized in React.js, JavaScript, and modern web development frameworks and CSS libraries. Passionate about delivering user-friendly, engaging and performance-optimized user interfaces.
              </p>
              <div className="tracking-widest shadow-2x font-bold hide-scrollbar">
                <h1 data-aos="fade-up" data-aos-duration="2000" className='text-gray-300 lg:text-xl md:text-2xl max-xs:text-[18px] sm:text-2xl max-sm:text-xl '>Let's Build Something Together...✨</h1>
              </div>
              <div className='flex min-[1024px]:flex-nowrap min-[1024px]:gap-10 flex-wrap justify-between md:w-[100%] lg:w-[80%] w-[100%] sm:gap-y-12 max-sm:gap-y-12 md:gap-y-5 lg:gap-y-0 lg:py-2 py-3 cursor-pointer'>
                <div className={`md:hidden min-[1024px]:hidden sm:hidden content`}>
                  <NavLink to='https://drive.google.com/file/d/183G6ne7M3jHyYJgtHW0A9-aeUCmxgyJ3/view?usp=sharing'>
                    <span className="flex items-center gap-2 px-4 tracking-widest text-gradient hover:-translate-y-1 transition-all ease-in-out duration-700">
                      <strong> Resume🔻</strong>
                      {/* <TiArrowSortedDown /> */}
                    </span>
                    {/* <div className={Hline}></div> */}
                  </NavLink>
                </div>
                <div className='content'>
                  <NavLink to='/contact'>
                    <span className="flex items-center gap-2 px-4 tracking-widest text-gradient hover:-translate-y-1 transition-all ease-in-out duration-700 image">
                      Contact📞
                      {/* <FaPhone /> */}
                    </span>
                    {/* <div className={Hline}></div> */}
                  </NavLink>
                </div>
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
            <img src={PIC} alt="Profile" className='img lg:mt-6' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
