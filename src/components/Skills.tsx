import { skills } from "../data"

import { ImStackoverflow } from "react-icons/im"

function Skills() {
  return (
    <section id="skills" className="mt-20">
      <ImStackoverflow size={50} className="mx-auto mb-6" />
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col w-full ">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills &amp; Technologies
          </h1>
          <p className="md:w-2/3 w-auto md:mx-auto leading-relaxed text-base mb-4">
            These are some of my skills and technologies that i use in website development.
            <br />
            You can check my <a href="https://drive.google.com/file/d/1cGLw3_No1wm8D1HgsCE1Xn8j8t4LCWn3/view?usp=sharing" target="_blank" rel="noreferrer" className="font-semibold text-yellow-500">Resume</a>  and get to know more.
          </p>
        </div>
        <div className="flex flex-wrap w-full sm:px-2 sm:w-4/5 lg:w-3/5 sm:mx-auto">
          {skills.map((skill: any) => (
            <div className="w-full sm:w-1/2 sm:p-4 py-2 sm:mx-auto mx-4">
              <div className="flex flex-row justify-start bg-gray-800 p-4 rounded-xl items-center">
                <img className="h-9 w-9 object-cover object-center "
                  src={skill.image}
                  alt="content"
                  sizes="8px"
                />
                <h2 className="ml-6 text-lg text-white font-medium title-font">
                  {skill.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Skills