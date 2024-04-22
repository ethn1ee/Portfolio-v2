import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faDrawPolygon } from "@fortawesome/free-solid-svg-icons";

import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import "./Home.css";
import projects from "../../public/data/projects.json";
import doodles from "../../public/data/doodles.json";
import Collage from "../components/Collage/Collage.jsx";

import { createContext, useState } from "react";
import { motion } from "framer-motion";

export const ActiveProjectContext = createContext();

const Home = () => {
  const title = ["Web Developer", "UX Designer", "Software Engineer"];
  const [activeProject, setActiveProject] = useState(-1);

  return (
    <>
      <motion.div
        id="sidebar"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-text" id="name">
          Ethan Lee
        </div>
        <h2 id="title">{title[0]}</h2>
        <SocialLinks />
      </motion.div>
      <div id="main-column">
        <ActiveProjectContext.Provider
          value={[activeProject, setActiveProject]}
        >
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
        </ActiveProjectContext.Provider>
      </div>
      <div id="collage-container">
        <ActiveProjectContext.Provider
          value={[activeProject, setActiveProject]}
        >
          <Collage />
        </ActiveProjectContext.Provider>
      </div>
    </>
  );
};

export default Home;
