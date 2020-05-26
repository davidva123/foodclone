import React, { Component } from "react";
import RecipeListFilter from "../RecipeListFilter/RecipeListFilter";

export const RecipeList = () => {
  return (
    <div className="row justify-content-md-center ">
      <div className="col col-lg-5">
        <RecipeListFilter />
      </div>
    </div>
  );
};

export default RecipeList;
