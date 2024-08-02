import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomSection from "../../components/CustomSection";
import "./index.scss";
import {
  faArrowUp,
  // faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
// import BachelorSenior from "../../assets/files/Bachelor-Senior.pdf";
// import BachelorJunior from "../../assets/files/Bachelor-Junior.pdf";
// import InfoCard from "../../components/InfoCard";
import EducationCard from "../../components/EducationCard";

const educationData = [
  {
    title: "Master's in Distributed Systems and Web Technologies",
    institute: "Gheorghe Asachi Technical University of Iasi",
    instituteLink: "https://www.tuiasi.ro/?lang=en",
    address: "Romania",
    date: "OCT 2023 — OCT 2025",
    tags: ["AWS", "Java", "Python", "CNN", "C++", "Open MPI"],
  },
  {
    title: "Bachelor's in Information Technology Engineering",
    institute: "Arab International University",
    instituteLink: "https://www.aiu.edu.sy/en/",
    address: "Syria",
    date: "SEP 2016 — AUG 2021",
    children: (
      <ul>
        <label>Theses:</label>
        <li>
          {/* <a href={BachelorSenior} target="_blank" rel="noreferrer"> */}
          <a
            href={"./assets/Bachelor-Senior.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Increasing the Security and Reliability of E-Health Systems using
            Blockchain Technology <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </li>
        <li>
          {/* <a href={BachelorJunior} target="_blank" rel="noreferrer"> */}
          <a
            href={"./assets/Bachelor-Junior.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Smart Controller through Voice <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </li>
      </ul>
    ),
    tags: [
      "Python",
      "C++",
      "C#",
      "Blockchain",
      "Android Development",
      "NLP",
      "PL/SQL",
      "Database",
      "Open MPI",
      "SQL",
      "Java",
      "Python",
      "CNN",
    ],
  },
];

function EducationSection() {
  return (
    <CustomSection title={"Education"} id={"education"}>
      <div className="edu-section">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            title={edu.title}
            company={edu.institute}
            date={edu.date}
            address={edu.address}
            instituteLink={edu.instituteLink}
            info={edu.children}
            tags={edu.tags}
          />
        ))}
        {/* <InfoCard
          title="Master's in Distributed Systems and Web Technologies"
          place="Gheorghe Asachi Technical University of Iasi, Romania"
          link="https://www.tuiasi.ro/?lang=en"
          date="October 2023 - October 2025"
        />
        <InfoCard
          title="Bachelor's in Information Technology Engineering"
          place="Arab International University, Syria"
          link="https://www.aiu.edu.sy/en/"
          date="September 2016 - August 2021"
        >
          <ul>
            <label>Theses:</label>
            <li>
              <a href={BachelorSenior} target="_blank" rel="noreferrer">
                Increasing the Security and Reliability of E-Health Systems
                using Blockchain Technology{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </li>
            <li>
              <a href="#_blank" target="_blank" rel="noreferrer">
                Smart Controller through Voice{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </li>
          </ul>
        </InfoCard> */}
      </div>
    </CustomSection>
  );
}

export default EducationSection;
