import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "../../component/layout";

import Contact from "../../pages/contact";
import About from "../../pages/about/index";
import Projects from "../../pages/project/index";
import Certification from "../../pages/certification/index";
import WorkExperience from "../../pages/workexperience/index";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  getAllCertificates,
  getAllProjects,
  getAllSkills,
  getAllEducations,
  getUser,
  getAllExperiences,
} from "../../redux/action.js";

import EditUserDetails from "../../pages/edit-details/edit-user-details/edit-user-details.js";
import EditCertificates from "../../pages/edit-details/edit-certficates/edit-certificates.js";
import EditExperiences from "../../pages/edit-details/edit-experiences/edit-experiences.js";
import EditSkills from "../../pages/edit-details/edit-skills/edit-skills.js";
import EditEducation from "../../pages/edit-details/edit-educations/edit-educations.js";
import EditProjects from "../../pages/edit-details/edit-projects/edit-projects.js";

const AnimateRoutes = ({ setOpenSnackBar }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCertificates());
    dispatch(getAllProjects());
    dispatch(getAllSkills());
    dispatch(getAllEducations());
    dispatch(getUser("rsaw409@gmail.com"));
    dispatch(getAllExperiences());
  }, []);

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="workexperience" element={<WorkExperience />} />
          <Route path="certification" element={<Certification />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
        <Route
          path="/edit-project"
          element={<EditProjects setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route
          path="/edit-profile"
          element={<EditUserDetails setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route
          path="/edit-certificate"
          element={<EditCertificates setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route
          path="/edit-education"
          element={<EditEducation setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route
          path="/edit-experience"
          element={<EditExperiences setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route
          path="/edit-skill"
          element={<EditSkills setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
