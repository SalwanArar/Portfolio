import CustomSection from "../../components/CustomSection";
import "./index.scss";

import CPlusPlus from "../../assets/icons/c-plus-plus.svg";
import JS from "../../assets/icons/javascript.svg";
import TS from "../../assets/icons/typescript.svg";
import PHP from "../../assets/icons/php.svg";
import CSS from "../../assets/icons/css.svg";
import HTML5 from "../../assets/icons/html5.svg";
import Java from "../../assets/icons/java.svg";
import Kotlin from "../../assets/icons/kotlin.svg";
import Python from "../../assets/icons/python.svg";
import Solidity from "../../assets/icons/solidity.svg";
import Laravel from "../../assets/icons/laravel.svg";
import ReactJS from "../../assets/icons/react-js.svg";
import NodeJS from "../../assets/icons/node-js.svg";
import Blockchain from "../../assets/icons/blockchain.svg";
import AWS from "../../assets/icons/aws.svg";
import MySQL from "../../assets/icons/mysql.svg";
import RestAPI from "../../assets/icons/rest-api.svg";
import Ubuntu from "../../assets/icons/ubuntu.svg";
import Android from "../../assets/icons/android.svg";

import { TagCloud } from "react-tagcloud";

const otherSkills = [
  { value: "Machine Learning", count: 1 },
  { value: "NLP", count: 4 },
  { value: "Information Retrieval", count: 9 },
  { value: "CNN", count: 7 },
  { value: "Software Development", count: 13 },
  { value: "MongoDB", count: 10 },
];

const dataSkills = [
  {
    title: "Programming Languages",
    skills: [
      {
        src: CPlusPlus,
        alt: "C++",
        skill: "C++",
      },
      {
        src: JS,
        alt: "JavaScript",
        skill: "JS",
      },
      {
        src: TS,
        alt: "TypeScript",
        skill: "TS",
      },
      {
        src: HTML5,
        alt: "HTML5",
        skill: "HTML5",
      },
      {
        src: CSS,
        alt: "CSS",
        skill: "CSS",
      },
      {
        src: Python,
        alt: "Python",
        skill: "Python",
      },
      {
        src: PHP,
        alt: "PHP",
        skill: "PHP",
      },
      {
        src: Solidity,
        alt: "Solidity",
        skill: "Solidity",
      },
      {
        src: Java,
        alt: "Java",
        skill: "Java",
      },
      {
        src: Kotlin,
        alt: "Kotlin",
        skill: "Kotlin",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        src: ReactJS,
        alt: "ReactJS",
        skill: "ReactJS",
      },
      {
        src: NodeJS,
        alt: "NodeJS",
        skill: "NodeJS",
      },
      {
        src: Laravel,
        alt: "Laravel",
        skill: "Laravel",
      },
    ],
  },
  {
    title: "Technologies",
    skills: [
      {
        src: Blockchain,
        alt: "Blockchain",
        skill: "Blockchain",
      },
      {
        src: RestAPI,
        alt: "RestAPI",
        skill: "RestAPI",
      },
      {
        src: AWS,
        alt: "AWS",
        skill: "AWS",
      },
      {
        src: Android,
        alt: "Android",
        skill: "Android",
      },
      {
        src: Ubuntu,
        alt: "Ubuntu",
        skill: "Ubuntu",
      },
      {
        src: MySQL,
        alt: "MySQL",
        skill: "MySQL",
      },
    ],
  },
];

function SkillsSection() {
  return (
    <CustomSection title="Skills" id={"skills"}>
      <div className="skills-section">
        {dataSkills.map((skill, index) => (
          <div className="skills-container" key={index}>
            <h1>{skill.title}</h1>
            <div className="skills-row">
              {skill.skills.map((sk, j) => (
                <div className="skill" key={j}>
                  <img src={sk.src} alt={sk.alt} />
                  <p>{sk.skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="skills-container">
          <h1>Others</h1>
          <TagCloud
            minSize={20}
            maxSize={40}
            tags={otherSkills}
            style={{ textAlign: "center" }}
          />
        </div>
      </div>
    </CustomSection>
  );
}

export default SkillsSection;
