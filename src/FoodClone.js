import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";

function FoodClone() {
  return (
    <div className="container-fluid">
      <Navigation />
      <Header />
      <RecipeList />
    </div>
  );
}
export default FoodClone;
