import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";
import StarRating from "./components/StarRating/StarRating";
import RecipeList from "./components/RecipeList/RecipeList";

function FoodClone() {
  return (
    <div className="container-fluid">
      <Navigation />
      <Header />
      <RecipeList />
      <StarRating rating={4} />
    </div>
  );
}
export default FoodClone;
