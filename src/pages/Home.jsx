import { LinkedIn, Email, GitHub } from "@mui/icons-material"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Taku!</h2>
        <div className="prompt">
          
          <p>
            A software developer and visual artist with a passion for learning
            and creating.
          </p>
          <a href="#">
            <LinkedIn />
          </a>
          <a href="#">
            <GitHub />
          </a>
          <a href="#">
            <Email />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, PHP, Rust, C++, TypeScript, Go
            </span>
          </li>

          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, VueJS, Angular, Redux, HTML, CSS, React Native, Flutter,
              NPM, Ionic, Bootstrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, SpringBoot, .NET, ExpressJS, GraphQL, MySQL, MongoDB,
              PostGreSQL, AWS S3, DynamoDB, DigitalOcean
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home