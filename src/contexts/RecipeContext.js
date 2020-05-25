import React, { createContext, useContext } from "react";

const intialRecipes = { value: "loaded" };
export const RecipeContext = createContext(intialRecipes);

//Provider Component is wrapped round the App in Index
const RecipeProvider = ({ children }) => {
  return (
    <RecipeContext.Provider value={intialRecipes}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

// useRecipes hook to be used withing a components to access recipes context
const useRecipes = () => {
  const recipes = useContext(RecipeContext);
  return recipes;
};
