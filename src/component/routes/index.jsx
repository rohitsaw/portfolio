import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "../layout/index.jsx";
import Contact from "../../pages/contact/index.jsx";
import About from "../../pages/about/index";
import Projects from "../../pages/project/index";
import Certification from "../../pages/certification/index";
import WorkExperience from "../../pages/workexperience/index";
import ErrorPage from "../../pages/ErrorPage/index.jsx";

import { AnimatePresence } from "framer-motion";

import EditUserDetails from "../../pages/edit-details/edit-user-details/edit-user-details.jsx";
import EditCertificates from "../../pages/edit-details/edit-certficates/edit-certificates.jsx";
import EditExperiences from "../../pages/edit-details/edit-experiences/edit-experiences.jsx";
import EditSkills from "../../pages/edit-details/edit-skills/edit-skills.jsx";
import EditEducation from "../../pages/edit-details/edit-educations/edit-educations.jsx";
import EditProjects from "../../pages/edit-details/edit-projects/edit-projects.jsx";

const AnimateRoutes = ({ setOpenSnackBar }) => {
  const location = useLocation();

  const fallbackEmailId = "rsaw409@gmail.com";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="about"
          element={<Navigate to={`/${fallbackEmailId}/about`} />}
        />
        <Route
          path="workexperience"
          element={<Navigate to={`/${fallbackEmailId}/workexperience`} />}
        />
        <Route
          path="certification"
          element={<Navigate to={`/${fallbackEmailId}/certification`} />}
        />
        <Route
          path="projects"
          element={<Navigate to={`/${fallbackEmailId}/projects`} />}
        />
        <Route
          path="contacts"
          element={<Navigate to={`/${fallbackEmailId}/contacts`} />}
        />

        <Route path="/:emailId" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="workexperience" element={<WorkExperience />} />
          <Route path="certification" element={<Certification />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/" element={<Layout />} />

        <Route path="/edit">
          <Route
            path="profile"
            element={<EditUserDetails setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="project"
            element={<EditProjects setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="certificate"
            element={<EditCertificates setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="education"
            element={<EditEducation setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="experience"
            element={<EditExperiences setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="skill"
            element={<EditSkills setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
