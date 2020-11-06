import React from "react";

import SearchRecipe from "./SearchRecipe/SearchRecipe";

class Host extends React.Component {
  state = {
    recipeResult: [],
  };

  getRecipeResult = (result) => {
    this.setState({ recipeResult: result });
  };

  render() {
    return (
      <div>
        <SearchRecipe recipeResult={this.getRecipeResult} />
      </div>
    );
  }
}

export default Host;
