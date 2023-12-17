import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Reorder } from "@mui/icons-material";

const Navbar = () => {
  const [expandNav, setExpandNav] = useState(false);
  const location = useLocation()

//   The Navbar expansion is set to false when the location/route changes
  useEffect(() => {
    setExpandNav(false)
  }, [location])  

  return (
    <div className="navbar" id={expandNav ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {setExpandNav(!expandNav)}}>
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};
export default Navbar;
