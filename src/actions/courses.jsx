import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCHING_COURSE,
  FETCHING_COURSE_SUCCEDDED,
  FETCHING_COURSE_FAILED,
  FETCHING_COURSES,
  FETCHING_COURSES_SUCCEDDED,
  FETCHING_COURSES_FAILED,
  SEARCHING_COURSES,
  SEARCHING_COURSES_SUCCEDDED,
  SEARCHING_COURSES_FAILED,
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
  UPDATING_COURSE,
  UPDATING_COURSE_SUCCEDDED,
  UPDATING_COURSE_FAILED,
  CREATING_COURSE_FAILED,
  DELETING_COURSE,
  DELETING_COURSE_SUCCEDDED,
  DELETING_COURSE_FAILED,
  FETCHING_CREATOR_COURSES,
  FETCHING_CREATOR_COURSES_SUCCEDDED,
  FETCHING_CREATOR_COURSES_FAILED,
  FETCHING_USER_COURSES,
  FETCHING_USER_COURSES_SUCCEDDED,
  FETCHING_USER_COURSES_FAILED,
  RATING_COURSE,
  RATING_COURSE_SUCCEDDED,
  RATING_COURSE_FAILED
} from "../constants/actionTypes";

const API_URL = process.env.REACT_APP_API_URL;
const CREATE_COURSE_URL = `${API_URL}/api/1.0/courses/create`;
const UPDATE_COURSE_URL = `${API_URL}/api/1.0/courses/update`;
const DELETE_COURSE_URL = `${API_URL}/api/1.0/courses/delete`;
const FETCH_COURSE_URL = `${API_URL}/api/1.0/courses/fetch`;
const FETCH_COURSES_URL = `${API_URL}/api/1.0/courses/fetch/filters`;
const SEARCH_COURSES_URL = `${API_URL}/api/1.0/courses/search`;
const FETCH_CREATOR_COURSES_URL = `${API_URL}/api/1.0/courses/fetch/creator-courses`;
const FETCH_USER_COURSES_URL = `${API_URL}/api/1.0/courses/fetch/user-courses`;
const RATE_COURSE_URL = `${API_URL}/api/1.0/courses/{courseId}/rate-course`;

export const fetchCourse = createAction(FETCHING_COURSE);
const fetchingCourseSuccedded = createAction(FETCHING_COURSE_SUCCEDDED);
const fetchingCourseFailed = createAction(FETCHING_COURSE_FAILED);

function* fetchCourseSaga(action) {
  const fetchCourseAPI = () => {
    return axios
      .get(FETCH_COURSE_URL + "/" + action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCourseAPI);
    yield put(fetchingCourseSuccedded(response));
  } catch (error) {
    yield put(fetchingCourseFailed(error));
  }
}

export const fetchCourses = createAction(FETCHING_COURSES);
const fetchingCoursesSuccedded = createAction(FETCHING_COURSES_SUCCEDDED);
const fetchingCoursesFailed = createAction(FETCHING_COURSES_FAILED);

function* fetchCoursesSaga(action) {
  const fetchCoursesAPI = () => {
    return axios
      .post(FETCH_COURSES_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCoursesAPI);
    yield put(fetchingCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingCoursesFailed(error));
  }
}

export const searchCourses = createAction(SEARCHING_COURSES);
const searchingCoursesSuccedded = createAction(SEARCHING_COURSES_SUCCEDDED);
const searchingCoursesFailed = createAction(SEARCHING_COURSES_FAILED);

function* searchCoursesSaga(action) {
  const fetchCoursesAPI = () => {
    return axios
      .get(SEARCH_COURSES_URL, { params: { searchText: action.payload } })
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCoursesAPI);
    yield put(searchingCoursesSuccedded(response));
  } catch (error) {
    yield put(searchingCoursesFailed(error));
  }
}

/**
 * popular courses
 */
