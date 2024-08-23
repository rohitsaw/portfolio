import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./index.module.css";

import { ListItem, ListItemButton } from "@mui/material";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShopIcon from "@mui/icons-material/Shop";

import {
  faJs,
  faNode,
  faReact,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as FlutterLogo } from "../../icons/Google-flutter-logo.svg";

const Projects = () => {
  let { isProjectsLoading, projects } = useSelector((state) => ({
    isProjectsLoading: state.isProjectsLoading,
    projects: state.projects,
  }));

  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <motion.div
      className={styles.projectsContainer}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.projectsTitle}>
        Things I’ve made trying to put my dent in the universe.
      </div>
      <div className={styles.projectsSubTitle}>
        I've worked on varieties of personal projects over the years in
        different programming languages and technology stacks. Many of these
        projects are open-source and available on my GitHub. Below I've listed a
        few of the completed ones.
      </div>

      {isProjectsLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : !projects?.length ? (
        <p>No Projects Found!</p>
      ) : (
        <div className={styles.projectsList}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <List component="nav">
              {projects.map((each, index) => (
                <>
                  <ListItemButton
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(-1)}
                  >
                    <ListItem alignItems="flex-start">
                      <NavLink
                        to={each.github_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ListItemIcon>
                          <GitHubIcon
                            sx={{ p: 0 }}
                            style={{
                              color:
                                hoverIndex === index
                                  ? `var(--primary-color)`
                                  : undefined,
                            }}
                          />
                          ,
                        </ListItemIcon>
                      </NavLink>

                      <ListItemText
                        primary={each.project_name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {each.project_description}
                              <br />
                              <br />

                              <Box display="flex" style={{ gap: 20 }}>
                                {each.technology_tags.includes("flutter") && (
                                  <FlutterLogo height={22} />
                                )}

                                {each.technology_tags.includes("react") && (
                                  <FontAwesomeIcon
                                    icon={faReact}
                                    style={{ color: "#5ED2F3" }}
                                    size="xl"
                                  />
                                )}

                                {each.technology_tags.includes("node") && (
                                  <FontAwesomeIcon
                                    icon={faNode}
                                    style={{ color: "#57A745" }}
                                    size="2xl"
                                  />
                                )}

                                {each.technology_tags.includes(
                                  "javascript"
                                ) && (
                                  <FontAwesomeIcon
                                    icon={faJs}
                                    style={{ color: "#57A745" }}
                                    size="xl"
                                  />
                                )}

                                {each.technology_tags.includes("android") && (
                                  <FontAwesomeIcon
                                    icon={faAndroid}
                                    style={{ color: "#57A745" }}
                                    size="xl"
                                  />
                                )}
                              </Box>
                            </Typography>
                          </React.Fragment>
                        }
                      />

                      {each.play_store_url && (
                        <NavLink
                          to={each.play_store_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ShopIcon
                            sx={{ pl: 1 }}
                            style={{
                              color:
                                hoverIndex === index
                                  ? `var(--primary-color)`
                                  : undefined,
                            }}
                          />
                        </NavLink>
                      )}

                      {each.web_url && (
                        <NavLink
                          to={each.web_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowOutwardIcon
                            sx={{ pl: 1 }}
                            style={{
                              color:
                                hoverIndex === index
                                  ? `var(--primary-color)`
                                  : undefined,
                            }}
                          />
                        </NavLink>
                      )}
                    </ListItem>
                  </ListItemButton>
                  <Divider variant="middle" component="li" />
                </>
              ))}
            </List>
          </Box>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
