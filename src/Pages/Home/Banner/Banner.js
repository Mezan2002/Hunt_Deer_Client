import React from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-[#E8EEFA] to-[#F2F5FC]">
      <div className="flex items-center justify-between min-h-[90vh] px-40">
        <div className="w-1/2">
          <div>
            <h2 className="uppercase text-4xl font-semibold">
              We Have a lots of jobs for you, Find Your Perfect Job Match
            </h2>
            <h5 className="my-10 text-lg">
              Find Jobs, Employment & Career Opportunities
            </h5>
          </div>
          <div className="bg-white w-full py-2 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center pl-6">
                <FaSearch className="mr-4 text-2xl"></FaSearch>
                <input
                  type="text"
                  className="focus:outline-none"
                  placeholder="job title, keyword..."
                />
              </div>
              <div className="flex items-center pl-10">
                <FaLocationArrow className="mr-4 text-2xl"></FaLocationArrow>
                <input
                  type="text"
                  className="focus:outline-none"
                  placeholder="location"
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary text-white mr-3"
                value="Find Job"
              />
            </div>
          </div>
          <div className="my-10">
            <h2>
              Popular Searches : Designer Developer Web IOS PHP Senior Engineer
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-xl font-medium">5k+ candidates</p>
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral-focus text-white">
                  <span className="text-xl">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {/* <div className="rounded-full w-[550px] h-[550px] border-dashed border-2 border-indigo-200 absolute top-9 right-[79px] z-0"></div> */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/3SNzbqs/slider112-removebg-preview-1.png"
              alt=""
              className="mt-[-90px] w-full"
            />
          </div>
          {/* <div>
            <div className="">
              <div
                className="bg-white w-24 h-24 rounded-full flex items-center justify-center absolute 
               top-[-40px] right-0 animation"
              >
                <img
                  src="https://i.ibb.co/BzR6sYh/sketch.png"
                  className="w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center absolute 
               top-[-20px] left-80 animation"
              >
                <img
                  src="https://i.ibb.co/44whybs/html-5.png"
                  className="w-12"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center absolute 
               right-[-40px] bottom-0 animation"
              >
                <img
                  src="https://i.ibb.co/1JsKH6X/js.png"
                  className="w-12"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center absolute 
               bottom-32 left-56 animation"
              >
                <img
                  src="https://i.ibb.co/JsKWcfM/css-3.png"
                  className="w-12"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div
                className="bg-white w-20 h-20 rounded-full flex items-center justify-center absolute 
        bottom-[-97px] left-[470px] animation"
              >
                <img
                  src="https://i.ibb.co/JpvfzBr/photoshop.png"
                  className="w-14"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center absolute 
        top-[-30px] left-[500px] animation"
              >
                <img
                  src="https://i.ibb.co/VHfW5vN/illustrator.png"
                  className="w-10"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center absolute 
        top-48 right-[-30px] animation"
              >
                <img
                  src="https://i.ibb.co/ZH0YWYT/figma.png"
                  className="w-10"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
