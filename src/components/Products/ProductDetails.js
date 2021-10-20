import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import { getProduct } from "../../store/actions/productAction";
import { addToCart } from "../../store/actions/cartAction";

class ProductDetails extends React.Component {
  /**
   * @param {string} str
   */
  convert(str) {
    return str.toUpperCase();
  }

  addToCart = (item) => {
    this.props.dispatch(addToCart(item));
  };

  componentDidMount() {
    this.props.dispatch(getProduct(this.props.match.params.id));
  }

  render() {
    const { product } = this.props;
    return !product ? null : (
      <div className="details">
        <Container maxWidth="sm">
          <div className="detail-img">
            <img alt="product" src={product.image} width="450" height="450" />
          </div>
        </Container>
        <Container maxWidth="sm">
          <div className="product-details">
            <h4>{product.title}</h4>
            <div>
              <span className="rating">
                {product.rating && product.rating.rate}
                <StarIcon />
              </span>
              <span>{product.rating && product.rating.count} rating</span>
            </div>

            <hr></hr>
            <h4>${product.price}</h4>
            <h5>Description About this Product:</h5>
            <p>{product.description}</p>

            <div className="action-btns">
              <Button variant="outlined" endIcon={<FlashOnIcon />}>
                Buy Now
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  this.addToCart(product);
                }}
                endIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const activeProduct = state.productList.product;
  return {
    product: activeProduct,
  };
};

export default compose(connect(mapStateToProps))(ProductDetails);
