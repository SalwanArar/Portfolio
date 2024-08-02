import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    href: "tel:+40741405694",
    icon: faPhone,
  },
  {
    href: "https://api.whatsapp.com/send?phone=40741405694",
    icon: faWhatsapp,
  },
  {
    href: "mailto:salwan.arar@gmail.com",
    icon: faEnvelope,
  },
  {
    href: "https://github.com/SalwanArar",
    icon: faGithub,
  },
  {
    href: "https://www.linkedin.com/in/SalwanArar",
    icon: faLinkedin,
  },
];
function FloatFooter() {
  const greyColor = "#36454F";
  return (
    <div className="float-footer">
      {icons.map((icon, index) => (
        <a href={icon.href} key={index} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icon.icon} color={greyColor} />
        </a>
      ))}
      {/* <a href="tel:+40741405694" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPhone} color="#0A31C3" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=40741405694"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} color="#25D366" />
      </a>
      <a href="mailto:salwan.arar@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} color="#AE8152" />
      </a>
      <a href="https://github.com/SalwanArar" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} color="#000000" />
      </a>
      <a
        href="https://www.linkedin.com/in/SalwanArar"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
      </a> */}
    </div>
  );
}

export default FloatFooter;
