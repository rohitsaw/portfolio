import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "../../component/layout";
import Contact from "../../pages/contact";
import About from "../../pages/about/index";
import Home from "../../pages/home/index";
import Projects from "../../pages/project/index";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllCertificates, getAllProjects } from "../../redux/action.js";

const AnimateRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCertificates());
    dispatch(getAllProjects());
  }, []);

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
