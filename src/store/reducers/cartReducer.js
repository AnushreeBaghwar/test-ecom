import constants from "../constants";
const Swal = require("sweetalert2");

const initialState = {
  items: [],
  total: 0,
  totalPrice: 0,
};

const getTotalItemsOfCart = (items) => {
  let sum = 0;
  items.forEach((item) => {
    sum += item.qty;
  });
  return sum;
};
const getTotalPriceOfCart = (items) => {
  let sum = 0;
  items.forEach((item) => {
    sum += item.qty * item.price;
  });
  return sum;
};

const cartReducer = (state = initialState, action) => {
  let idx, totalItems;
  switch (action.type) {
    case constants.ADD_TO_CART:
      idx = state.items.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) {
        state.items[idx].qty += 1;
        state.items[idx].totalPrice += action.payload.price;
        state.total = getTotalItemsOfCart(state.items);
        state.totalPrice = getTotalPriceOfCart(state.items);
        return {
          ...state,
        };
      } else {
        action.payload.qty = 1;
        action.payload.totalPrice = action.payload.price;
        totalItems = [...state.items, action.payload];
        state.total = getTotalItemsOfCart(totalItems);
        state.totalPrice = getTotalPriceOfCart(totalItems);
      }
      return {
        ...state,
        items: totalItems,
      };
    case constants.REMOVE_FROM_CART:
      idx = state.items.findIndex((item) => item.id === action.payload.id);
      if (state.items[idx].qty > 1) {
        state.items[idx].qty -= 1;
        state.items[idx].totalPrice -= state.items[idx].price;
      } else {
        state.items.splice(idx, 1);
      }
      state.total = getTotalItemsOfCart(state.items);
      state.totalPrice = getTotalPriceOfCart(state.items);
      return {
        ...state,
      };
    case constants.PLACE_ORDER:
      let items = state.items;
      let html = "";
      items.map((item) => {
        html += `[${item.title.slice(0, 15)}...] - (${item.qty}x${
          item.price
        } - $${item.totalPrice}) <br/>`;
      });
      Swal.fire({
        icon: "success",
        title: "Order placed!",
        html,
        footer: "<h5>Order total: $" + state.totalPrice + "</h5>",
      });

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
