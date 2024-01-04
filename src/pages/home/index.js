import styles from "./index.module.css";
import { motion } from "framer-motion";

import {
  faStackOverflow,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Home = () => {
  const {
    email,
    linkedin_url,
    github_url,
    blog_url,
    twitter_url,
    stackoverflow_url,
  } = useSelector((state) => ({
    email: state.user?.user_email,
    linkedin_url: state.user?.linkedin_url,
    github_url: state.user?.github_url,
    blog_url: state.user?.blog_url,
    twitter_url: state.user?.twitter_url,
    stackoverflow_url: state.user?.stackoverflow_url,
  }));

  const socialLinks = {
    github: github_url,
    linkedin: linkedin_url,
    stackOverFlow: stackoverflow_url,
    blog: blog_url,
    twitter: twitter_url,
    mail: `mailto:${email}`,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.homeContainer}>
        <div>
          <div className={styles.title}>
            Full-stack web and mobile app developer.
          </div>

          <div className={styles.body}>
            I'm Highly skilled and motivated full-stack software developer with
            2 years of industry experience. Proficient in developing robust and
            scalable web applications, combining expertise in both front-end and
            back-end technologies. Adept at analyzing user requirements and
            translating them into functional code, ensuring optimal performance
            and user experience. Strong knowledge of HTML, CSS, JavaScript, and
            modern frameworks like React and Node.js. <br />
            Additionally, possess a solid foundation in data structures and
            algorithms, leveraging this expertise to design efficient and
            optimized solutions. Experienced in implementing algorithms and
            leveraging data structures to solve complex problems, enhancing
            application performance and scalability.
          </div>
        </div>

        <a target="_blank" href="images/rohit.jpg">
          <img
            className={styles.img}
            src="images/rohit.jpg"
            alt="Rohit aka rsaw409 logo"
          />
        </a>
      </div>
      <div className={styles.body}>
        Experienced in designing and implementing RESTful APIs using Node.js and
        Express, with a solid understanding of database management systems such
        as SQL and MongoDB. Demonstrated ability to work effectively in agile
        environments, collaborating with cross-functional teams to deliver
        high-quality software solutions. Proactive problem solver with a passion
        for learning and staying updated with the latest industry trends and
        technologies.
      </div>
      <div className={styles.socialLinks}>
        <a href={socialLinks.github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a href={socialLinks.stackOverFlow} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} size="2xl" />
        </a>
        <a href={socialLinks.blog} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faBlog} size="2xl" />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </a>
        <a href={socialLinks.mail} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
