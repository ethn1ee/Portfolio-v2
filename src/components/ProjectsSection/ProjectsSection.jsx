/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";

import "./ProjectsSection.css";
import { useContext } from "react";
import { ActiveProjectContext } from "../../pages/Home";

const ProjectsSection = (props) => {
  const { title, data, icon } = props;
  const [activeProject, setActiveProject] = useContext(ActiveProjectContext);

  const handleClick = (id) => {
    if (activeProject === id) setActiveProject(-1);
    else setActiveProject(id);
  };

  return (
    <div className="projects-section">
      <div className="section-title">
        {icon}
        <h2>{title}</h2>
      </div>

      <div className="section-content">
        {data.map((item) => (
          <Project
            item={item}
            isActive={activeProject === item.id}
            onClick={() => handleClick(item.id)}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

const Project = (props) => {
  const { item, isActive, onClick } = props;

  return (
    <div
      className="project"
      onClick={onClick}
      style={isActive ? { height: "auto", opacity: 1 } : { height: "30px" }}
    >
      <div className="project-header">
        <h1 className="project-title">{item.title}</h1>
        <div className="project-links">
          {item.links.map((link) => (
            <>
              {link.site === "other" && (
                <a
                  className="project-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} />
                </a>
              )}
              {link.site === "github" && (
                <a
                  className="project-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {link.site === "figma" && (
                <a
                  className="project-link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFigma} />
                </a>
              )}
            </>
          ))}
        </div>
      </div>
      <h2 className="project-subtitle" style={isActive ? { opacity: 1 } : {}}>
        {item.subtitle}
      </h2>
      <p className="project-content" style={isActive ? { opacity: 1 } : {}}>
        {item.content}
      </p>
    </div>
  );
};

export default ProjectsSection;
