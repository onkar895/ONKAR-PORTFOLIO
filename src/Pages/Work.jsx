/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { data } from '../Data/data'
import WorkData from '../Components/WorkData'

const Work = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className='mx-auto md:px-12 w-full h-full'>
      <div className='shadow-inner shadow-cyan-900 bg-transparent backdrop-blur rounded-xl py-8 hide-scrollbar'>
        <div className='flex flex-col items-center max-sm:justify-center gap-y-3 px-3'>
          <h2 className='font-bold text-2xl min-[320px]:text-xl tracking-wide'>My Recent <span className='text-gradient tracking-wide'>Works & Projects</span></h2>
          <div className='text-center'>
            <p className='text-sm text-gray-400'>See the results of my work: passionately created designs that are loaded with passion and commitment;</p>
            <p className='text-sm text-gray-400'>each one perfectly captures the heart and soul I've put into each and every detail.</p>
          </div>
        </div>
        <div className='flex justify-center relative flex-wrap items-center overflow-hidden lg:gap-[1rem] gap-[2rem] mx-auto pt-8 px-3'>
          {
            data.map((info) => {
              return (
                <WorkData key={info.id} info={info} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Work
