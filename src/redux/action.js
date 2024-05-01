import { ACTIONS } from "./constant";
import {
  getProjects,
  getCertificates,
  getEducations,
  getExperiences,
  getSkills,
  getUser as getUserFromDB,
  addUser as addPUserInServer,
  addSkills as addSkillInServer,
  addCertificate as addCertificateInServer,
  deleteSkill as deleteSkillInServer,
  deleteCertificate as deleteCertificateInServer,
  deleteEducation as deleteEducationInServer,
  addEducation as addEducationInServer,
  deleteExperience as deleteExperienceInServer,
  addExperience as addExperienceServer,
  deleteProject as deleteProjectInServer,
  addProject as addProjectInServer,
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

const setUserFromGoogle = (user) => async (dispatch) => {
  dispatch({
    type: ACTIONS.USER_FROM_GOOGLE,
    payload: user,
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

const getUser = (user_email) => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_USER,
  });

  const user = await getUserFromDB(user_email);

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
  dispatch({
    type: ACTIONS.ADD_DUMMY_CERTIFICATE,
    payload: {
      mui_id: mui_id,
      certificate_name: "",
      certificate_description: "",
      certification_authority: "",
      certification_date: null,
      certification_expiry: null,
      verification_url: "",
      technology_tags: null,
      isNew: true,
    },
  });
};

const addCertificate = (new_row, old_row) => async (dispatch) => {
  try {
    await addCertificateInServer(new_row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, certificate updated.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message || "Something went wrong while saving certificate",
      },
    });
  }
  const certificates = await getCertificates();
  dispatch({
    type: ACTIONS.CERTIFICATES_LOADED,
    payload: certificates,
  });
};

const deleteCertificate = (row) => async (dispatch) => {
  try {
    await deleteCertificateInServer(row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, certificate deleted.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message || "Something went wrong while deleting certificate.",
      },
    });
  }
  const certificates = await getCertificates();
  dispatch({
    type: ACTIONS.CERTIFICATES_LOADED,
    payload: certificates,
  });
};

const addDummyEducation = (mui_id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_DUMMY_EDUCATION,
    payload: {
      mui_id: mui_id,
      institute_name: "",
      degree_name: "",
      start_date: null,
      end_date: null,
      score: "",
      isNew: true,
    },
  });
};

const addEducation = (new_row, old_row) => async (dispatch) => {
  try {
    await addEducationInServer(new_row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, education updated.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message || "Something went wrong while saving education",
      },
    });
  }
  const educations = await getEducations();
  dispatch({
    type: ACTIONS.EDUCATIONS_LOADED,
    payload: educations,
  });
};

const deleteEducation = (row) => async (dispatch) => {
  try {
    await deleteEducationInServer(row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, education deleted.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message || "Something went wrong while deleting education.",
      },
    });
  }
  const educations = await getEducations();
  dispatch({
    type: ACTIONS.EDUCATIONS_LOADED,
    payload: educations,
  });
};

const addDummyExperience = (mui_id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_DUMMY_EXPERIENCE,
    payload: {
      mui_id: mui_id,
      company_name: "",
      designation: "",
      start_date: null,
      end_date: null,
      details: "",
      isNew: true,
    },
  });
};

const addExperience = (new_row, old_row) => async (dispatch) => {
  try {
    await addExperienceServer(new_row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, experience updated.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message || "Something went wrong while saving work experience",
      },
    });
  }
  const experiences = await getExperiences();
  dispatch({
    type: ACTIONS.WORKEXPERIENCES_LOADED,
    payload: experiences,
  });
};

const deleteExperience = (row) => async (dispatch) => {
  try {
    await deleteExperienceInServer(row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, work experience deleted.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message ||
          "Something went wrong while deleting work experience.",
      },
    });
  }
  const experiences = await getExperiences();
  dispatch({
    type: ACTIONS.WORKEXPERIENCES_LOADED,
    payload: experiences,
  });
};

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

const addProject = (new_row, old_row) => async (dispatch) => {
  try {
    await addProjectInServer(new_row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, project updated.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message || "Something went wrong while updating project",
      },
    });
  }
  const projects = await getProjects();
  dispatch({
    type: ACTIONS.PROJECTS_LOADED,
    payload: projects,
  });
};

const addDummyProject = (mui_id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_DUMMY_PROJECT,
    payload: {
      mui_id: mui_id,
      project_name: "",
      project_description: "",
      github_url: "",
      web_url: null,
      play_store_url: "",
      technology_tags: null,
      isNew: true,
    },
  });
};

const deleteProject = (row) => async (dispatch) => {
  try {
    await deleteProjectInServer(row);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, project deleted.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message:
          error?.message ||
          "Something went wrong while deleting work experience.",
      },
    });
  }
  const projects = await getProjects();

  dispatch({
    type: ACTIONS.PROJECTS_LOADED,
    payload: projects,
  });
};

const updateUser = (updatedUser) => async (dispatch) => {
  try {
    await addPUserInServer(updatedUser);
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "success",
        message: "Success, user updated.",
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.SHOW_SNACKBAR,
      payload: {
        value: true,
        severity: "error",
        message: error?.message || "Something went wrong while updating user.",
      },
    });
  }
  const user = await getUserFromDB(updatedUser.user_email);
  dispatch({
    type: ACTIONS.USER_LOADED,
    payload: user[0],
  });
};

export {
  setUserFromGoogle,
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
  addDummyEducation,
  addEducation,
  deleteEducation,
  setOpenSnackBar,
  addDummyExperience,
  addExperience,
  deleteExperience,
  addProject,
  addDummyProject,
  deleteProject,
  updateUser,
};
