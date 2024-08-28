import "./index.scss";
import Pic from "../../assets/images/profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function MainSection() {
  return (
    <main className="container" id="main">
      <div className="left-column">
        <h1>
          HI,
          <br />
          I'M SALWAN
        </h1>
        <h2>Software Engineer | Web Developer</h2>
        <p>
          Software developer with expertise in <b>JavaScript</b>, <b>Node.js</b>
          , <b>Java</b>, and <b>Python</b>, as well as web development using{" "}
          <b>Node.js</b>, <b>React.js</b>, <b>NLTK</b>.<br />
          Seeking a challenging position to leverage my competencies in software
          development and distributed systems to contribute to innovative
          projects.
        </p>
      </div>
      <div className="right-column">
        <img src={Pic} alt="Profile Pc" />
        <a href="./assets/Resume.pdf" aria-label="Resume" download>
          <FontAwesomeIcon icon={faDownload} />
          <span>DOWNLOAD RESUME</span>
        </a>
      </div>
    </main>
  );
}

export default MainSection;
