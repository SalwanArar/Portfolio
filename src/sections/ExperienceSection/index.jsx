import CustomSection from "../../components/CustomSection";
import ExperienceCard from "../../components/ExperienceCard";
import "./index.scss";

const experienceInfo = [
  {
    title: "Full Stack Developer",
    link: "https://www.netcore.ae/",
    company: "NetCore IT Solutions",
    address: "Abu Dhabi, UAE",
    date: "Apr 2022 — August 2023",
    children: [
      <>
        Led the full-cycle development of applications from concept to
        deployment using <b>JavaScript</b>.
      </>,
      <>
        Architected and implemented robust <b>Back-End</b> solutions utilizing
        <b>MySQL</b>, <b>REST APIs</b>, <b>Node.js</b>, <b>Agile methodology</b>
        , and <b>Ubuntu Server 18.04</b>.
      </>,
      <>
        Developed responsive and dynamic <b>Front-End</b> interfaces with{" "}
        <b>React.js</b> and <b>Java</b>.
      </>,
      <>
        Spearheaded social media marketing campaigns to boost client engagement
        and brand visibility.
      </>,
      <>
        Managed domain registrations and maintained key supplier relationships
        to support business operations.
      </>,
    ],
    tags: [
      "JavaScript",
      "Java",
      "Android",
      "React.js",
      "MySQL",
      "Node.js",
      "REST API",
      "Ubuntu Server 18.04",
      "Agile Methodology",
      "PL/SQL",
    ],
  },
  {
    title: "IT Instructor",
    link: "https://www.facebook.com/RoadToSuccess20/",
    company: "Al-Najah Center",
    address: "Damascus, Syria",
    date: "Aug 2021 — Feb 2022",
    children: [
      <>
        Teaching programming languages, particularly <b>JS</b>, and <b>Java</b>.
      </>,
      <>
        Delivered lectures and coursework in various university-level subjects.
      </>,
      <>
        Created engaging and student-centered learning environments to foster
        academic success.
      </>,
    ],
    tags: ["JavaScript", "Java", "OOP"],
  },
  {
    title: "Software Developer (Contract)",
    link: "https://www.facebook.com/SYRedCrescent.RuralDamascus/",
    company: "Syrian Arab Red Crescent",
    address: "Damascus, Syria",
    date: "May — October 2020",
    children: [
      <>
        Designed and implemented a comprehensive database to optimize volunteer
        adherence and process management.
      </>,
      <>
        Developed an <b>Android Java</b> mobile application for volunteers to
        manage events and server connections efficiently.
      </>,
      <>
        Built a website for committee chairs using <b>React.js</b>,{" "}
        <b>Node.js</b>,<b>HTML5</b>, and <b>CSS</b> enabling streamlined
        management of volunteer information and event reports.
      </>,
    ],
    tags: [
      "Java",
      "JavaScript",
      "Android",
      "React.js",
      "Node.js",
      "CSS",
      "PHP",
      "Ubuntu Sever",
      "PL/SQL",
      "Database",
    ],
  },
];

function ExperienceSection() {
  return (
    <CustomSection title="Experience" id="experience">
      <div className="exp-section">
        {experienceInfo.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            title={exp.title}
            tags={exp.tags}
            link={exp.link}
            address={exp.address}
            company={"Cino Trends Production"}
            info={
              <ul>
                {exp.children.map((child, index) => (
                  <li key={index}>{child}</li>
                ))}
              </ul>
            }
          />
        ))}
      </div>
    </CustomSection>
  );
}

export default ExperienceSection;
