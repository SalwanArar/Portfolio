import CustomSection from "../../components/CustomSection";
import ProjectCard from "../../components/ProjectCard";
import "./index.scss";
import SnowmanShoot from "../../assets/images/snowman-game-removebg-preview.png";
import SurveyPoint from "../../assets/images/survey-point.png";
import BookSearchEngine from "../../assets/images/book-search-engine.png";
import NLPImage from "../../assets/images/persona-pulse-removebg-preview.png";
import NutriTrack from "../../assets/images/NutriTrack-removebg-preview.png";
import LifeChain from "../../assets/images/life-chain.png";
import SCtV from "../../assets/images/SCtV.png";

const projectsData = [
  {
    title: "Snowman Shootout",
    link: "https://github.com/SalwanArar/OpenGL-Game",
    img: SnowmanShoot,
    alt: "Snowman",
    info: "Snowman Shootout is a fun and interactive game where you control a snowman armed with a snowball cannon. Your goal is to shoot down as many targets as possible within a given time limit. The game is developed using C++ programming language and utilizes the OpenGL library for graphics rendering",
    tags: ["C++", "OpenGL"],
  },
  {
    title: "LifeChain",
    link: "./assets/Bachelor-Senior.pdf",
    img: LifeChain,
    alt: "LifeChain",
    info: "A custom survey application that uses a kiosk android based device to run the application, The application has also an admin panel to control the questions. The system could be used in health institutes, malls, etc…",
    tags: ["Solidity", "Blockchain", "Java", "Database", "MySQL", "Android"],
  },
  {
    title: "Smart Controller through Voice",
    link: "./assets/Bachelor-Junior.pdf",
    img: SCtV,
    alt: "SCtV",
    info: '"Smart Controller through Voice" is an app that lets you control home appliances with voice commands. Using a compact device, you can manage lights, set timers, and control devices remotely, making home automation simple and hands-free',
    tags: ["Raspberry Pi", "PHP", "LAMP", "MySQL", "Android", "Java"],
  },
  {
    title: "SurveyPoint",
    link: "https://github.com/SalwanArar/SurveyPointFlutter/tree/master",
    img: SurveyPoint,
    alt: "SurveyPoint",
    info: "A custom survey application that uses a kiosk android based device to run the application, The application has also an admin panel to control the questions. The system could be used in health institutes, malls, etc…",
    tags: ["Dart", "Flutter"],
  },
  {
    title: "Book Search Engine",
    link: "https://github.com/SalwanArar/Books-Web-Search-Engine",
    img: BookSearchEngine,
    alt: "BookSearchEngine",
    info: "The Web_Search_Engine is a program where you can effortlessly explore websites, gather relevant information, and search for specific words or phrases within the retrieved content.",
    tags: ["Python", "nltk"],
  },
  {
    title: "PersonaPulse",
    link: "https://github.com/SalwanArar/Natural-Language-Processing",
    img: NLPImage,
    alt: "NLP",
    info: "NLP project: Analyzing social media comments to categorize personalities using ML. Gain insights into communication patterns and segment online communities.",
    tags: ["Python", "pandas", "nltk"],
  },
  {
    title: "NutriTrack",
    link: "https://github.com/SalwanArar/Foodie-Android-Application/tree/main",
    img: NutriTrack,
    alt: "NutriTrack",
    info: "An android application using java programming language. The application connects with a server to retrieve the nutritional values of a specific food.",
    tags: ["Android", "Java"],
  },
];

function ProjectSection() {
  return (
    <CustomSection title={"Projects"} id={"projects"}>
      <div className="pro-section">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            alt={project.alt}
            title={project.title}
            link={project.link}
            info={project.info}
            tags={project.tags}
          />
        ))}
      </div>
    </CustomSection>
  );
}

export default ProjectSection;
