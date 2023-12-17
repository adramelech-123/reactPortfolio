import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ name, image, id}) => {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />

      <h1>{name}</h1>
    </div>
  );
};
export default ProjectItem;
