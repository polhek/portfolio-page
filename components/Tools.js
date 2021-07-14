import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJava,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextDotJs,
  SiNodeDotJs,
  SiMongodb,
} from 'react-icons/si';
import express from '../public/images/expressjs.png';

const Tools = () => {
  return (
    <section className="container w-full   h-screen container py-24 mx-auto px-5">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium p-4 text-white">
        Tools & Skills
      </h2>
      <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-8 md:gap-0 -m-4">
        <div className="p-4 xl:w-1/3 lg:w-1/2 w-full ">
          <h3 className="text-center sm:text-2xl text-xl mb-4 font-normal ">
            Front-end
          </h3>
          <div className="h-full p-6 rounded-lg border-2 flex-col justify-between items-center shadow gap-6  border-gray-700 flex relative overflow-hidden">
            <div className="flex  justify-evenly w-full px-5">
              <div className="flex flex-col items-center justify-center ">
                <SiHtml5 className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">HTML</h4>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <SiCss3 className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">CSS</h4>
              </div>
            </div>
            <div className="flex  justify-evenly gap-2 w-full px-5">
              <div className="flex flex-col items-center justify-center ">
                <SiJavascript className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">JavaScript</h4>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <SiTypescript className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">TypeScript</h4>
              </div>
            </div>
            <div className="flex  justify-evenly gap-2 w-full px-5">
              <div className="flex flex-col items-center justify-center ">
                <SiReact className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">React</h4>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <SiRedux className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">Redux</h4>
              </div>
            </div>
            <div className="flex  justify-center w-full px-5">
              <div className="flex flex-col items-center justify-center ">
                <SiNextDotJs className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">NextJS</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 xl:w-1/3 lg:w-1/2 w-full ">
          <h3 className="text-center sm:text-2xl text-xl mb-4 font-normal ">
            Back-end
          </h3>
          <div className="h-full p-6 rounded-lg border-2 flex-col justify-between items-center shadow gap-6  border-gray-700 flex relative overflow-hidden">
            <div className="flex  justify-evenly w-full gap-2 px-5">
              <div className="flex flex-col items-center  justify-center ">
                <SiNodeDotJs className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">NodeJS</h4>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <SiJavascript className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">JavaScript</h4>
              </div>
            </div>
            <div className="flex  justify-evenly gap-2 w-full px-5">
              <div className="flex flex-col items-center justify-center ">
                <SiMongodb className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">MongoDB</h4>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <SiTypescript className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">TypeScript</h4>
              </div>
            </div>
            <div className="flex  justify-evenly gap-2 w-full px-5">
              <div className="flex flex-col items-center justify-center ">
                <SiTypescript className="h-8 w-8" />
                <h4 className="text-sm font-semibold pt-1">TypeScript</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 xl:w-1/3 lg:w-1/2 w-full ">
          <h3 className="text-center sm:text-2xl text-xl mb-4 font-normal ">
            Miscellaneous
          </h3>
          <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
            ss
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
