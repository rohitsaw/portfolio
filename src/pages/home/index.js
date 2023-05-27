import Wrapper from "../../component/wrapper/index.js";
import styles from "./index.module.css";
import { motion } from "framer-motion";

import {
  faStackOverflow,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const socialLinks = {
    github: "https://github.com/rohitsaw",
    stackOverFlow: "https://stackoverflow.com/users/11141059/rohit-saw",
    blog: "https://hashnode.com/@rsaw409",
    twitter: "https://twitter.com/rsaw409",
    mail: "mailto:developer.rohitsaw@gmail.com",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.homeContainer}>
        <div>
          <div className={styles.title}>
            Full-stack web and mobile app developer.
          </div>

          <div className={styles.body}>
            I am a FullStack developer with expertise in Node.js and React.js. I
            have experience in building scalable, secure and reliable web
            applications using various frameworks and technologies. I enjoy
            solving complex problems and learning new skills. I am passionate
            about creating high-quality code that follows best practices and
            industry standards. I am always looking for new challenges and
            opportunities to grow as a developer
          </div>
        </div>

        <div className={styles.imageContainer}>Image</div>
      </div>
      <div className={styles.socialLinks}>
        <a href={socialLinks.github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
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

export default Wrapper(Home);
