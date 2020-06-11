import React, { useContext } from "react";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { RecipeContext } from "../../contexts/RecipeContext";
export const RecipeList = () => {
  const recipes = useContext(RecipeContext);
  return (
    <div className=" recipe-list row justify-content-md-center ">
      <div className="col col-lg-5">
        <div className=" row  ">
          {recipes.map((recipe, i) => (
            <RecipeCard key={`RecipeCard-${i}`} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
