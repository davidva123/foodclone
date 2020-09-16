import React from "react";
import StarRating from "../StarRating/StarRating";
import CookTime from "../CookTime/CookTime";
import "./RecipeCard.scss";
import { Link } from "react-router-dom";
import { TrimText } from "../../utils/TextHelpers";
export const RecipeCard = (props) => {
  const {
    name,
    n_step,
    minutes,
    contributor_name,
    description,
    id,
  } = props.recipe;

  const recipecardteststyles = {
    // border: "1px solid red",
  };

  return (
    <div className="RecipeCard col-md-4" style={recipecardteststyles}>
      <Link to={`/recipes/${id}`}>
        <img
          className="
          RecipeCard-image"
          
          src={`https://source.unsplash.com/random/232x180/?cats,dogs`}
          alt="temp"
        />
        <h1>{name}</h1>
        <span className="RecipeCard-by">By: {contributor_name}</span>
        {/* <p className="RecipeCard-blurb">{TrimText(description, 100)}</p> */}
        <div className="row">
          <div className="col-lg-9">
            <StarRating rating={3} likes={3411} />
          </div>
          <div className="col-lg-3">
             <CookTime className="RecipeCard-cooktime" cookTime={12} />
          </div>
        </div>
      </Link>
    </div>
  );
};
