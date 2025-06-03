import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center py-8 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-15 h-15" />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium text-base font-zen">
          {["Home", "About", "Projects", "Testimonials"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Google Button */}
        <button
          type="button"
          className="hidden md:flex items-center gap-2 text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 transition duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 18 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Navbar;
