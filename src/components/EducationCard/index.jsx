import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function EducationCard(props) {
  return (
    <div className="edu-card">
      <div className="edu-date">{props.date}</div>
      <div className="edu-main">
        <a href={props.instituteLink} target="_blank" rel="noreferrer">
          <h1>
            {props.title} <FontAwesomeIcon icon={faArrowUp} />
          </h1>
          <h2>{props.subtitle}</h2>
        </a>
        <h2>{props.company}</h2>
        <h2>{props.address}</h2>
        <div className="edu-info">{props.info}</div>
        <div className="edu-tags">
          {props.tags?.map((tag, index) => (
            <div className="edu-tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
