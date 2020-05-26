import React, { Component, useState } from 'react';

const RecipeListFilter = () => {
    const [recipeList,setRecipeList] = useState('General');
    return ( 
        <select>
            <option>{recipeList}</option>
        </select>
     );
}
 
export default RecipeListFilter;