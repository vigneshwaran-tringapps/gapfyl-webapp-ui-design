/*
  Anonymous Actions
*/
export const AUTHENTICATING_USER = "AUTHENTICATING_USER";
export const AUTHENTICATING_USER_SUCCEDDED = "AUTHENTICATING_USER_SUCCEDDED";
export const AUTHENTICATING_USER_FAILED = "AUTHENTICATING_USER_FAILED";

export const AUTHENTICATING_USER_REQUEST = "AUTHENTICATING_USER_REQUEST";
export const AUTHENTICATING_USER_REQUEST_SUCCEDDED =
  "AUTHENTICATING_USER_REQUEST_SUCCEDDED";
export const AUTHENTICATING_USER_REQUEST_FAILED =
  "AUTHENTICATING_USER_REQUEST_FAILED";

/**
 * lookup actions
 */

export const FETCHING_LOOKUP_FILTERS = "FETCHING_LOOKUP_FILTERS";
export const FETCHING_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_LOOKUP_FILTERS_FAILED = "FETCHING_LOOKUP_FILTERS_FAILED";

export const FETCHING_CATEGORY_LOOKUP_FILTERS =
  "FETCHING_CATEGORY_LOOKUP_FILTERS";
export const FETCHING_CATEGORY_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_CATEGORY_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_CATEGORY_LOOKUP_FILTERS_FAILED =
  "FETCHING_CATEGORY_LOOKUP_FILTERS_FAILED";

export const FETCHING_SUB_CATEGORY_LOOKUP_FILTERS =
  "FETCHING_SUB_CATEGORY_LOOKUP_FILTERS";
export const FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_FAILED =
  "FETCHING_SUB_CATEGORY_LOOKUP_FILTERS_FAILED";

export const FETCHING_LANGUAGE_LOOKUP_FILTERS =
  "FETCHING_LANGUAGE_LOOKUP_FILTERS";
export const FETCHING_LANGUAGE_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_LANGUAGE_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_LANGUAGE_LOOKUP_FILTERS_FAILED =
  "FETCHING_LANGUAGE_LOOKUP_FILTERS_FAILED";

export const FETCHING_INTEREST_LOOKUP_FILTERS =
  "FETCHING_INTEREST_LOOKUP_FILTERS";
export const FETCHING_INTEREST_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_INTEREST_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_INTEREST_LOOKUP_FILTERS_FAILED =
  "FETCHING_INTEREST_LOOKUP_FILTERS_FAILED";

export const FETCHING_EXPERTISE_LOOKUP_FILTERS =
  "FETCHING_EXPERTISE_LOOKUP_FILTERS";
export const FETCHING_EXPERTISE_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_EXPERTISE_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_EXPERTISE_LOOKUP_FILTERS_FAILED =
  "FETCHING_EXPERTISE_LOOKUP_FILTERS_FAILED";

export const FETCHING_CURRENCY_LOOKUP_FILTERS =
  "FETCHING_CURRENCY_LOOKUP_FILTERS";
export const FETCHING_CURRENCY_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_CURRENCY_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_CURRENCY_LOOKUP_FILTERS_FAILED =
  "FETCHING_CURRENCY_LOOKUP_FILTERS_FAILED";

export const FETCHING_COUNTRY_LOOKUP_FILTERS =
  "FETCHING_COUNTRY_LOOKUP_FILTERS";
export const FETCHING_COUNTRY_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_COUNTRY_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_COUNTRY_LOOKUP_FILTERS_FAILED =
  "FETCHING_COUNTRY_LOOKUP_FILTERS_FAILED";

export const FETCHING_STATE_LOOKUP_FILTERS = "FETCHING_STATE_LOOKUP_FILTERS";
export const FETCHING_STATE_LOOKUP_FILTERS_SUCCEDDED =
  "FETCHING_STATE_LOOKUP_FILTERS_SUCCEDDED";
export const FETCHING_STATE_LOOKUP_FILTERS_FAILED =
  "FETCHING_STATE_LOOKUP_FILTERS_FAILED";

/** user actions */
export const FETCHING_USER_PROFILE = "FETCHING_USER_PROFILE";
export const FETCHING_USER_PROFILE_SUCCEEDED =
  "FETCHING_USER_PROFILE_SUCCEEDED";
export const FETCHING_USER_PROFILE_FAILED = "FETCHING_USER_PROFILE_FAILED";

