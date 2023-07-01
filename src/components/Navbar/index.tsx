import { useState } from "react";
import classNames from "classnames";

import "./Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navMenuClass = classNames(
    "nav-mobile nav-content z-50 flex justify-end max-h-0 w-full lg:hidden transition-all duration-700 ease-in-out overflow-hidden",
    {
      "bg-gray-800 max-h-[192px]": isNavOpen,
    }
  );

  const navIconClass = classNames(
    "flex flex-col flex-shrink-0 gap-1.5",
    {
      "nav-icon": !isNavOpen,
      "nav-icon-close": isNavOpen,
    }
  );

  const navItemArr = [
    { name: "About", href: "#about", active: true },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Reach Me", href: "#connect" },
  ];

  function toggleNav() {
    setIsNavOpen((prev: boolean) => !prev);
  }

  return (
    <nav
      id="navbar"
      className="fixed top-0 z-10 w-full items-center justify-between font-medium "
    >
      <div className="w-full flex flex-wrap bg-gray-800 px-10 xl:px-20 py-4 sm:py-3">
        <div className="lg:w-1/2 w-full items-center flex justify-between">
          <a
            className="title-font text-md uppercase text-white"
            href="#hero"
          >
            Sultani
          </a>
          <button
            className="nav-toggle cursor-pointer mx-0 lg:hidden focus:outline-none"
            type="button"
            onClick={toggleNav}
          >
            <div className={navIconClass}>
              <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
              <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
              <div className="icon-bar bg-white w-[22px] h-[2px]">&nbsp;</div>
            </div>
          </button>
        </div>
        <div
          className="nav-default nav-content lg:flex w-1/2 hidden justify-end"
          id="example-navbar-danger"
        >
          <ul className="flex justify-end gap-2 list-non w-fit">
            {navItemArr.map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase"
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
          {navItemArr.map((item) => (
            <li className="nav-item w-full flex " key={item.name}>
              <a
                className="px-8 py-4 flex text-xs w-full justify-end uppercase bg-gray-800"
                href={item.href}
                onClick={toggleNav}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
