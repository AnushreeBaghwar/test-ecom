import React, { Component } from "react";
import CartList from "./CartList";
import { connect } from "react-redux";
import { compose } from "redux";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { carts, total, totalPrice } = this.props;

    return (
      <div className="dashboard container">
        <div className="places-grid">
          <div className="row">
            <h4>Total items : {total}</h4>
            <h4>Total Amount : ${totalPrice}</h4>
            <CartList carts={carts} total={total} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const carts = state.cart.items;
  const total = state.cart.total;
  const totalPrice = state.cart.totalPrice;
  return {
    total,
    carts,
    totalPrice,
  };
};

export default compose(connect(mapStateToProps))(Cart);
