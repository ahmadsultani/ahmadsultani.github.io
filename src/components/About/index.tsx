import Section from "../Section";
import { BsFillPersonLinesFill } from "react-icons/bs"
import { AiFillThunderbolt } from "react-icons/ai";
import { IoAnalytics } from "react-icons/io5"
import { RiTeamFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa"

export default function About() {
  return (
    <Section id="about">
      <div className="flex items-start w-full gap-20">
        <BsFillPersonLinesFill
          size={200}
          className="absolute opacity-10 -ml-20 -mt-16"
        />
        <div className="flex flex-col w-4/5 items-start gap-6">
          <h1 className="text-[26px] sm:text-5xl font-medium title-font text-white">
            About Me
          </h1>
          <div className="flex flex-col bg-gray-800 p-8 px-10 gap-6">
            <p className="text-sm sm:text-md leading-relaxed text-gray-300 text-justify">
              Hi, I am <b>Ahmad Sultani Dayanullah</b>. I'm a student from
              Informatics Engineering whose consistent in learning, confident
              and really passionate about programming. I'm into front-end
              website development. I enjoy working both as a team and
              individually. Made an impactful change to other people is what I
              strive to do. I'm looking for an opportunity to grow my career
            </p>
            <span className="outline-btn flex items-center justify-center w-full gap-12 text-yellow-500 font-medium">
              <span className="flex text-5xl items-end">
                10+<p className="text-xs text-gray-300 font-light">projects</p>
              </span>
              <span className="flex text-5xl items-end">
                1+
                <p className="text-[10px] text-gray-300 font-light">
                  years studying
                  <br />
                  front-end
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col pl-4 pr-6 py-6 gap-2 w-full tracking-wider">
          <div className="flex gap-4 text-gray-200 text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-5">
              <FaNetworkWired size={40} />
            </div>
            <p className="underline underline-offset-8">Teamwork</p>
          </div>
          <div className="flex flex-row-reverse gap-4 text-gray-200 text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-5">
              <RiTeamFill size={40} />
            </div>
            <p className="underline underline-offset-8">Leadership</p>
          </div>
          <div className="flex gap-4 text-gray-200 text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-5">
              <AiFillThunderbolt size={40} />
            </div>
            <p className="underline underline-offset-8">Fast Learner</p>
          </div>
          <div className="flex flex-row-reverse gap-4 text-gray-200 text-3xl items-center">
            <div className="rounded-full bg-gray-800 p-5">
              <IoAnalytics size={40}/>
            </div>
            <p className="underline underline-offset-8">Analytical</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
