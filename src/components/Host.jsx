import React from "react";

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";
import FilterRecipe from "./SearchRecipe/FilterRecipe";
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
