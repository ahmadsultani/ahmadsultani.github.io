import { AiOutlineArrowRight } from "react-icons/ai";

import profile from "../../assets/images/profile.webp";
import Headline from "./Headline";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="about-container h-screen w-full flex flex-col-reverse gap-10 lg:flex-row justify-center lg:justify-between items-center bg-gray-800 px-7 md:px-20 xl:px-40"
    >
      <div className="flex leading-relaxed flex-col self-center shrink-0 gap-4 lg:gap-8 w-full lg:w-7/12">
        <div className="flex flex-col lg:gap-3 items-center lg:items-start">
          <h1 className="title-font text-lg md:text-2xl text-white opacity-80 ">
            I'm Ahmad Sultani
          </h1>
          <Headline />
        <p className="leading-relaxed hidden md:block text-[13px]">
          Sometimes an educator, sometimes a developer, but alltimes a learner.
          <br />
          I am really passionate about Website Development, especially in Front End.
        </p>
        </div>
        <div className="flex gap-6 w-fit self-center lg:self-auto">
          <a
            href="https://wa.me/6282193179080"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-transparent hover:font-medium opacity-80 border-2 rounded text-xs lg:text-[14px] py-2 px-4 btn-fill-animation arrow-parent"
          >
            <p className="shrink-0 z-10">Contact Me</p> <AiOutlineArrowRight size={14} className="arrow z-10" />
          </a>
          <a
            href="#projects"
            className="flex items-center hover:font-medium rounded text-xs lg:text-[14px] cursor-pointer"
          >
           <p className="btn-underline-animation shrink-0">See My Works</p>
          </a>
        </div>
      </div>
      <img
        className="flex img-profile object-center w-[240px] lg:w-[320px] h-fit rounded-full"
        src={profile}
        alt="profile"
      />
    </section>
  );
}
