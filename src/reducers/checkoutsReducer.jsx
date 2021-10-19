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
  CONFIRMING_PAYMENT_FAILED,
  CHECKOUT_CLEAR
} from "constants/actionTypes";

const initialState = {
  fetchingProduct: {
    fetching: false,
    item: null,
    error: null
  },
  fetchingPrice: {
    fetching: false,
    item: null,
    error: null
  },
  creatingPaymentIntent: {
    creating: false,
    item: null,
    error: null
  },
  confirmingPayment: {
    confirming: false,
    item: null,
    error: null
  },
  creatingOrder: {
    creating: false,
    item: null,
    error: null
  }
};

function checkoutsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATING_ORDER_REQUEST:
      return Object.assign({}, state, {
        ...state,
        creatingOrder: {
          ...state.creatingOrder,
          creating: true
        }
      });
    case CREATING_ORDER_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        creatingOrder: {
          creating: false,
          item: action.payload,
          error: null
        }
      });
    case CREATING_ORDER_FAILED:
      return Object.assign({}, state, {
        ...state,
        creatingOrder: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case CREATING_PAYMENT_INTENT:
      return Object.assign({}, state, {
        ...state,
        creatingPaymentIntent: {
          ...state.creatingPaymentIntent,
          creating: true
        }
      });
    case CREATING_PAYMENT_INTENT_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        creatingPaymentIntent: {
          creating: false,
          item: action.payload,
          error: null
        }
      });
    case CREATING_PAYMENT_INTENT_FAILED:
      return Object.assign({}, state, {
        ...state,
        creatingPaymentIntent: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case CONFIRMING_PAYMENT:
      return Object.assign({}, state, {
        ...state,
        confirmingPayment: {
          ...state.confirmingPayment,
          creating: false
        }
      });
    case CONFIRMING_PAYMENT_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        confirmingPayment: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case CONFIRMING_PAYMENT_FAILED:
      return Object.assign({}, state, {
        ...state,
        confirmingPayment: {
          creating: false,
          item: null,
          error: action.payload
        }
      });
    case FETCHING_PRODUCT:
      return Object.assign({}, state, {
        ...state,
        fetchingProduct: {
          ...state.fetchingProduct,
          fetching: true
        }
      });
    case FETCHING_PRODUCT_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        fetchingProduct: {
          fetching: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_PRODUCT_FAILED:
      return Object.assign({}, state, {
        ...state,
        fetchingProduct: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });
    case FETCHING_PRICE:
      return Object.assign({}, state, {
        ...state,
        fetchingPrice: {
          ...state.fetchingPrice,
          fetching: true
        }
      });
    case FETCHING_PRICE_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        fetchingPrice: {
          fetching: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_PRICE_FAILED:
      return Object.assign({}, state, {
        ...state,
        fetchingPrice: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });
    case CHECKOUT_CLEAR:
      return Object.assign({}, state, {
        ...initialState
      });
    default:
      return state;
  }
}

export { checkoutsReducer };
