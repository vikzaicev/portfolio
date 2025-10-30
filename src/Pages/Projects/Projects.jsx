import Project from "../../components/Project/Project";
import { dataProject } from "../../Utils/dataProjects";

export const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {dataProject.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </main>
  );
};
