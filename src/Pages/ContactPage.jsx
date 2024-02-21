/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Contact from './Contact'
import Footer from '../Components/Footer';

const ContactPage = () => {
  return (
    <div className='space-y-5 my-16'>
      <Contact />
      <Footer />
      <div className='text-center mt-10'>
        <span className='text-xs'><span className='text-gray-400'>@2024,</span> Omkar Karale 😍</span>
      </div>
    </div>
  );
}

export default ContactPage;
