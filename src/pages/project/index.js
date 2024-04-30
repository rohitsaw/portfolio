import {
  faJs,
  faNode,
  faReact,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ShopIcon from "@mui/icons-material/Shop";
import GitHubIcon from "@mui/icons-material/GitHub";

import { ReactComponent as FlutterLogo } from "../../icons/Google-flutter-logo.svg";
import Project from "../../component/project/index.js";

import styles from "./index.module.css";


const Projects = () => {
  let { isProjectsLoading, projects } = useSelector((state) => ({
    isProjectsLoading: state.isProjectsLoading,
    projects: state.projects,
  }));

  projects = transformProjects(projects);

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
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const transformProjects = (projects) => {
  return projects?.map((each) => {
    const links = [];
    if (each.github_url) {
      links.push({
        getIcon: () => <GitHubIcon />,
        url: each.github_url,
      });
    }
    if (each.play_store_url) {
      links.push({
        getIcon: () => <ShopIcon />,
        url: each.play_store_url,
      });
    }
    if (each.web_url) {
      links.push({
        getIcon: () => <ArrowOutwardIcon />,
        url: each.web_url,
      });
    }

    return {
      id: each.id,
      title: each.project_name,
      description: each.project_description,
      links: links,
      getLogo: () => (
        <>
          {each.technology_tags.includes("react") && (
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#5ED2F3" }}
              size="xl"
            />
          )}
          {each.technology_tags.includes("android") && (
            <FontAwesomeIcon
              icon={faAndroid}
              style={{ color: "#9FC036" }}
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
          {each.technology_tags.includes("javascript") && (
            <FontAwesomeIcon
              icon={faJs}
              style={{ color: "#EFD81A" }}
              size="xl"
            />
          )}
          {each.technology_tags.includes("flutter") && (
            <FlutterLogo height={22} />
          )}
        </>
      ),
    };
  });
};

export default Projects;
