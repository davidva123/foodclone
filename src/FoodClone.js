import React, { Component } from "react";
import Navigation from "./components/navbar/Navigation";
import Header from "./components/Header/Header";

import "./design/overall.scss";

function FoodClone() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navigation />
      <Header />
    </div>
  );
}
export default FoodClone;
