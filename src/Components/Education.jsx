/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {

  // const educationDetails = [
  //   {
  //     title: "Specialization in Full Stack Web Development",
  //     institution: "LetsUpgrade.in, Remote, MH, India",
  //     duration: "Oct 2022 - Oct 2023"
  //   },
  //   {
  //     title: "Bachelor of Engineering (Information Tech.)",
  //     institution: "AISSMS IOIT, University of Pune, MH, India",
  //     duration: "Aug 2016 - July 2021"
  //   },
  //   {
  //     title: "12th Science",
  //     institution: "Jayshree Thorat College, Karad, MH, India",
  //     duration: "June 2015 - July 2016"
  //   }
  // ];

  return (
    <div className="w-full lg:w-1/3 shadow-inner shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-300  bg-gradient-to-b from-[#14141b] to-white/10 backdrop-blur rounded-xl py-6 px-5 overflow-hidden cursor-pointer hover:scale-95 transition-all duration-300">
      <h3 data-aos="fade-up" data-aos-duration="2000" className="font-bold lg:text-lg text-2xl text-center text-gradient tracking-wide">Education</h3>
      <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col lg:gap-y-8 gap-y-4">
        <div className="flex space-x-4 mt-10 lg:mx-0 mx-auto">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-cyan-200 bg-opacity-60 rounded-full shadow-md"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-cyan-800 bg-opacity-30"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-sm md:text-lg">
            <h6 className="text-white">
              Specialization in Full Stack Web
              Developement
            </h6>
            <p className="text-gray-400">
              LetsUpgrade.in, Remote, MH, India
            </p>
            <p className="text-gray-400">
              Oct 2022 - Oct 2023
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mx-auto lg:mx-0">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-cyan-200 bg-opacity-60 rounded-full"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-cyan-800 bg-opacity-30"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-sm md:text-lg">
            <h6 className="text-white">
              Bachelor of Engineering (Information Tech.)
              <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
            </h6>
            <p className="text-gray-400">
              AISSMS IOIT, University of Pune, MH, India
            </p>
            <p className="text-gray-400">
              Aug 2016 - July 2021
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mx-auto lg:mx-0">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-cyan-200 bg-opacity-60 rounded-full"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-cyan-800 bg-opacity-30"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm lg:text-sm md:text-lg">
            <h6 className="text-white">
              12th Science
            </h6>
            <p className="text-gray-400">
              Jayshree Thorat College , Karad, MH, India
              <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
            </p>
            <p className="text-gray-400">
              June 2015 - July 2016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;