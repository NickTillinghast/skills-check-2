import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { products } = this.props;
    // const mappedPorducts = products.map(product => {
    //   return (
    //     <div>
    //       <Product />
    //     </div>)
    // //   );
    // // });
    //   }
    return (
      <div>
        <h1>Dashboard</h1>
        <div>
          <Product />
        </div>
        {/* <div>{mappedPorducts}</div> */}
      </div>
    );
  }
}
