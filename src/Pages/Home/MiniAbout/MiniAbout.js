import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MiniAbout = () => {
  return (
    <div>
      <div className="hero mb-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img
              src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/work.jpg"
              className="rounded-lg"
              alt=""
            />
            <img
              src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/employers.png"
              alt=""
              className="absolute bottom-[-130px] right-[-150px]"
            />
          </div>
          <div className="w-1/2 px-20">
            <h1 className="text-4xl font-medium ">
              Millions of Jobs.Find the one that suits you.
            </h1>
            <p className="py-6">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
            </p>
            <div>
              <p className="flex items-center mb-5">
                {" "}
                <span>
                  {" "}
                  <FaCheckCircle className="mr-2"></FaCheckCircle>{" "}
                </span>{" "}
                Bring to the table win-win survival
              </p>
              <p className="flex items-center mb-5">
                {" "}
                <span>
                  {" "}
                  <FaCheckCircle className="mr-2"></FaCheckCircle>{" "}
                </span>{" "}
                Capitalize on low hanging fruit to identify
              </p>
              <p className="flex items-center mb-5">
                {" "}
                <span>
                  {" "}
                  <FaCheckCircle className="mr-2"></FaCheckCircle>{" "}
                </span>{" "}
                But I must explain to you how all this
              </p>
            </div>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniAbout;
