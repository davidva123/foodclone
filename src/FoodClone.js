import React from "react";
import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";
import Navigation from "./components/navbar/NavBar";

function FoodClone() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navigation />
      <Header />
      <RecipeList />
    </div>
  );
}
export default FoodClone;
