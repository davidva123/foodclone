import React from "react";

const RecipeDetail = (props) => {
  const { recipeId } = props.match.params;
  return (
    <div>
      <h1>Recipe Detail for recipe id: {recipeId}</h1>
      <p>
        Elit in non do aliquip ex quis tempor commodo amet aliquip ipsum non
        proident qui. Laboris esse elit reprehenderit quis eiusmod mollit cillum
        minim sit ipsum non. Ex ea mollit velit voluptate eu veniam sint ea in
        labore aliquip dolore.
      </p>
    </div>
  );
};

export default RecipeDetail;
