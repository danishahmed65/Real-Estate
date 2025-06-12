import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener to toggle background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // blur when scroll more than 50px
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
      className={`fixed top-5 rounded-full left-0git w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-purple-900/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        data-aos="fade-left"
        className="max-w-[1300px] mx-auto flex justify-between items-center py-4 px-6 md:px-12"
      >
        {/* Logo */}
        <div data-aos="fade-down-right" className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-15 h-15" />
        </div>

        {/* Nav Links */}
        <ul
          data-aos="zoom-out-up"
          className="hidden md:flex gap-3 text-white font-medium text-base font-zen"
        >
          {["Home", "About", "Projects", "Testimonials", "Contact Us"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="cursor-pointer text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-purple-500 hover:text-black hover:shadow-lg hover:shadow-purple-300"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Google Button */}
        <button
          data-aos="zoom-out-down"
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
          {/* Fullscreen Dark Overlay (closes menu on click) */}
          <div
            onClick={() => setShowMobileMenu(false)}
            className="fixed inset-0 z-40 bg-black bg-opacity-60 transition-opacity duration-300"
          />

          {/* Solid Mobile Menu Panel with smooth drop animation */}
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-purple-700 rounded-2xl shadow-2xl p-6 animate-slideDown">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowMobileMenu(false)}
                className="text-white text-2xl font-bold hover:text-purple-300 transition"
              >
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center gap-6 mt-6 text-white font-semibold text-lg">
              {["Home", "About", "Projects", "Testimonials", "Contact Us"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-purple-300 transition duration-200"
                  >
                    {item}
                  </a>
                )
              )}
            </ul>

            {/* Google Sign-In Button */}
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-800 hover:text-white border border-purple-600 font-medium rounded-full text-sm px-5 py-2 transition-all duration-300"
              >
                {/* Google Icon */}
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
        </>
      )}
    </div>
  );
};

export default Navbar;
