import { MdOutlineConnectWithoutContact } from "react-icons/md";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import Section from "../Section";
import Form from "./Form";

function Connect() {
  return (
    <Section id="connect">
      <div className="flex items-start w-full justify-between gap-20 pb-20">
        <MdOutlineConnectWithoutContact
          size={240}
          className="absolute opacity-10 -ml-24 -mt-16"
        />
        <div className="flex flex-col w-2/5 gap-6">
          <h1 className="text-[26px] sm:text-5xl font-medium title-font text-white">
            Reach Me
          </h1>
          <p className="text-sm sm:text-md leading-relaxed text-justify">
            If you have any questions, feel free to contact me. Or you may Email
            me at{" "}
            <span className="text-yellow-500 font-semibold ">
              ahmadsultanidayanullah@gmail.com
            </span>
            . Thanks!
          </p>
          <div className="flex flex-row justify-start gap-6">
            <a
              href="https://www.linkedin.com/in/ahmadsultanid/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={40} fill="#f3f3f3" />
            </a>
            <a
              href="https://www.instagram.com/ahmadsultanid/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={40} fill="#f3f3f3" />
            </a>
            <a
              href="https://www.github.com/ahmadsultani/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={40} fill="#f3f3f3" />
            </a>
            <a
              href="https://www.facebook.com/ahmadsultanidayanullah/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook size={40} fill="#f3f3f3" />
            </a>
            <a
              href="https://wa.me/6282193179080"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappFill size={40} fill="#f3f3f3" />
            </a>
          </div>
        </div>
        <Form />
      </div>
    </Section>
  );
}

export default Connect;
