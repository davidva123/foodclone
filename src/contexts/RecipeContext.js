import React, { createContext, useContext } from "react";
const sampleData = require("./sampleData.json");

export const RecipeContext = createContext(sampleData);

//Provider Component is wrapped round the App in Index
const RecipeProvider = ({ children }) => {
  return (
    <RecipeContext.Provider value={sampleData}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

// useRecipes hook to be used withing a components to access recipes context
export const useRecipes = () => {
  const recipes = useContext(RecipeContext);
  return recipes;
};
