import React, { useContext } from "react";

import { UserContext } from "../../App";

import "./scss/SearchRecipe.scss";

const SearchRecipe = (props) => {
  const userInfo = useContext(UserContext);

  return (
    <div className="search-recipe-wrapper">
      <h2 className="search-recipe-wrapper-title">
        Search for a Recipe {userInfo.userName.firstName}
      </h2>

      <div className="search-recipe-blocs">{props.children}</div>
    </div>
  );
};

export default SearchRecipe;
