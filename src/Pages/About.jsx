import React from 'react';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Connect from '../Components/Connect';
import Experience from '../Components/Experience';

const About = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000">
      <div className="mx-auto w-full h-full mt-16 hide-scrollbar">
        <div className="pb-6 mx-auto text-center font-extrabold lg:text-xl text-2xl">
          <span className='text-gradient brightness-125 hover:brightness-200 hover:text-gradient tracking-wider'>About Me</span>
        </div>
        <div className='w-full my-6' data-aos="fade-up" data-aos-duration="2000" >
          <Experience />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-wrap lg:flex-nowrap lg:gap-3 gap-6 w-full mt-2">
          <Education />
          <Skills />
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default About;
