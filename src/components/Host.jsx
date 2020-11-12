import React from "react";

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";
import FilterRecipe from "./FilterRecipe/FilterRecipe";
import Test from "./SearchRecipe/Test";

class Host extends React.Component {
  state = {
    recipeResult: [],
    selectRecipe: "",
  };

  getRecipeResult = (result) => {
    this.setState({ recipeResult: result });
  };

  selectRecipe = (results) => {
    console.log(results);
    this.setState({
      selectRecipe: results ,
    });
  };

  key = "fe2cfff6a33d4ce4bd6cd22cbb8e166a";

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
        <FilterRecipe
          recipeId={this.state.recipeResult}
          selectRecipe={this.selectRecipe}
          keyApi={this.key} 
        />
        < Test  selectRecipe={this.state.selectRecipe}  />

      </div>
    );
  }
}

export default Host;
