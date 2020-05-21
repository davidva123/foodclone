import React from "react";

// This page should hold the details of an individual recipe. The recipe id grabbed from the url byt the router and passed in via props

const RecipeDetail = (props) => {
  const { recipeId } = props.match.params;
  return (
    <div>
      <h1>Recipe Detail for recipe id: {recipeId}</h1>
    </div>
  );
};

export default RecipeDetail;
