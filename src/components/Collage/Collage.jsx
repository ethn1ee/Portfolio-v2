import "./Collage.css";
import { ActiveProjectContext } from "../../pages/Home";
import { useContext } from "react";
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
    <div className="collage">
      <div className="collage-sm-grid" id="collage-row-1">
        <FrameSmall
          img={
            <img
              className="collage-img"
              src={`./thumbnails/${project}/2.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `./thumbnails/${project}/0.png`;
              }}
              alt="thumnnail"
            />
          }
        />
        <FrameSmall
          img={
            <img
              className="collage-img"
              src={`./thumbnails/${project}/3.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `./thumbnails/${project}/0.png`;
              }}
              alt="thumnnail"
            />
          }
        />
      </div>
      <div className="collage-lg-grid" id="collage-row-2">
        <FrameLarge
          img={
            <img
              className="collage-img"
              src={`./thumbnails/${project}/0.png`}
              alt="thumnnail"
            />
          }
        />
        <FrameLarge
          img={
            <img
              className="collage-img"
              src={`./thumbnails/${project}/1.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `./thumbnails/${project}/0.png`;
              }}
              alt="thumnnail"
            />
          }
        />
      </div>
      <div className="collage-sm-grid" id="collage-row-3">
        <FrameSmall
          img={
            <img
              className="collage-img"
              src={`./thumbnails/${project}/4.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `./thumbnails/${project}/0.png`;
              }}
              alt="thumnnail"
            />
          }
        />
        <FrameSmall
          img={
            <img
              className="collage-img"
              src={`./thumbnails/${project}/5.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `./thumbnails/${project}/0.png`;
              }}
              alt="thumnnail"
            />
          }
        />
      </div>
    </div>
  );
};

const FrameSmall = (props) => {
  const { img } = props;
  const size = { w: 205 * 1.54, h: 205 };
  return (
    <div
      className="frame-sm"
      style={{ width: `${size.w}px`, height: `${size.h}px` }}
    >
      {img}
    </div>
  );
};

const FrameLarge = (props) => {
  const { img } = props;
  const size = { w: 266 * 1.54, h: 266 };
  return (
    <div
      className="frame-lg"
      style={{ width: `${size.w}px`, height: `${size.h}px` }}
    >
      {img}
    </div>
  );
};

export default Collage;
