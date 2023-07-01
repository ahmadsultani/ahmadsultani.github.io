import { projects } from "../data";

import { FaReact } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import Section from "./Section";

function Projects() {
  return (
    <Section id="projects">
      <div className="flex items-center w-full justify-between">
        <FaReact size={200} className="absolute opacity-10 -ml-20" />
        <div className="flex flex-col w-4/5 gap-2">
          <h1 className="text-[26px] sm:text-5xl font-medium title-font text-white">
            Recent Projects
          </h1>
          <p className=" md:w-4/5 text-sm sm:text-md leading-relaxed">
            These are some of my projects especially on frontend development that i
            made using Vanilla JavaScript, React, Vue.js and Nextjs. Check my{" "}
            <a
              href="https://github.com/ahmadsultani"
              target="_blank"
              className="text-yellow-500 font-semibold"
              rel="noreferrer"
            >
              Github Repositories
            </a>{" "}
            to see my other works. There are more than <b>15 projects</b> in my github repositories
          </p>
        </div>
        <a
          href="https://github.com/ahmadsultani"
          target="_blank"
          rel="noreferrer"
          className="outline-btn flex items-center gap-2 text-yellow-400  border-2 border-yellow-500 hover:text-white hover:bg-yellow-500  py-2 px-6 focus:outline-none rounded text-[14px] "
        >
          See More <AiOutlineArrowRight size={16} />
        </a>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-[36px]">
        {projects.map((project, index) => (
          <li className="flex flex-col gap-4 bg-gray-800 justify-between pb-4"
            key={`project-${index}`}
          >
            <img
              className="h-[200px] w-full object-cover object-top opacity-80"
              src={project.image}
              alt="content"
              loading="lazy"
            />
            <div className="flex flex-col gap-2 px-5">
              <h2 className="text-left text-[18px] text-white">
                {project.title}
              </h2>
              <p className="text-justify text-[12px]">{project.description}</p>
            </div>
            <a
              href="https://github.com/ahmadsultani"
              target="_blank"
              rel="noreferrer"
              className="outline-btn flex flex-grow items-end self-end  text-yellow-400 px-5 pb-2 focus:outline-none arrow-parent rounded text-[12px] "
            >
              <div className="flex gap-2 items-center">
                <p className="shrink-0">Learn More</p> <AiOutlineArrowRight size={12} className="arrow "/>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
