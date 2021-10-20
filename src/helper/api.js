import axios from "axios";

const SERVER_URL = "https://fakestoreapi.com/products";

const APIs = {
  getCategories() {
    return {
      url: "/categories",
      method: "get",
    };
  },
  getProduct(id) {
    return {
      url: `/${id}`,
      method: "get",
    };
  },
  getCategoryProducts(categoryName) {
    return {
      url: `/category/${categoryName}`,
      method: "get",
    };
  },
};

const apiCall = (payload) => {
  payload.url = SERVER_URL + payload.url;
  return axios(payload);
};

export { apiCall, APIs };
