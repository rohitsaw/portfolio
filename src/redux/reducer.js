const initialState = {
  projects: [],
  isProjectsLoading: true,

  certificates: [],
  isCertificatesLoading: true,

  skills: [],
  isSkillsLoading: true,

  educations: [],
  isEducationLoading: true,

  workExperiences: [],
  isWorkExperiencesLoading: true,

  user: null,
  isUserLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_PROJECTS": {
      return {
        ...state,
        isProjectsLoading: true,
      };
    }
    case "PROJECTS_LOADED": {
      return {
        ...state,
        projects: action.payload,
        isProjectsLoading: false,
      };
    }

    case "LOADING_CERTIFICATES": {
      return {
        ...state,
        isCertificatesLoading: true,
      };
    }
    case "CERTIFICATES_LOADED": {
      return {
        ...state,
        certificates: action.payload,
        isCertificatesLoading: false,
      };
    }

    default:
      return state;
  }
};
