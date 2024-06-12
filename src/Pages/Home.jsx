/* eslint-disable no-unused-vars */
// Home.js
import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Work from './Work';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='md:my-24 my-20'>
      <div className='flex flex-col gap-6 lg:px-6 max-sm:px-4'>
        <Banner />
        <About />
        <Work />
        <Footer />
        <div className='text-center mt-16 max-sm:mt-12'>
          <span className='text-xs md:font-bold'><span className='text-gray-400'>Copyright @ 2024,</span> Designed and Developed by Omkar Karale 😍</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
