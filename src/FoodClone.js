import React, { Component } from "react";
import Navigation from "./components/Navigation";
import JumboTron from "./components/JumboTron/JumboTron";

import "./design/overall.scss";

function FoodClone() {
  return (
    <div className="container-fluid">
      <Navigation />
      <JumboTron />
    </div>
  );
}
export default FoodClone;
