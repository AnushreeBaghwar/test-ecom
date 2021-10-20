import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./../../App.css";

class ProductSummary extends React.Component {
  handelAddToCart = (e, item) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.props.dispatch(addToCart(item));
  };
  render() {
    let { product } = this.props;
    return (
      <div className="card z-depth-0 product-summary">
        <div className="card-content grey-text text-darken-3">
          <Link sx={{ color: "black" }} to={`/product/${product.id}`}>
            <img
              src={product.image}
              width="250"
              height="250"
              alt={product.title}
              className="cover"
            />
            <h6>{product.title}</h6>
            <p>${product.price}</p>
          </Link>
          <div className="action-btns">
            <Button
              onClick={(e) => {
                this.handelAddToCart(e, product);
              }}
              variant="outlined"
            >
              Add to cart
            </Button>
            <Link to={"/product/" + product.id} underline="none">
              <Button variant="outlined">Details</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ProductSummary);
