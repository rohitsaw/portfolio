import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const Project = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.projectContainer}
    >
      <div className={styles.iconsContainer}>{project.getLogo()}</div>
      <div className={styles.projectTitle}>{project.title}</div>
      <div className={styles.projectDescription}>{project.description}</div>
      <div className={styles.projectLinks}>
        {project.links.map((link, index) =>
          index === 1 ? (
            <>
              <div key={link.url} style={{ flexGrow: 3 }}></div>
              <NavLink
                className={`${hover ? styles.navLinkHover : styles.navLink}`}
                to={link.url}
                target="_blank"
              >
                {link.getIcon()}
              </NavLink>
            </>
          ) : (
            <NavLink
              key={link.url}
              className={`${hover ? styles.navLinkHover : styles.navLink}`}
              to={link.url}
              target="_blank"
            >
              {link.getIcon()}
            </NavLink>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Project;
