import Section from "../Section";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col lg:flex-row items-start w-full gap-10 lg:gap-20 justify-between">
        <BsFillPersonLinesFill
          size={200}
          className="absolute hidden md:block opacity-10 -ml-20 -mt-16"
        />
        <div className="flex flex-col mx-auto lg:mx-0 w-full sm:w-4/5 max-w-[500px] items-start gap-6">
          <h1 className="text-[26px] sm:text-5xl font-medium title-font text-white">
            About Me
          </h1>
          <div className="flex flex-col bg-gray-800 p-4 md:p-8 md:px-10 gap-3 md:gap-6">
            <p className="text-xs sm:text-md leading-relaxed text-gray-300 text-justify">
              Hi, I am <b>Ahmad Sultani Dayanullah</b>. I'm a student from
              Informatics Engineering whose consistent in learning, confident
              and really passionate about programming. I'm into front-end
              website development. I enjoy working both as a team and
              individually. Made an impactful change to other people is what I
              strive to do. I'm looking for an opportunity to grow my career
            </p>
            <span className="outline-btn flex items-center justify-center w-full gap-12 text-yellow-500 font-medium">
              <span className="flex text-3xl md:text-5xl items-end gap-1">
                <p>10</p>
                <p className="text-[10px] text-gray-300 font-light">projects</p>
              </span>
              <span className="flex text-3xl md:text-5xl items-end gap-1">
                <p>1.5+</p>
                <p className="text-[10px] text-gray-300 font-light h-fit">
                  years in
                  front-end
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:py-6 gap-2 mx-auto w-full tracking-wider max-w-[600px]">
          <div className="flex gap-4 text-gray-200 text-xl md:text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-3 md:p-5">
              <FaNetworkWired className="w-6 h-6 md:h-10 md:w-10" />
            </div>
            <p className="underline underline-offset-8">Teamwork</p>
          </div>
          <div className="flex flex-row-reverse gap-4 text-gray-200 text-xl md:text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-3 md:p-5">
              <RiTeamFill className="w-6 h-6 md:h-10 md:w-10" />
            </div>
            <p className="underline underline-offset-8">Leadership</p>
          </div>
          <div className="flex gap-4 text-gray-200 text-xl md:text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-3 md:p-5">
              <AiFillThunderbolt className="w-6 h-6 md:h-10 md:w-10" />
            </div>
            <p className="underline underline-offset-8">Fast Learner</p>
          </div>
          <div className="flex flex-row-reverse gap-4 text-gray-200 text-xl md:text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-3 md:p-5">
              <IoAnalytics className="w-6 h-6 md:h-10 md:w-10" />
            </div>
            <p className="underline underline-offset-8">Analytical</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
