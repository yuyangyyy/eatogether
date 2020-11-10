import React from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import style from "./FilterRecipe.module.css";

class FilterRecipe extends React.Component {
  state = {
    food: [],
  };

  componentDidMount = () => {
    this.getRecipe();
  };

  getRecipe = () => {
    const random = "random?&number=5";
    const url = `https://api.spoonacular.com/recipes/${random}&apiKey=${this.props.keyApi}`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        // Fetch the 3 recipes from the API
        data.recipes.map((recipe) => {
          // create an object which store the info
          const newRecipe = {
            image: recipe.image,
            name: recipe.title,
            resume: recipe.summary,
            source: recipe.sourceUrl,
            idRecipe: recipe.id,
            seeRecipe: false,
            style: false,
          };
          // create a nex array where we put our new result and no erase the previous results

          const newArray = [...this.state.food, newRecipe];
          this.setState({
            food: newArray,
          });
        });
      });
  };

  componentDidUpdate = (prevprops) => {
    if (prevprops.recipeId !== this.props.recipeId) {
      this.setState({ food: [] });
      this.getNewRecipe();
    }
  };

  getNewRecipe = () => {
    console.log(this.props);
    this.props.recipeId.map((recette) => {
      const url = `https://api.spoonacular.com/recipes/${recette}/information?apiKey=${this.props.keyApi}`;
      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          const newArray = {
            image: data.image,
            name: data.title,
            resume: data.summary,
            source: data.sourceUrl,
            idRecipe: data.id,
            seeRecipe: false,
            style: false,
          };
          this.setState({
            food: [...this.state.food, newArray],
          });
        });
    });
  };

  showRecipe = (e) => {
    // create a new array
    const newArray = this.state.food;
    // change value of the booleen when click on button which are target by the e.target.id
    if (!newArray[e.target.id].style) {
      newArray[e.target.id].seeRecipe = !newArray[e.target.id].seeRecipe;
      this.setState({ food: newArray });
    }
  };

  chooseRecipe = (event) => {
    // create a new array with all objects
    const result = this.state.food;
    // reset all style to false
    result.map((x) => (x.style = false));
    result.map((x) => (x.seeRecipe = false)); // commment faire cela en une fois ?
    // change the style to the target
    result[event.target.id].style = !result[event.target.id].style;

    // change the state with the new array wich contain the update style
    this.setState({
      food: result,
    });
    // fetch the select objects to its parents
    this.props.selectRecipe(result[event.target.id]);
  };

  render() {
    return (
      <div className={style.card}>
        {this.state.food.map((foods, index) => (
          <div
            key={foods.image}
            className={foods.style ? style.cardResultOn : style.cardResult}
          >
            <h2>{foods.name}</h2>
            <img src={foods.image} alt={foods.name} />
            <div className={style.button}>
              <button onClick={this.showRecipe} id={index}>
                {" "}
                See this recipe{" "}
              </button>
              {
                // I want to see the recipe only when I click on the button See the recipes
              }
              <button
                onClick={this.chooseRecipe}
                id={index}
                value={this.state.food}
              >
                {" "}
                Choose this recipe{" "}
              </button>
            </div>
            {foods.seeRecipe && (
              <div>
                <a
                  href={foods.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{ReactHtmlParser(foods.resume)}</p>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default FilterRecipe;
