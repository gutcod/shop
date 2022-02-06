import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  registarionError,
  registarionSuccess,
  signinError,
  signinSuccess,
  signOutError,
  signOutSuccess,
} from "./user.action";

import UserActionType from "./user.types";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinError(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signinError(error.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signinError(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    // if userAut = null return nothing
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signinError(error.message));
  }
}

export function* SignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutError(error.message));
  }
}

export function* Register({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(registarionSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(registarionError(error));
  }
}

export function* signInAfterRegistration({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignIn() {
  yield takeLatest(UserActionType.GOOGLE_SIGNIN_START, signInWithGoogle);
}
export function* onEmailSignIn() {
  yield takeLatest(UserActionType.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGN_OUT_START, SignOut);
}

export function* onRegistrationStart() {
  yield takeLatest(UserActionType.REGISTRATION_START, Register);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionType.REGISTRATION_SUCCESS, signInAfterRegistration);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onRegistrationStart),
    call(onSignUpSuccess),
  ]);
}
