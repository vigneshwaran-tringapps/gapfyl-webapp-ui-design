import {
  CREATE_OR_UPDATE_LEARNER,
  CREATE_OR_UPDATE_LEARNER_SUCCEDDED,
  CREATE_OR_UPDATE_LEARNER_FAILED,
  FETCHING_USER_LEARNER_PROFILE,
  FETCHING_USER_LEARNER_PROFILE_SUCCEDDED,
  FETCHING_USER_LEARNER_PROFILE_FAILED
} from "constants/actionTypes";

const initialState = {
  creatinglearner: {
    creating: false,
    item: null,
    error: null
  },
  fetchingLearner: {
    fetching: false,
    item: null,
    error: null
  }
};

function learnersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_OR_UPDATE_LEARNER:
      return Object.assign({}, state, {
        ...state,
        creatinglearner: {
          creating: true
        }
      });
    case CREATE_OR_UPDATE_LEARNER_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        creatinglearner: {
          creating: false,
          item: action.payload,
          error: null
        }
      });
    case CREATE_OR_UPDATE_LEARNER_FAILED:
      return Object.assign({}, state, {
        ...state,
        creatinglearner: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case FETCHING_USER_LEARNER_PROFILE:
      return Object.assign({}, state, {
        ...state,
        fetchingLearner: {
          ...state.fetchingLearner,
          fetching: true
        }
      });
    case FETCHING_USER_LEARNER_PROFILE_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        fetchingLearner: {
          fetching: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_USER_LEARNER_PROFILE_FAILED:
      return Object.assign({}, state, {
        ...state,
        fetchingLearner: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });

    default:
      return state;
  }
}

export { learnersReducer };
