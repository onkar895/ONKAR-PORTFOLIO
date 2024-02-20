/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const WorkData = ({ info }) => {
  return (
    <div className=''>
      <div data-aos="fade-up" data-aos-duration="2000" className='lg:w-[26.8vw] lg:h-[38vh] w-[85vw] h-[28vh] md:w-[40vw] md:h-[20vh] flex items-center justify-center shadow-inner shadow-cyan-800 bg-transparent backdrop-blur rounded-xl overflow-hidden hover:overflow-hidden cursor-pointer '>
        <img src={info.img} alt={info.title} className='lg:w-[21vw] lg:h-[26vh] w-[77vw] h-[24vh] md:w-[36vw] md:h-[17vh] rounded-xl hover:scale-[1.3] transition-all shadow-2xl shadow-cyan-300 object-fit' />
      </div>
    </div>
  )
}

export default WorkData
