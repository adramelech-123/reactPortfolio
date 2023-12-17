import { useParams } from "react-router-dom";
import { projectList } from "../Helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHub />
    </div>
  );
};
export default ProjectDisplay;
