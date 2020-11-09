import { convertCollectionSnapShotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.type";

// nu avem nevoie de payload deoarece unica ce face schimba valoare boleana la isFetching
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSucces = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCES,
  payload: collectionsMap,
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapShotToMap(snapshot);
        dispatch(fetchCollectionSucces(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
