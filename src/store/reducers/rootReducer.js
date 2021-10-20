import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  categoryList: categoryReducer,
  productList: productReducer,
  cart: cartReducer,
});
