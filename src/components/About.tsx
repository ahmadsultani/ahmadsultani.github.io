import profile from "../assets/images/profile.jpeg";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col items-center px-10 pt-20">
        <div className="flex flex-col items-center flex-grow ">
          <img
            className="object-center xl:w-1/5 lg:w-1/4 sm:w-1/3 w-2/3 mb-6 border-4 border-yellow-500 rounded-full opacity=90"
            src={profile}
            alt="profile"
          />
          <h1 className="title-font text-3xl sm:text-4xl font-medium mb-4 text-center text-white">
            Hi, I'm Sultani
            <br />
            Learner | Coder
          </h1>
          <p className="mb-6 leading-relaxed text-sm sm:text-md md:text-[16px] text-center md:w-5/6 ">
            Sometimes an educator, sometimes a student, but alltimes a learner.
            <br />
            A second year student of Informatics Engineering, Hasanuddin
            University.
            <br />I am really passionate about coding, especially in website development.
          </p>
          <div className="flex justify-center ">
            <a
              href="https://wa.me/6282193179080"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-3 sm:px-6 focus:outline-none hover:bg-yellow-600 rounded text-md "
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className=" ml-6 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-3 sm:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-md"
            >
              See My Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
