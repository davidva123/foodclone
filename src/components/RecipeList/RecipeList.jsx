import React, { useContext } from "react";
import RecipeListFilter from "../RecipeListFilter/RecipeListFilter";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { RecipeContext } from "../../contexts/RecipeContext";
export const RecipeList = () => {
  const recipes = useContext(RecipeContext);
  return (
    <div className=" recipe-list row justify-content-md-center ">
      <div className="col col-lg-5">
        {/* <RecipeListFilter />  removed due to nonuse */}
       
        <div className=" row  ">
          {/* <RecipeCard starRating={1} />
          <RecipeCard starRating={2} />
          <RecipeCard starRating={3} />
          <RecipeCard starRating={4.5} />

           */}
        {recipes.map(recipe => <RecipeCard recipe={recipe}/>)}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
