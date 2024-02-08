import { ACTIONS } from "./constant";
import {
  getProjects,
  getCertificates,
  getEducations,
  getExperiences,
  getSkills,
  getUser as getUserFromDB,
  addSkills as addSkillInServer,
  deleteSkill as deleteSkillInServer,
} from "../api.js";

const getAllProjects = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_PROJECTS,
  });

  const projects = await getProjects();

  dispatch({
    type: ACTIONS.PROJECTS_LOADED,
    payload: projects,
  });
};

const getAllCertificates = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_CERTIFICATES,
  });

  const certificates = await getCertificates();

  dispatch({
    type: ACTIONS.CERTIFICATES_LOADED,
    payload: certificates,
  });
};

const getAllSkills = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_SKILLS,
  });

  const skills = await getSkills();

  dispatch({
    type: ACTIONS.SKILLS_LOADED,
    payload: skills,
  });
};

const getAllEducations = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_EDUCATIONS,
  });

  const educations = await getEducations();

  dispatch({
    type: ACTIONS.EDUCATIONS_LOADED,
    payload: educations,
  });
};

const getUser = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_USER,
  });

  const user = await getUserFromDB();

  dispatch({
    type: ACTIONS.USER_LOADED,
    payload: user[0],
  });
};

const getAllExperiences = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_WORKEXPERIENCES,
  });

  const experiences = await getExperiences();

  dispatch({
    type: ACTIONS.WORKEXPERIENCES_LOADED,
    payload: experiences,
  });
};

const addDummySkill = (mui_id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_DUMMY_SKILL,
    payload: {
      mui_id: mui_id,
      skill_name: "",
      skill_category: "",
      skill_proficiency: 0,
      isNew: true,
    },
  });
};

const addSkill = (new_row, old_row) => async (dispatch) => {
  try {
    await addSkillInServer(new_row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, skills updated.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message: error?.message || "Something went wrong while saving skill",
      },
    });
  }
  const skills = await getSkills();
  dispatch({
    type: ACTIONS.SKILLS_LOADED,
    payload: skills,
  });
};

const deleteSkill = (row) => async (dispatch) => {
  try {
    await deleteSkillInServer(row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, skills deleted.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message: error?.message || "Something went wrong while deleting skill.",
      },
    });
  }
  const skills = await getSkills();
  dispatch({
    type: ACTIONS.SKILLS_LOADED,
    payload: skills,
  });
};


const addDummyCertificate = (mui_id) => async (dispatch) => {

}

const addCertificate = (mui_id) => async (dispatch) => {
  
}

const deleteCertificate = (mui_id) => async (dispatch) => {
  
}

const setOpenSnackBar = (value, message) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SHOW_SNACKBAR,
    payload: {
      value: value,
      severity: "error",
      message: message,
    },
  });
};

export {
  getAllProjects,
  getAllCertificates,
  getAllSkills,
  getAllEducations,
  getUser,
  getAllExperiences,
  addDummySkill,
  addSkill,
  deleteSkill,
  addDummyCertificate,
  addCertificate,
  deleteCertificate,
  setOpenSnackBar,
};
