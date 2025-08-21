import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./index.module.css";

const Footer = () => {
  const location = useLocation();
  const { emailId } = useParams();

  const routes = [
    { path: `/${emailId}/about`, routeName: "About" },
    { path: `/${emailId}/workexperience`, routeName: "Work" },
    { path: `/${emailId}/certification`, routeName: "Certification" },
    { path: `/${emailId}/projects`, routeName: "Projects" },
    { path: `/${emailId}/contacts`, routeName: "Contact" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.footerNavList}>
        {routes.map((eachRoute, index) => {
          const isActive = eachRoute.path === location.pathname;
          return (
            <li key={index} className={styles.footerNavItem}>
              {isActive ? (
                <motion.div layoutId="footerSelected">
                  <Link
                    to={eachRoute.path}
                    className={`${styles.footerNavLink} ${styles.footerNavLinkActive}`}
                  >
                    {eachRoute.routeName}
                  </Link>
                </motion.div>
              ) : (
                <Link to={eachRoute.path} className={styles.footerNavLink}>
                  {eachRoute.routeName}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className={styles.copyText}>
        © {new Date().getFullYear()} @rsaw409
      </div>
    </footer>
  );
};

export default Footer;
