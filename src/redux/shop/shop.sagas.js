import { put, call, takeLatest } from "redux-saga/effects";
import { convertCollectionSnapShotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";
import ShopActionTypes from "./shop.type";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    console.log(snapshot);
    const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollections);
}
