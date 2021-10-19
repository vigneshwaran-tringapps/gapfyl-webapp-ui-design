import {
  FETCHING_COURSE,
  FETCHING_COURSE_SUCCEDDED,
  FETCHING_COURSE_FAILED,
  FETCHING_COURSES,
  FETCHING_COURSES_SUCCEDDED,
  FETCHING_COURSES_FAILED,
  FETCHING_POPULAR_COURSES,
  FETCHING_POPULAR_COURSES_SUCCEDDED,
  FETCHING_POPULAR_COURSES_FAILED,
  FETCHING_RECOMMENED_COURSES,
  FETCHING_RECOMMENED_COURSES_SUCCEDDED,
  FETCHING_RECOMMENED_COURSES_FAILED,
  FETCHING_NEW_COURSES,
  FETCHING_NEW_COURSES_SUCCEDDED,
  FETCHING_NEW_COURSES_FAILED,
  FETCHING_INTERMEDIATE_COURSES,
  FETCHING_INTERMEDIATE_COURSES_SUCCEDDED,
  FETCHING_INTERMEDIATE_COURSES_FAILED,
  FETCHING_TOP_COURSES,
  FETCHING_TOP_COURSES_SUCCEDDED,
  FETCHING_TOP_COURSES_FAILED,
  CREATING_COURSE,
  CREATING_COURSE_SUCCEDDED,
  CREATING_COURSE_FAILED,
  UPDATING_COURSE,
  UPDATING_COURSE_SUCCEDDED,
  UPDATING_COURSE_FAILED,
  DELETING_COURSE,
  DELETING_COURSE_SUCCEDDED,
  DELETING_COURSE_FAILED,
  FETCHING_CREATOR_COURSES,
  FETCHING_CREATOR_COURSES_SUCCEDDED,
  FETCHING_CREATOR_COURSES_FAILED,
  FETCHING_USER_COURSES,
  FETCHING_USER_COURSES_SUCCEDDED,
  FETCHING_USER_COURSES_FAILED,
  SEARCHING_COURSES,
  SEARCHING_COURSES_SUCCEDDED,
  SEARCHING_COURSES_FAILED
} from "constants/actionTypes";

const initialState = {
  fetchingCourse: {
    fetching: false,
    item: null,
    error: null
  },
  searchCourses: {
    fetching: false,
    items: [],
    error: null
  },
  popular: {
    fetching: false,
    items: [],
    error: null
  },
  top: {
    fetching: false,
    items: [],
    error: null
  },
  new: {
    fetching: false,
    items: [],
    error: null
  },
  intermediate: {
    fetching: false,
    items: [],
    error: null
  },
  recommended: {
    fetching: false,
    items: [],
    error: null
  },
  creatingCourse: {
    creating: false,
    item: null,
    error: null
  },
  updatingCourse: {
    updating: false,
    item: null,
    error: null
  },
  deletingCourse: {
    deleting: false,
    item: null,
    error: null
  },
  creatorCourses: {
    fetching: false,
    items: [],
    error: null
  },
  userCourses: {
    fetching: false,
    items: [],
    error: null
  }
};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COURSE:
      return Object.assign({}, state, {
        ...state,
        fetchingCourse: {
          ...state.fetchingCourse,
          fetching: true
        }
      });
    case FETCHING_COURSE_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        fetchingCourse: {
          fetching: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_COURSE_FAILED:
      return Object.assign({}, state, {
        ...state,
        fetchingCourse: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });
    case FETCHING_COURSES:
      return Object.assign({}, state, {
        ...state,
        searchCourses: {
          fetching: true
        }
      });
    case FETCHING_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        searchCourses: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        fetchingCourse: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });
    case SEARCHING_COURSES:
      return Object.assign({}, state, {
        ...state,
        searchCourses: {
          fetching: true
        }
      });
    case SEARCHING_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        searchCourses: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case SEARCHING_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        searchCourses: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_POPULAR_COURSES:
      return Object.assign({}, state, {
        ...state,
        popular: {
          ...state.popular,
          fetching: true
        }
      });
    case FETCHING_POPULAR_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        popular: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_POPULAR_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        popular: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_TOP_COURSES:
      return Object.assign({}, state, {
        ...state,
        top: {
          ...state.top,
          fetching: true
        }
      });
    case FETCHING_TOP_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        top: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_TOP_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        top: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_RECOMMENED_COURSES:
      return Object.assign({}, state, {
        ...state,
        recommended: {
          ...state.recommended,
          fetching: false
        }
      });
    case FETCHING_RECOMMENED_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        recommended: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_RECOMMENED_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        recommended: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_NEW_COURSES:
      return Object.assign({}, state, {
        ...state,
        new: {
          ...state.new,
          fetching: true
        }
      });
    case FETCHING_NEW_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        new: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_NEW_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        new: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_INTERMEDIATE_COURSES:
      return Object.assign({}, state, {
        ...state,
        intermediate: {
          ...state.intermediate,
          fetching: true
        }
      });
    case FETCHING_INTERMEDIATE_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        intermediate: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_INTERMEDIATE_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        intermediate: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case CREATING_COURSE:
      return Object.assign({}, state, {
        ...state,
        creatingCourse: {
          creating: true,
          item: null,
          error: null
        }
      });
    case CREATING_COURSE_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        creatingCourse: {
          creating: false,
          item: action.payload,
          error: null
        }
      });
    case CREATING_COURSE_FAILED:
      return Object.assign({}, state, {
        ...state,
        creatingCourse: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case UPDATING_COURSE:
      return Object.assign({}, state, {
        ...state,
        updatingCourse: {
          updating: true
        }
      });
    case UPDATING_COURSE_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        updatingCourse: {
          updating: false,
          item: action.payload,
          error: null
        }
      });
    case UPDATING_COURSE_FAILED:
      return Object.assign({}, state, {
        ...state,
        updatingCourse: {
          updating: false,
          item: null,
          error: action.payload
        }
      });
    case DELETING_COURSE:
      return Object.assign({}, state, {
        ...state,
        deletingCourse: {
          deleting: true,
          item: null,
          error: null
        }
      });
    case DELETING_COURSE_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        deletingCourse: {
          deleting: false,
          item: action.payload,
          error: null
        }
      });
    case DELETING_COURSE_FAILED:
      return Object.assign({}, state, {
        ...state,
        deletingCourse: {
          deleting: false,
          item: null,
          error: action.payload
        }
      });
    case FETCHING_CREATOR_COURSES:
      return Object.assign({}, state, {
        ...state,
        creatorCourses: {
          ...state.creatorCourses,
          fetching: true
        }
      });
    case FETCHING_CREATOR_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        creatorCourses: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_CREATOR_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        creatorCourses: {
          fetching: false,
          items: [],
          error: null
        }
      });
    case FETCHING_USER_COURSES:
      return Object.assign({}, state, {
        ...state,
        userCourses: {
          fetching: false
        }
      });
    case FETCHING_USER_COURSES_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        userCourses: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_USER_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        userCourses: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    default:
      return state;
  }
}

export { coursesReducer };
