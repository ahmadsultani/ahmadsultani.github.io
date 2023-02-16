import Section from "../Section";

import { languages, frameworks } from "../../data";

import { ImStackoverflow } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import SkillContainer from "./SkillContainer";

function Skills() {
  return (
    <Section id="skills">
      <div className="flex items-center w-full justify-between">
        <ImStackoverflow
          size={180}
          className="absolute opacity-10 -ml-20 -mt-6"
        />
        <div className="flex flex-col w-4/5 gap-2">
          <h1 className="text-[26px] sm:text-5xl font-medium title-font text-white">
            Skills &amp; Technologies
          </h1>
          <p className="md:w-4/5 text-sm sm:text-md leading-relaxed mb-4">
            These are some of my technology stacks that i use in Front End
            Development. You can check my{" "}
            <a
              href="https://drive.google.com/drive/folders/1kfVMkSM_oPcPKzTu25pDgJiziF_GuXxM?usp=sharing"
              target="_blank"
              className="text-yellow-500 font-semibold"
              rel="noreferrer"
            >
              Resume
            </a>{" "}
            and get to know more.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1vxmEzlDIrVZSvL1HLEBKAt2q5_t1z1o-/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="outline-btn flex items-center gap-2 text-yellow-400  border-2 border-yellow-500 hover:text-white hover:bg-yellow-500  py-2 px-6 focus:outline-none rounded text-[14px] "
        >
          See More <AiOutlineArrowRight size={16} />
        </a>
      </div>
      <div className="flex w-full -mt-4 gap-16">
        <SkillContainer title="Library / Frameworks" skills={frameworks} />
        <SkillContainer title="Languages" skills={languages} />
      </div>
    </Section>
  );
}

export default Skills;
