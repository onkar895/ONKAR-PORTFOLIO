/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {
  return (
    <div className="lg:w-[33.33%] w-full shadow-2xl shadow-black  bg-white/5 backdrop-blur-2xl rounded-xl py-6 px-5 overflow-hidden drop-shadow-2xl cursor-pointer hover:scale-95 transition-all duration-300">
      <h3 className="font-bold text-xl text-gradient tracking-wide">Education</h3>
      <div className="flex flex-col gap-4">
        <div className="flex space-x-5 items-start mt-5">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-gray-500 rounded-full shadow-md"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
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
        <div className="flex space-x-5 items-start">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <h6 className="text-white">
              Bachelor of Engineering (Information Tech.)
            </h6>
            <p className="text-gray-400">
              AISSMS IOIT, University of Pune, MH, India
            </p>
            <p className="text-gray-400">
              Aug 2016 - July 2021
            </p>
          </div>
        </div>
        <div className="flex space-x-5 items-start">
          <div className="mt-[5px]">
            <div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>
            <div className="h-20 w-[1px] ml-[2px] bg-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <h6 className="text-white">
              12th Science
            </h6>
            <p className="text-gray-400">
              Jyashree Thorat College , Karad, MH, India
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
