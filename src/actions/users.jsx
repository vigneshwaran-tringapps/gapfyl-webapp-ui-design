import {
  FETCHING_USER_ACCOUNT_REQUEST,
  FETCHING_USER_ACCOUNT_SUCCEEDED,
  FETCHING_USER_ACCOUNT_FAILED,
  FETCHING_USER_PROFILE,
  FETCHING_USER_PROFILE_SUCCEEDED,
  FETCHING_USER_PROFILE_FAILED,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCEDDED,
  USER_REGISTRATION_FAILED,
  USER_ACTIVATION_REQUEST,
  USER_ACTIVATION_SUCCEDDED,
  USER_ACTIVATION_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCEEDED,
  FORGOT_PASSWORD_FAILED,
  CHANGING_PASSWORD,
  CHANGING_PASSWORD_SUCCEDDED,
  CHANGING_PASSWORD_FAILED,
  RESETTING_PASSWORD,
  RESETTING_PASSWORD_SUCCEDDED,
  RESETTING_PASSWORD_FAILED,
  UPDATING_USER_PROFILE,
  UPDATING_USER_PROFILE_SUCCEEDED,
  UPDATING_USER_PROFILE_FAILED,
  UPDATING_USER_ADDRESS,
  UPDATING_USER_ADDRESS_SUCCEEDED,
  UPDATING_USER_ADDRESS_FAILED,
  ADDING_BANK_ACCOUNT,
  ADDING_BANK_ACCOUNT_SUCCEDDED,
  ADDING_BANK_ACCOUNT_FAILED,
  UPDATING_BANK_ACCOUNT,
  UPDATING_BANK_ACCOUNT_SUCCEDDED,
  UPDATING_BANK_ACCOUNT_FAILED,
  DELETING_BANK_ACCOUNT,
  DELETING_BANK_ACCOUNT_SUCCEDDED,
  DELETING_BANK_ACCOUNT_FAILED,
  ADDING_CARD,
  ADDING_CARD_SUCCEDDED,
  ADDING_CARD_FAILED,
  UPDATING_CARD,
  UPDATING_CARD_SUCCEDDED,
  UPDATING_CARD_FAILED,
  DELETING_CARD,
  DELETING_CARD_SUCCEDDED,
  DELETING_CARD_FAILED,
  FETCHING_BANK_ACCOUNTS,
  FETCHING_BANK_ACCOUNTS_SUCCEDDED,
  FETCHING_BANK_ACCOUNTS_FAILED,
  TRACKING_USER_GEOGRAPHIC,
  TRACKING_USER_GEOGRAPHIC_SUCCEEDED,
  TRACKING_USER_GEOGRAPHIC_FAILED
} from "../constants/actionTypes";

import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCHING_CARDS } from "constants/actionTypes";
import { FETCHING_CARDS_SUCCEDDED } from "constants/actionTypes";
import { FETCHING_CARDS_FAILED } from "constants/actionTypes";

const apiUrl = process.env.REACT_APP_API_URL;
const AUTHORIZE_URL = `${apiUrl}/oauth/token`;
const PROFILE_URL = `${apiUrl}/api/1.0/users/me`;

const UPDATE_PROFILE_URL = `${apiUrl}/api/1.0/users/update`;
const UPDATE_ADDRESS_URL = `${apiUrl}/api/1.0/users/update/address`;

const ACCOUNT_BASE_URL = `${apiUrl}/api/1.0/accounts`;
const REGISTER_URL = `${apiUrl}/api/1.0/registrations/user`;
const USER_ACTIVATION_URL = `${apiUrl}/api/1.0/registrations/activation/user`;
const FORGOT_PASSWORD_URL = `${apiUrl}/api/1.0/users/forgot-password`;
const RESET_PASSWORD_URL = `${apiUrl}/api/1.0/users/reset-password`;
const CHANGE_PASSWORD_URL = `${apiUrl}/api/1.0/users/change-password`;

const FETCH_CARDS_URL = `${apiUrl}/api/1.0/users/fetch/cards`;
const FETCH_BANK_ACCOUNTS_URL = `${apiUrl}/api/1.0/users/fetch/bank-accounts`;

const ADD_BANK_ACCOUNT_URL = `${apiUrl}/api/1.0/users/add/bank-account`;
const UPDATE_BANK_ACCOUNT_URL = `${apiUrl}/api/1.0/users/update/bank-account/{bankAccountId}`;
const DELETE_BANK_ACCOUNT_URL = `${apiUrl}/api/1.0/users/delete/bank-account/{bankAccountId}`;

const ADD_CARD_URL = `${apiUrl}/api/1.0/users/create/vpa-account`;
const UPDATE_CARD_URL = `${apiUrl}/api/1.0/users/update/vpa-account/{payoutAccountId}/{vpaAccountId}`;
const DELETE_CARD_URL = `${apiUrl}/api/1.0/users/delete/vpa-account/{payoutAccountId}/{vpaAccountId}`;

