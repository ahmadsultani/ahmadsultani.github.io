import { useState } from "react";
import classNames from "classnames";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navMenuClass = classNames(
    "nav-content z-50 flex justify-end h-0 w-full lg:hidden",
    {
      "visible bg-gray-800 h-100": isNavOpen,
      "hidden": !isNavOpen,
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
      <div className="w-full flex flex-wrap bg-gray-800 px-8 py-4 sm:py-3">
        <div className="lg:w-1/2 w-full items-center flex justify-between">
          <a
            className="title-font text-md font-bold uppercase text-white"
            href="#about"
          >
            Sultani
          </a>
          <button
            className="nav-toggle cursor-pointer mx-0 lg:hidden focus:outline-none"
            type="button"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <div className="nav-icon-close flex flex-col flex-shrink-0 gap-1.5">
                <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
                <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
                <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
              </div>
            ) : (
              <div className="nav-icon flex flex-col flex-shrink-0 gap-1.5">
                <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
                <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
                <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
              </div>
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
