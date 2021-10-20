import constants from "../constants";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case constants.CATEGORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
