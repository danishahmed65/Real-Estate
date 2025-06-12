import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-aos="fade-up"
      className="scroll-section w-full px-6 md:px-16 py-20 bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-gray-300">
          Customer <span className="underline decoration-purple-400 font-light text-gray-300">Testimonials</span>
        </h1>
        <p className="text-gray-300 mb-16 max-w-xl mx-auto text-base md:text-lg">
          Real stories from those who found a home with us.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/10 border border-purple-400/30 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-md"
                src={testimonial.image}
                alt={testimonial.alt}
              />
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
              <p className="text-purple-200 text-sm mb-4 italic">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <img key={i} src={assets.star_icon} alt="star" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-200 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
