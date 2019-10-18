// import axios from "axios";
import "./App.css";
import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ["shoes", 1000, "url"]
    };
  }

  render() {
    return (
      <div className="App">
        <Dashboard key="inventory" products />
        <Header />
        <Form />
      </div>
    );
  }
}
export default App;
