import { CHANGING_PASSWORD_SUCCEDDED } from "constants/actionTypes.jsx";
import { CHANGING_PASSWORD_FAILED } from "constants/actionTypes.jsx";
import { CHANGING_PASSWORD } from "constants/actionTypes.jsx";
import {
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCEDDED,
  USER_REGISTRATION_FAILED,
  INVALIDATE_USER_REGISTRATION,
  RESENDING_REGISTRATION_EMAIL_REQUEST,
  RESENDING_REGISTRATION_EMAIL_SUCCEDDED,
  RESENDING_REGISTRATION_EMAIL_FAILED,
  INVALIDATE_RESEND_REGISTRATION_EMAIL,
  VALIDATING_USER_ACTIVATION_REQUEST,
  VALIDATING_USER_ACTIVATION_SUCCEDDED,
  VALIDATING_USER_ACTIVATION_FAILED,
  USER_ACTIVATION_REQUEST,
  USER_ACTIVATION_SUCCEDDED,
  USER_ACTIVATION_FAILED,
  FETCHING_USER_INVITATION,
  FETCHING_USER_INVITATION_SUCCEDDED,
  FETCHING_USER_INVITATION_FAILED,
  AUTHENTICATING_USER,
  AUTHENTICATING_USER_SUCCEDDED,
  AUTHENTICATING_USER_FAILED,
  FETCHING_USER_PROFILE,
  FETCHING_USER_PROFILE_SUCCEEDED,
  FETCHING_USER_PROFILE_FAILED,
  VALIDATING_PASSWORD_RESET_LINK,
  VALIDATING_PASSWORD_RESET_LINK_SUCCEDDED,
  VALIDATING_PASSWORD_RESET_LINK_FAILED,
  RESETTING_PASSWORD,
  RESETTING_PASSWORD_SUCCEDDED,
  RESETTING_PASSWORD_FAILED,
  UPDATING_USER_PROFILE,
  UPDATING_USER_PROFILE_SUCCEEDED,
  UPDATING_USER_PROFILE_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCEEDED,
  FORGOT_PASSWORD_FAILED,
  FETCHING_ACCOUNT_USERS_REQUEST,
  FETCHING_ACCOUNT_USERS_SUCCEDDED,
  FETCHING_ACCOUNT_USERS_FAILED,
  INVALIDATE_ACCOUNT_USERS,
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
} from "../constants/actionTypes.jsx";

import AuthService from "../services/auth.service.js";

