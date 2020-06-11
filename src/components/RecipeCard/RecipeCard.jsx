import React from "react";
import StarRating from "../StarRating/StarRating";
import CookTime from "../CookTime/CookTime";
import "./RecipeCard.scss";
import {TrimText} from '../../utils/TextHelpers';
export const RecipeCard = (props) => {
  const { name, n_step, minutes, contributor_name, description } = props.recipe;
  const recipecardteststyles = {
    'border':'1px solid red'
  }
  
  return (

    <div className="RecipeCard col-md-4" style={recipecardteststyles}>
      <h1>{name}</h1>
      <span>By: {contributor_name}</span>
      <p>
        {TrimText(description,100)}
        </p>
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
