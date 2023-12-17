import ProjectItem from "../Components/ProjectItem"
import { projectList } from "../Helpers/ProjectList";
import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map(({id, name, image}, index) => {
          return <ProjectItem key={id} id={index} name={name} image={image} />;
        })}
      </div>
    </div>
  );
}
export default Projects  