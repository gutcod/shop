import { takeEvery } from "redux-saga/effects";

import ShopActionType from "./shop.type";

export function* fetchCollectionsAsync() {
  console.log("blaaa");
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTION_START, fetchCollectionsAsync);
}
