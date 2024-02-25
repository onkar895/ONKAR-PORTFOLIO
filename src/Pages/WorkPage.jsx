/* eslint-disable no-unused-vars */
import React from 'react'
import Work from './Work'
import Footer from '../Components/Footer'

const WorkPage = () => {
  return (
    <div className='my-20 space-y-5'>
      <Work />
      <Footer />
      <div className='text-center mt-10'>
        <span className='text-xs font-bold'><span className='text-gray-400'>@2024,</span> Omkar Karale 😍</span>
      </div>
    </div>
  )
}

export default WorkPage
