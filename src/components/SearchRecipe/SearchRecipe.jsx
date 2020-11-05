import React from "react";

import SearchRecipeLeft from "./SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipeRight";

import "./scss/SearchRecipe.scss";

const SearchRecipe = (props) => {
  const key = "622b28d5939e4335a58e9ad6cee79034";

  return (

    <div className="search-recipe-wrapper">

      <h2>Search for a Recipe</h2>

      <div className="search-recipe-blocs">

        <SearchRecipeLeft recipeResult={props.recipeResult} keyApi={key} />
        <SearchRecipeRight recipeResult={props.recipeResult} keyApi={key} />

      </div>

    </div>

  );
  
};

export default SearchRecipe;
