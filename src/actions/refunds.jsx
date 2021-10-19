import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  REFUND_REQUEST,
  REFUND_REQUEST_SUCCEEDED,
  REFUND_REQUEST_FAILED
} from "constants/actionTypes";

const API_URL = process.env.REACT_APP_API_URL;
const REFUND_REQUEST_URL = `${API_URL}/api/1.0/refunds/request`;

export const requestRefund = createAction(REFUND_REQUEST);
const requestingRefundSucceeded = createAction(REFUND_REQUEST_SUCCEEDED);
const requestingRefundFailed = createAction(REFUND_REQUEST_FAILED);

function* requestRefundSaga(action) {
  const requestRefundAPI = () => {
    return axios
      .post(REFUND_REQUEST_URL, action.payload)
      .then((response) => response.data);
  };

  try {
    const response = yield call(requestRefundAPI);
    yield put(requestingRefundSucceeded(response));
  } catch (error) {
    yield put(requestingRefundFailed(error));
  }
}

export default function* refundsSaga() {
  yield takeLatest(REFUND_REQUEST, requestRefundSaga);
}
