import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { MdOutlineRemove } from "react-icons/md";

const Experience = () => {
  return (
    <div className='w-full shadow-inner shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-300  bg-gradient-to-b from-[#14141b] to-[#1c132e] backdrop-blur rounded-xl py-6 px-5 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300'>
      <h3 data-aos="fade-up" data-aos-duration="2000" className="font-bold lg:text-lg text-xl text-center text-gradient brightness-125 hover:text-gradient hover:brightness-150 tracking-wider ">Experience</h3>
      <div className='my-5'>
        <div className='flex items-center justify-between flex-wrap max-sm:justify-center max-sm:gap-2'>
          <div className='text-center md:text-start text-sm'>
            <h4 className='font-extrabold text-gradient brightness-125'>Frontend Developer</h4>
            <p className='italic'>Infosonic Software Solutions Pvt. Ltd. &nbsp; · Full-time</p>
          </div>
          <div className='text-sm md:text-end text-white/70 max-sm:text-center'>
            <span className='italic'>Oct 2022 - Present</span>
            <p>Kolhapur, Maharashtra, India · Hybrid</p>
          </div>
        </div>
        <div className='text-sm text-justify text-white/70'>
          <ul className='my-4'>
            <li className='mb-2 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl' />
              Designed and delivered responsive, high-performance user interfaces using React.js, ensuring a consistent and seamless experience across all devices and platforms.
            </li>
            <li className='mb-2 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-2xl text-lg' />
              Actively contributed to code reviews, identifying and resolving bugs while enhancing overall code quality.
              Provided critical input on UI/UX design improvements, optimizing application flow and user experience.
            </li>
            <li className='mb-2 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl' />
              Collaborated closely with senior developers to refine user interface designs, contributing to the continuous improvement of coding standards and best practices across the team.
            </li>
            <li className='mb-2 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl' />
              Gained hands-on experience in web development, focusing on front-end technologies including HTML5, CSS3, JavaScript, React.js, and React-Bootstrap.
            </li>
            <li className='mb-2 flex items-center gap-2'>
              <MdOutlineRemove className='font-extrabold max-sm:text-xl' />
              Utilized Git and GitHub for version control and collaborative development, ensuring streamlined code management and project tracking.
            </li>
          </ul>

          <div>
            <p><h4 className='text-white font-bold'>Skills:</h4> React.js, HTML5, Cascading Style Sheets, (CSS), Bootstrap (Framework), JavaScript, User Experience (UX), User Interface Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
