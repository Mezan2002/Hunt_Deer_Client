import React from "react";
import {
  FaFileExport,
  FaFileUpload,
  FaLocationArrow,
  FaSearch,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-[#E8EEFA] to-[#F2F5FC]">
      <div className="flex items-center relative justify-between min-h-[90vh] md:px-40">
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
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/3SNzbqs/slider112-removebg-preview-1.png"
              alt=""
              className="mt-[-90px] w-full"
            />
          </div>
        </div>
        <div className="text-center absolute bottom-8 right-[43%]">
          <button className="btn btn-outline">
            {" "}
            <span>
              {" "}
              <FaFileUpload className="mr-4 text-2xl"></FaFileUpload>{" "}
            </span>{" "}
            Upload Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
