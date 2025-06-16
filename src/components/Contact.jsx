import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-6 py-20 bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-14">
        {/* 🔹 Left: Info + Social */}
        <div className="lg:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
            Let's Connect ✨
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Have a question, project idea, or just want to say hey? Drop us a message — we would love to hear from you.
          </p>

          {/* 🔗 Social Icons */}
          <div className="flex gap-5 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 rounded-full bg-purple-600 hover:bg-purple-400 transition-all duration-300 text-white"
                aria-label={`Social ${i}`}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* 🔸 Right: Contact Form */}
        <form
          data-aos="fade-left"
          className="w-full lg:w-1/2 bg-white bg-opacity-5 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-200">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-200">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
