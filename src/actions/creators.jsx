import {
  CREATOR_REGISTRATION_REQUEST,
  CREATOR_REGISTRATION_SUCCEDDED,
  CREATOR_REGISTRATION_FAILED,
  FETCHING_USER_CREATOR_PROFILE,
  FETCHING_USER_CREATOR_PROFILE_SUCCEDDED,
  FETCHING_USER_CREATOR_PROFILE_FAILED
} from "constants/actionTypes";

import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

const apiUrl = process.env.REACT_APP_API_URL;
const REGISTER_URL = `${apiUrl}/api/1.0/creators/create`;
const FETCH_USER_CREATOR_URL = `${apiUrl}/api/1.0/creators/fetch/user-creator-profile`;

/**
 * Register User / Account
 */
export const registerCreator = createAction(CREATOR_REGISTRATION_REQUEST);
const registeringCreatorSucceeded = createAction(
  CREATOR_REGISTRATION_SUCCEDDED
);
const registeringCreatorFailed = createAction(CREATOR_REGISTRATION_FAILED);

function* registerCreatorSaga(action) {
  const registerCreatorAPI = () => {
    return axios
      .post(REGISTER_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(registerCreatorAPI);
    yield put(registeringCreatorSucceeded(response));
  } catch (error) {
    yield put(registeringCreatorFailed(error));
  }
}

export const fetchUserCreatorProfile = createAction(
  FETCHING_USER_CREATOR_PROFILE
);
const fetchingUserCreatorProfileSuccedded = createAction(
  FETCHING_USER_CREATOR_PROFILE_SUCCEDDED
);
const fetchingUserCreatorProfileFailed = createAction(
  FETCHING_USER_CREATOR_PROFILE_FAILED
);

function* fetchUserCreatorProfileSaga() {
  const fetchUserCreatorProfileAPI = () => {
    return axios.get(FETCH_USER_CREATOR_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchUserCreatorProfileAPI);
    yield put(fetchingUserCreatorProfileSuccedded(response));
  } catch (error) {
    yield put(fetchingUserCreatorProfileFailed(error));
  }
}

export default function* creatorSaga() {
  yield takeLatest(CREATOR_REGISTRATION_REQUEST, registerCreatorSaga);
  yield takeLatest(FETCHING_USER_CREATOR_PROFILE, fetchUserCreatorProfileSaga);
}
