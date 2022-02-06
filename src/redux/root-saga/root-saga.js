import { all, call } from "redux-saga/effects";
import { cartSaga } from "../cart/cart.saga";
import { shopSaga } from "../shop/shop.sagas";
import { userSaga } from "../user/user.saga";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
