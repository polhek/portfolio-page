import { FaCode } from 'react-icons/fa';

// style for icons...
const style = {
  height: '50px',
  width: '50px',
};

const Project = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg  w-80 min-h-96 justify-center text-center items-center bg-black text-gray-400">
      <img
        src="/images/battleships.png"
        alt="battleships"
        className="max-w-full rounded-t-lg"
      />
      <h3 className="font-bold text-white text-2xl">Battleships Game</h3>
      <p className="p-2 text-lg">
        Battleships game made using vannila Javascript, and using TDD approach.
      </p>
      <div className="flex items-center justify-center gap-2">
        <h3 className="font-semibold text-xl">Stack:</h3>
        <div className="flex items-center text-2xl gap-2">
          <i class="devicon-jasmine-plain colored"></i>
          <i class="devicon-jasmine-plain colored"></i>
        </div>
      </div>

      <div className="m-5">
        <a
          className="bg-red-500 flex items-center justify-center hover:bg-white text-white hover:text-red-500 font-bold py-2 px-4 rounded-full gap-2"
          href=""
        >
          <FaCode />
          Code
        </a>
      </div>
    </div>
  );
};

export default Project;
