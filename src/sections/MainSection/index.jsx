import "./index.scss";
import Pic from "../../assets/images/profile-pic-c.png";
// import Resume from "../../assets/files/Resume.pdf";
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
          Dedicated Software Engineer and Web Developer with extensive
          experience in web and mobile application development. Proficient in a
          variety of programming languages and frameworks including{" "}
          <b>JavaScript</b>, <b>React.js</b>, <b>PHP</b>, <b>Python</b>, and
          more. Passionate about learning, problem-solving, and delivering
          high-quality, innovative solutions.
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
