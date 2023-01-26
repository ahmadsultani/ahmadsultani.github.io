import { useEffect, useState, useMemo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import profile from "../../assets/images/profile-baru.png";
import "./Hero.css";

export default function Hero() {
  const texts = useMemo(() => ["Front-end Developer", "Problem Solver"], []);
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
  }, [headline, isTyping, text, counter, texts]);

  return (
    <section
      id="hero"
      className="about-container h-screen w-full flex flex-row justify-between items-center bg-gray-800 px-10 pt-8 xl:px-40"
    >
      <div className="flex flex-col self-center shrink-0 gap-8">
        <div className="title flex flex-col gap-2">
          <h1 className="title-font text-3xl text-white opacity-80 ">
            I'm Ahmad Sultani
          </h1>
          <h1 className="title-font font-semibold text-5xl text-transparent headline">
            {headline}
          </h1>
        </div>
        <p className="leading-relaxed text-[14px]">
          Sometimes an educator, sometimes a student, but alltimes a learner.
          <br />
          A second year student of Infor matics Engineering, Hasanuddin
          University.
          <br />I am really passionate about coding, especially in website
          development.
        </p>
        <div className="flex gap-6">
          <a
            href="https://wa.me/6282193179080"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white bg-yellow-500   py-2 px-4 focus:outline-none hover:opacity-80 rounded text-[14px] "
          >
            Contact Me <AiOutlineArrowRight size={16} />
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 text-white bg-gray-700 py-2 px-4 focus:outline-none hover:opacity-80 rounded text-[14px] cursor-pointer "
          >
            See My Works <AiOutlineArrowRight size={14} />{" "}
          </a>
        </div>
      </div>
      <img
        className="object-center w-[280px] h-fit pb-12 rounded-full"
        src={profile}
        alt="profile"
      />
    </section>
  );
}
