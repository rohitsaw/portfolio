import Wrapper from "../../component/wrapper/index.js";
import Project from "../../component/project/index.js";
import styles from "./index.module.css";
import {
  faJs,
  faReact,
  faGithub,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as FlutterLogo } from "../../icons/Google-flutter-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      getLogo: () => (
        <>
          <div>React</div>
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#5ED2F3" }}
            size="xl"
          />
        </>
      ),
      title: "MineSweeper",
      description:
        "Clone of Google Classic Minesweeper Game with 3 Difficulties level",
      links: [
        {
          getIcon: () => <FontAwesomeIcon icon={faGithub} size="xl" />,
          url: "https://github.com/rohitsaw/minesweeper",
        },
        {
          getIcon: () => <FontAwesomeIcon icon={faLink} size="xl" />,
          url: "https://minesweeper-60xh.onrender.com/",
        },
      ],
    },

    {
      id: 2,
      getLogo: () => (
        <>
          <FontAwesomeIcon icon={faJs} style={{ color: "#EFD81A" }} size="xl" />
          <FlutterLogo height={22} />
        </>
      ),
      title: "Flutter Portfolio",
      description:
        "Created and Deployed First Personal Portfolio website in Flutter Web",
      links: [
        {
          getIcon: () => <FontAwesomeIcon icon={faGithub} size="xl" />,
          url: "https://github.com/rohitsaw/MyPortfolio",
        },
        {
          getIcon: () => <FontAwesomeIcon icon={faLink} size="xl" />,
          url: "https://rohitsaw.github.io/#/",
        },
      ],
    },

    {
      id: 3,
      getLogo: () => (
        <>
          <FontAwesomeIcon
            icon={faAndroid}
            style={{ color: "#9FC036" }}
            size="xl"
          />
          <FlutterLogo height={22} />
        </>
      ),
      title: "Expense Tracker",
      description:
        "App to Manage Expenses in custom categories and visualize data in Meaningful Charts ",
      links: [
        {
          getIcon: () => <FontAwesomeIcon icon={faGithub} size="xl" />,
          url: "https://github.com/rohitsaw/Expense-Tracker",
        },
        {
          getIcon: () => <FontAwesomeIcon icon={faLink} size="xl" />,
          url: "https://play.google.com/store/apps/details?id=com.rohitsaw.personal_expenses",
        },
      ],
    },

    {
      id: 4,
      getLogo: () => (
        <>
          <FontAwesomeIcon
            icon={faAndroid}
            style={{ color: "#9FC036" }}
            size="xl"
          />
          <FlutterLogo height={22} />
        </>
      ),
      title: "CodeList",
      description:
        "List all Coding competition happening over 70+ platform in different timezone",
      links: [
        {
          getIcon: () => <FontAwesomeIcon icon={faGithub} size="xl" />,
          url: "https://github.com/rohitsaw/codelist",
        },
        {
          getIcon: () => <FontAwesomeIcon icon={faLink} size="xl" />,
          url: "https://play.google.com/store/apps/details?id=developer.rohitsaw.codelist",
        },
      ],
    },
  ];
  return (
    <motion.div
      className={styles.projectsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Wrapper(Projects);
