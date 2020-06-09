import React from "react";
import StarRating from "../StarRating/StarRating";
import CookTime from "../CookTime/CookTime";
import "./RecipeCard.scss";

export const RecipeCard = (props) => {
  const { name, n_step, minutes, contributor_name, description } = props.recipe;

  return (
    <div className="RecipeCard col-md-4">
      <h1>{name}</h1>
      <span>By: {contributor_name}</span>
      <p>{description.length > 50 ? description.slice(1,100) + '...' : description}</p>
      <div className="row">
        <div className="col-lg-2">
          <StarRating rating={3} />
        </div>
        <div className="col-lg-2">
          Time: <CookTime cookTime={12} />
        </div>
      </div>
    </div>
  );
};
