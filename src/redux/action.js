import { ACTIONS } from "./constant";
import { getProjects, getCertificates } from "../api.js";

const getAllProjects = () => async (dispatch, getState) => {
  dispatch({
    type: ACTIONS.LOADING_PROJECTS,
  });

  const projects = await getProjects();

  dispatch({
    type: ACTIONS.PROJECTS_LOADED,
    payload: projects,
  });
};

const getAllCertificates = () => async (dispatch, getState) => {
  dispatch({
    type: ACTIONS.LOADING_CERTIFICATES,
  });

  const certificates = await getCertificates();

  dispatch({
    type: ACTIONS.CERTIFICATES_LOADED,
    payload: certificates,
  });
};

export { getAllProjects, getAllCertificates };
