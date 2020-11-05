import React from "react";

import SearchRecipeLeft from "./SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipeRight";

import "./scss/SearchRecipe.scss";

const SearchRecipe = (props) => {
  const key = "1e780ebe14ef4d898f45bff9425a3fcb";
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
