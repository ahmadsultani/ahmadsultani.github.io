import { useEffect, useState, useMemo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import profile from "../../assets/images/profile-baru.png";
import "./Hero.css";

export default function Hero() {
  const texts = useMemo(() => ["Front End Dev", "Problem Solver"], []);
  const [text, setText] = useState(texts[0]);
  const [isTyping, setIsTyping] = useState(true);
  const [headline, setHeadline] = useState("\u200B");
  const [counter, setCounter] = useState(0);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping && headline !== text) {
        setHeadline(text.slice(0, headline.length + 1));
      } else if (isTyping && headline === text) {
        sleep(2000).then(() => {
          setIsTyping(false);
          setCounter((prev) => (prev + 1) % texts.length);
        });
      } else if ((!isTyping && headline === text) || !isTyping) {
        setHeadline(text.slice(0, headline.length - 1));
        if (headline.length <= 1) {
          setText(texts[counter]);
          setIsTyping(true);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [headline, isTyping, counter, texts, text]);

  return (
    <section
      id="hero"
      className="about-container h-screen w-full flex justify-between items-center bg-gray-800 xl:px-40"
    >
      <div className="flex leading-relaxed flex-col self-center shrink-0 gap-8 w-7/12">
        <div className="flex flex-col gap-3">
          <h1 className="title-font text-2xl text-white opacity-80 ">
            I'm Ahmad Sultani
          </h1>
          <h1 className="title-font font-semibold text-6xl text-transparent headline">
            {headline}
          </h1>
        <p className="leading-relaxed text-[14px]">
          Sometimes an educator, sometimes a developer, but alltimes a learner.
          <br />
          I am really passionate about Website Development, especially in Front End.
        </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://wa.me/6282193179080"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-transparent hover:font-medium opacity-80 border-2 rounded text-[14px] py-2 px-4 btn-fill-animation arrow-parent"
          >
            <p className="shrink-0 z-10">Contact Me</p> <AiOutlineArrowRight size={14} className="arrow z-10" />
          </a>
          <a
            href="#projects"
            className="flex items-center hover:font-medium rounded text-[14px] cursor-pointer   "
          >
           <p className="btn-underline-animation shrink-0">See My Works</p>
          </a>
        </div>
      </div>
      <img
        className="object-center w-[280px] h-fit pb-12 rounded-full sm:pt-4"
        src={profile}
        alt="profile"
      />
    </section>
  );
}
