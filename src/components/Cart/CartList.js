import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  removeFromCart,
  addToCart,
  placeOrder,
} from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";
import "./../../App.css";

const CartList = ({ carts, total }) => {
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handelAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="cartContainer">
      <div className="cart-list section">
        {carts &&
          carts.map((cart) => {
            return (
              <div className="cartContainer" key={cart.id}>
                <div className="card hoverable">
                  <div className="card z-depth-0 cart-summary">
                    <div className="card-content grey-text text-darken-3">
                      <img
                        src={cart.image}
                        alt={cart.title}
                        width="100"
                        height="100"
                      />
                      <Link to={`/product/${cart.id}`}>
                        <h6>{cart.title}</h6>
                      </Link>
                      <p>${cart.price}</p>
                      <p>QTY : {cart.qty}</p>
                      <p>TOTAL PRICE : ${cart.totalPrice}</p>
                      <Button
                        variant="contained"
                        onClick={() => handleRemoveFromCart(cart)}
                      >
                        -
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handelAddToCart(cart)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {total ? (
          <Button
            variant="contained"
            color="warning"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        ) : (
          <h4>Cart is Empty!</h4>
        )}
      </div>
    </div>
  );
};

export default CartList;
