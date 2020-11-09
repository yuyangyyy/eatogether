import React from "react";

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";

class Host extends React.Component {
  state = {
    recipeResult: [],
  };

  getRecipeResult = (result) => {
    this.setState({ recipeResult: result });
  };

  key = "1a44f438887545cc993645317074f023";

  render() {
    return (
      <div>
        <SearchRecipe>
          <SearchRecipeLeft
            recipeResult={this.getRecipeResult}
            keyApi={this.key}
          />
          <SearchRecipeRight
            recipeResult={this.getRecipeResult}
            keyApi={this.key}
          />
        </SearchRecipe>
      </div>
    );
  }
}

export default Host;
