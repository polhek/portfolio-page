import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="p-3 py-5 fixed left-0 right-0  top-0 min-w-screen font-oxanium bg-yellow-400 opacity-95">
      <div className="container mx-auto  px-5 flex flex-wrap justify-between text-sky-800 items-center ">
        <h1 className="font-semibold text-3xl ">Žiga Grošelj</h1>
        <button
          onClick={openMenu}
          className="inline-flex p-3  rounded lg:hidden  ml-auto  outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:flex gap-4 lg:w-auto  pt-5 md:pt-0 inline-flex flex-col lg:flex-row font-medium `}
        >
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-2xl
            border-b-2 border-transparent hover:border-sky-800 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="tools"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" text-2xl
            border-b-2 border-transparent hover:border-sky-800 cursor-pointer"
          >
            Tools & Skills
          </Link>

          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" text-2xl
            border-b-2 border-transparent hover:border-sky-800 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contacts"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className=" text-2xl
            border-b-2 border-transparent hover:border-sky-800 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
