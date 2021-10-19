import {
  CREATOR_REGISTRATION_REQUEST,
  CREATOR_REGISTRATION_SUCCEDDED,
  CREATOR_REGISTRATION_FAILED,
  FETCHING_USER_CREATOR_PROFILE,
  FETCHING_USER_CREATOR_PROFILE_SUCCEDDED,
  FETCHING_USER_CREATOR_PROFILE_FAILED
} from "constants/actionTypes";

const initialState = {
  creatingCreator: {
    loading: false,
    item: null,
    error: null
  },
  userCreatorProfile: {
    fetching: false,
    item: null,
    error: null
  }
};

function creatorsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATOR_REGISTRATION_REQUEST:
      return Object.assign({}, state, {
        ...state,
        creatingCreator: {
          creating: true
        }
      });
    case CREATOR_REGISTRATION_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        creatingCreator: {
          creating: false,
          item: action.payload,
          error: null
        }
      });
    case CREATOR_REGISTRATION_FAILED:
      return Object.assign({}, state, {
        ...state,
        creatingCreator: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case FETCHING_USER_CREATOR_PROFILE:
      return Object.assign({}, state, {
        ...state,
        userCreatorProfile: {
          ...state.userCreatorProfile,
          fetching: true
        }
      });
    case FETCHING_USER_CREATOR_PROFILE_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        userCreatorProfile: {
          fetching: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_USER_CREATOR_PROFILE_FAILED:
      return Object.assign({}, state, {
        ...state,
        userCreatorProfile: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });

    default:
      return state;
  }
}

export { creatorsReducer };
