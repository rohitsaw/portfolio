import Wrapper from "../../component/wrapper/index.js";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      title: "developer.rohitsaw@gmail.com",
      getLogo: () => <FontAwesomeIcon icon={faEnvelope} size="lg" />,
      url: "mailto:developer.rohitsaw@gmail.com",
    },
    {
      id: 2,
      title: "Connect on LinkedIn",
      getLogo: () => <FontAwesomeIcon icon={faLinkedin} size="lg" />,
      url: "https://www.linkedin.com/in/rsaw409/",
    },
    {
      id: 3,
      title: "Follow on Github",
      getLogo: () => <FontAwesomeIcon icon={faGithub} size="lg" />,
      url: "https://github.com/rohitsaw",
    },
  ];

  return (
    <motion.div
      className={styles.contactContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.contactTitle}>
        Let's Get in Touch: Ways to Connect with Me
      </div>
      <div className={styles.contactSubTitle}>
        Thank you for your interest in getting in touch with me. I welcome your
        feedback, questions, and suggestions. I look forward to hearing from
        you!
      </div>
      <div className={styles.contactsListWrapper}>
        <div className={styles.contactList}>
          {contacts.map((contact) => (
            <div className={styles.linkWrapper}>
              <NavLink
                to={contact.url}
                target="_blank"
                style={{ textDecoration: "none" }}
                className={styles.contactItem}
              >
                <span>{contact.getLogo()}</span>
                <span>{contact.title}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Wrapper(Contact);
