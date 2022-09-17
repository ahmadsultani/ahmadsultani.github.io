import { projects } from "../data";

import { FaReact } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Projects() {
  return (
    <section id="projects">
      <div className="container text-center mx-auto">
        <div className="flex flex-col w-full">
          <FaReact size={60} className="mx-auto mb-6" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Recent Projects
          </h1>
          <p className="w-2/3 md:w-3/5 mx-auto leading-relaxed text-base mb-4">
            These are recent projects especially on website development that i made for educational purpose.
            <br />Check my <a href="https://github.com/ahmadsultani" target="_blank" className="text-yellow-500 font-semibold" rel="noreferrer">Github Repositories</a> to see my other works.
          </p>
        </div>
        <div className="flex flex-wrap mx-auto px-8">
          {
            projects.map((project) => (
              <div className="xl:w-1/3 md:w-1/2 md:p-4 py-4">
                <div className="bg-gray-800 p-6 rounded-lg h-full">
                  <img className="h-40 rounded w-full object-cover object-top mb-6 opacity-70"
                    src={project.image}
                    alt="content"
                  />
                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed text-center xl:h-1/4">
                    {project.description}
                  </p>
                  <a className="mt-3 text-yellow-500 inline-flex items-center"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                    {<AiOutlineArrowRight className="w-4 h-4 ml-2" />}
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects