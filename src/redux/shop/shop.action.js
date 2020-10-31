import { UPDATE_COLLECTION } from "./shop.type";

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTION,
  payload: collectionsMap,
});