export const FETCHING_USER_INVITATION = "FETCHING_USER_INVITATION";
export const FETCHING_USER_INVITATION_SUCCEDDED =
  "FETCHING_USER_INVITATION_SUCCEDDED";
export const FETCHING_USER_INVITATION_FAILED =
  "FETCHING_USER_INVITATION_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCEEDED = "FORGOT_PASSWORD_SUCCEEDED";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const FETCHING_ACCOUNT_USERS_REQUEST = "FETCHING_ACCOUNT_USERS_REQUEST";
export const FETCHING_ACCOUNT_USERS_SUCCEDDED =
  "FETCHING_ACCOUNT_USERS_SUCCEDDED";
export const FETCHING_ACCOUNT_USERS_FAILED = "FETCHING_ACCOUNT_USERS_FAILED";

export const FETCHING_USER_ACCOUNT_REQUEST = "FETCHING_USER_ACCOUNT_REQUEST";
export const FETCHING_USER_ACCOUNT_SUCCEEDED =
  "FETCHING_USER_ACCOUNT_SUCCEEDED";
export const FETCHING_USER_ACCOUNT_FAILED = "FETCHING_USER_ACCOUNT_FAILED";

export const RESETTING_PASSWORD = "RESETTING_PASSWORD";
export const RESETTING_PASSWORD_SUCCEDDED = "RESETTING_PASSWORD_SUCCEDDED";
export const RESETTING_PASSWORD_FAILED = "RESETTING_PASSWORD_FAILED";

export const CHANGING_PASSWORD = "CHANGING_PASSWORD";
export const CHANGING_PASSWORD_SUCCEDDED = "CHANGING_PASSWORD_SUCCEDDED";
export const CHANGING_PASSWORD_FAILED = "CHANGING_PASSWORD_FAILED";

export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER = "LOGOUT_USER";

export const INVALIDATE_USER_REGISTRATION = "INVALIDATE_USER_REGISTRATION";

export const INVALIDATE_ACCOUNT_USERS = "INVALIDATE_ACCOUNT_USERS";

export const INVALIDATE_RESEND_REGISTRATION_EMAIL =
  "INVALIDATE_RESEND_REGISTRATION_EMAIL";

export const RESENDING_REGISTRATION_EMAIL_REQUEST =
  "RESENDING_REGISTRATION_EMAIL_REQUEST";
export const RESENDING_REGISTRATION_EMAIL_SUCCEDDED =
  "RESENDING_REGISTRATION_EMAIL_SUCCEDDED";
export const RESENDING_REGISTRATION_EMAIL_FAILED =
  "RESENDING_REGISTRATION_EMAIL_FAILED";

export const UPDATING_USER_PROFILE = "UPDATING_USER_PROFILE";
export const UPDATING_USER_PROFILE_SUCCEEDED =
  "UPDATING_USER_PROFILE_SUCCEEDED";
export const UPDATING_USER_PROFILE_FAILED = "UPDATING_USER_PROFILE_FAILED";

export const UPDATING_USER_ADDRESS = "UPDATING_USER_ADDRESS";
export const UPDATING_USER_ADDRESS_SUCCEEDED =
  "UPDATING_USER_ADDRESS_SUCCEEDED";
export const UPDATING_USER_ADDRESS_FAILED = "UPDATING_USER_ADDRESS_FAILED";

export const USER_ACTIVATION_REQUEST = "USER_ACTIVATION_REQUEST";
export const USER_ACTIVATION_SUCCEDDED = "USER_ACTIVATION_SUCCEDDED";
export const USER_ACTIVATION_FAILED = "USER_ACTIVATION_FAILED";

export const USER_REGISTRATION_REQUEST = "USER_REGISTRATION_REQUEST";
export const USER_REGISTRATION_SUCCEDDED = "USER_REGISTRATION_SUCCEDDED";
export const USER_REGISTRATION_FAILED = "USER_REGISTRATION_FAILED";

export const VALIDATING_USER_ACTIVATION_REQUEST =
  "VALIDATING_USER_ACTIVATION_REQUEST";
export const VALIDATING_USER_ACTIVATION_SUCCEDDED =
  "VALIDATING_USER_ACTIVATION_SUCCEDDED";
export const VALIDATING_USER_ACTIVATION_FAILED =
  "VALIDATING_USER_ACTIVATION_FAILED";

export const VALIDATING_PASSWORD_RESET_LINK = "VALIDATING_PASSWORD_RESET_LINK";
export const VALIDATING_PASSWORD_RESET_LINK_SUCCEDDED =
  "VALIDATING_PASSWORD_RESET_LINK_SUCCEDDED";
