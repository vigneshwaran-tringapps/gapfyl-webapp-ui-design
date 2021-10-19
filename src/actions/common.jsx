import {
  FETCHING_LOOKUP_FILTERS,
  FETCHING_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_LOOKUP_FILTERS_FAILED,
  FETCHING_CATEGORY_LOOKUP_FILTERS,
  FETCHING_CATEGORY_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_CATEGORY_LOOKUP_FILTERS_FAILED,
  FETCHING_SUB_CATEGORY_LOOKUP_FILTERS,
  FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_FAILED,
  FETCHING_LANGUAGE_LOOKUP_FILTERS,
  FETCHING_LANGUAGE_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_LANGUAGE_LOOKUP_FILTERS_FAILED,
  FETCHING_INTEREST_LOOKUP_FILTERS,
  FETCHING_INTEREST_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_INTEREST_LOOKUP_FILTERS_FAILED,
  FETCHING_EXPERTISE_LOOKUP_FILTERS,
  FETCHING_EXPERTISE_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_EXPERTISE_LOOKUP_FILTERS_FAILED,
  FETCHING_CURRENCY_LOOKUP_FILTERS,
  FETCHING_CURRENCY_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_CURRENCY_LOOKUP_FILTERS_FAILED,
  FETCHING_COUNTRY_LOOKUP_FILTERS,
  FETCHING_COUNTRY_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_COUNTRY_LOOKUP_FILTERS_FAILED,
  FETCHING_STATE_LOOKUP_FILTERS,
  FETCHING_STATE_LOOKUP_FILTERS_SUCCEDDED,
  FETCHING_STATE_LOOKUP_FILTERS_FAILED
} from "constants/actionTypes";

import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

const apiUrl = process.env.REACT_APP_API_URL;
const FETCH_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch`;
const FETCH_CATEGORY_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/category`;
const FETCH_SUB_CATEGORY_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/sub_category`;
const FETCH_LANGUAGE_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/language`;
const FETCH_INTEREST_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/interest`;
const FETCH_EXPERTISE_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/expertise`;
const FETCH_CURRENCY_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/currency`;
const FETCH_COUNTRY_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/country`;
const FETCH_STATE_LOOKUP_URL = `${apiUrl}/api/1.0/lookups/fetch/state/{countryCode}`;

