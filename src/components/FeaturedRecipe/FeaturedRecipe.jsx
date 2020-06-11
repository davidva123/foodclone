import React from "react";
import "./FeaturedRecipe.scss";

export const FeaturedRecipe = ({ recipe }) => {
  return (
    <div className="FeaturedRecipe col-12 col-md-9 col-lg-5">
      <div className="card">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/120x100"
          alt="Card image cap"
        />
        <div className="card-body">
          <h2 className="card-title">
            Lorem ipsum dolor sit amet consectetur..
          </h2>
          <p className="card-text">Some.</p>
        </div>
      </div>
    </div>
  );
};
