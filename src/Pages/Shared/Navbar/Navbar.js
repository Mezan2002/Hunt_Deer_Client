import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Find Jobs</a>
      </li>
      <li>
        <a href="/">Employers</a>
      </li>
      <li>
        <a href="/">FAQ</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </>
  );
  return (
    <section className="bg-gradient-to-l from-[#E8EEFA] to-[#F2F5FC]">
      <div>
        <div className="navbar md:px-10">
          <div className="navbar-start">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className="md:w-20 w-10"
                  src="https://i.ibb.co/ggNmRwZ/Hunt-Dear-1.png"
                  alt=""
                />
              </Link>
              <h2 className="text-2xl font-semibold ml-2">HuntDeer</h2>
            </div>
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal p-0">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center mr-2 md:hidden">
              <span>
                {" "}
                <FaUser className="text-2xl mr-4"></FaUser>{" "}
              </span>
              <span>
                <FaBell className="text-2xl"></FaBell>
              </span>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <button className="btn btn-outline">Login/Register</button>
            <button className="btn btn-primary text-white ml-4">
              Job Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
