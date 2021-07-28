// dependencies
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';

const ShortBio = () => {
  return (
    <section
      id="about"
      className="text-gray-600 body-font min-h-screen  bg-sky-700"
    >
      <div className="container mx-auto mt-10 flex px-5 py-24 md:flex-row h-screen justify-start md:justify-center flex-col xl:items-center   ">
        <div className="flex flex-col w-full text-left items-start px-10 gap-4 lg:w-2/3 xl:w-1/3">
          <h2 className="text-lg  flex items-center gap-2 ">
            <div className="w-16 h-16 relative">
              <Image
                layout="fill"
                className="inline object-cover mr-2 rounded-full"
                src="/images/me.jpeg"
                alt="Profile image"
              />
            </div>

            <span className="opacity-90">Žiga Grošelj</span>
          </h2>
          <h1 className=" text-6xl md:text-7xl font-bold">
            Fullstack Developer
          </h1>
          <p className="text-xl">
            Passionate self-taught developer from Slovenia.
          </p>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4">
              <Link
                aria-label="Tools&Skills"
                to="tools"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-red-500 border-red-500 border-2 p-3 px-7 rounded text-lg text-center hover:bg-transparent cursor-pointer"
              >
                Tools & Skills
              </Link>
              <Link
                to="projects"
                aria-label="Projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="border-red-500 border-2 p-3 px-7 rounded text-lg text-center hover:bg-red-500 cursor-pointer"
              >
                Projects
              </Link>
            </div>
            <div className="flex flex-col justify-between lg:mr-14">
              <a
                href="https://www.linkedin.com/in/%C5%BEiga-gro%C5%A1elj-932945b6/"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="transform hover:scale-105 h-8 w-8 opacity-80  hover:opacity-100" />
              </a>
              <a href="https://twitter.com/zigagroselj" aria-label="Twitter">
                <FaTwitter className="transform hover:scale-105 h-8 w-8 opacity-80  hover:opacity-100" />
              </a>
              <a href="https://github.com/polhek/" aria-label="Github">
                <FaGithub className="transform hover:scale-105 h-8 w-8 opacity-80  hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ">
          <div
            style={{ width: '498px', height: '380px', position: 'relative' }}
          >
            <Image
              layout="fill"
              className="object-cover object-center rounded opacity-90"
              alt="programmer, sitting at the desk."
              src="/images/programmer.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortBio;
