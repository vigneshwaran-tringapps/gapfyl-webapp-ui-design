import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCHING_PURCHASED_COURSES,
  FETCHING_PURCHASED_COURSES_SUCCEEDED,
  FETCHING_PURCHASED_COURSES_FAILED
} from "constants/actionTypes";

const API_URL = process.env.REACT_APP_API_URL;
const FETCHING_COURSES_URL = `${API_URL}/api/1.0/purchases/fetch/courses`;

// fetching price
export const fetchPurchasedCourses = createAction(FETCHING_PURCHASED_COURSES);
const fetchingPurchasedCoursesSucceeded = createAction(
  FETCHING_PURCHASED_COURSES_SUCCEEDED
);
const fetchingPurchasedCoursesFailed = createAction(
  FETCHING_PURCHASED_COURSES_FAILED
);

function* fetchPurchasedCoursesSaga() {
  const fetchPurchasedCoursesAPI = () => {
    return axios.get(FETCHING_COURSES_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchPurchasedCoursesAPI);
    yield put(fetchingPurchasedCoursesSucceeded(response));
  } catch (error) {
    yield put(fetchingPurchasedCoursesFailed(error));
  }
}

export default function* purchasesSaga() {
  yield takeLatest(FETCHING_PURCHASED_COURSES, fetchPurchasedCoursesSaga);
}
