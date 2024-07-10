import React from 'react';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Connect from '../Components/Connect';

const About = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000">
      <div className="mx-auto lg:px-12 md:px-4 w-full h-full mt-16 max-sm:mt-10 hide-scrollbar">
        <div className="pb-6 mx-auto text-center font-extrabold lg:text-xl text-2xl">
          <h2>About Me</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-wrap lg:flex-nowrap lg:gap-3 gap-6 w-full">
          <Education />
          <Skills />
          <Connect />
        </div>
      </div>
    </section>
  );
};

export default About;
