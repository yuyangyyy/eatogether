import React from "react";
import axios from "axios";
import MediaQuery from "react-responsive";

import PopRecipe from "../PopRecipe/PopRecipe";
import Carroussel from "../Carroussel/Caroussel";

import style from './FilterRecipe.module.css';

class FilterRecipe extends React.Component {
  state = {
    food: [],
    popDisplay: false,
    idRecipe: "",
    foodRequest: 6,
  };

  componentDidMount = () => {
    this.getRecipe();
  };

  getRecipe = () => {
    const random = `random?&number=${this.state.foodRequest}`;
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
    this.props.recipeId.map((recette) => {
      const url = `https://api.spoonacular.com/recipes/${recette}/information?apiKey=${this.props.keyApi}`;
      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => {
          const newArray = {
            image: data.image,
            name: data.title,
            resume: data.summary,
            source: data.sourceUrl,
            idRecipe: data.id,
            cuisine: data.cuisines,
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
    this.setState({ popDisplay: !this.state.popDisplay });
    this.setState({ idRecipe: e.target.id });
  };

  closeRecipe = () => {
    this.setState({ popDisplay: false });
  };

  chooseRecipe = (event) => {
    // create a new array with all objects
    const result = this.state.food;
    // reset all style to false
    result.map((x) => {
      x.style = false;
      x.seeRecipe = false;
    });
    // change the style to the target
    result[event.target.id].style = !result[event.target.id].style;

    // change the state with the new array wich contain the update style
    this.setState({
      food: result,
    });
    // fetch the select objects to its parents
    this.props.selectRecipe(result[event.target.id]);
  };

  rCard = React.createRef();

  render() {
    return (
      <div className={style.suggestion}>
        <div className={style.frecipewrapper}>
          {this.state.popDisplay && (
            <PopRecipe
              popId={this.state.idRecipe}
              keyApi={this.props.keyApi}
              closeRecipe={this.closeRecipe}
            />
          )}
          <h2 className={style.suggetionTitle}>
            {this.props.recipeId.length > 0
              ? "Search Results"
              : "Popular Recipes"}
          </h2>
          <div className={style.card}>
            <MediaQuery minWidth={640}>
              {this.state.food.map((foods, index) => (
                <div
                  key={foods.image}
                  className={
                    foods.style ? style.cardResultOn : style.cardResult
                  }
                  ref={this.rCard}
                >
                  <img src={foods.image} alt={foods.name} />
                  <h2 className="cardTitle">{foods.name}</h2>
                  <div className={style.button}>
                    <button onClick={this.showRecipe} id={foods.idRecipe}>
                      {" "}
                      See recipe{" "}
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
                      Choose recipe{" "}
                    </button>
                  </div>
                </div>
              ))}
            </MediaQuery>

            <MediaQuery maxWidth={640}>
              <Carroussel>
                {this.state.food.map((foods, index) => (
                  <div
                    key={foods.image}
                    className={
                      foods.style ? style.cardResultOn : style.cardResult
                    }
                    ref={this.rCard}
                  >
                    <img src={foods.image} alt={foods.name} />
                    <h2 className="cardTitle">{foods.name}</h2>
                    <div className={style.button}>
                      <button onClick={this.showRecipe} id={foods.idRecipe}>
                        {" "}
                        See recipe{" "}
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
                        Choose recipe{" "}
                      </button>
                    </div>
                  </div>
                ))}
              </Carroussel>
            </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterRecipe;
