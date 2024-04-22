/* eslint-disable react/prop-types */
import "./Collage.css";
import { ActiveProjectContext } from "../../pages/Home";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../../public/data/projects.json";
import doodles from "../../../public/data/doodles.json";

const Collage = () => {
  const [activeProject, setActiveProject] = useContext(ActiveProjectContext);
  const project =
    activeProject === -1
      ? "Default"
      : activeProject < projects.data.length
      ? projects.data[activeProject].title
      : doodles.data[activeProject - projects.data.length].title;

  return (
    <motion.div
      className="collage"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.9, ease: "easeOut" }}
    >
      <div className="collage-sm-grid" id="collage-row-1">
        <FrameSmall project={project} index={2} />
        <FrameSmall project={project} index={3} />
      </div>
      <div className="collage-lg-grid" id="collage-row-2">
        <FrameLarge project={project} index={0} />
        <FrameLarge project={project} index={1} />
      </div>
      <div className="collage-sm-grid" id="collage-row-3">
        <FrameSmall project={project} index={4} />
        <FrameSmall project={project} index={5} />
      </div>
    </motion.div>
  );
};

const FrameSmall = (props) => {
  const { project, index } = props;
  const size = { w: 205 * 1.54, h: 205 };
  const src = `./thumbnails/${project}/${index}.png`;
  return (
    <motion.div
      className="frame-sm"
      style={{ width: `${size.w}px`, height: `${size.h}px` }}
      whileHover={{ scale: 1.01 }}
    >
      <AnimatePresence>
        <motion.img
          className="collage-img"
          src={src}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `./thumbnails/${project}/0.png`;
          }}
          alt="thumnnail"
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};

const FrameLarge = (props) => {
  const { project, index } = props;
  const size = { w: 266 * 1.54, h: 266 };
  const src = `./thumbnails/${project}/${index}.png`;
  return (
    <motion.div
      className="frame-lg"
      style={{ width: `${size.w}px`, height: `${size.h}px` }}
      whileHover={{ scale: 1.01 }}
    >
      <AnimatePresence>
        <motion.img
          className="collage-img"
          src={src}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `./thumbnails/${project}/0.png`;
          }}
          alt="thumnnail"
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default Collage;
