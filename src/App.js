import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/layout/Navbar";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { getCategories } from "./store/actions/categoryAction";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import StreamIcon from "@mui/icons-material/Stream";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }
  render() {
    const { categories } = this.props;
    const navUrls = [];

    const icons = [
      <ElectricalServicesIcon />,
      <StreamIcon />,
      <ShoppingBasketIcon />,
      <ShoppingBasketIcon />,
    ];
    categories.forEach((category, index) => {
      navUrls.push({
        url: `/category/${category}`,
        name: category,
        icon: icons[index],
      });
    });
    const hello = () => <h1>Welcome to Test E-commerce Website</h1>;
    return (
      <BrowserRouter>
        <div className="App">
          <ToastContainer />
          <Navbar title="Test Store" urls={navUrls}>
            <Switch>
              <Route exact path="/" component={hello} />
              <Route path="/category/:name" component={Products} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </Navbar>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const categories = state.categoryList.categories;
  return {
    categories: categories,
  };
};

export default connect(mapStateToProps)(App);
