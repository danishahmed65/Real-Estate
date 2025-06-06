import React from "react";
import { projectsData } from "../assets/assets";
import { FaHome } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-white via-purple-800 to-white"
      data-aos="fade-up"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-purple-800 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center mb-8 max-w-[300px] mx-auto">
        Crafting Spaces, Buildings, Legacies — Explore Our Portfolio
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden relative transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-t-xl"
            />

            {/* Card Info */}
            <div className="p-4 bg-white bg-opacity-80 backdrop-blur-md">
              <h2 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">
                {project.price} <span className="mx-1">|</span> {project.location}
              </p>
            </div>

            {/* Home Icon as Link */}
            <a
              href={`/project/${project.id}`}
              className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-purple-600 hover:text-white transition flex items-center justify-center"
              aria-label={`View details of ${project.title}`}
            >
              <FaHome />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
