import React from "react";
import StarRating from "../StarRating/StarRating";
import CookTime from "../CookTime/CookTime";
import "./RecipeCard.scss";

export const RecipeCard = (props) => {
console.log('Recipe >>',props.recipe);
const {name,n_step, minutes} = props.recipe;

  return (
    <div className="RecipeCard col-md-4">
      <h1>{name}</h1>
      <span>By: Variable</span>
      <p>Blurb goes here</p>
      <div className="row">
        <span className="col-lg-2">
          <StarRating rating={3} />
        </span>
        <span className="col-lg-2">
          <p>
            Time: <CookTime cookTime={minutes} />
          </p>
        </span>
      </div>
    </div>
  );
};
