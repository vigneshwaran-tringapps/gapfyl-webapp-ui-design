import {
  FETCHING_PURCHASED_COURSES,
  FETCHING_PURCHASED_COURSES_SUCCEEDED,
  FETCHING_PURCHASED_COURSES_FAILED
} from "constants/actionTypes";

const initialState = {
  fetchingCourses: {
    fetching: false,
    items: [],
    error: null
  }
};

function purchasesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PURCHASED_COURSES:
      return Object.assign({}, state, {
        ...state,
        fetchingCourses: {
          ...state.fetchingCourses,
          fetching: true
        }
      });
    case FETCHING_PURCHASED_COURSES_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        fetchingCourses: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_PURCHASED_COURSES_FAILED:
      return Object.assign({}, state, {
        ...state,
        fetchingCourses: {
          fetching: false,
          items: null,
          error: action.payload
        }
      });
    default:
      return state;
  }
}

export { purchasesReducer };
