/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Contact from './Contact'
import Footer from '../Components/Footer';

const ContactPage = () => {
  return (
    <div className='my-24 hide-scrollbar'>
      <Contact />
      <Footer />
      <div className='text-center mt-20'>
        <span className='text-xs font-bold'><span className='text-gray-400'>Copyright @ 2024,</span> Designed and Developed by Omkar Karale 😍</span>
      </div>
    </div>
  );
}

export default ContactPage;
