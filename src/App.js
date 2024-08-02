import "./App.css";
import FloatFooter from "./components/FloatFooter";
import Header from "./components/Header";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import MainSection from "./sections/MainSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <FloatFooter />
    </>
  );
}

export default App;
