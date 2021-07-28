import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaArrowUp,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';

const Contacts = () => {
  const [scrollPosition, setPosition] = useState(0);

  // scroll to top function...
  const scrollToTop = () => {
    scroll.scrollToTop();
    return;
  };

  // scroll button should appear after scrollY
  useEffect(() => {
    document.addEventListener('scroll', (event) => {
      let position = window.scrollY;
      setPosition(position);
    });
  }, []);

  return (
    <>
      <footer id="contacts" className="min-w-screen  min-h-56 bg-yellow-400 ">
        <div className="container mx-auto px-5 py-14 text-center">
          <h2 className="title-font sm:text-4xl text-3xl  font-semibold p-2 text-sky-700">
            Contact me!
          </h2>
          <div className="flex justify-center items-center gap-5 md:gap-10 mt-5 text-sky-700">
            <a
              href="mailto:ziga.groselj@gmail.com"
              className="cursor-pointer"
              aria-label="mail-me"
            >
              <FaEnvelope className="transform hover:scale-125 h-8 w-8 hover:text-sky-800" />
            </a>
            <a
              href="https://www.linkedin.com/in/%C5%BEiga-gro%C5%A1elj-932945b6/"
              className="cursor-pointer"
              aria-label="linkedIn"
            >
              <FaLinkedin className="transform hover:scale-125 h-8 w-8 hover:text-sky-800" />
            </a>
            <a
              href="https://twitter.com/zigagroselj"
              className="cursor-pointer"
              aria-label="twitter"
            >
              <FaTwitter className="transform hover:scale-125 h-8 w-8 hover:text-sky-800" />
            </a>
            <a
              href="https://github.com/polhek/ "
              className="cursor-pointer "
              aria-label="github"
            >
              <FaGithub className="transform hover:scale-125 h-8 w-8 hover:text-sky-800" />
            </a>
          </div>
        </div>
      </footer>
      {scrollPosition > 500 ? (
        <button
          onClick={scrollToTop}
          className="fixed flex items-center justify-center bottom-0 right-7 bg-red-500 hover:bg-red-600 h-16 w-16 opacity-95 rounded-t cursor-pointer"
        >
          <FaArrowUp className="h-7 w-7 relative opacity-90 hover:opacity-100 transition-all top-0 hover:-top-2" />
        </button>
      ) : null}
    </>
  );
};

export default Contacts;
