import { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen((prev: boolean) => !prev);
  }

  return (
    <nav id="navbar" className="fixed top-0 z-10 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-gray-800">
      <div className="w-full flex flex-wrap">
        <div className="lg:w-1/2 w-full flex justify-between">
          <a
            className="title-font text-md font-bold inline-block mr-4 py-1 whitespace-no-wrap uppercase text-white"
            href="#about"
          >
            Sultani
          </a>
          <button
            className="cursor-pointer mx-0 text-xl block lg:hidden"
            type="button"
            onClick={toggleNav}
          >
            {isNavOpen ? <AiOutlineClose size={25} color="white" /> : <AiOutlineMenu size={25} color="white" />}
          </button>
        </div>
        <div className={isNavOpen ? "flex w-full justify-end " : "hidden"}>
          <ul className="flex flex-col w-full list-none mt-2">
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Reach Me', href: '#connect' },
            ].map((item) => (
              <li className="nav-item w-full" key={item.name}>
                <a
                  className="py-2 flex text-xs w-full uppercase font-bold text-white hover:opacity-75 hover:bg-gray-700"
                  href={item.href}
                  onClick={toggleNav}
                ><p className="w-full text-right">{item.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="lg:flex w-1/2 hidden"
          id="example-navbar-danger"
        >
          <ul className="flex w-full justify-end list-none">
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Reach Me', href: '#connect' },
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
    </nav>
  )
}

export default Navbar;