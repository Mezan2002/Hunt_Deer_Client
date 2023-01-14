import React from "react";
import { FaAngleRight } from "react-icons/fa";

const FeaturedCity = () => {
  return (
    <div className="my-20">
      <div className="mb-10 md:px-80 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-medium">Featured Cities</h2>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
          </p>
        </div>
        <div>
          <p className="flex items-center text-primary">
            Browse All Locations <FaAngleRight></FaAngleRight>{" "}
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div>
            <div className="relative">
              <img
                src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/04/newyork.jpg"
                alt=""
                className="rounded-xl mr-5"
              />
              <div className="absolute bottom-5 left-7 text-white">
                <h2 className="text-xl font-medium">New York</h2>
                <p>20 jobs</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <img
                src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/04/london.jpg"
                alt=""
              />
              <div className="absolute bottom-5 left-7 text-white">
                <h2 className="text-xl font-medium">London</h2>
                <p>20 jobs</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/04/paris.jpg"
                alt=""
              />
              <div className="absolute bottom-5 left-7 text-white">
                <h2 className="text-xl font-medium">Paris</h2>
                <p>20 jobs</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/04/miami.jpg"
                alt=""
              />
              <div className="absolute bottom-5 left-7 text-white">
                <h2 className="text-xl font-medium">Miami</h2>
                <p>20 jobs</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/04/los.jpg"
                alt=""
              />
              <div className="absolute bottom-5 left-7 text-white">
                <h2 className="text-xl font-medium">Los Angeles</h2>
                <p>20 jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCity;
