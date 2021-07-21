import { FaCode } from 'react-icons/fa';

const Project = ({ project }) => {
  const { name, imgURL, description, stack, github } = project;
  return (
    <div className="flex flex-col gap-2 rounded-lg  w-80 max-h-100 justify-between shadow text-center items-center bg-black text-gray-400">
      <img src={imgURL} alt={name} className="max-w-full mt-0 rounded-t-lg" />
      <h3 className="font-bold text-white text-2xl">{name}</h3>
      <p className="p-2 text-lg">{description}</p>
      <div className="flex items-center flex-wrap justify-center gap-2">
        <h3 className="font-semibold text-xl">Stack:</h3>
        <div className="flex items-center flex-wrap overflow-hidden p-2 text-2xl gap-2">
          {stack.map((stackItem) => {
            return <i key={stackItem} className={stackItem} />;
          })}
        </div>
      </div>

      <div className="m-5 h-100 ">
        <a
          className="bg-red-500 flex  items-center justify-center hover:bg-white text-white hover:text-red-500 font-bold py-2 px-4 rounded-full gap-2"
          href={github}
        >
          <FaCode />
          Code
        </a>
      </div>
    </div>
  );
};

export default Project;