export const fetchPopularCourses = createAction(FETCHING_POPULAR_COURSES);
const fetchingPopularCoursesSuccedded = createAction(
  FETCHING_POPULAR_COURSES_SUCCEDDED
);
const fetchingPopularCoursesFailed = createAction(
  FETCHING_POPULAR_COURSES_FAILED
);

function* fetchPopularCoursesSaga(action) {
  const fetchPopularCoursesAPI = () => {
    return axios
      .post(FETCH_COURSES_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchPopularCoursesAPI);
    yield put(fetchingPopularCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingPopularCoursesFailed(error));
  }
}

/**
 * new courses
 */

export const fetchNewCourses = createAction(FETCHING_NEW_COURSES);
const fetchingNewCoursesSuccedded = createAction(
  FETCHING_NEW_COURSES_SUCCEDDED
);
const fetchingNewCoursesFailed = createAction(FETCHING_NEW_COURSES_FAILED);

function* fetchNewCoursesSaga(action) {
  const fetchNewCoursesAPI = () => {
    return axios
      .post(FETCH_COURSES_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchNewCoursesAPI);
    yield put(fetchingNewCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingNewCoursesFailed(error));
  }
}

/**
 * intermediate & advanced courses
 */

export const fetchIntermediateCourses = createAction(
  FETCHING_INTERMEDIATE_COURSES
);
const fetchingIntermediateCoursesSuccedded = createAction(
  FETCHING_INTERMEDIATE_COURSES_SUCCEDDED
);
const fetchingIntermediateCoursesFailed = createAction(
  FETCHING_INTERMEDIATE_COURSES_FAILED
);

function* fetchIntermediateCoursesSaga(action) {
  const fetchIntermediateCoursesAPI = () => {
    return axios
      .post(FETCH_COURSES_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchIntermediateCoursesAPI);
    yield put(fetchingIntermediateCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingIntermediateCoursesFailed(error));
  }
}

/**
 * recommended courses
 */

export const fetchRecommendedCourses = createAction(
  FETCHING_RECOMMENED_COURSES
);
const fetchingRecommendedCoursesSuccedded = createAction(
  FETCHING_RECOMMENED_COURSES_SUCCEDDED
);
const fetchingRecommendedCoursesFailed = createAction(
  FETCHING_RECOMMENED_COURSES_FAILED
);

function* fetchRecommendedCoursesSaga(action) {
  const fetchRecommendedCoursesAPI = () => {
    return axios
      .post(FETCH_COURSES_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchRecommendedCoursesAPI);
    yield put(fetchingRecommendedCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingRecommendedCoursesFailed(error));
  }
}

/**
 * fetch top courses
 */

export const fetchTopCourses = createAction(FETCHING_TOP_COURSES);
const fetchingTopCoursesSuccedded = createAction(
  FETCHING_TOP_COURSES_SUCCEDDED
);
const fetchingTopCoursesFailed = createAction(FETCHING_TOP_COURSES_FAILED);

function* fetchTopCoursesSaga(action) {
  const fetchTopCoursesAPI = () => {
    return axios
      .post(FETCH_COURSES_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchTopCoursesAPI);
    yield put(fetchingTopCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingTopCoursesFailed(error));
  }
}

/**
 * fetch creator courses
 */

export const fetchCreatorCourses = createAction(FETCHING_CREATOR_COURSES);
const fetchingCreatorCoursesSuccedded = createAction(
  FETCHING_CREATOR_COURSES_SUCCEDDED
);
const fetchingCreatorCoursesFailed = createAction(
  FETCHING_CREATOR_COURSES_FAILED
);

function* fetchCreatorCoursesSaga(action) {
  const fetchCreatorCoursesAPI = () => {
    return axios
      .get(FETCH_CREATOR_COURSES_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCreatorCoursesAPI);
    yield put(fetchingCreatorCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingCreatorCoursesFailed(error));
  }
}

/**
 * fetch user courses
 */

export const fetchUserCourses = createAction(FETCHING_USER_COURSES);
const fetchingUserCoursesSuccedded = createAction(
  FETCHING_USER_COURSES_SUCCEDDED
);
const fetchingUserCoursesFailed = createAction(FETCHING_USER_COURSES_FAILED);

