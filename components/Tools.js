import LanguageIcon from './LanguageIcon';
import { frontend, backend, miscellaneous } from '../public/content.js';

const Tools = () => {
  return (
    <section className="container  w-full min-h-screen container pt-14 mx-auto px-5 block">
      <h2 className="title-font sm:text-4xl text-3xl  font-medium p-2 text-white">
        Tools & Skills
      </h2>
      <div className="flex flex-col justify-start px-4 ">
        <h3 className="title-font sm:text-3xl text-2xl my-5 font-small  text-white">
          Front-End
        </h3>
        <div className="p-4 flex flex-wrap justify-start  gap-6">
          {frontend.map((language) => {
            return (
              <LanguageIcon
                iconName={language.name}
                devIcon={language.devIcon}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-start px-4 ">
        <h3 className="title-font sm:text-3xl text-2xl my-5 font-small  text-white">
          Back-End
        </h3>
        <div className="p-4 flex flex-wrap justify-start  gap-6">
          {backend.map((language) => {
            return (
              <LanguageIcon
                iconName={language.name}
                devIcon={language.devIcon}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-start px-4 ">
        <h3 className="title-font sm:text-3xl text-2xl my-5 font-small  text-white">
          Miscellaneous
        </h3>
        <div className="p-4 flex flex-wrap justify-start  gap-6">
          {miscellaneous.map((language) => {
            return (
              <LanguageIcon
                iconName={language.name}
                devIcon={language.devIcon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
