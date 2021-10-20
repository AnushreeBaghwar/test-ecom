import React, { Component } from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCategoryProducts } from "../../store/actions/productAction";
import equal from "fast-deep-equal";
import "./../../App.css";
class Products extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.dispatch(getCategoryProducts(this.props.match.params.name));
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.match.params.name, prevProps.match.params.name)) {
      this.props.dispatch(getCategoryProducts(this.props.match.params.name));
    }
  }
  render() {
    const { products } = this.props;

    return (
      <div className="products-list">
        <div className="dashboard container">
          <div className="places-grid">
            <div className="row">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const products = state.productList.products;
  return {
    products: products,
  };
};

export default compose(connect(mapStateToProps))(Products);
