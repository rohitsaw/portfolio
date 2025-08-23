import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

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

import { loadUser } from "../../api/user.js";
import {
  getUser,
  setUserFromGoogle,
  setUserFromUrl,
} from "../../redux/action.js";
import { useDispatch } from "react-redux";

const AnimateRoutes = ({ setOpenSnackBar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getLogedInUser = async () => {
      try {
        const resObject = await loadUser();
        const email = resObject.user?.emails[0]?.value;
        const displayName = resObject.user?.displayName;

        dispatch(setUserFromGoogle(resObject.user));
        dispatch(getUser(email, displayName));

        const currentPath = window.location.pathname;
        const parts = currentPath.split("/").filter(Boolean); // e.g. ["email", "projects"]

        if (parts.length === 0) {
          navigate(`/${email}/about`, { replace: true });
          return;
        }

        const [mayBeEmail] = parts;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mayBeEmail)) {
          navigate(`/${email}/${parts.join("/")}`, { replace: true });
          return;
        } else {
          navigate(`/${email}/${parts.slice(1).join("/")}`, { replace: true });
          return;
        }
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
        const currentPath = window.location.pathname;
        const parts = currentPath.split("/").filter(Boolean);

        if (parts.length === 0) {
          dispatch(getUser("rsaw409@gmail.com", null));
          dispatch(setUserFromUrl("rsaw409@gmail.com"));
          navigate(`/rsaw409@gmail.com/about`, { replace: true });
          return;
        }

        const [mayBeEmail] = parts;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mayBeEmail)) {
          dispatch(getUser("rsaw409@gmail.com", null));
          dispatch(setUserFromUrl("rsaw409@gmail.com"));
          navigate(`/rsaw409@gmail.com/${parts.join("/")}`, { replace: true });
          return;
        } else {
          dispatch(getUser(mayBeEmail, null));
          dispatch(setUserFromUrl(mayBeEmail));
          navigate(`/${mayBeEmail}/${parts.slice(1).join("/")}`, {
            replace: true,
          });
          return;
        }
      }
    };

    getLogedInUser();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/:emailId" element={<Layout />}>
          <Route
            path="about/details/edit"
            element={<EditUserDetails setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="about/education/edit"
            element={<EditEducation setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route
            path="about/skill/edit"
            element={<EditSkills setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route path="about" element={<About />} />

          <Route path="contacts" element={<Contact />} />

          <Route
            path="workexperience/edit"
            element={<EditExperiences setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route path="workexperience" element={<WorkExperience />} />

          <Route
            path="certificatation/edit"
            element={<EditCertificates setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route path="certification" element={<Certification />} />

          <Route
            path="projects/edit"
            element={<EditProjects setOpenSnackBar={setOpenSnackBar} />}
          />
          <Route path="projects" element={<Projects />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
