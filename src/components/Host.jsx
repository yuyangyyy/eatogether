import React from "react"

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";
import SearchLocalisation from "./SearchLocalisation"
import FilterRecipe from "./FilterRecipe/FilterRecipe";
import RecapResult from "./RecapResult";
import RandomUser from "./Random-user"



class Host extends React.Component {
  state = {
    recipeResult: [],
    selectRecipe: "", 
    dateCity : [],   
  };

  getRecipeResult = (result) => {
    this.setState({ recipeResult: result });
  };

  selectRecipe = (results) => {
    this.setState({
      selectRecipe: results,
    });
  };

  getDateCity = (date) => {
    this.setState({ dateCity : date });
  }

 
  key = "995f2d7e6b424d9790384fc8a1ee0b2f";

  render() {
    console.log(this.state.dateCity)
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
        <SearchLocalisation dateCity={this.getDateCity} >
          {this.state.selectRecipe &&
            <RecapResult selectRecipe={this.state.selectRecipe} dateCity={this.state.dateCity} />
          }
          <RandomUser dateCity={this.state.dateCity} /> 
        </SearchLocalisation>

      </div>
    );
  }
}

export default Host;
