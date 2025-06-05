import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener to toggle background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div
      data-aos="fade-top"
      className={`fixed top-3 rounded-full left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-purple-900/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-15 h-15" />
        </div>

        {/* ✅ Fixed Nav Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium text-base font-zen">
          {["Home", "About", "Projects", "Testimonials"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-purple-500 hover:text-black hover:shadow-lg hover:shadow-purple-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Google Button */}
        <button
          type="button"
          className="hidden md:flex items-center gap-2 text-purple-600 hover:text-white border border-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 transition duration-300"
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

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Mobile Menu & Overlay */}
      {showMobileMenu && (
        <>
          <div
            onClick={() => setShowMobileMenu(false)}
            className="fixed top-0 left-0 w-screen h-screen z-40 bg-black bg-opacity-25 backdrop-blur-md"
          />
          <div
            className={`md:hidden fixed top-0 right-0 h-screen w-[75%] max-w-xs z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
              showMobileMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <img
                onClick={() => setShowMobileMenu(false)}
                src={assets.cross_icon}
                className="w-6 cursor-pointer"
                alt="close"
              />
            </div>

            <ul className="flex flex-col items-center gap-6 mt-10 text-white font-medium text-lg w-full">
              {["Home", "About", "Projects", "Testimonials"].map((item) => (
                <a
                  key={item}
                  onClick={() => setShowMobileMenu(false)}
                  href={`#${item.toLowerCase()}`}
                  className="block w-full text-center hover:text-purple-300"
                >
                  {item}
                </a>
              ))}
            </ul>

            <div className="flex justify-center mt-6 w-full">
              <button
                type="button"
                className="flex items-center gap-2 justify-center bg-white hover:bg-purple-700 hover:text-white border border-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2 transition duration-300 mx-auto"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
