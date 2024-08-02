import { useState, useEffect } from "react";
import "./index.scss";
import MenuBars from "../MenuBars";

function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the menu if it is open
      setToggle(false);
    };

    const links = document.querySelectorAll("nav a");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, []);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="title-container">
            <a href="#main">
              <p className="title">Salwan Arar</p>
              <p className="subtitle">Software Engineer</p>
            </a>
          </div>
          <MenuBars setToggle={setToggle} toggle={toggle} />
          <ul className={toggle ? "open" : "close"}>
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="#ideas">Ideas</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
