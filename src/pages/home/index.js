import { motion } from "framer-motion";

import styles from "./index.module.css";

const Home = () => {
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
            3 years of industry experience. Proficient in developing robust and
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

        <a target="_blank" href="images/rohit.webp">
          <img
            className={styles.img}
            src="images/rohit.webp"
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
    </motion.div>
  );
};

export default Home;
