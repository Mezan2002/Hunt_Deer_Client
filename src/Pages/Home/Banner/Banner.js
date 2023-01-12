import React from "react";
import { FaLocationArrow, FaSearch, FaSearchLocation } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-l from-[#E8EEFA] to-[#F2F5FC] pt-20">
      <div className="grid grid-cols-2 min-h-[90vh] px-40 my-20">
        <div>
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
