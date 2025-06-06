import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-6 py-16 md:py-24 bg-gradient-to-br from-purple-400 via-white to-purple-800 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-14 items-start justify-between">
        {/* Left Side - Text */}
        <div className="flex flex-col items-start w-full lg:w-1/2 text-left">
          <h1 data-aos="zoom-in" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="underline underline-offset-4 decoration-purple-500 font-light">
              Our Brand
            </span>
          </h1>
          <p data-aos="zoom-in-right" className="text-gray-600 mb-8 max-w-xl leading-relaxed">
            We are a forward-thinking real estate brand committed to helping
            individuals and families find properties that truly fit their
            lifestyle. Whether you're buying your dream home or selling with
            confidence, we bring passion, trust, and years of expertise to every
            interaction. Our goal is simple: real estate, made real and
            reliable.
          </p>

          <div data-aos="flip-left" className="grid grid-cols-2 gap-6 w-full mb-8">
            {[
              { label: "Years of Experience", value: "10+" },
              { label: "Projects Completed", value: "12+" },
              { label: "Mn. Sq. Ft. Delivered", value: "20+" },
              { label: "Ongoing Projects", value: "10+" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-semibold text-purple-600">
                  {item.value}
                </p>
                <p className="text-gray-700 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <button data-aos="zoom-out-down" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={assets.brand_img}
            alt="Brand Visual"
            className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-3xl object-cover shadow-2xl border-4 border-purple-600 transition-all duration-500 hover:scale-105"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
