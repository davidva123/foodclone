import React, { createContext, useContext } from "react";

const intialRecipes = { value: "loaded" };
export const RecipeContext = createContext(intialRecipes);

const RecipeProvider = ({ children }) => {
  return (
    <RecipeContext.Provider value={intialRecipes}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

const useRecipes = () => {
  const recipes = useContext(RecipeContext);
  return recipes;
};
