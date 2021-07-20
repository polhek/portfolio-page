import Project from './Project';

const Projects = () => {
  return (
    <section className="container  w-full min-h-screen container mt-14 mx-auto px-5 ">
      <h2 className="title-font sm:text-4xl text-3xl  font-medium p-2 text-white">
        Projects
      </h2>
      <div className="flex  mt-3 flex-col items-center gap-16 md:flex-row md:flex-wrap">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
