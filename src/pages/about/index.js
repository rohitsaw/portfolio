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
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";

const About = () => {
  let {
    isCertificatesLoading,
    certificates,
    isEducationLoading,
    educations,
    isWorkExperiencesLoading,
    workExperiences,
    isSkillsLoading,
    skills,
    isUserLoading,
    about,
  } = useSelector((state) => ({
    isCertificatesLoading: state.isCertificatesLoading,
    certificates: state.certificates,

    isEducationLoading: state.isEducationLoading,
    educations: state.educations,

    isSkillsLoading: state.isSkillsLoading,
    skills: state.skills,

    isWorkExperiencesLoading: state.isWorkExperiencesLoading,
    workExperiences: state.workExperiences,

    isUserLoading: state.isUserLoading,
    about: state.user?.about,
  }));

  const [hover, setHover] = useState({
    about: false,
    education: false,
    work: false,
    skill: false,
    certificates: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.pageContainer}>
        <div className={styles.logoContainer}>
          <img src={codeLogo} alt="coder logo" />
        </div>

        {/* About Card */}
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
              about.split(" ").map((part) =>
                part.at(0) === "*" && part.at(-1) === "*" ? (
                  <span>
                    <a
                      className={`${
                        hover.about ? styles.navLinkHover : styles.navLink
                      }`}
                      target="_blank"
                      rel="noreferrer"
                      href={`http://google.com/search?q=user ${part.slice(
                        1,
                        -1
                      )}`}
                    >
                      {part.slice(1, -1) + " "}
                    </a>
                  </span>
                ) : (
                  part + " "
                )
              )
            )}
          </div>
        </div>

        {/* Skills Card */}
        <div
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
                <li>
                  <span style={{ display: "inline-block" }}>
                    <span className={styles.item1}>
                      {eachSkill.skill_category}:{" "}
                    </span>
                    <span
                      className={styles.item2}
                      style={{
                        wordWrap: "breakWord",
                        textAlign: "right",
                      }}
                    >
                      {eachSkill.skills.join(", ")}
                    </span>
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Education card */}
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
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <li key={each.id}>
                    <div className={styles.item1}>{each.degree_name}</div>
                    <div className={styles.item2}>{each.institute_name}</div>
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
                      <div className={styles.item3}>{each.score}</div>
                    </div>
                  </li>
                  {hover.education && (
                    <FontAwesomeIcon
                      icon={faExternalLink}
                      className={styles.navLinkHover}
                    />
                  )}
                </div>
              ))
            )}
          </ul>
        </div>

        {/* Work Experience Card */}
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
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <li key={each.id}>
                    <div className={styles.item1}>{each.company_name}</div>
                    <div className={styles.item2}>{each.designation}</div>
                    <div className={styles.item3}>{`${dayjs(
                      each.start_date
                    ).format("MM/YYYY")} - ${
                      each.end_date
                        ? dayjs(each.end_date).format("MM/YYYY")
                        : "Present"
                    }`}</div>
                  </li>
                  {hover.work && (
                    <FontAwesomeIcon
                      icon={faExternalLink}
                      className={styles.navLinkHover}
                    />
                  )}
                </div>
              ))
            )}
          </ul>
        </div>

        {/* Certificates Card */}
        <div
          className={styles.cardContainer}
          onMouseEnter={() =>
            setHover((prevState) => {
              return { ...prevState, certificates: true };
            })
          }
          onMouseLeave={() =>
            setHover((prevState) => {
              return { ...prevState, certificates: false };
            })
          }
        >
          <div className={styles.cardTitle}>
            <FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span>
          </div>
          <ul className={styles.cardContentList}>
            {isCertificatesLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              certificates.map((each) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <li key={each.id}>
                    <div className={styles.item2}>{each.certificates_name}</div>

                    <div className={styles.item3}>
                      Certified By - {each.certification_authority}
                    </div>
                    <div className={styles.item3}>
                      Certification Date -{" "}
                      {new Date(each.certification_date).toLocaleDateString()}
                    </div>
                  </li>
                  {hover.certificates && (
                    <a
                      href={each.verification_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLink}
                        className={styles.navLinkHover}
                        onClick={() => each.verification_url}
                      />
                    </a>
                  )}
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Wrapper(About);

/* Hey, my name is Rohit Saw and I use */
/* <span>
              <a
                className={`${
                  hover.about ? styles.navLinkHover : styles.navLink
                }`}
                target="_blank"
                rel="noreferrer"
                href="http://google.com/search?q=user rsaw409"
              >
                {` rsaw409 `}
              </a>
            </span>
            as my nickname across sites. I'm Committed to delivering efficient
            and maintainable code that meets project objectives and exceeds
            client expectations. Constantly seeking opportunities to leverage
            data structures and algorithms to drive innovation and improve
            application performance. Dedicated to applying best practices and
            industry standards to create robust and scalable software solutions. */

// const workExperiences = [
//   {
//     id: 1,
//     designation: "Specialist Programmer",
//     company_name: "Infosys Limited",
//     date: "08/2021 - Present",
//   },
//   {
//     id: 2,
//     designation: "Flutter Developer Intern",
//     company_name: "Applore Technologies",
//     date: "04/2021 - 06/2021",
//   },
//   {
//     id: 3,
//     designation: "Python Developer Intern",
//     company_name: "Cppsecrets.com",
//     date: "02/2019 - 04/2019",
//   },
// ];

// const educations = [
//   {
//     id: 1,
//     collegeName: "Haldia Institute of Technology",
//     courseName: "B.Tech in IT",
//     date: "08/2017 - 07/2021",
//     grade: "CGPA - 8.8",
//   },
// ];

// const skills = {
//   Frontend: [
//     "React.js",
//     "Redux.js",
//     "Html",
//     "Css",
//     "Javascript",
//     "Rechart",
//     "MUI",
//   ],
//   Backend: ["Node.js", "Express.js", "Kafka", "Redis"],
//   DB: ["Postgres", "Sequelize"],
//   Misc: ["Git", "Github", "Microservices", "Flutter", "Dart"],
// };
