import React, { useState } from "react";
import {
  faBriefcase,
  faUserCircle,
  faCog,
  faGraduationCap,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import {
  faStackOverflow,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

import coderLogo from "../../icons/coder.png";
import placeHolderCoderLogo from "../../icons/coder.jpg";

import styles from "./index.module.css";

const About = () => {
  let {
    isEducationLoading,
    educations,
    isWorkExperiencesLoading,
    workExperiences,
    isSkillsLoading,
    skills,
    isUserLoading,
    about,
  } = useSelector((state) => ({
    isEducationLoading: state.isEducationLoading,
    educations: state.educations,

    isSkillsLoading: state.isSkillsLoading,
    skills: transformSkills(state.skills),

    isWorkExperiencesLoading: state.isWorkExperiencesLoading,
    workExperiences: state.workExperiences,

    isUserLoading: state.isUserLoading,
    about: state.user?.about,
  }));

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

  const [hover, setHover] = useState({
    about: false,
    education: false,
    work: false,
    skill: false,
    certificates: false,
  });

  const socialLinks = {
    github: github_url,
    linkedin: linkedin_url,
    stackOverFlow: stackoverflow_url,
    blog: blog_url,
    twitter: twitter_url,
    mail: `mailto:${email}`,
  };

  function groupBy(array, callbackFn) {
    let obj = {};
    for (let each of array) {
      let tmp = callbackFn(each);
      if (!obj.hasOwnProperty(tmp)) {
        obj[tmp] = [];
      }
      obj[tmp].push(each);
    }
    return obj;
  }

  function transformSkills(skills) {
    if (Array.isArray) {
      let tmp = groupBy(skills, ({ skill_category }) => skill_category);
      return Object.keys(tmp).map((skill_category) => {
        return {
          skill_category: skill_category,
          skills: tmp[skill_category],
        };
      });
    } else {
      return skills;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.pageContainer}>
        <div className={styles.logoWrapper}>
          <a target="_blank" href="images/rohit.webp">
            <img
              className={styles.img}
              src="images/rohit.webp"
              placeholderSrc={placeHolderCoderLogo}
              alt="coder logo"
            />
          </a>

          <div className={styles.socialLinks}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href={socialLinks.stackOverFlow}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} size="xl" />
            </a>
            <a href={socialLinks.blog} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faBlog} size="xl" />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
            <a href={socialLinks.mail} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
        </div>

        {/* About Card */}
        <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>
            <FontAwesomeIcon icon={faUserCircle} /> <span>About</span>
          </div>

          <div className={styles.cardContent}>
            {isUserLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              `I'm Highly skilled and motivated full-stack software developer with
              3 years of industry experience. Proficient in developing robust and
              scalable web applications, combining expertise in both front-end and
              back-end technologies. Adept at analyzing user requirements and
              translating them into functional code, ensuring optimal performance
              and user experience. Strong knowledge of HTML, CSS, JavaScript, and
              modern frameworks like React and Node.js. 
              Additionally, possess a solid foundation in data structures and
              algorithms, leveraging this expertise to design efficient and
              optimized solutions. Experienced in implementing algorithms and
              leveraging data structures to solve complex problems, enhancing
              application performance and scalability.`
            )}
          </div>
        </div>

        {/* Work Experience Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={styles.cardContainer}
          onMouseEnter={() =>
            setHover((prevState) => {
              return { ...prevState, work: true };
            })
          }
          onMouseLeave={() =>
            setHover((prevState) => {
              return { ...prevState, work: false };
            })
          }
        >
          <div className={styles.cardTitle}>
            <FontAwesomeIcon icon={faBriefcase} /> <span>Work</span>
          </div>
          <ul className={styles.cardContentList}>
            {isWorkExperiencesLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              workExperiences.map((each) => (
                <div
                  key={each.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <li key={each.id}>
                    <div className={styles.item10}>{each.company_name}</div>
                    <div className={styles.item3}>{each.designation}</div>
                    <div className={styles.item3}>{`${dayjs(
                      each.start_date
                    ).format("MM/YYYY")} - ${
                      each.end_date
                        ? dayjs(each.end_date).format("MM/YYYY")
                        : "Present"
                    }`}</div>
                  </li>
                  {false && (
                    <FontAwesomeIcon
                      icon={faExternalLink}
                      className={styles.navLinkHover}
                    />
                  )}
                </div>
              ))
            )}
          </ul>
        </motion.div>

        {/* Education card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={styles.cardContainer}
          onMouseEnter={() =>
            setHover((prevState) => {
              return { ...prevState, education: true };
            })
          }
          onMouseLeave={() =>
            setHover((prevState) => {
              return { ...prevState, education: false };
            })
          }
        >
          <div className={styles.cardTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
          </div>
          <ul className={styles.cardContentList}>
            {isEducationLoading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              educations.map((each) => (
                <div
                  key={each.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <li key={each.id} style={{ width: "100%" }}>
                    <div className={styles.item10}>{each.degree_name}</div>
                    <div className={styles.item3}>{each.institute_name}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className={styles.item3}>
                        {`${dayjs(each.start_date).format("MM/YYYY")} -
                          ${dayjs(each.end_date).format("MM/YYYY")}`}
                      </div>
                      <div className={styles.item3}>
                        {each.score > 10 ? each.score / 10 : each.score}
                      </div>
                    </div>
                  </li>
                  {false && (
                    <FontAwesomeIcon
                      icon={faExternalLink}
                      className={styles.navLinkHover}
                    />
                  )}
                </div>
              ))
            )}
          </ul>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={styles.cardContainer}
          onMouseEnter={() =>
            setHover((prevState) => {
              return { ...prevState, skill: true };
            })
          }
          onMouseLeave={() =>
            setHover((prevState) => {
              return { ...prevState, skill: false };
            })
          }
        >
          <div className={styles.cardTitle}>
            <FontAwesomeIcon icon={faCog} /> <span>Skills</span>
          </div>

          <ul className={styles.cardContentList}>
            {isSkillsLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              skills.map((eachSkill) => (
                <li key={eachSkill.skill_category}>
                  <span style={{ display: "inline-block" }}>
                    <span className={styles.item10}>
                      {eachSkill.skill_category}:{" "}
                    </span>
                    <span
                      className={styles.item3}
                      style={{
                        wordWrap: "breakWord",
                        textAlign: "right",
                      }}
                    >
                      {eachSkill.skills.map((e) => e.skill_name).join(", ")}
                    </span>
                  </span>
                </li>
              ))
            )}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
