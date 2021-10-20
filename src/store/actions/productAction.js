import { apiCall, APIs } from "../../helper/api";
import constants from "../constants";

export const getCategoryProducts = (categoryName) => async (dispatch) => {
  try {
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: [],
    });
    const res = await apiCall(APIs.getCategoryProducts(categoryName));
    dispatch({
      type: constants.GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_ERROR,
      payload: error,
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: constants.GET_PRODUCT,
      payload: {},
    });
    const res = await apiCall(APIs.getProduct(id));
    dispatch({
      type: constants.GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_ERROR,
      payload: error,
    });
  }
};
