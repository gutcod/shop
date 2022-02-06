import { all, call, put, takeLatest } from "redux-saga/effects";
import UserActionType from "../user/user.types";
import { clearCart } from "./cart.action";

export function* cartClearOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, cartClearOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
