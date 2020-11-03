import "./SearchRecipeRight.scss";
import React, { useState } from "react";
import Axios from "axios";

const SearchRecipeRight = (props) => {
  const [inputsValue, setInputsValue] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
  ]);
  const [authorise, setAuthorisation] = useState(false);

  const inputHandler = (e) => {
    const tempState = [...inputsValue];
    tempState[e.target.id].value = e.target.value;

    const regL = /^[a-zA-Z\s]*$/;
    const testIn = tempState.every((ing) => {
      return regL.test(ing.value);
    });

    setInputsValue(tempState);
    if (inputsValue[0].value.length > 2 && testIn) {
      setAuthorisation(true);
    } else {
      setAuthorisation(false);
    }
  };

  const apiCall = () => {
    const ingredients = [...inputsValue];
    const key = "d9cb3dbac9f6460d84cc266e0ac2105d";
    const path = `findByIngredients?ingredients=${ingredients[0].value}${
      ingredients[1].value !== "" ? ",+" + ingredients[1].value : ""
    }${
      ingredients[2].value !== "" ? ",+" + ingredients[2].value : ""
    }&number=5&addRecipeInformation=true`;
    const url = `https://api.spoonacular.com/recipes/${path}&apiKey=${key}`;

    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        const searchRes = [];
        data.map((recipe) => searchRes.push(recipe.id));
        props.recipeResult(searchRes);
      });
    setInputsValue([{ value: "" }, { value: "" }, { value: "" }]);
  };

  return (
    <div className="search-recipe-right-wrapper">
      <h2>In my fridge ...</h2>
      {inputsValue.map((input, index) => {
        return (
          <input
            type="text"
            id={index}
            placeholder={"Ingredients " + (index + 1)}
            value={input.value}
            onChange={inputHandler}
            key={index}
          />
        );
      })}
      <input
        className={authorise ? null : "disabled"}
        type="button"
        value="send"
        onClick={apiCall}
      />
    </div>
  );
};

export default SearchRecipeRight;
