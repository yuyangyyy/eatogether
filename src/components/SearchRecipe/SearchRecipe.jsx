import React from "react";

import "./scss/SearchRecipe.scss";

const SearchRecipe = (props) => {
  return (
    <div className="search-recipe-wrapper">
      <h2 className="search-recipe-wrapper-title">Search for a Recipe</h2>

      <div className="search-recipe-blocs">{props.children}</div>
    </div>
  );
};

export default SearchRecipe;
