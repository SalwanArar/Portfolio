import CustomSection from "../../components/CustomSection";
import ExperienceCard from "../../components/ExperienceCard";
import "./index.scss";

const experienceInfo = [
  {
    title: "Web Developer",
    link: "https://www.instagram.com/cinotrends/",
    company: "Cino Trends Production, Abu Dhabi, UAE",
    address: "Abu Dhabi, UAE",
    date: "Jan — Jul 2023",
    children: [
      <>
        Developed responsive <b>Front-End</b> websites using <b>React.js</b>.
      </>,
      <>
        Implemented and managed social media marketing campaigns to enhance
        client engagement.
      </>,
      // <>
      //   Developed responsive websites using <b>React.js</b>, <b>JavaScript</b>,{" "}
      //   <b>HTML5</b>, and <b>CSS</b>.
      // </>,
      // <>
      //   Implemented and managed social media marketing campaigns to enhance
      //   client engagement.
      // </>,
      // <>
      //   Built and maintained strong client relationships, ensuring high levels
      //   of satisfaction and service delivery.
      // </>,
    ],
    tags: ["ReactJS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Software Developer",
    link: "https://www.netcore.ae/",
    company: "NetCore IT Solutions",
    address: "Abu Dhabi, UAE",
    date: "Apr 2022 — Apr 2023",
    children: [
      <>
        Developed application from the ground up using <b>JS</b>.
      </>,
      <>
        Designed and implemented the <b>Back-End</b> using <b>MySQL</b>,{" "}
        <b>REST API</b>, <b>Laravel</b>, and <b>Ubuntu Server 18.04</b>.
      </>,
      <>Managed domain registrations and supplier relationships.</>,
      // <>
      //   Developed mobile applications from the ground up using the{" "}
      //   <b>Flutter</b> framework and <b>Dart</b>.
      // </>,
      // <>
      //   Designed and implemented backend systems using <b>MySQL</b>,{" "}
      //   <b>REST API</b>, and <b>Ubuntu server 18.04</b>.
      // </>,
      // <>Managed domain registrations and supplier relationships.</>,
      // <>
      //   Provided training on <b>Flutter</b> development to students at{" "}
      //   <b>Al Ain University</b>.
      // </>,
    ],
    tags: [
      "JS",
      "Laravel",
      "REST API",
      "MySQL",
      "Ubuntu",
      "Database Design",
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
        Teaching programming languages, particularly <b>JS</b>, and{" "}
        <b>Python</b>.
      </>,
      // <>
      //   Teaching programming languages, particularly <b>Flutter</b>, <b>C++</b>,
      //   and <b>Python</b>.
      // </>,
      <>
        Delivered lectures and coursework in various university-level subjects.
      </>,
      <>
        Created engaging and student-centered learning environments to foster
        academic success.
      </>,
    ],
    tags: ["JavaScript", "Web Development", "Python"],
  },
  {
    title: "Head of IT Committee",
    link: "https://www.facebook.com/SYRedCrescent.RuralDamascus/",
    company: "Syrian Arab Red Crescent",
    address: "Damascus, Syria",
    date: "May — Aug 2020",
    children: [
      <>
        Designed a comprehensive database to streamline volunteer adherence and
        process management.
      </>,
      <>
        Developed a mobile application for volunteers using Android to manage
        events and server connections.
      </>,
      <>
        Created a website using <b>PHP</b>, <b>HTML5</b>, and <b>CSS</b> for
        committee chairs to manage volunteer information and event reports.
      </>,
    ],
    tags: [
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
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
