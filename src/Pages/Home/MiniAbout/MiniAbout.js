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
      <div className="flex flex-col lg:flex-row justify-between md:px-96 text-[#77838F] gap-12 py-10">
        <aside className="flex flex-col items-center">
          <p className="font-semibold mb-2 text-5xl font-Jost">4M</p>
          <p className="text-sm font-Jost">4 million daily active users</p>
        </aside>
        <aside className="flex flex-col items-center">
          <p className="font-semibold mb-2 text-5xl font-Jost">12K</p>
          <p className="text-sm font-Jost">Over 12k open job positions</p>
        </aside>
        <aside className="flex flex-col items-center">
          <p className="font-semibold mb-2 text-5xl font-Jost">20M</p>
          <p className="text-sm font-Jost">Over 20 million stories shared</p>
        </aside>
      </div>
    </div>
  );
};

export default MiniAbout;
