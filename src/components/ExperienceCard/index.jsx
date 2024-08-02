import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ExperienceCard(props) {
  return (
    <a href={props.link} className="exp-card" target="_blank" rel="noreferrer">
      <div className="exp-date">{props.date}</div>
      <div className="exp-main">
        <h1>
          {props.title} <FontAwesomeIcon icon={faArrowUp} />
        </h1>
        <h2>{props.company}</h2>
        <h2>{props.address}</h2>
        <div className="exp-info">{props.info}</div>
        <div className="exp-tags">
          {props.tags?.map((tag, index) => (
            <div className="exp-tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ExperienceCard;
