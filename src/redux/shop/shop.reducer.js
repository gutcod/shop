import { UPDATE_COLLECTION } from "./shop.type";

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
