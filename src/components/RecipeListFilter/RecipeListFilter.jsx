import React, { Component, useState } from "react";

const RecipeListFilter = () => {
  
  const recipeListItems = ["A", "B", "C", "D"];
  return (
    <select>
      {recipeListItems.map((listItem) => (
        <option value={listItem}>{listItem}</option>
      ))}
    </select>
  );
};

export default RecipeListFilter;


