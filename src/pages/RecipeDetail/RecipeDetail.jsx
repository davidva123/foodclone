import React, { useContext } from "react";

// This page should hold the details of an individual recipe. The recipe id grabbed from the url byt the router and passed in via props

const RecipeBody = (recipe) => {
  console.log("Pickle");
};

const RecipeDetail = (props) => {
  const { recipeId } = props.match.params;
  let selectedItem;
  let output;
  return (
    <div>
      <h2>Recipe Detail for recipe id: {recipeId}</h2>
      <br />
      {props.recipe.map((recipe) => {
        if (recipe.id === recipeId) {
          return (
            <React.Fragment key={recipe.id}>
              <h1>{recipe.name}</h1>
              <p>Number of Steps: {recipe.n_steps}</p>
              <p>Contributor: {recipe.contributor_name}</p>
              <ul>
                Ingredients:
                {recipe.ingredients
                  ? recipe.ingredients.replaceAll("'","")
                  .replaceAll("[","")
                  .replaceAll("]","")
                      .split(",")
                      .map((ingredients) => (
                        <li key={recipe.id + Math.random()}> {ingredients} </li>
                      ))
                  : ""}
              </ul>
              <ul>
                Steps:
                {recipe.steps
                  ? recipe.steps
                  .replaceAll("'","")
                  .replaceAll("[","")
                  .replaceAll("]","")
                      .split(",")
                      .map((steps) => (
                        <li key={recipe.id + Math.random()}> {steps} </li>
                      ))
                  : ""}
              </ul>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default RecipeDetail;
