import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const phrases = [
    "Fit Your Dream",
    "Match Your Style",
    "Find Your Space",
    "Love Your Home",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [sparkles, setSparkles] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  // ✅ Typing Effect - isolated & smooth
  useEffect(() => {
    const type = () => {
      const current = phrases[phraseIndexRef.current];
      const updatedText = current.substring(0, charIndexRef.current);
      setDisplayedText(updatedText);

      if (!isDeletingRef.current) {
        if (charIndexRef.current < current.length) {
          charIndexRef.current++;
          setTimeout(type, 120);
        } else {
          isDeletingRef.current = true;
          setTimeout(type, 1500);
        }
      } else {
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setTimeout(type, 60);
        } else {
          isDeletingRef.current = false;
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % phrases.length;
          setTimeout(type, 200);
        }
      }
    };

    // 🔁 Start loop
    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  // 🌐 Update screen width for responsive checks
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✨ Handle Sparkles (on desktop only)
  const handleMouseMove = (e) => {
    if (windowWidth < 640) return;

    const sparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setSparkles((prev) => [...prev, sparkle]);

    // Auto-remove
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
    }, 500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      <div className="container text-center mx-auto py-8 px-4 sm:px-10 md:px-20 lg:px-32 text-white flex-grow flex flex-col justify-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-10 mt-12 tracking-wide">
          Explore Homes that
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <span className="typed-text">{displayedText}</span>
            <span className="blinking-cursor">|</span>
          </span>
        </h2>

        {/* Buttons Responsive */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="relative px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg text-white font-semibold uppercase tracking-wide transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base border-2 border-white rounded-full text-white font-semibold uppercase tracking-wide transition duration-300 hover:bg-white hover:text-indigo-700 hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ✨ Sparkles Layer */}
      {windowWidth >= 640 && (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
          {sparkles.map((sparkle) => (
            <span
              key={sparkle.id}
              className="sparkle"
              style={{ left: sparkle.x, top: sparkle.y }}
            />
          ))}
        </div>
      )}

      {/* 🪄 Styles */}
      <style>{`
        .typed-text {
          font-size: 2.5rem;
        }

        @media (max-width: 640px) {
          .typed-text {
            font-size: 1.6rem;
          }
        }

        .blinking-cursor {
          font-weight: 900;
          font-size: 2.5rem;
          color: #f43f5e;
          animation: blink 1s step-start infinite;
          margin-left: 4px;
        }

        @media (max-width: 640px) {
          .blinking-cursor {
            font-size: 1.8rem;
          }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .sparkle {
          position: fixed;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, white 60%, transparent 60%);
          border-radius: 50%;
          pointer-events: none;
          animation: sparkle-fade 0.5s forwards;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          opacity: 0.8;
          z-index: 100;
        }

        @keyframes sparkle-fade {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-transparent">
      </div>
    </div>
  );
};

export default Header;
