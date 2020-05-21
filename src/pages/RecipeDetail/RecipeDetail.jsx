import React from "react";

const RecipeDetail = (props) => {
  const { recipeId } = props.match.params;
  return (
    <div>
      <h1>Recipe Detail for recipe id: {recipeId}</h1>
    </div>
  );
};

export default RecipeDetail;
