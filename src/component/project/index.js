import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const Project = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.projectContainer}
    >
      <div className={styles.iconsContainer}>{project.getLogo()}</div>
      <div className={styles.projectTitle}>{project.title}</div>
      <div className={styles.projectDescription}>{project.description}</div>
      <div className={styles.projectLinks}>
        {project.links.map((link) => (
          <NavLink
            className={`${hover ? styles.navLinkHover : styles.navLink}`}
            to={link.url}
            target="_blank"
          >
            {link.getIcon()}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Project;
