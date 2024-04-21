import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faDrawPolygon } from "@fortawesome/free-solid-svg-icons";

import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import "./Home.css";
import projects from "../../public/data/projects.json";
import doodles from "../../public/data/doodles.json";
import Collage from "../components/Collage/Collage.jsx";

const Home = () => {
  const title = ["Web Developer", "UX Designer", "Software Engineer"];

  return (
    <>
      <div id="sidebar">
        <div className="hero-text" id="name">
          Ethan Lee
        </div>
        <h2 id="title">{title[0]}</h2>
        <SocialLinks />
      </div>
      <div id="main-column">
        <ProjectsSection
          title="Projects"
          data={projects.data}
          icon={<FontAwesomeIcon icon={faShapes} size="lg" />}
        />
        <ProjectsSection
          title="Doodles"
          data={doodles.data}
          icon={<FontAwesomeIcon icon={faDrawPolygon} size="lg" />}
        />
      </div>
      <div id="collage-container">
        <Collage />
      </div>
    </>
  );
};

export default Home;
