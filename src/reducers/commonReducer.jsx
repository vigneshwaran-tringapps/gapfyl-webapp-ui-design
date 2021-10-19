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

const initialState = {
  lookups: {
    fetching: false,
    items: [],
    error: null
  },
  currencyLookups: {
    fetching: false,
    items: [],
    error: null
  },
  categoryLookups: {
    fetching: false,
    items: [],
    error: null
  },
  subCategoryLookups: {
    fetching: false,
    items: [],
    error: null
  },
  languageLookups: {
    fetching: false,
    items: [],
    error: null
  },
  interestLookups: {
    fetching: false,
    items: [],
    error: null
  },
  expertiseLookups: {
    fetching: false,
    items: [],
    error: null
  },
  countryLookups: {
    fetching: false,
    items: [],
    error: null
  },
  stateLookups: {
    fetching: false,
    items: [],
    error: null
  }
};

function commonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        lookups: {
          ...state.lookups,
          fetching: true
        }
      });
    case FETCHING_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        lookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        lookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_CATEGORY_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        categoryLookups: {
          ...state.categoryLookups,
          fetching: true
        }
      });
    case FETCHING_CATEGORY_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        categoryLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_CATEGORY_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        categoryLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_CURRENCY_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        currencyLookups: {
          ...state.currencyLookups,
          fetching: true
        }
      });
    case FETCHING_CURRENCY_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        currencyLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_CURRENCY_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        currencyLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_SUB_CATEGORY_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        subCategoryLookups: {
          ...state.subCategoryLookups,
          fetching: true
        }
      });
    case FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        subCategoryLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        subCategoryLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_LANGUAGE_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        languageLookups: {
          ...state.languageLookups,
          fetching: true
        }
      });
    case FETCHING_LANGUAGE_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        languageLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_LANGUAGE_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        languageLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_INTEREST_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        interestLookups: {
          ...state.interestLookups,
          fetching: true
        }
      });
    case FETCHING_INTEREST_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        interestLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_INTEREST_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        interestLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_EXPERTISE_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        expertiseLookups: {
          ...state.expertiseLookups,
          fetching: true
        }
      });
    case FETCHING_EXPERTISE_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        expertiseLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_EXPERTISE_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        expertiseLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_COUNTRY_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        countryLookups: {
          ...state.countryLookups,
          fetching: true
        }
      });
    case FETCHING_COUNTRY_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        countryLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_COUNTRY_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        countryLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    case FETCHING_STATE_LOOKUP_FILTERS:
      return Object.assign({}, state, {
        ...state,
        stateLookups: {
          ...state.stateLookups,
          fetching: true
        }
      });
    case FETCHING_STATE_LOOKUP_FILTERS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        stateLookups: {
          fetching: false,
          items: action.payload,
          error: null
        }
      });
    case FETCHING_STATE_LOOKUP_FILTERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        stateLookups: {
          fetching: false,
          items: [],
          error: action.payload
        }
      });
    default:
      return state;
  }
}

export { commonReducer };