function* fetchUserCoursesSaga(action) {
  const fetchUserCoursesAPI = () => {
    return axios.get(FETCH_USER_COURSES_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchUserCoursesAPI);
    yield put(fetchingUserCoursesSuccedded(response));
  } catch (error) {
    yield put(fetchingUserCoursesFailed(error));
  }
}

export const createCourse = createAction(CREATING_COURSE);
const creatingCourseSuccedded = createAction(CREATING_COURSE_SUCCEDDED);
const creatingCourseFailed = createAction(CREATING_COURSE_FAILED);

function* createCourseSaga(action) {
  const createCourseAPI = () => {
    return axios
      .post(CREATE_COURSE_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(createCourseAPI);
    yield put(creatingCourseSuccedded(response));
  } catch (error) {
    yield put(creatingCourseFailed(error));
  }
}

export const updateCourse = createAction(UPDATING_COURSE);
const updatingCourseSuccedded = createAction(UPDATING_COURSE_SUCCEDDED);
const updatingCourseFailed = createAction(UPDATING_COURSE_FAILED);

function* updateCourseSaga(action) {
  const updateCourseAPI = () => {
    return axios
      .put(UPDATE_COURSE_URL + "/" + action.payload.id, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(updateCourseAPI);
    yield put(updatingCourseSuccedded(response));
  } catch (error) {
    yield put(updatingCourseFailed(error));
  }
}

export const deleteCourse = createAction(DELETING_COURSE);
const deletingCourseSuccedded = createAction(DELETING_COURSE_SUCCEDDED);
const deletingCourseFailed = createAction(DELETING_COURSE_FAILED);

function* deleteCourseSaga(action) {
  const deleteCourseAPI = () => {
    return axios
      .delete(DELETE_COURSE_URL + "/" + action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(deleteCourseAPI);
    yield put(deletingCourseSuccedded(response));
  } catch (error) {
    yield put(deletingCourseFailed(error));
  }
}

/**
 * rate course
 */

export const rateCourse = createAction(RATING_COURSE);
const ratingCourseSuccedded = createAction(RATING_COURSE_SUCCEDDED);
const ratingCourseFailed = createAction(RATING_COURSE_FAILED);

function* rateCourseSaga(action) {
  let url = RATE_COURSE_URL.replace("courseId", action.payload.courseId);

  const rateCourseAPI = () => {
    return axios.put(url, action.payload).then((response) => response.data);
  };

  try {
    const response = yield call(rateCourseAPI);
    yield put(ratingCourseSuccedded(response));
  } catch (error) {
    yield put(ratingCourseFailed(error));
  }
}

export default function* coursesSaga() {
  yield takeLatest(FETCHING_COURSE, fetchCourseSaga);
  yield takeLatest(FETCHING_COURSES, fetchCoursesSaga);
  yield takeLatest(SEARCHING_COURSES, searchCoursesSaga);
  yield takeLatest(FETCHING_POPULAR_COURSES, fetchPopularCoursesSaga);
  yield takeLatest(FETCHING_TOP_COURSES, fetchTopCoursesSaga);
  yield takeLatest(FETCHING_NEW_COURSES, fetchNewCoursesSaga);
  yield takeLatest(FETCHING_INTERMEDIATE_COURSES, fetchIntermediateCoursesSaga);
  yield takeLatest(FETCHING_RECOMMENED_COURSES, fetchRecommendedCoursesSaga);
  yield takeLatest(FETCHING_CREATOR_COURSES, fetchCreatorCoursesSaga);
  yield takeLatest(FETCHING_USER_COURSES, fetchUserCoursesSaga);
  yield takeLatest(CREATING_COURSE, createCourseSaga);
  yield takeLatest(UPDATING_COURSE, updateCourseSaga);
  yield takeLatest(DELETING_COURSE, deleteCourseSaga);
  yield takeLatest(RATING_COURSE, rateCourseSaga);
}
