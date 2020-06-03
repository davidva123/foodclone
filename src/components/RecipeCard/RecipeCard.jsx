import React from "react";
import StarRating from "../StarRating/StarRating";
import CookTime from "../CookTime/CookTime";
import "./RecipeCard.scss";

export const RecipeCard = () => {
  return (
    <div className="RecipeCard col-md-4">
      <h1>Title Goes here1</h1>
      <span>By: Variable</span>
      <p>Blurb goes here</p>
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
