import { projects } from "../data";

import { FaReact } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

function Projects() {
  return (
    <section id="projects">
      <div className="container text-center mx-auto">
        <div className="flex flex-col w-full">
          <FaReact size={60} className="mx-auto mb-6" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Recent Projects
          </h1>
          <p className="w-auto md:w-3/5 md:mx-auto mx-8 leading-relaxed text-base mb-4">
            These are recent projects especially on website development 
            <br />
            that i made for educational purpose.
            <br />
            Check my{" "}
            <a
              href="https://github.com/ahmadsultani"
              target="_blank"
              className="text-yellow-500 font-semibold"
              rel="noreferrer"
            >
              Github Repositories
            </a>{" "}
            to see my other works.
          </p>
        </div>
        <div className="flex flex-wrap mx-auto px-8">
          {projects.map((project) => (
            <div className="xl:w-1/3 md:w-1/2 md:p-4 py-4">
              <div className="bg-gray-800 rounded-lg">
                <img
                  className="h-[200px] rounded w-full object-scale object-top opacity-80"
                  src={project.image}
                  alt="content"
                />
                <div className="p-6">
                  <h2 className="text-left text-lg text-white font-medium title-font mb-2">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-sm text-justify xl:h-1/4">
                    {project.description}
                  </p>
                  <a
                    className="mt-3 text-yellow-500 flex text-sm justify-end items-center"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                    {<AiOutlineArrowRight className="w-4 h-4 ml-2" />}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
