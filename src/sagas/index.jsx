import { all, fork } from "redux-saga/effects";

import common from "../actions/common";
import userSaga from "../actions/users";
import coursesSaga from "../actions/courses";
import creatorsSaga from "actions/creators";
import learnersSaga from "actions/learners";
import checkoutsSaga from "actions/checkouts";
import purchasesSaga from "actions/purchases";
import refundsSaga from "actions/refunds";

export default function* root() {
  yield all([
    fork(common),
    fork(userSaga),
    fork(coursesSaga),
    fork(creatorsSaga),
    fork(learnersSaga),
    fork(checkoutsSaga),
    fork(purchasesSaga),
    fork(refundsSaga)
  ]);
}
