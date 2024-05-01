import { ACTIONS } from "./constant";

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

  userFromGoogle: null,

  openSnackBar: false,
  severity: "error",
  snackBarMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOADING_PROJECTS: {
      return {
        ...state,
        isProjectsLoading: true,
      };
    }
    case ACTIONS.PROJECTS_LOADED: {
      return {
        ...state,
        projects: action.payload,
        isProjectsLoading: false,
      };
    }

    case ACTIONS.LOADING_CERTIFICATES: {
      return {
        ...state,
        isCertificatesLoading: true,
      };
    }
    case ACTIONS.CERTIFICATES_LOADED: {
      return {
        ...state,
        certificates: action.payload,
        isCertificatesLoading: false,
      };
    }

    case ACTIONS.LOADING_EDUCATIONS: {
      return {
        ...state,
        isEducationLoading: true,
      };
    }
    case ACTIONS.EDUCATIONS_LOADED: {
      return {
        ...state,
        educations: action.payload,
        isEducationLoading: false,
      };
    }

    case ACTIONS.LOADING_SKILLS: {
      return {
        ...state,
        isEducationLoading: true,
      };
    }
    case ACTIONS.SKILLS_LOADED: {
      return {
        ...state,
        skills: action.payload,
        isSkillsLoading: false,
      };
    }

    case ACTIONS.LOADING_WORKEXPERIENCES: {
      return {
        ...state,
        isWorkExperiencesLoading: true,
      };
    }
    case ACTIONS.WORKEXPERIENCES_LOADED: {
      return {
        ...state,
        workExperiences: action.payload,
        isWorkExperiencesLoading: false,
      };
    }

    case ACTIONS.LOADING_USER: {
      return {
        ...state,
        user: true,
      };
    }
    case ACTIONS.USER_LOADED: {
      return {
        ...state,
        user: action.payload,
        isUserLoading: false,
      };
    }

    case ACTIONS.USER_FROM_GOOGLE: {
      return {
        ...state,
        userFromGoogle: action.payload,
      };
    }

    case ACTIONS.ADD_DUMMY_SKILL: {
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    }

    case ACTIONS.SHOW_SNACKBAR: {
      return {
        ...state,
        openSnackBar: action.payload.value,
        severity: action.payload.severity,
        snackBarMessage: action.payload.message,
      };
    }

    case ACTIONS.ADD_DUMMY_CERTIFICATE: {
      return {
        ...state,
        certificates: [...state.certificates, action.payload],
      };
    }

    case ACTIONS.ADD_DUMMY_EDUCATION: {
      return {
        ...state,
        educations: [...state.educations, action.payload],
      };
    }

    case ACTIONS.ADD_DUMMY_EXPERIENCE: {
      return {
        ...state,
        workExperiences: [...state.workExperiences, action.payload],
      };
    }

    case ACTIONS.ADD_DUMMY_PROJECT: {
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    }

    default:
      return state;
  }
};

export default reducer;
