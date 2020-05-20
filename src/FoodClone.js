import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";

import "./design/overall.scss";

function FoodClone() {
  return (
    <div className="container-fluid">
      <Navigation />
      <Header />
    </div>
  );
}
export default FoodClone;
