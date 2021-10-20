import constants from "../constants";

const initialState = {
  products: [],
  product: {},
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case constants.GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case constants.PRODUCT_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
