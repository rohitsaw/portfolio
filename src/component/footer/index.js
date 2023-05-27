import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

const Footer = () => {
  const routes = [
    { path: "/", routeName: "Home" },
    { path: "/about", routeName: "About" },
    { path: "/projects", routeName: "Project" },
    { path: "/contacts", routeName: "Contact" },
  ];

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBorder} />
      <footer className={styles.navContainer}>
        {routes.map((eachRoute, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink to={eachRoute.path} className={styles.navLink}>
              {eachRoute.routeName}
            </NavLink>
          </li>
        ))}
      </footer>
    </div>
  );
};

export default Footer;
