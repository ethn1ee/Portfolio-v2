import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faBriefcase, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import "./SocialLinks.css";
import { useState } from "react";

const SocialLinks = () => {
  const links = {
    email: "lth20031021@gmail.com",
    resume: "./Ethan_Lee_resume.pdf",
    github: "https://github.com/ethn1ee",
    linkedin: "https://www.linkedin.com/in/ethn1ee/",
  };

  return (
    <div id="social-links-container">
      <CopyButton
        icon={<FontAwesomeIcon className="social-icon" icon={faAt} />}
        text={links.email}
      />
      <LinkButton
        icon={<FontAwesomeIcon className="social-icon" icon={faBriefcase} />}
        link={links.resume}
      />
      <LinkButton
        icon={<FontAwesomeIcon className="social-icon" icon={faLinkedin} />}
        link={links.linkedin}
      />
      <LinkButton
        icon={<FontAwesomeIcon className="social-icon" icon={faGithub} />}
        link={links.github}
      />
    </div>
  );
};

const CopyButton = (props) => {
  const { icon, text } = props;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => console.error("Failed to copy: " + err));
  };

  return (
    <>
      <motion.div
        className="social-icon-container"
        onClick={handleCopy}
        whileHover={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div key={copied} initial={{ scale: 0 }} animate={{ scale: 1 }}>
          {copied ? (
            <FontAwesomeIcon className="social-icon" icon={faCheck} />
          ) : (
            icon
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

const LinkButton = (props) => {
  const { icon, link } = props;

  return (
    <motion.a
      className="social-icon-container"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 0.85 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.a>
  );
};

export default SocialLinks;
