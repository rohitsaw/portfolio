import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "../../component/layout";
import Contact from "../../pages/contact";
import About from "../../pages/about/index";
import Home from "../../pages/home/index";
import Projects from "../../pages/project/index";
import Certification from "../../pages/certification/index";
import EditDetails from "../../pages/edit-details/index";

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

const AnimateRoutes = ({ setOpenSnackBar }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCertificates());
    dispatch(getAllProjects());
    dispatch(getAllSkills());
    dispatch(getAllEducations());
    dispatch(getUser());
    dispatch(getAllExperiences());
  }, []);

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="certification" element={<Certification />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
        <Route
          path="/edit-details"
          element={<EditDetails setOpenSnackBar={setOpenSnackBar} />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
