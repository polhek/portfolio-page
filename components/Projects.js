import Project from './Project';
import { projects } from '../public/projects-content';

const Projects = () => {
  return (
    <section className="container w-screen min-h-screen   container my-24 mx-auto px-5 ">
      <h2 className="title-font sm:text-4xl text-3xl  font-medium p-2 text-white">
        Projects
      </h2>
      <div className="min-w-auto  flex   justify-center">
        <div className="grid my-5 mx-auto md:grid-cols-2 lg:grid-flow-col lg:auto-cols-max h-100  justify-items-center max-h-96 gap-16 ">
          {projects.map((project) => {
            return <Project key={project.name} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
