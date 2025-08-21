import { useLocation } from "react-router-dom";
import { useParams } from "react-router";

import { Outlet, Link } from "react-router-dom";
import Footer from "../footer";
import { motion } from "framer-motion";

import styles from "./index.module.css";

const Layout = () => {
  const location = useLocation();
  const { emailId } = useParams();

  const routes = [
    { path: `/${emailId}/about`, routeName: "About" },
    { path: `/${emailId}/workexperience`, routeName: "Work" },
    { path: `/${emailId}/certification`, routeName: "Certification" },
    { path: `/${emailId}/projects`, routeName: "Project" },
    { path: `/${emailId}/contacts`, routeName: "Contact" },
  ];

  return (
    <div className={styles.contentBackground}>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <div className={styles.navBackGround}>
            <ul className={styles.navList}>
              {routes.map((eachRoute, index) => {
                const isActive = eachRoute.path === location.pathname;
                return isActive ? (
                  <li key={index} className={styles.navItem}>
                    <motion.div layoutId="selected">
                      <Link
                        key={eachRoute.path}
                        to={eachRoute.path}
                        data-active={isActive}
                        className={styles.navLinkActive}
                      >
                        <span>{eachRoute.routeName}</span>
                      </Link>
                    </motion.div>
                  </li>
                ) : (
                  <li key={index} className={styles.navItem}>
                    <Link
                      key={eachRoute.path}
                      to={eachRoute.path}
                      data-active={isActive}
                      className={styles.navLink}
                    >
                      <span>{eachRoute.routeName}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