export const VALIDATING_PASSWORD_RESET_LINK_FAILED =
  "VALIDATING_PASSWORD_RESET_LINK_FAILED";

export const UPDATING_USER_ACCOUNT = "UPDATING_USER_ACCOUNT";
export const UPDATING_USER_ACCOUNT_SUCCEDDED =
  "UPDATING_USER_ACCOUNT_SUCCEDDED";
export const UPDATING_USER_ACCOUNT_FAILED = "UPDATING_USER_ACCOUNT_FAILED";

export const ADDING_BANK_ACCOUNT = "ADDING_BANK_ACCOUNT";
export const ADDING_BANK_ACCOUNT_SUCCEDDED = "ADDING_BANK_ACCOUNT_SUCCEDDED";
export const ADDING_BANK_ACCOUNT_FAILED = "ADDING_BANK_ACCOUNT_FAILED";

export const UPDATING_BANK_ACCOUNT = "UPDATING_BANK_ACCOUNT";
export const UPDATING_BANK_ACCOUNT_SUCCEDDED =
  "UPDATING_BANK_ACCOUNT_SUCCEDDED";
export const UPDATING_BANK_ACCOUNT_FAILED = "UPDATING_BANK_ACCOUNT_FAILED";

export const DELETING_BANK_ACCOUNT = "DELETING_BANK_ACCOUNT";
export const DELETING_BANK_ACCOUNT_SUCCEDDED =
  "DELETING_BANK_ACCOUNT_SUCCEDDED";
export const DELETING_BANK_ACCOUNT_FAILED = "DELETING_BANK_ACCOUNT_FAILED";

export const ADDING_CARD = "ADDING_CARD";
export const ADDING_CARD_SUCCEDDED = "ADDING_CARD_SUCCEDDED";
export const ADDING_CARD_FAILED = "ADDING_CARD_FAILED";

export const UPDATING_CARD = "UPDATING_CARD";
export const UPDATING_CARD_SUCCEDDED = "UPDATING_CARD_SUCCEDDED";
export const UPDATING_CARD_FAILED = "UPDATING_CARD_FAILED";

export const DELETING_CARD = "DELETING_CARD";
export const DELETING_CARD_SUCCEDDED = "DELETING_CARD_SUCCEDDED";
export const DELETING_CARD_FAILED = "DELETING_CARD_FAILED";

export const FETCHING_BANK_ACCOUNTS = "FETCHING_BANK_ACCOUNTS";
export const FETCHING_BANK_ACCOUNTS_SUCCEDDED =
  "FETCHING_BANK_ACCOUNTS_SUCCEDDED";
export const FETCHING_BANK_ACCOUNTS_FAILED = "FETCHING_BANK_ACCOUNTS_FAILED";

export const FETCHING_CARDS = "FETCHING_CARDS";
export const FETCHING_CARDS_SUCCEDDED = "FETCHING_CARDS_SUCCEDDED";
export const FETCHING_CARDS_FAILED = "FETCHING_CARDS_FAILED";

export const TRACKING_USER_GEOGRAPHIC = "TRACKING_USER_GEOGRAPHIC";
export const TRACKING_USER_GEOGRAPHIC_SUCCEEDED =
  "TRACKING_USER_GEOGRAPHIC_SUCCEEDED";
export const TRACKING_USER_GEOGRAPHIC_FAILED =
  "TRACKING_USER_GEOGRAPHIC_FAILED";

/**
 * checkout - order, payment and refund actions
 */

export const FETCHING_PRODUCT = "FETCHING_PRODUCT";
export const FETCHING_PRODUCT_SUCCEEDED = "FETCHING_PRODUCT_SUCCEEDED";
export const FETCHING_PRODUCT_FAILED = "FETCHING_PRODUCT_FAILED";

export const FETCHING_PRICE = "FETCHING_PRICE";
export const FETCHING_PRICE_SUCCEEDED = "FETCHING_PRICE_SUCCEEDED";
export const FETCHING_PRICE_FAILED = "FETCHING_PRICE_FAILED";

export const CREATING_PAYMENT_INTENT = "CREATING_PAYMENT_INTENT";
export const CREATING_PAYMENT_INTENT_SUCCEEDED =
  "CREATING_PAYMENT_INTENT_SUCCEEDED";
export const CREATING_PAYMENT_INTENT_FAILED = "CREATING_PAYMENT_INTENT_FAILED";

