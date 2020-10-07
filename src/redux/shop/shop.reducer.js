import { UPDATE_COLLECTION } from "./shop.type";

const { default: SHOP_DATA } = require("./shop.data");

const initialState = {
  collections: SHOP_DATA,
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
