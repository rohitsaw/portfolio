import Wrapper from "../../component/wrapper/index.js";
import React, { useState } from "react";

import styles from "./index.module.css";
import codeLogo from "../../icons/coder.png";

import {
  faBriefcase,
  faUserCircle,
  faCog,
  faGraduationCap,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const About = () => {
  const [hover, setHover] = useState({
    about: false,
    education: false,
    work: false,
    skill: false,
  });

  const workExperiences = [
    {
      id: 1,
      designation: "Specialist Programmer",
      companyName: "Infosys Limited",
      date: "08/2021 - Present",
    },
    {
      id: 2,
      designation: "Flutter Developer Intern",
      companyName: "Applore Technologies",
      date: "04/2021 - 06/2021",
    },
    {
      id: 3,
      designation: "Python Developer Intern",
      companyName: "Cppsecrets.com",
      date: "02/2019 - 04/2019",
    },
  ];

  const educations = [
    {
      id: 1,
      collegeName: "Haldia Institute of Technology",
      courseName: "B.Tech in IT",
      date: "08/2017 - 07/2021",
      grade: "CGPA - 8.8",
    },
  ];

  const skills = {
    Frontend: [
      "React.js",
      "Redux.js",
      "Html",
      "Css",
      "Javascript",
      "Rechart",
      "MUI",
    ],
    Backend: ["Node.js", "Express.js", "Kafka", "Redis"],
    DB: ["Postgres", "Sequelize"],
    Misc: ["Git", "Github", "Microservices", "Flutter", "Dart"],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.pageContainer}>
        <div className={styles.logoContainer}>
          <img src={codeLogo} />
        </div>

        <div
          className={styles.cardContainer}
          onMouseEnter={() =>
            setHover((prevState) => {
              return { ...prevState, about: true };
            })
          }
          onMouseLeave={() =>
            setHover((prevState) => {
              return { ...prevState, about: false };
            })
          }
        >
          <div className={styles.cardTitle}>
            <FontAwesomeIcon icon={faUserCircle} /> <span>About</span>
          </div>

          <div className={styles.cardContent}>
            Hey, my name is Rohit Saw and I use
            <span>
              <a
                className={`${
                  hover.about ? styles.navLinkHover : styles.navLink
                }`}
                target="_blank"
                href="http://google.com/search?q=user rsaw409"
              >
                {` rsaw409 `}
              </a>
            </span>
            as my nickname across sites. I'm FullStack developer having good
            command over Data Structure and Algorithm and I'm always curious to
            learn more when it comes to new technologies and creative coding.
          </div>
        </div>

        <div
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
            {workExperiences.map((each) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <li key={each.id}>
                  <div className={styles.item1}>{each.companyName}</div>
                  <div className={styles.item2}>{each.designation}</div>
                  <div className={styles.item3}>{each.date}</div>
                </li>
                {hover.work && (
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className={styles.navLinkHover}
                  />
                )}
              </div>
            ))}
          </ul>
        </div>

        <div
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
            {educations.map((each) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <li key={each.id}>
                  <div className={styles.item1}>{each.courseName}</div>
                  <div className={styles.item2}>{each.collegeName}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={styles.item3}>{each.date}</div>
                    <div className={styles.item3}>{each.grade}</div>
                  </div>
                </li>
                {hover.education && (
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className={styles.navLinkHover}
                  />
                )}
              </div>
            ))}
          </ul>
        </div>

        <div
          className={styles.cardContainer}
          style={{ maxWidth: "25%" }}
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
            {Object.keys(skills).map((eachSkill) => (
              <li>
                <span style={{ display: "inline-block" }}>
                  <span className={styles.item1}>{eachSkill}: </span>
                  <span
                    className={styles.item2}
                    style={{
                      wordWrap: "breakWord",
                      textAlign: "right",
                    }}
                  >
                    {skills[eachSkill].join(", ")}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Wrapper(About);
