import React from "react";
import { projectsData } from "../assets/assets";
import { FaHome } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="w-full px-6 md:px-16 py-20 bg-gradient-to-br from-black via-purple-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
          Projects{" "}
          <span className="underline decoration-purple-400 font-light">
            Completed
          </span>
        </h1>
        <p className="text-gray-300 mb-16 max-w-md mx-auto text-base md:text-lg">
          Crafting Spaces, Buildings, Luxuries — Explore Our Portfolio
        </p>

        {/* Cards Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 bg-white/10 backdrop-blur-sm text-left">
                <h2 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-purple-200">
                  {project.price} <span className="mx-2">•</span> {project.location}
                </p>
              </div>

              <a
                href={`/project/${project.id}`}
                className="absolute bottom-4 right-4 bg-white text-purple-700 p-2 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition"
                aria-label={`View details of ${project.title}`}
              >
                <FaHome />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
