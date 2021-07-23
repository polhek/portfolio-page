import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setActive(!active);
  };

  return (
    <nav className=" p-3 py-5 text-black font-oxanium">
      <div className="container mx-auto  px-5 flex flex-wrap justify-between items-center">
        <h1 className="font-semibold text-3xl ">Žiga Grošelj</h1>
        <button
          onClick={openMenu}
          className="inline-flex p-3 hover:bg-red-600 rounded lg:hidden text-black ml-auto  outline-none"
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
          }   w-full lg:flex gap-4 lg:w-auto text-black pt-5 md:pt-0 inline-flex flex-col lg:flex-row `}
        >
          <a
            className="hover:text-black text-2xl
            hover:border-b-2 border-transparent hover:border-white"
            href=""
          >
            About
          </a>
          <a
            className="hover:text-white text-2xl
             border-b-2 border-transparent hover:border-white"
            href=""
          >
            Tools & Skills
          </a>
          <a
            className="hover:text-black text-2xl
             border-b-2 border-transparent hover:border-white"
            href=""
          >
            Projects
          </a>
          <a
            className="hover:text-black text-2xl
             hover:border-b-2 border-transparent hover:border-white"
            href=""
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
