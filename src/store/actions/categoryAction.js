import constants from "../constants";
import { apiCall, APIs } from "../../helper/api";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.GET_CATEGORIES,
      payload: [],
    })
    const res = await apiCall(APIs.getCategories());
    dispatch({
      type: constants.GET_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: constants.CATEGORIES_ERROR,
      payload: error,
    });
  }
};
