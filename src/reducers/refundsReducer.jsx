import {
  REFUND_REQUEST,
  REFUND_REQUEST_SUCCEEDED,
  REFUND_REQUEST_FAILED
} from "constants/actionTypes";

const initialState = {
  requestingRefund: {
    requesting: false,
    item: [],
    error: null
  }
};

function refundsReducer(state = initialState, action) {
  switch (action.type) {
    case REFUND_REQUEST:
      return Object.assign({}, state, {
        ...state,
        requestingRefund: {
          requesting: true
        }
      });
    case REFUND_REQUEST_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        requestingRefund: {
          requesting: false,
          item: action.payload,
          error: null
        }
      });
    case REFUND_REQUEST_FAILED:
      return Object.assign({}, state, {
        ...state,
        requestingRefund: {
          requesting: false,
          item: null,
          error: action.payload
        }
      });
    default:
      return state;
  }
}

export { refundsReducer };
