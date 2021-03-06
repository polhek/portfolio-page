import LanguageIcon from './LanguageIcon';
import { frontend, backend, miscellaneous } from '../public/content.js';

const Tools = () => {
  return (
    <div id="tools" className="bg-gray-800 pb-20 min-h-screen bg-sky-700 ">
      <section className="container  w-full container   pt-20 mx-auto px-5 flex flex-col items-center text-left">
        <h2 className="title-font sm:text-4xl text-3xl  font-semibold p-2 text-white">
          Tools & Skills
        </h2>
        <div className="flex flex-col items-center px-4 ">
          <h3 className="font-medium sm:text-3xl text-2xl my-5 font-small  text-white">
            Front-End
          </h3>
          <div className="p-4 flex flex-wrap justify-center  gap-6">
            {frontend.map((language) => {
              return (
                <LanguageIcon
                  key={language.devIcon}
                  iconName={language.name}
                  devIcon={language.devIcon}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center px-4 ">
          <h3 className="font-medium sm:text-3xl text-2xl my-5 font-small  text-white">
            Back-End
          </h3>
          <div className="p-4 flex flex-wrap justify-center  gap-6">
            {backend.map((language) => {
              return (
                <LanguageIcon
                  key={language.devIcon}
                  iconName={language.name}
                  devIcon={language.devIcon}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center  px-4 ">
          <h3 className="font-medium sm:text-3xl text-2xl my-5 font-small  text-white">
            Miscellaneous
          </h3>
          <div className="p-4 flex flex-wrap justify-center  gap-6">
            {miscellaneous.map((language) => {
              return (
                <LanguageIcon
                  key={language.devIcon}
                  iconName={language.name}
                  devIcon={language.devIcon}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
