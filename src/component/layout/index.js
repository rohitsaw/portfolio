import React from "react";
import { useLocation } from "react-router-dom";

import { Outlet, NavLink } from "react-router-dom";
import styles from "./index.module.css";

const Layout = () => {
  const location = useLocation();

  const routes = [
    { path: "/", routeName: "Home" },
    { path: "/about", routeName: "About" },
    { path: "/projects", routeName: "Project" },
    { path: "/contacts", routeName: "Contact" },
  ];

  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <div className={styles.navBackGround}>
            <ul className={styles.navList}>
              {routes.map((eachRoute, index) => (
                <li key={index} className={styles.navItem}>
                  <NavLink
                    to={eachRoute.path}
                    className={
                      eachRoute.path === location.pathname
                        ? styles.navLinkActive
                        : styles.navLink
                    }
                  >
                    {eachRoute.routeName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
