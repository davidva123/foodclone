import React, { Component } from "react";
import Navigation from "./components/Navigation";
import JumboTron from "./components/JumboTron";
import "./design/overall.scss";

class FoodClone extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <JumboTron />
      </div>
    );
  }
}

export default FoodClone;
