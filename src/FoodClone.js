import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";
import StarRating from "./components/StarRating/StarRating";

function FoodClone() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navigation />
      <Header />
      <StarRating rating={4} />
    </div>
  );
}
export default FoodClone;