export const fetchLookups = createAction(FETCHING_LOOKUP_FILTERS);
const fetchingLookupsSucceeded = createAction(
  FETCHING_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingLookupsFailed = createAction(FETCHING_LOOKUP_FILTERS_FAILED);

function* fetchLookupsSaga() {
  const fetchLookupsAPI = () => {
    return axios.get(FETCH_LOOKUP_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchLookupsAPI);
    yield put(fetchingLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingLookupsFailed(error));
  }
}

export const fetchCategoryLookups = createAction(
  FETCHING_CATEGORY_LOOKUP_FILTERS
);
const fetchingCategoryLookupsSucceeded = createAction(
  FETCHING_CATEGORY_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingCategoryLookupsFailed = createAction(
  FETCHING_CATEGORY_LOOKUP_FILTERS_FAILED
);

function* fetchCategoryLookupsSaga() {
  const fetchCategoryLookupsAPI = () => {
    return axios
      .get(FETCH_CATEGORY_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCategoryLookupsAPI);
    yield put(fetchingCategoryLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingCategoryLookupsFailed(error));
  }
}

export const fetchSubCategoryLookups = createAction(
  FETCHING_SUB_CATEGORY_LOOKUP_FILTERS
);
const fetchingSubCategoryLookupsSucceeded = createAction(
  FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingSubCategoryLookupsFailed = createAction(
  FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_FAILED
);

function* fetchSubCategoryLookupsSaga() {
  const fetchSubCategoryLookupsAPI = () => {
    return axios
      .get(FETCH_SUB_CATEGORY_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchSubCategoryLookupsAPI);
    yield put(fetchingSubCategoryLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingSubCategoryLookupsFailed(error));
  }
}

export const fetchLanguageLookups = createAction(
  FETCHING_LANGUAGE_LOOKUP_FILTERS
);
const fetchingLanguageLookupsSucceeded = createAction(
  FETCHING_LANGUAGE_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingLanguageLookupsFailed = createAction(
  FETCHING_LANGUAGE_LOOKUP_FILTERS_FAILED
);

function* fetchLanguageLookupsSaga() {
  const fetchLanguageLookupsAPI = () => {
    return axios
      .get(FETCH_LANGUAGE_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchLanguageLookupsAPI);
    yield put(fetchingLanguageLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingLanguageLookupsFailed(error));
  }
}

export const fetchInterestLookups = createAction(
  FETCHING_INTEREST_LOOKUP_FILTERS
);
const fetchingInterestLookupsSucceeded = createAction(
  FETCHING_INTEREST_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingInterestLookupsFailed = createAction(
  FETCHING_INTEREST_LOOKUP_FILTERS_FAILED
);

function* fetchInterestLookupsSaga() {
  const fetchInterextLookupsAPI = () => {
    return axios
      .get(FETCH_INTEREST_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchInterextLookupsAPI);
    yield put(fetchingInterestLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingInterestLookupsFailed(error));
  }
}

export const fetchExpertiseLookups = createAction(
  FETCHING_EXPERTISE_LOOKUP_FILTERS
);
const fetchingExpertiseLookupsSucceeded = createAction(
  FETCHING_EXPERTISE_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingExpertiseLookupsFailed = createAction(
  FETCHING_EXPERTISE_LOOKUP_FILTERS_FAILED
);

function* fetchExpertiseLookupsSaga() {
  const fetchExpertiseLookupsAPI = () => {
    return axios
      .get(FETCH_EXPERTISE_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchExpertiseLookupsAPI);
    yield put(fetchingExpertiseLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingExpertiseLookupsFailed(error));
  }
}

export const fetchCurrencyLookups = createAction(
  FETCHING_CURRENCY_LOOKUP_FILTERS
);
const fetchingCurrencyLookupsSucceeded = createAction(
  FETCHING_CURRENCY_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingCurrencyLookupsFailed = createAction(
  FETCHING_CURRENCY_LOOKUP_FILTERS_FAILED
);

function* fetchCurrencyLookupsSaga() {
  const fetchCurrencyLookupsAPI = () => {
    return axios
      .get(FETCH_CURRENCY_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCurrencyLookupsAPI);
    yield put(fetchingCurrencyLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingCurrencyLookupsFailed(error));
  }
}

export const fetchCountryLookups = createAction(
  FETCHING_COUNTRY_LOOKUP_FILTERS
);
const fetchingCountryLookupsSucceeded = createAction(
  FETCHING_COUNTRY_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingCountryLookupsFailed = createAction(
  FETCHING_COUNTRY_LOOKUP_FILTERS_FAILED
);

function* fetchCountryLookupsSaga() {
  const fetchCountryLookupsAPI = () => {
    return axios
      .get(FETCH_COUNTRY_LOOKUP_URL)
      .then((response) => response.data);
  };

  try {
    const response = yield call(fetchCountryLookupsAPI);
    yield put(fetchingCountryLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingCountryLookupsFailed(error));
  }
}

export const fetchStateLookups = createAction(FETCHING_STATE_LOOKUP_FILTERS);
const fetchingStateLookupsSucceeded = createAction(
  FETCHING_STATE_LOOKUP_FILTERS_SUCCEDDED
);
const fetchingStateLookupsFailed = createAction(
  FETCHING_STATE_LOOKUP_FILTERS_FAILED
);

function* fetchStateLookupsSaga(action) {
  let payload = action.payload;

  var options = payload.options;
  let url = generateUrl(FETCH_STATE_LOOKUP_URL, options)

  const fetchStateLookupsAPI = () => {
    return axios.get(url).then((response) => response.data);
  };

  try {
    const response = yield call(fetchStateLookupsAPI);
    yield put(fetchingStateLookupsSucceeded(response));
  } catch (error) {
    yield put(fetchingStateLookupsFailed(error));
  }
}

function generateUrl(url, options) {
  if (options.countryCode)
    url = url.replace("{countryCode}", options.countryCode);

  return url;
}

export default function* commongSaga() {
  yield takeLatest(FETCHING_LOOKUP_FILTERS, fetchLookupsSaga);
  yield takeLatest(FETCHING_CATEGORY_LOOKUP_FILTERS, fetchCategoryLookupsSaga);
  yield takeLatest(
    FETCHING_SUB_CATEGORY_LOOKUP_FILTERS,
    fetchSubCategoryLookupsSaga
  );
  yield takeLatest(FETCHING_LANGUAGE_LOOKUP_FILTERS, fetchLanguageLookupsSaga);
  yield takeLatest(FETCHING_INTEREST_LOOKUP_FILTERS, fetchInterestLookupsSaga);
  yield takeLatest(
    FETCHING_EXPERTISE_LOOKUP_FILTERS,
    fetchExpertiseLookupsSaga
  );
  yield takeLatest(FETCHING_CURRENCY_LOOKUP_FILTERS, fetchCurrencyLookupsSaga);
  yield takeLatest(FETCHING_COUNTRY_LOOKUP_FILTERS, fetchCountryLookupsSaga);
  yield takeLatest(FETCHING_STATE_LOOKUP_FILTERS, fetchStateLookupsSaga);
}