export const CREATING_ORDER_REQUEST = "CREATING_ORDER_REQUEST";
export const CREATING_ORDER_SUCCEEDED = "CREATING_ORDER_SUCCEEDED";
export const CREATING_ORDER_FAILED = "CREATING_ORDER_FAILED";

export const CONFIRMING_PAYMENT = "CONFIRMING_PAYMENT";
export const CONFIRMING_PAYMENT_SUCCEEDED = "CONFIRMING_PAYMENT_SUCCEEDED";
export const CONFIRMING_PAYMENT_FAILED = "CONFIRMING_PAYMENT_FAILED";

export const CREATING_PAYMENT = "CREATING_PAYMENT";
export const CREATING_PAYMENT_SUCCEEDED = "CREATING_PAYMENT_SUCCEEDED";
export const CREATING_PAYMENT_FAILED = "CREATING_PAYMENT_FAILED";

export const VERIFYING_PAYMENT = "VERIFYING_PAYMENT";
export const VERIFYING_PAYMENT_SUCCEEDED = "VERIFYING_PAYMENT_SUCCEEDED";
export const VERIFYING_PAYMENT_FAILED = "VERIFYING_PAYMENT_FAILED";

export const REQUESTING_REFUND = "REQUESTING_REFUND";
export const REQUESTING_REFUND_SUCCEEDED = "REQUESTING_REFUND_SUCCEEDED";
export const REQUESTING_REFUND_FAILED = "REQUESTING_REFUND_FAILED";

export const ADDING_SALES = "ADDING_SALES";
export const ADDING_SALES_SUCCEDDED = "ADDING_SALES_SUCCEDDED";
export const ADDING_SALES_FAILED = "ADDING_SALES_FAILED";

export const CHECKOUT_CLEAR = "CHECKOUT_CLEAR";

// purchases - courses
export const FETCHING_PURCHASED_COURSES = "FETCHING_PURCHASED_COURSES";
export const FETCHING_PURCHASED_COURSES_SUCCEEDED =
  "FETCHING_PURCHASED_COURSES_SUCCEEDED";
export const FETCHING_PURCHASED_COURSES_FAILED =
  "FETCHING_PURCHASED_COURSES_FAILED";

// refund request
export const REFUND_REQUEST = "REFUND_REQUEST";
export const REFUND_REQUEST_SUCCEEDED = "REFUND_REQUEST_SUCCEEDED";
export const REFUND_REQUEST_FAILED = "REFUND_REQUEST_FAILED";

/**
 * courses actions
 */
export const SEARCHING_COURSES = "SEARCHING_COURSES";
export const SEARCHING_COURSES_SUCCEDDED = "SEARCHING_COURSES_SUCCEDDED";
export const SEARCHING_COURSES_FAILED = "SEARCHING_COURSES_FAILED";

export const FETCHING_COURSE = "FETCHING_COURSE";
export const FETCHING_COURSE_SUCCEDDED = "FETCHING_COURSE_SUCCEDDED";
export const FETCHING_COURSE_FAILED = "FETCHING_COURSE_FAILED";

export const FETCHING_COURSES = "FETCHING_COURSES";
export const FETCHING_COURSES_SUCCEDDED = "FETCHING_COURSES_SUCCEDDED";
export const FETCHING_COURSES_FAILED = "FETCHING_COURSES_FAILED";

export const FETCHING_POPULAR_COURSES = "FETCHING_POPULAR_COURSES";
export const FETCHING_POPULAR_COURSES_SUCCEDDED =
  "FETCHING_POPULAR_COURSES_SUCCEDDED";
export const FETCHING_POPULAR_COURSES_FAILED =
  "FETCHING_POPULAR_COURSES_FAILED";

export const FETCHING_RECOMMENED_COURSES = "FETCHING_RECOMMENED_COURSES";
export const FETCHING_RECOMMENED_COURSES_SUCCEDDED =
  "FETCHING_RECOMMENED_COURSES_SUCCEDDED";
export const FETCHING_RECOMMENED_COURSES_FAILED =
  "FETCHING_RECOMMENED_COURSES_FAILED";

export const FETCHING_NEW_COURSES = "FETCHING_NEW_COURSES";
export const FETCHING_NEW_COURSES_SUCCEDDED = "FETCHING_NEW_COURSES_SUCCEDDED";
export const FETCHING_NEW_COURSES_FAILED = "FETCHING_NEW_COURSES_FAILED";

