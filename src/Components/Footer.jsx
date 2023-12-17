import "../styles/Footer.css"
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <LinkedIn/>
        </div>
        <p>&copy; 2023 NetherScope Inc.</p>
    </div>
  )
}
export default Footer