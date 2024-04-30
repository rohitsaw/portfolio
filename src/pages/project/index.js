import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import Project from "../../component/project/index.js";

import styles from "./index.module.css";

import { transformProjects } from "../../utils/util.js";

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

export default Projects;
