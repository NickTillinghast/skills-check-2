import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "hello ",
      price: 0,
      url: "picture here",
      product: "name here"
    };
    this.inputProduct = this.inputProduct.bind(this);
    this.inputPrice = this.inputPrice.bind(this);
    this.inputUrl = this.inputUrl.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }
  inputProduct(e) {
    this.setState({ product_name: e.target.value });
  }
  inputPrice(e) {
    this.setState({ price: e.target.value });
  }
  inputUrl(e) {
    this.setState({ url: e.target.value });
  }
  removeButton(e) {
    this.setState({ input: e.target.value });
  }
  addInput() {
    this.setState({
      product_name: ""
    });
  }

  render() {
    const { price, url } = this.state;

    return (
      <div className="form-input">
        <div className="input-box">
          Form
          <img className="url-link" src={this.state.value} alt="product" />
          <input
            className="url"
            value={this.state.url}
            onChange={this.inputUrl}
          />
          <label>url</label>
          <input onChange={this.inputProduct} value={this.state.product_name} />
          <label>Product Name</label>
          <input
            className="price"
            onChange={this.inputPrice}
            value={this.state.price}
          />
          <label>Price</label>
          <button onClick={this.addInput} value={this.state.product_name}>
            Add
          </button>
          <button onClick={e => this.removeButton({ input: "" })}>
            Cancel
          </button>
        </div>
        {url}-{price}
      </div>
    );
  }
}