// user geographical information track
const TRACK_GEOGRAPHICAL_DATA = `${apiUrl}/api/1.0/geographic/track-user`;

/**
 * User Account
 */
export const fetchUserAccount = createAction(FETCHING_USER_ACCOUNT_REQUEST);
const fetchingUserAccountSuccedded = createAction(
  FETCHING_USER_ACCOUNT_SUCCEEDED
);
const fetchingUserAccountFailed = createAction(FETCHING_USER_ACCOUNT_FAILED);

function* fetchUserAccountSaga() {
  const fetchUserAccountAPI = () => {
    return axios.get(ACCOUNT_BASE_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchUserAccountAPI);
    yield put(fetchingUserAccountSuccedded(response));
  } catch (error) {
    yield put(fetchingUserAccountFailed(error));
  }
}

/**
 * User Profile
 */
export const fetchUserProfile = createAction(FETCHING_USER_PROFILE);
const fetchingUserProfileSuccedded = createAction(
  FETCHING_USER_PROFILE_SUCCEEDED
);
const fetchingUserProfileFailed = createAction(FETCHING_USER_PROFILE_FAILED);

function* fetchUserProfileSaga() {
  const fetchUserProfileAPI = () => {
    return axios.get(PROFILE_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchUserProfileAPI);
    yield put(fetchingUserProfileSuccedded(response));
  } catch (error) {
    yield put(fetchingUserProfileFailed(error));
  }
}

/**
 * update user profile
 */

export const updateUserProfile = createAction(UPDATING_USER_PROFILE);
const updatingUserProfileSuccedded = createAction(
  UPDATING_USER_PROFILE_SUCCEEDED
);
const updatingUserProfileFailed = createAction(UPDATING_USER_PROFILE_FAILED);

