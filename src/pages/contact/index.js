import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import styles from "./index.module.css";


const Contact = () => {
  const { email, linkedin_url, github_url } = useSelector((state) => ({
    email: state.user?.user_email,
    linkedin_url: state.user?.linkedin_url,
    github_url: state.user?.github_url,
  }));

  const contacts = [
    {
      id: 1,
      title: email,
      getLogo: () => <FontAwesomeIcon icon={faEnvelope} size="lg" />,
      url: `mailto:${email}`,
    },
    {
      id: 2,
      title: "Connect on LinkedIn",
      getLogo: () => <FontAwesomeIcon icon={faLinkedin} size="lg" />,
      url: linkedin_url,
    },
    {
      id: 3,
      title: "Follow on Github",
      getLogo: () => <FontAwesomeIcon icon={faGithub} size="lg" />,
      url: github_url,
    },
  ];

  return (
    <motion.div
      className={styles.contactContainer}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
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
            <div className={styles.linkWrapper} key={contact.id}>
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

export default Contact;
