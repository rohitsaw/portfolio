import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import dayjs from "dayjs";

import coderLogo from "../../icons/coder.png";
import placeHolderCoderLogo from "../../icons/coder.jpg";

import styles from "./index.module.css";

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
    skills: transformSkills(state.skills),

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

  console.log("skills", skills);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.pageContainer}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={styles.logoContainer}
        >
          <img
            className={styles.img}
            src={coderLogo}
            placeholderSrc={placeHolderCoderLogo}
            alt="coder logo"
          />
        </motion.div>

        {/* About Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
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

        {/* Certificates Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
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
                  key={each.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <li key={each.id}>
                    <div className={styles.item10}>{each.certificate_name}</div>

                    <div className={styles.item3}>
                      Certified By - {each.certification_authority}
                    </div>
                    <div className={styles.item3}>
                      Certification Date -{" "}
                      {new Date(each.certification_date).toLocaleDateString()}
                    </div>
                  </li>
                  {
                    <NavLink
                      to={each.verification_url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.navLinkHover}
                    >
                      <ArrowOutwardIcon onClick={() => each.verification_url} />
                    </NavLink>
                  }
                </div>
              ))
            )}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
