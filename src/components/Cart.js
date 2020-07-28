import React, { Component } from "react";
//Json data of products
import { ecommerceitems } from "../data";
import CartItem from "./CartItem";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      counter: 0,
    };
  }
  componentDidMount() {
    let tempProducts = [];
    ecommerceitems.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(
      () => {
        return {
          products: tempProducts,
        };
      },
      () => this.addTotals()
    );
  }

  increment = (id) => {
    let tempProducts = [...this.state.products];
    const selectedProduct = tempProducts.find((item) => item.id === id);
    const index = tempProducts.indexOf(selectedProduct);
    const product = tempProducts[index];
    product.count = product.count + 1;

    this.setState(
      () => {
        return { products: [...tempProducts] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let deletedItem = tempProducts.find((item) => item.id === id);
    const index = tempProducts.indexOf(deletedItem);
    let removedProduct = tempProducts[index];
    removedProduct.count = 0;
    tempProducts = tempProducts.filter((item) => item.id !== id);

    this.setState(
      () => {
        return {
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let Total = 0;
    this.state.products.map((item) => (Total += item.count));
    this.setState(() => {
      return {
        counter: Total,
      };
    });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
          <h2>Counter</h2>
          <div className="ml-auto px-3">
            <i className="fa" style={{ fontSize: "30px" }}>
              &#xf07a;
            </i>
            <span className="badge badge-warning cartCount">
              {" "}
              {this.state.counter}{" "}
            </span>
          </div>
        </nav>
        <div className="p-3">
          {this.state.products.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              count={item.count}
              deleteitem={this.removeItem}
              increment={this.increment}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Cart;
