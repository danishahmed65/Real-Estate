import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 py-20 md:py-28 bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Left - Text */}
        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="underline underline-offset-4 decoration-purple-400 font-light">
              Our Brand
            </span>
          </h1>
          <p className="text-purple-100 leading-relaxed">
            We are a forward-thinking real estate brand committed to helping
            individuals and families find properties that truly fit their lifestyle.
            Whether you're buying your dream home or selling with confidence,
            we bring passion, trust, and years of expertise to every interaction.
            Our goal is simple: real estate, made real and reliable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Years of Experience", value: "10+" },
              { label: "Projects Completed", value: "12+" },
              { label: "Mn. Sq. Ft. Delivered", value: "20+" },
              { label: "Ongoing Projects", value: "10+" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="text-purple-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white transition px-6 py-2 rounded-full font-medium shadow-lg">
            Learn More
          </button>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src={assets.brand_img}
            alt="Brand Visual"
            className="w-[300px] sm:w-[350px] md:w-[400px] rounded-3xl object-cover shadow-2xl border-4 border-purple-500/30 transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