const initialState = {
  authenticating: false,
  authenticated: false,
  authenticationError: null,
  me: null,
  users: {
    loading: false,
    items: [],
    pagination: {
      current: -1,
      totalPages: 1
    }
  },
  fetchingProfile: false,
  updatingProfile: false,
  updatingProfileSuccess: false,
  changingPassword: {
    changing: false,
    item: null,
    error: null
  },
  resetPassword: {
    changing: false,
    success: false,
    error: [],
    recoveryError: null
  },
  forgotPassword: {
    loading: false,
    error: null,
    item: null
  },
  registration: {
    loading: false,
    item: null,
    resending: false,
    resentEmail: false
  },
  invitation: {
    loading: false,
    item: null,
    error: null
  },
  activation: {
    activating: false,
    activated: false,
    validated: false,
    validating: false,
    sampleDataGenerated: false,
    error: null
  },
  addingBankAccount: {
    adding: false,
    item: null,
    error: null
  },
  updatingBankAccount: {
    updating: false,
    item: null,
    error: null
  },
  deletingBankAccount: {
    deleting: false,
    item: null,
    error: null
  },
  addingCard: {
    adding: false,
    item: null,
    error: null
  },
  updatingCard: {
    updating: false,
    item: null,
    error: null
  },
  deletingCard: {
    deleting: false,
    item: null,
    error: null
  },
  bankAccounts: {
    fetching: false,
    item: [],
    error: null
  },
  cards: {
    fetching: false,
    item: [],
    error: null
  },
  userGeographic: {
    tracked: false,
    tracking: false
  }
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION_REQUEST:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          loading: true,
          item: null,
          error: null
        }
      });
    case USER_REGISTRATION_SUCCEDDED:
      //var item = !action.payload.errors ? action.payload : null;
      //var error = action.payload.errors ? action.payload.errors[0] : null;

      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          loading: false,
          item: action.payload
          //error: error
        }
      });
    case USER_REGISTRATION_FAILED:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          loading: false,
          item: null,
          error: action.payload
        }
      });

    case INVALIDATE_USER_REGISTRATION:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          loading: false,
          item: null,
          error: null,
          resending: false,
          resentEmail: false
        }
      });
    case RESENDING_REGISTRATION_EMAIL_REQUEST:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          resending: true,
          resentEmail: false
        }
      });
    case RESENDING_REGISTRATION_EMAIL_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          resending: false,
          resentEmail: true
        }
      });
    case RESENDING_REGISTRATION_EMAIL_FAILED:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          resending: false,
          resentEmail: false,
          error: action.payload
        }
      });

    case INVALIDATE_RESEND_REGISTRATION_EMAIL:
      return Object.assign({}, state, {
        ...state,
        registration: {
          ...state.registration,
          resending: false,
          resentEmail: false,
          error: null
        }
      });
    case VALIDATING_USER_ACTIVATION_REQUEST:
      return Object.assign({}, state, {
        ...state,
        activation: {
          ...state.activation,
          validating: true,
          validated: false
        }
      });
    case VALIDATING_USER_ACTIVATION_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        activation: {
          ...state.activation,
          validating: false,
          validated: true
        }
      });
    case VALIDATING_USER_ACTIVATION_FAILED:
      return Object.assign({}, state, {
        ...state,
        activation: {
          ...state.activation,
          validating: false,
          validated: false,
          error: action.payload
        }
      });
    case USER_ACTIVATION_REQUEST:
      return Object.assign({}, state, {
        ...state,
        activation: {
          ...state.activation,
          activating: true,
          activated: false
        }
      });
    case USER_ACTIVATION_SUCCEDDED:
      /*
      AuthService.saveToken(
        action.payload.access_token,
        action.payload.refresh_token
      );
      */

      return Object.assign({}, state, {
        ...state,
        activation: {
          ...state.activation,
          activating: false,
          activated: true,
          sampleDataGenerated: false
        }
      });
    case USER_ACTIVATION_FAILED:
      return Object.assign({}, state, {
        ...state,
        activation: {
          ...state.activation,
          activating: false,
          activated: false,
          error: action.payload
        }
      });

    case FETCHING_USER_INVITATION:
      return Object.assign({}, state, {
        ...state,
        invitation: {
          loading: true,
          item: null,
          error: null
        }
      });
    case FETCHING_USER_INVITATION_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        invitation: {
          loading: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_USER_INVITATION_FAILED:
      return Object.assign({}, state, {
        ...state,
        invitation: {
          loading: false,
          item: null,
          error: action.payload
        }
      });

    case AUTHENTICATING_USER:
      return Object.assign({}, state, {
        authenticating: true,
        authenticated: false,
        authenticationError: null
      });
    case AUTHENTICATING_USER_SUCCEDDED:
      AuthService.saveToken(
        action.payload.access_token,
        action.payload.refresh_token
      );

      return Object.assign({}, state, {
        authenticating: false,
        authenticated: true,
        authenticationError: null
      });
    case AUTHENTICATING_USER_FAILED:
      var error = "Unable to authenticate. Please try again later";
      if (action.payload) {
        error = action.payload.error_description;
      }
      return Object.assign({}, state, {
        authenticating: false,
        authenticated: false,
        authenticationError: error
      });

    case FETCHING_USER_PROFILE:
      return Object.assign({}, state, {
        // me: null,
        fetchingProfile: true
      });
    case FETCHING_USER_PROFILE_SUCCEEDED:
      return Object.assign({}, state, {
        me: action.payload,
        fetchingProfile: false
      });
    case FETCHING_USER_PROFILE_FAILED:
      return Object.assign({}, state, {
        me: null,
        fetchingProfile: false
      });

    case VALIDATING_PASSWORD_RESET_LINK:
      return Object.assign({}, state, {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          recoveryError: null,
          loading: true,
          success: false
        }
      });
    case VALIDATING_PASSWORD_RESET_LINK_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          recoveryError: null,
          loading: false,
          success: true
        }
      });
    case VALIDATING_PASSWORD_RESET_LINK_FAILED:
      return Object.assign({}, state, {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          recoveryError: action.payload,
          loading: false,
          success: false
        }
      });

    case CHANGING_PASSWORD:
      return Object.assign({}, state, {
        ...state,
        changingPassword: {
          ...state.changingPassword,
          changing: true
        }
      });
    case CHANGING_PASSWORD_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        changingPassword: {
          changing: false,
          item: action.payload,
          error: null
        }
      });
    case CHANGING_PASSWORD_FAILED:
      return Object.assign({}, state, {
        ...state,
        changingPassword: {
          changing: false,
          item: false,
          error: action.payload
        }
      });

    case RESETTING_PASSWORD:
      return Object.assign({}, state, {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          changing: true,
          success: false,
          recoveryError: null,
          error: []
        }
      });
    case RESETTING_PASSWORD_SUCCEDDED:
      let changeError = action.payload.errors ? action.payload.errors : [];
      let changeSuccess = action.payload.success
        ? action.payload.success
        : false;

      return Object.assign({}, state, {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          changing: false,
          error: changeError,
          success: changeSuccess
        }
      });
    case RESETTING_PASSWORD_FAILED:
      return Object.assign({}, state, {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          recoveryError: action.payload,
          changing: false,
          success: false,
          error: []
        }
      });

    case UPDATING_USER_PROFILE:
      return Object.assign({}, state, {
        ...state,
        updatingProfile: true,
        updatingProfileSuccess: false
      });
    case UPDATING_USER_PROFILE_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        updatingProfile: false,
        updatingProfileSuccess: true
      });
    case UPDATING_USER_PROFILE_FAILED:
      return Object.assign({}, state, {
        ...state,
        updatingProfile: false,
        updatingProfileSuccess: false
      });

    case FORGOT_PASSWORD_REQUEST:
      return Object.assign({}, state, {
        ...state,
        forgotPassword: {
          loading: true,
          error: null,
          item: null
        }
      });
    case FORGOT_PASSWORD_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        forgotPassword: {
          loading: false,
          error: null,
          item: action.payload
        }
      });
    case FORGOT_PASSWORD_FAILED:
      var error_msg = "Unable to process request. Please try again later";
      if (action.payload.response) {
        error_msg = action.payload.response.data.email;
      }
      return Object.assign({}, state, {
        forgotPassword: {
          loading: false,
          error: error_msg
        }
      });
    case FETCHING_ACCOUNT_USERS_REQUEST:
      return Object.assign({}, state, {
        ...state,
        users: {
          ...state.users,
          loading: true
        }
      });

    case FETCHING_ACCOUNT_USERS_SUCCEDDED:
      // var records = action.payload.response.records;
      var items = [];

      if (action.payload.response.currentPage !== 0) {
        items = [...state.items, ...action.payload.response.records];
      } else {
        items = action.payload.response.records;
      }

      items = items.reduce((x, y) => {
        var index = x.findIndex((e) => {
          return e.id === y.id;
        });

        if (index < 0) {
          return [...x, y];
        } else {
          x[index] = y;
          return x;
        }
      }, []);

      return Object.assign({}, state, {
        ...state,
        users: {
          ...state.users,
          loading: false,
          items: items,
          pagination: {
            ...state.users.pagination,
            current: action.payload.response.currentPage,
            totalPages: action.payload.response.totalPages
          }
        }
      });

    case FETCHING_ACCOUNT_USERS_FAILED:
      return Object.assign({}, state, {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: action.payload.error
        }
      });

    case INVALIDATE_ACCOUNT_USERS:
      return Object.assign({}, state, {
        ...state,
        users: {
          loading: false,
          items: [],
          pagination: {
            current: -1,
            totalPages: 1
          }
        }
      });

    case ADDING_BANK_ACCOUNT:
      return Object.assign({}, state, {
        ...state,
        addingBankAccount: {
          adding: true,
          item: null,
          error: null
        }
      });
    case ADDING_BANK_ACCOUNT_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        addingBankAccount: {
          adding: false,
          item: action.payload,
          error: null
        }
      });
    case ADDING_BANK_ACCOUNT_FAILED:
      return Object.assign({}, state, {
        ...state,
        addingBankAccount: {
          adding: false,
          item: null,
          error: action.payload
        }
      });

    case UPDATING_BANK_ACCOUNT:
      return Object.assign({}, state, {
        ...state,
        updatingBankAccount: {
          updating: true,
          item: null,
          error: null
        }
      });
    case UPDATING_BANK_ACCOUNT_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        updatingBankAccount: {
          updating: false,
          item: action.payload,
          error: null
        }
      });
    case UPDATING_BANK_ACCOUNT_FAILED:
      return Object.assign({}, state, {
        ...state,
        updatingBankAccount: {
          updating: false,
          item: null,
          error: action.payload
        }
      });

    case DELETING_BANK_ACCOUNT:
      return Object.assign({}, state, {
        ...state,
        deletingBankAccount: {
          deleting: true,
          item: null,
          error: null
        }
      });
    case DELETING_BANK_ACCOUNT_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        deletingBankAccount: {
          deleting: false,
          item: action.payload,
          error: null
        }
      });
    case DELETING_BANK_ACCOUNT_FAILED:
      return Object.assign({}, state, {
        ...state,
        deletingBankAccount: {
          deleting: false,
          item: null,
          error: action.payload
        }
      });

    case ADDING_CARD:
      return Object.assign({}, state, {
        ...state,
        addingCard: {
          adding: true
        }
      });
    case ADDING_CARD_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        addingCard: {
          adding: false,
          item: action.payload,
          error: null
        }
      });
    case ADDING_CARD_FAILED:
      return Object.assign({}, state, {
        ...state,
        addingCard: {
          adding: false,
          item: null,
          error: action.payload
        }
      });

    case UPDATING_CARD:
      return Object.assign({}, state, {
        ...state,
        updatingCard: {
          updating: true
        }
      });
    case UPDATING_CARD_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        updatingCard: {
          updating: false,
          item: action.payload,
          error: null
        }
      });
    case UPDATING_CARD_FAILED:
      return Object.assign({}, state, {
        ...state,
        updatingCard: {
          updating: false,
          item: null,
          error: action.payload
        }
      });

    case DELETING_CARD:
      return Object.assign({}, state, {
        ...state,
        deletingCard: {
          deleting: true
        }
      });
    case DELETING_CARD_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        deletingCard: {
          deleting: false,
          item: action.payload,
          error: null
        }
      });
    case DELETING_CARD_FAILED:
      return Object.assign({}, state, {
        ...state,
        deletingCard: {
          deleting: false,
          item: null,
          error: action.payload
        }
      });

    case FETCHING_BANK_ACCOUNTS:
      return Object.assign({}, state, {
        ...state,
        bankAccounts: {
          fetching: true
        }
      });
    case FETCHING_BANK_ACCOUNTS_SUCCEDDED:
      return Object.assign({}, state, {
        ...state,
        bankAccounts: {
          fetching: false,
          item: action.payload,
          error: null
        }
      });
    case FETCHING_BANK_ACCOUNTS_FAILED:
      return Object.assign({}, state, {
        ...state,
        bankAccounts: {
          fetching: false,
          item: null,
          error: action.payload
        }
      });

    case TRACKING_USER_GEOGRAPHIC:
      return Object.assign({}, state, {
        ...state,
        userGeographic: {
          ...state.userGeographic,
          tracking: true
        }
      });
    case TRACKING_USER_GEOGRAPHIC_SUCCEEDED:
      return Object.assign({}, state, {
        ...state,
        userGeographic: {
          tracked: true,
          tracking: false
        }
      });
    case TRACKING_USER_GEOGRAPHIC_FAILED:
      return Object.assign({}, state, {
        ...state,
        userGeographic: {
          tracked: false,
          tracking: false
        }
      });
    default:
      return state;
  }
}
export { usersReducer };
