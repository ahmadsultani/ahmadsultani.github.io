import profile from '../assets/images/profile.jpeg';

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col items-center px-10 py-20">
        <div className="flex flex-col items-center flex-grow ">
          <img className="object-center xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 mb-6 border-4 border-yellow-600 rounded-full opacity-70" src={profile} alt="profile" />
          <h1 className="title-font sm:text-4xl text-3xl font-medium mb-8 text-center text-white">
            Hi, I'm Sultani
            <br />
            Learner | Coder
          </h1>
          <p className="mb-8 leading-relaxed md:text-lg text-md text-center lg:w-2/3 w-auto">
            Sometimes an educator, sometimes a student, but alltimes a learner.
            <br />
            A second year student of Informatics Engineering, Hasanuddin University.
            <br />
            I am really passionate about coding, especially in website and mobile development.
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/6282193179080"
              target="_blank"
              rel="noreferrer"
              className="text-base inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded md:text-lg sm:text-md text-sm"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="text-base ml-6 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded md:text-lg sm:text-md text-sm"
            >
              See My Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;