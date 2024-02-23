/* eslint-disable no-unused-vars */
// Home.js
import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Work from './Work';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='lg:mt-28 my-20'>
      <Banner />
      <div className='flex flex-col lg:gap-10 gap-6 mt-8'>
        <About />
        <Work />
        <Footer />
        <div className='text-center'>
          <span className='text-xs'><span className='text-gray-400'>@2024,</span> Omkar Karale 😍</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
