import React from "react";

import SearchRecipeLeft from "./SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipeRight";

import "./SearchRecipe.scss";

const SearchRecipe = (props) => {
  const key = "09f27a029fc24e95b119d240ae00475a";
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
