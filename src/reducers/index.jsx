import { combineReducers } from "redux";

import { commonReducer } from "./commonReducer";
import { usersReducer } from "./usersReducer";
import { coursesReducer } from "./coursesReducer";
import { checkoutsReducer } from "./checkoutsReducer";
import { creatorsReducer } from "./creatorsReducer";
import { learnersReducer } from "./learnersReducer";
import { purchasesReducer } from "./purchasesReducer";
import { refundsReducer } from "./refundsReducer";

import { LOGOUT_USER } from "constants/actionTypes";
import AuthService from "../services/auth.service";

const appReducer = combineReducers({
  common: commonReducer,
  users: usersReducer,
  courses: coursesReducer,
  checkouts: checkoutsReducer,
  creators: creatorsReducer,
  learners: learnersReducer,
  purchases: purchasesReducer,
  refunds: refundsReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = undefined;
    AuthService.clearAccessToken();
  }
  return appReducer(state, action);
};

export default rootReducer;