export const FETCHING_INTERMEDIATE_COURSES = "FETCHING_INTERMEDIATE_COURSES";
export const FETCHING_INTERMEDIATE_COURSES_SUCCEDDED =
  "FETCHING_INTERMEDIATE_COURSES_SUCCEDDED";
export const FETCHING_INTERMEDIATE_COURSES_FAILED =
  "FETCHING_INTERMEDIATE_COURSES_FAILED";

export const FETCHING_TOP_COURSES = "FETCHING_TOP_COURSES";
export const FETCHING_TOP_COURSES_SUCCEDDED = "FETCHING_TOP_COURSES_SUCCEDDED";
export const FETCHING_TOP_COURSES_FAILED = "FETCHING_TOP_COURSES_FAILED";

export const FETCHING_CREATOR_COURSES = "FETCHING_CREATOR_COURSES";
export const FETCHING_CREATOR_COURSES_SUCCEDDED =
  "FETCHING_CREATOR_COURSES_SUCCEDDED";
export const FETCHING_CREATOR_COURSES_FAILED =
  "FETCHING_CREATOR_COURSES_FAILED";

export const FETCHING_COLLABORATOR_COURSES = "FETCHING_COLLABORATOR_COURSES";
export const FETCHING_COLLABORATOR_COURSES_SUCCEDDED =
  "FETCHING_COLLABORATOR_COURSES_SUCCEDDED";
export const FETCHING_COLLABORATOR_COURSES_FAILED =
  "FETCHING_COLLABORATOR_COURSES_FAILED";

export const FETCHING_USER_COURSES = "FETCHING_USER_COURSES";
export const FETCHING_USER_COURSES_SUCCEDDED =
  "FETCHING_USER_COURSES_SUCCEDDED";
export const FETCHING_USER_COURSES_FAILED = "FETCHING_USER_COURSES_FAILED";

export const CREATING_COURSE = "CREATING_COURSE";
export const CREATING_COURSE_SUCCEDDED = "CREATING_COURSE_SUCCEDDED";
export const CREATING_COURSE_FAILED = "CREATING_COURSE_FAILED";

export const UPDATING_COURSE = "UPDATING_COURSE";
export const UPDATING_COURSE_SUCCEDDED = "UPDATING_COURSE_SUCCEDDED";
export const UPDATING_COURSE_FAILED = "UPDATING_COURSE_FAILED";

export const DELETING_COURSE = "DELETING_COURSE";
export const DELETING_COURSE_SUCCEDDED = "DELETING_COURSE_SUCCEDDED";
export const DELETING_COURSE_FAILED = "DELETING_COURSE_FAILED";

export const RATING_COURSE = "RATING_COURSE";
export const RATING_COURSE_SUCCEDDED = "RATING_COURSE_SUCCEDDED";
export const RATING_COURSE_FAILED = "RATING_COURSE_FAILED";

/**
 * creators actions
 */
export const CREATOR_REGISTRATION_REQUEST = "CREATOR_REGISTRATION_REQUEST";
export const CREATOR_REGISTRATION_SUCCEDDED = "CREATOR_REGISTRATION_SUCCEDDED";
export const CREATOR_REGISTRATION_FAILED = "CREATOR_REGISTRATION_FAILED";

export const FETCHING_USER_CREATOR_PROFILE = "FETCHING_USER_CREATOR_PROFILE";
export const FETCHING_USER_CREATOR_PROFILE_SUCCEDDED =
  "FETCHING_USER_CREATOR_PROFILE_SUCCEDDED";
export const FETCHING_USER_CREATOR_PROFILE_FAILED =
  "FETCHING_USER_CREATOR_PROFILE_FAILED";

// learners actions
export const CREATE_OR_UPDATE_LEARNER = "CREATE_OR_UPDATE_LEARNER";
export const CREATE_OR_UPDATE_LEARNER_SUCCEDDED =
  "CREATE_OR_UPDATE_LEARNER_SUCCEDDED";
export const CREATE_OR_UPDATE_LEARNER_FAILED =
  "CREATE_OR_UPDATE_LEARNER_FAILED";

export const FETCHING_USER_LEARNER_PROFILE = "FETCHING_USER_LEARNER_PROFILE";
export const FETCHING_USER_LEARNER_PROFILE_SUCCEDDED =
  "FETCHING_USER_LEARNER_PROFILE_SUCCEDDED";
export const FETCHING_USER_LEARNER_PROFILE_FAILED =
  "FETCHING_USER_LEARNER_PROFILE_FAILED";