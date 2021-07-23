import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  return (
    <footer className="w-full min-h-56 bg-black overflow-hidden">
      <div className="container mx-auto px-5 py-14 text-center">
        <h2 className="title-font sm:text-4xl text-3xl  font-medium p-2 text-white">
          Contact me!
        </h2>
        <div className="flex justify-center items-center gap-5 md:gap-10 mt-5">
          <a href="mailto:ziga.groselj@gmail.com">
            <FaEnvelope className="transform hover:scale-125 h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/%C5%BEiga-gro%C5%A1elj-932945b6/">
            <FaLinkedin className="transform hover:scale-125 h-8 w-8" />
          </a>
          <a href="https://twitter.com/zigagroselj">
            <FaTwitter className="transform hover:scale-125 h-8 w-8" />
          </a>
          <a href="https://github.com/polhek/">
            <FaGithub className="transform hover:scale-125 h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
