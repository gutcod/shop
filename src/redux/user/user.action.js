import UserActionType from "./user.types";

export const googleSigninStart = () => ({
  type: UserActionType.GOOGLE_SIGNIN_START,
});

export const signinSuccess = user => ({
  type: UserActionType.SIGNIN_SUCCESS,
  payload: user,
});

export const signinError = error => ({
  type: UserActionType.SIGNIN_ERROR,
  payload: error,
});

export const emailSigninStart = data => ({
  type: UserActionType.EMAIL_SIGNIN_START,
  payload: data,
});

export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION,
});

// SIGN_OUT
export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS,
});

export const signOutError = error => ({
  type: UserActionType.SIGN_OUT_ERROR,
  payload: error,
});

//REGISTRATION
export const registarionStart = userCredentials => ({
  type: UserActionType.REGISTRATION_START,
  payload: userCredentials,
});

export const registarionSuccess = (user, additionalData) => ({
  type: UserActionType.REGISTRATION_SUCCESS,
  payload: { user, additionalData },
});

export const registarionError = error => ({
  type: UserActionType.REGISTRATION_ERROR,
  paylaod: error,
});
