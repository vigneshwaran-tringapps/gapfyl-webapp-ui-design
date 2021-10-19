import {
  CREATE_OR_UPDATE_LEARNER,
  CREATE_OR_UPDATE_LEARNER_SUCCEDDED,
  CREATE_OR_UPDATE_LEARNER_FAILED,
  FETCHING_USER_LEARNER_PROFILE,
  FETCHING_USER_LEARNER_PROFILE_SUCCEDDED,
  FETCHING_USER_LEARNER_PROFILE_FAILED
} from "constants/actionTypes";

import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

const apiUrl = process.env.REACT_APP_API_URL;
const CREATE_LEARNER_URL = `${apiUrl}/api/1.0/learners/create`;
const FETCH_USER_LEARNER_PROFILE_URL = `${apiUrl}/api/1.0/learners/fetch/user-learner-profile`;

export const createLearner = createAction(CREATE_OR_UPDATE_LEARNER);
const createLearnerSucceeded = createAction(CREATE_OR_UPDATE_LEARNER_SUCCEDDED);
const createLearnerFailed = createAction(CREATE_OR_UPDATE_LEARNER_FAILED);

function* createLearnerSaga(action) {
  const createLearnerAPI = () => {
    return axios
      .post(CREATE_LEARNER_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(createLearnerAPI);
    yield put(createLearnerSucceeded(response));
  } catch (error) {
    yield put(createLearnerFailed(error));
  }
}

export const fetchUserLearnerProfile = createAction(
  FETCHING_USER_LEARNER_PROFILE
);
const fetchingUserLearnerProfileSucceeded = createAction(
  FETCHING_USER_LEARNER_PROFILE_SUCCEDDED
);
const fetchingUserLearnerProfileFailed = createAction(
  FETCHING_USER_LEARNER_PROFILE_FAILED
);

function* fetchUserLearnerProfileSaga() {
  const fetchUserLearnerProfileAPI = () => {
    return axios
      .get(FETCH_USER_LEARNER_PROFILE_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchUserLearnerProfileAPI);
    yield put(fetchingUserLearnerProfileSucceeded(response));
  } catch (error) {
    yield put(fetchingUserLearnerProfileFailed(error));
  }
}

export default function* learnerSaga() {
  yield takeLatest(CREATE_OR_UPDATE_LEARNER, createLearnerSaga);
  yield takeLatest(FETCHING_USER_LEARNER_PROFILE, fetchUserLearnerProfileSaga);
}
