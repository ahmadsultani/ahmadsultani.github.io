import { useState } from "react";
import classNames from "classnames";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navMenuClass = classNames(
    "z-50 flex justify-end w-full h-0 opacity-0 transition duration-500 ease-out lg:hidden",
    {
      "visible opacity-100 h-auto": isNavOpen,
      invisible: !isNavOpen
    }
  );

  function toggleNav() {
    setIsNavOpen((prev: boolean) => !prev);
  }

  return (
    <nav
      id="navbar"
      className="fixed top-0 z-10 w-full items-center justify-between"
    >
      <div className="w-full flex flex-wrap bg-gray-800 px-8 py-3">
        <div className="lg:w-1/2 w-full items-center flex justify-between">
          <a
            className="title-font text-md font-bold uppercase text-white"
            href="#about"
          >
            Sultani
          </a>
          <button
            className="cursor-pointer mx-0 text-xl block lg:hidden rotate-0 active:rotate-[120deg] duration-200 outline-none focus:outline-none"
            type="button"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <AiOutlineClose size={25} color="white" />
            ) : (
              <AiOutlineMenu size={25} color="white" />
            )}
          </button>
        </div>
        <div className="lg:flex w-1/2 hidden" id="example-navbar-danger">
          <ul className="flex w-full justify-end list-none">
            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "Reach Me", href: "#connect" },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={navMenuClass}>
        <ul className="flex flex-col w-full list-none">
          {[
            { name: "About", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Reach Me", href: "#connect" },
          ].map((item) => (
            <li className="w-full bg-gray-800" key={item.name}>
              <a
                className="px-8 py-4 flex text-xs w-full uppercase font-bold text-white hover:opacity-75 hover:bg-gray-700"
                href={item.href}
                onClick={toggleNav}
              >
                <p className="w-full text-right">{item.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
