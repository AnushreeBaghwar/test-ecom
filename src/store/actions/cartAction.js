import Toast from "../../helper/Toast";
import constants from "../constants";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: constants.ADD_TO_CART,
    payload: product,
  });
  let itemName = product.title.slice(0,20) + '...'
  Toast.success("["+itemName+"] successfully added to cart!");
};
export const removeFromCart = (product) => (dispatch) => {
  dispatch({
    type: constants.REMOVE_FROM_CART,
    payload: product,
  });
  let itemName = product.title.slice(0,20) + '...'
  Toast.warning("["+itemName+"] successfully removed from cart!");
};

export const placeOrder = () => (dispatch)=> {
    dispatch({
        type: constants.PLACE_ORDER,
    });
}