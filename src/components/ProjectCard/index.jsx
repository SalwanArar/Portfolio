import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ProjectCard(props) {
  return (
    <a href={props.link} className="pro-card" target="_blank" rel="noreferrer">
      <div className="pro-img">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="pro-main">
        <h1>
          {props.title} <FontAwesomeIcon icon={faArrowUp} />
        </h1>
        <div className="pro-info">{props.info}</div>
        <div className="pro-tags">
          {props.tags?.map((tag, index) => (
            <div className="pro-tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
