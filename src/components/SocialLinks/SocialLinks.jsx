import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./SocialLinks.css";

const SocialLinks = () => {
  const links = {
    email: "lth20031021@gmail.com",
    portfolio: "ethn1ee.github.io/Portfolio-ver2/",
    github: "https://github.com/ethn1ee",
    linkedin: "https://www.linkedin.com/in/ethn1ee/",
  };

  return (
    <div id="social-links-container">
      <IconContainer
        icon={<FontAwesomeIcon className="social-icon" icon={faAt} />}
        link={links.email}
      />
      <IconContainer
        icon={<FontAwesomeIcon className="social-icon" icon={faBriefcase} />}
        link={links.portfolio}
      />
      <IconContainer
        icon={<FontAwesomeIcon className="social-icon" icon={faLinkedin} />}
        link={links.github}
      />
      <IconContainer
        icon={<FontAwesomeIcon className="social-icon" icon={faGithub} />}
        link={links.linkedin}
      />
    </div>
  );
};

const IconContainer = (props) => {
  const { icon, link } = props;

  return (
    <a
      className="social-icon-container"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
