import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCHING_PRODUCT,
  FETCHING_PRODUCT_SUCCEEDED,
  FETCHING_PRODUCT_FAILED,
  FETCHING_PRICE,
  FETCHING_PRICE_SUCCEEDED,
  FETCHING_PRICE_FAILED,
  CREATING_PAYMENT_INTENT,
  CREATING_PAYMENT_INTENT_SUCCEEDED,
  CREATING_PAYMENT_INTENT_FAILED,
  CREATING_ORDER_REQUEST,
  CREATING_ORDER_SUCCEEDED,
  CREATING_ORDER_FAILED,
  CONFIRMING_PAYMENT,
  CONFIRMING_PAYMENT_SUCCEEDED,
  CONFIRMING_PAYMENT_FAILED
} from "constants/actionTypes";

const API_URL = process.env.REACT_APP_API_URL;
const FETCHING_PRODUCT_URL = `${API_URL}/api/1.0/products/fetch/{typeId}`;
const FETCHING_PRICE_URL = `${API_URL}/api/1.0/prices/fetch/{typeId}`;

const CREATING_PAYMENT_INTENT_URL = `${API_URL}/api/1.0/payments/create-payment-intent`;
const CONFIRMING_PAYMENT_URL = `${API_URL}/api/1.0/payments/payment-succeeded/{paymentId}`;

const CREATING_ORDER_URL = `${API_URL}/api/1.0/orders/create`;

// fetching product
export const fetchProduct = createAction(FETCHING_PRODUCT);
const fetchingProductSuccedded = createAction(FETCHING_PRODUCT_SUCCEEDED);
const fetchingProductFailed = createAction(FETCHING_PRODUCT_FAILED);

function* fetchProductSaga(action) {
  const options = action.payload.options;
  const url = generateUrl(FETCHING_PRODUCT_URL, options);

  const fetchProductAPI = () => {
    return axios.get(url).then((response) => response.data);
  };

  try {
    const response = yield call(fetchProductAPI);
    yield put(fetchingProductSuccedded(response));
  } catch (error) {
    yield put(fetchingProductFailed(error));
  }
}

// fetching price
export const fetchPrice = createAction(FETCHING_PRICE);
const fetchingPriceSuccedded = createAction(FETCHING_PRICE_SUCCEEDED);
const fetchingPriceFailed = createAction(FETCHING_PRICE_FAILED);

function* fetchPriceSaga(action) {
  const options = action.payload.options;
  const url = generateUrl(FETCHING_PRICE_URL, options);

  const fetchPriceAPI = () => {
    return axios.get(url).then((response) => response.data);
  };

  try {
    const response = yield call(fetchPriceAPI);
    yield put(fetchingPriceSuccedded(response));
  } catch (error) {
    yield put(fetchingPriceFailed(error));
  }
}

export const createOrder = createAction(CREATING_ORDER_REQUEST);
const creatingOrderSucceeded = createAction(CREATING_ORDER_SUCCEEDED);
const creatingOrderFailed = createAction(CREATING_ORDER_FAILED);

function* createOrderSaga(action) {
  const createOrderAPI = () => {
    return axios
      .post(CREATING_ORDER_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(createOrderAPI);
    yield put(creatingOrderSucceeded(response));
  } catch (error) {
    yield put(creatingOrderFailed(error));
  }
}

export const createPaymentIntent = createAction(CREATING_PAYMENT_INTENT);
const createPaymentIntentSucceeded = createAction(
  CREATING_PAYMENT_INTENT_SUCCEEDED
);
const createPaymentIntentFailed = createAction(CREATING_PAYMENT_INTENT_FAILED);

function* createPaymentIntentSaga(action) {
  const createPaymentIntentAPI = () => {
    return axios
      .post(CREATING_PAYMENT_INTENT_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(createPaymentIntentAPI);
    yield put(createPaymentIntentSucceeded(response));
  } catch (error) {
    yield put(createPaymentIntentFailed(error));
  }
}

export const confirmPayment = createAction(CONFIRMING_PAYMENT);
const confirmingPaymentSucceeded = createAction(CONFIRMING_PAYMENT_SUCCEEDED);
const confirmingPaymentFailed = createAction(CONFIRMING_PAYMENT_FAILED);

function* confirmPaymentSaga(action) {
  const options = action.payload.options;
  const url = generateUrl(CONFIRMING_PAYMENT_URL, options);

  const confirmPaymentAPI = () => {
    return axios.put(url).then((response) => response.data);
  };

  try {
    const response = yield call(confirmPaymentAPI);
    yield put(confirmingPaymentSucceeded(response));
  } catch (error) {
    yield put(confirmingPaymentFailed(error));
  }
}

function generateUrl(url, options) {
  if (options) {
    if (options.typeId) url = url.replace("{typeId}", options.typeId);

    if (options.paymentId) url = url.replace("{paymentId}", options.paymentId);
  }

  return url;
}

export default function* checkoutsSaga() {
  yield takeLatest(FETCHING_PRODUCT, fetchProductSaga);
  yield takeLatest(FETCHING_PRICE, fetchPriceSaga);
  yield takeLatest(CREATING_PAYMENT_INTENT, createPaymentIntentSaga);
  yield takeLatest(CREATING_ORDER_REQUEST, createOrderSaga);
  yield takeLatest(CONFIRMING_PAYMENT, confirmPaymentSaga);
}
