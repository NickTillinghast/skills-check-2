import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    const { products } = this.props;
    const mappedPorducts = products.map((product, i) => {
      return (
        <div>
          <Product />
        </div>
      );
    });
    return (
      <div>
        <h1>Dashboard</h1>
        <div>{mappedPorducts}</div>
      </div>
    );
  }
}
