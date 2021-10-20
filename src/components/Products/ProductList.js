import React from "react";
import ProductSummary from "./ProductSummary";

const ProductList = ({ products }) => {
  return (
    <div className="product-list section">
      {products &&
        products.map((product) => {
          return (
            <div className="col s12 m4" key={product.id}>
              <div className="card hoverable">
                <ProductSummary product={product} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
