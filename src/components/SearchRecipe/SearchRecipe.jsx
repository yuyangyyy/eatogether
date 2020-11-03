import "./SearchRecipe.scss";
import React from "react";
import SearchRecipeLeft from "./SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipeRight";

const SearchRecipe = (props) => {  

  return (
    <div className="search-recipe-wrapper">
      <SearchRecipeLeft />
      <SearchRecipeRight
        recipeResult={props.recipeResult}       
      />
    </div>
  );
};

export default SearchRecipe;
