import React from "react";

import SearchRecipeLeft from "./SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipeRight";

import "./scss/SearchRecipe.scss";

const SearchRecipe = (props) => {
  const key = "1734d5ded2604d979f0886c3d7182230";

  return (
    <div className="search-recipe-wrapper">
      <h2 className="search-recipe-wrapper-title">Search for a Recipe</h2>

      <div className="search-recipe-blocs">
        <SearchRecipeLeft recipeResult={props.recipeResult} keyApi={key} />
        <SearchRecipeRight recipeResult={props.recipeResult} keyApi={key} />
      </div>
    </div>
  );
};

export default SearchRecipe;
