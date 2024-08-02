import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function InfoCard(props) {
  return (
    <div className="info-card">
      <h2>{props.title}</h2>
      <p>
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.place}
          {"  "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </p>
      <i>{props.date}</i>
      {props.children}
    </div>
  );
}

export default InfoCard;