function* updateUserProfileSaga(action) {
  const updateUserProfileAPI = () => {
    return axios
      .put(UPDATE_PROFILE_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(updateUserProfileAPI);
    yield put(updatingUserProfileSuccedded(response));
  } catch (error) {
    yield put(updatingUserProfileFailed(error));
  }
}

export const updateUserAddress = createAction(UPDATING_USER_ADDRESS);
const updatingUserAddressSuccedded = createAction(
  UPDATING_USER_ADDRESS_SUCCEEDED
);
const updatingUserAddressFailed = createAction(UPDATING_USER_ADDRESS_FAILED);

function* updateUserAddressSaga(action) {
  const updateUserAddressAPI = () => {
    return axios
      .put(UPDATE_ADDRESS_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(updateUserAddressAPI);
    yield put(updatingUserAddressSuccedded(response));
  } catch (error) {
    yield put(updatingUserAddressFailed(error));
  }
}

/**
 * Register User / Account
 */
export const registerUser = createAction(USER_REGISTRATION_REQUEST);
const registeringUserSucceeded = createAction(USER_REGISTRATION_SUCCEDDED);
const registeringUserFailed = createAction(USER_REGISTRATION_FAILED);

function* registerUserSaga(action) {
  const registerUserAPI = () => {
    return axios
      .post(REGISTER_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(registerUserAPI);
    yield put(registeringUserSucceeded(response));
  } catch (error) {
    yield put(registeringUserFailed(error));
  }
}

/**
 * User Activation
 */

export const userActivation = createAction(USER_ACTIVATION_REQUEST);
const userActivationSucceeded = createAction(USER_ACTIVATION_SUCCEDDED);
const userActivationFailed = createAction(USER_ACTIVATION_FAILED);

function* userActivationSaga(action) {
  const userActivationAPI = () => {
    return axios
      .post(USER_ACTIVATION_URL + "/" + action.payload.activationToken)
      .then((response) => response.data);
  };

  try {
    const response = yield call(userActivationAPI);
    yield put(userActivationSucceeded(response));
  } catch (error) {
    yield put(userActivationFailed(error));
  }
}

/**
 * Forgot Password
 */

export const forgotPassword = createAction(FORGOT_PASSWORD_REQUEST);
const forgotPasswordSucceeded = createAction(FORGOT_PASSWORD_SUCCEEDED);
const forgotPasswordFailed = createAction(FORGOT_PASSWORD_FAILED);

function* forgotPasswordSaga(action) {
  const forgotPasswordAPI = () => {
    return axios
      .post(FORGOT_PASSWORD_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(forgotPasswordAPI);
    yield put(forgotPasswordSucceeded(response));
  } catch (error) {
    yield put(forgotPasswordFailed(error));
  }
}

// fetch bank accounts
export const fetchBankAccounts = createAction(FETCHING_BANK_ACCOUNTS);
const fetchingBankAccountsSucceeded = createAction(
  FETCHING_BANK_ACCOUNTS_SUCCEDDED
);
const fetchingBankAccountsFailed = createAction(FETCHING_BANK_ACCOUNTS_FAILED);

function* fetchingBankAccountsSaga() {
  const fetchingBankAccountsAPI = () => {
    return axios.get(FETCH_BANK_ACCOUNTS_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchingBankAccountsAPI);
    yield put(fetchingBankAccountsSucceeded(response));
  } catch (error) {
    yield put(fetchingBankAccountsFailed(error));
  }
}

// fetch bank cards
export const fetchCardAccounts = createAction(FETCHING_CARDS);
const fetchingCardAccountsSucceeded = createAction(FETCHING_CARDS_SUCCEDDED);
const fetchingCardAccountsFailed = createAction(FETCHING_CARDS_FAILED);

function* fetchingCardAccountsSaga() {
  const fetchingCardAccountsAPI = () => {
    return axios.get(FETCH_CARDS_URL).then((response) => response.data);
  };

  try {
    const response = yield call(fetchingCardAccountsAPI);
    yield put(fetchingCardAccountsSucceeded(response));
  } catch (error) {
    yield put(fetchingCardAccountsFailed(error));
  }
}

// add bank account
export const addBankAccount = createAction(ADDING_BANK_ACCOUNT);
const addingBankAccountAccountSucceeded = createAction(ADDING_BANK_ACCOUNT_SUCCEDDED);
const addingBankAccountAccountFailed = createAction(ADDING_BANK_ACCOUNT_FAILED);

function* addBankAccountSaga(action) {
  const addBankAccountAPI = () => {
    return axios
      .post(ADD_BANK_ACCOUNT_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(addBankAccountAPI);
    yield put(addingBankAccountAccountSucceeded(response));
  } catch (error) {
    yield put(addingBankAccountAccountFailed(error));
  }
}

// update bank account
export const updateBankAccount = createAction(UPDATING_BANK_ACCOUNT);
const updatingBankAccountAccountSucceeded = createAction(
  UPDATING_BANK_ACCOUNT_SUCCEDDED
);
const updatingBankAccountAccountFailed = createAction(UPDATING_BANK_ACCOUNT_FAILED);

function* updateBankAccountSaga(action) {
  const payload = action.payload;
  const bankAccount = payload.bankAccount;
  const options = payload.options;

  const url = generateUrl(UPDATE_BANK_ACCOUNT_URL, options);
  const updateBankAccountAPI = () => {
    return axios.put(url, bankAccount).then((response) => response.data);
  };

  try {
    const response = yield call(updateBankAccountAPI);
    yield put(updatingBankAccountAccountSucceeded(response));
  } catch (error) {
    yield put(updatingBankAccountAccountFailed(error));
  }
}

// delete bank account
export const deleteBankAccount = createAction(DELETING_BANK_ACCOUNT);
const deletingBankAccountAccountSucceeded = createAction(
  DELETING_BANK_ACCOUNT_SUCCEDDED
);
const deletingBankAccountAccountFailed = createAction(DELETING_BANK_ACCOUNT_FAILED);

function* deleteBankAccountSaga(action) {
  const payload = action.payload;
  const options = payload.options;
  const url = generateUrl(DELETE_BANK_ACCOUNT_URL, options);
  const deleteBankAccountAPI = () => {
    return axios.delete(url).then((response) => response.data);
  };

  try {
    const response = yield call(deleteBankAccountAPI);
    yield put(deletingBankAccountAccountSucceeded(response));
  } catch (error) {
    yield put(deletingBankAccountAccountFailed(error));
  }
}

// add card
export const addCard = createAction(ADDING_CARD);
const addingCardSucceeded = createAction(ADDING_CARD_SUCCEDDED);
const addingCardFailed = createAction(ADDING_CARD_FAILED);

function* addCardSaga(action) {
  const addCardAPI = () => {
    return axios
      .post(ADD_CARD_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(addCardAPI);
    yield put(addingCardSucceeded(response));
  } catch (error) {
    yield put(addingCardFailed(error));
  }
}

// update card
export const updateCard = createAction(UPDATING_CARD);
const updatingCardSucceeded = createAction(UPDATING_CARD_SUCCEDDED);
const updatingCardFailed = createAction(UPDATING_CARD_FAILED);

function* updateCardSaga(action) {
  const updateCardAPI = () => {
    return axios
      .put(UPDATE_CARD_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(updateCardAPI);
    yield put(updatingCardSucceeded(response));
  } catch (error) {
    yield put(updatingCardFailed(error));
  }
}

// delete card
export const deleteCard = createAction(DELETING_CARD);
const deletingCardSucceeded = createAction(DELETING_CARD_SUCCEDDED);
const deletingCardFailed = createAction(DELETING_CARD_FAILED);

function* deleteCardSaga(action) {
  const payload = action.payload;
  const options = payload.options;
  const url = generateUrl(DELETE_CARD_URL, options);

  const deleteCardAPI = () => {
    return axios.delete(url).then((response) => response.data);
  };

  try {
    const response = yield call(deleteCardAPI);
    yield put(deletingCardSucceeded(response));
  } catch (error) {
    yield put(deletingCardFailed(error));
  }
}

/**
 * Change Password
 */

export const resetPassword = createAction(RESETTING_PASSWORD);
const resettingPasswordSucceeded = createAction(RESETTING_PASSWORD_SUCCEDDED);
const resettingPasswordFailed = createAction(RESETTING_PASSWORD_FAILED);

function* resetPasswordSaga(action) {
  const resetPasswordAPI = () => {
    return axios
      .post(
        RESET_PASSWORD_URL + "/" + action.payload.recoveryToken,
        action.payload.changeRequest
      )
      .then((response) => response.data);
  };

  try {
    const response = yield call(resetPasswordAPI);
    yield put(resettingPasswordSucceeded(response));
  } catch (error) {
    yield put(resettingPasswordFailed(error));
  }
}

/**
 *
 */

export const changePassword = createAction(CHANGING_PASSWORD);
const changingPasswordSucceeded = createAction(CHANGING_PASSWORD_SUCCEDDED);
const changingPasswordFailed = createAction(CHANGING_PASSWORD_FAILED);

function* changePasswordSaga(action) {
  const changePasswordAPI = () => {
    return axios
      .post(CHANGE_PASSWORD_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(changePasswordAPI);
    yield put(changingPasswordSucceeded(response));
  } catch (error) {
    yield put(changingPasswordFailed(error));
  }
}

export const trackUserGeographic = createAction(TRACKING_USER_GEOGRAPHIC);
const trackUserGeographicSucceeded = createAction(
  TRACKING_USER_GEOGRAPHIC_SUCCEEDED
);
const trackUserGeographicFailed = createAction(TRACKING_USER_GEOGRAPHIC_FAILED);

function* trackUserGeogrpahicSaga(action) {
  const trackUserGeographicAPI = () => {
    return axios
      .post(TRACK_GEOGRAPHICAL_DATA, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(trackUserGeographicAPI);
    yield put(trackUserGeographicSucceeded(response));
  } catch (error) {
    yield put(trackUserGeographicFailed(error));
  }
  
}

/**
 * Refresh token
 */
export function refreshToken(token) {
  const data = {
    grant_type: "refresh_token",
    refresh_token: token
  };

  const authorization = btoa("gapfyl-client:gapfyl-secret");

  return axios({
    method: "POST",
    url: AUTHORIZE_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${authorization}`
    },
    params: data
  });
}

function generateUrl(url, options) {
  if (options.payoutAccountId)
    url = url.replace("{payoutAccountId}", options.payoutAccountId);

  if (options.bankAccountId)
    url = url.replace("{bankAccountId}", options.bankAccountId);

  if (options.vpaAccountId)
    url = url.replace("{vpaAccountId}", options.vpaAccountId);

  return url;
}

export default function* userSaga() {
  yield takeLatest(FETCHING_USER_ACCOUNT_REQUEST, fetchUserAccountSaga);
  yield takeLatest(FETCHING_USER_PROFILE, fetchUserProfileSaga);
  yield takeLatest(UPDATING_USER_PROFILE, updateUserProfileSaga);
  yield takeLatest(UPDATING_USER_ADDRESS, updateUserAddressSaga);
  yield takeLatest(USER_REGISTRATION_REQUEST, registerUserSaga);
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(RESETTING_PASSWORD, resetPasswordSaga);
  yield takeLatest(CHANGING_PASSWORD, changePasswordSaga);
  yield takeLatest(USER_ACTIVATION_REQUEST, userActivationSaga);
  yield takeLatest(ADDING_BANK_ACCOUNT, addBankAccountSaga);
  yield takeLatest(UPDATING_BANK_ACCOUNT, updateBankAccountSaga);
  yield takeLatest(DELETING_BANK_ACCOUNT, deleteBankAccountSaga);
  yield takeLatest(ADDING_CARD, addCardSaga);
  yield takeLatest(UPDATING_CARD, updateCardSaga);
  yield takeLatest(DELETING_CARD, deleteCardSaga);
  yield takeLatest(FETCHING_BANK_ACCOUNTS, fetchingBankAccountsSaga);
  yield takeLatest(FETCHING_CARDS, fetchingCardAccountsSaga);
  yield takeLatest(TRACKING_USER_GEOGRAPHIC, trackUserGeogrpahicSaga);
}
