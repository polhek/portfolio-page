// dependencies
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const ShortBio = () => {
  return (
    <section
      id="about"
      className="text-gray-600 body-font min-h-screen  bg-sky-700"
    >
      <div className="container mx-auto mt-10 flex px-5 py-24 md:flex-row h-screen justify-start md:justify-center flex-col xl:items-center   ">
        <div className="flex flex-col w-full text-left items-start px-10 gap-4 lg:w-2/3 xl:w-1/3">
          <h2 className="text-lg  flex items-center gap-2 ">
            <img
              className="inline object-cover w-16 h-16 mr-2 rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <span className="opacity-80">Žiga Grošelj</span>
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
              <a href="https://www.linkedin.com/in/%C5%BEiga-gro%C5%A1elj-932945b6/">
                <FaLinkedin className="transform hover:scale-105 h-8 w-8 opacity-80  hover:opacity-100" />
              </a>
              <a href="https://twitter.com/zigagroselj">
                <FaTwitter className="transform hover:scale-105 h-8 w-8 opacity-80  hover:opacity-100" />
              </a>
              <a href="https://github.com/polhek/">
                <FaGithub className="transform hover:scale-105 h-8 w-8 opacity-80  hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden xl:block lg:w-1/3 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/programmer.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ShortBio;
