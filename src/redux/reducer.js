import { ACTIONS } from "./constant";

const initialState = {
  isValidView: true,

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
        isValidView: true,
      };
    }

    case ACTIONS.USER_FROM_GOOGLE: {
      return {
        ...state,
        userFromGoogle: action.payload,
      };
    }

    case ACTIONS.USER_FROM_URL: {
      return {
        ...state,
        userFromUrl: action.payload,
      };
    }

    case ACTIONS.ADD_DUMMY_SKILL: {
      return {
        ...state,
        skills: [action.payload, ...state.skills],
      };
    }

    case ACTIONS.REMOVE_DUMMY_SKILL: {
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.mui_id !== action.payload),
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
        certificates: [action.payload, ...state.certificates],
      };
    }

    case ACTIONS.REMOVE_DUMMY_CERTIFICATE: {
      return {
        ...state,
        certificates: state.certificates.filter(
          (e) => e.mui_id !== action.payload
        ),
      };
    }

    case ACTIONS.ADD_DUMMY_EDUCATION: {
      return {
        ...state,
        educations: [action.payload, ...state.educations],
      };
    }
    case ACTIONS.REMOVE_DUMMY_EDUCATION: {
      return {
        ...state,
        educations: state.educations.filter((e) => e.mui_id !== action.payload),
      };
    }

    case ACTIONS.ADD_DUMMY_EXPERIENCE: {
      return {
        ...state,
        workExperiences: [action.payload, ...state.workExperiences],
      };
    }

    case ACTIONS.REMOVE_DUMMY_EXPERIENCE: {
      return {
        ...state,
        workExperiences: state.workExperiences.filter(
          (e) => e.mui_id !== action.payload
        ),
      };
    }

    case ACTIONS.ADD_DUMMY_PROJECT: {
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    }

    case ACTIONS.REMOVE_DUMMY_PROJECT: {
      return {
        ...state,
        projects: state.projects.filter((e) => e.mui_id !== action.payload),
      };
    }

    case ACTIONS.USER_NOT_FOUND: {
      return {
        ...state,
        isValidView: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
