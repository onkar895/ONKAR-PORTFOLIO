/* eslint-disable no-unused-vars */
// Home.js
import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Work from './Work';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='md:my-28 my-20'>
      <Banner />
      <div className='flex flex-col gap-6 mt-8'>
        <About />
        <Work />
        <Footer />
        <div className='text-center'>
          <span className='text-xs md:font-bold'><span className='text-gray-400'>Copyright @ 2024,</span> Designed and Developed by Omkar Karale 😍</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
