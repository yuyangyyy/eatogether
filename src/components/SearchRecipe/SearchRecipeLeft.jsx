import React, { useState } from "react";
import Axios from "axios";

import { diet, foodType } from "./foodList";

import "./SearchRecipeBlocs.scss";

const SearchRecipeLeft = (props) => {
  // STATE //
  const [recipeName, setRecipeName] = useState("");
  const [autoDiv, setAutoDiv] = useState([]);

  // HANDLE INPUT AND AUTOCOMPLETION //
  const inputHandler = (e) => {
    const path = `recipes/autocomplete?query=${e.target.value}&number=3&metaInformation=false`;
    const url = `https://api.spoonacular.com/${path}&apiKey=${props.keyApi}`;

    Axios(url)
      .then((res) => res.data)
      .then((data) => {
        setAutoDiv("");
        const result = [];
        if (data) {
          data.map((recipe) => {
            result.push(recipe.title);
          });
        }
        setAutoDiv(result);
      });

    setRecipeName(e.target.value);
  };

  // SEND AUTOCOMPLETION TO INPUTVALUE AND RESET STATE //
  const sendAutoC = (e) => {
    setRecipeName(e.target.innerText
      .split("")
      .splice(1, e.target.innerText.length)
      .join(""))    
    setAutoDiv([]);
  };

  return (
    <div className="search-recipe-right-wrapper">
      <h2>Recipe</h2>

      <p>Look for a recipe with many filters </p>
      <p>Select only one kind of filter</p>

      <label forhtml="all-select">Recipe name:</label>
      <input
        id="all-select"
        type="text"
        placeholder="Put a recipe name"
        value={recipeName}
        onChange={inputHandler}
        autoComplete="off"
      ></input>

      {autoDiv.length > 0 && (
        <div className="input-wraper">
          {autoDiv.map((recipe) => {
            return (
              <p key={recipe} onClick={sendAutoC}>
                • {recipe}
              </p>
            );
          })}
        </div>
      )}

      <p>or</p>

      <label formhtml="foodtype-select">Choose a cuisine type:</label>
      <select name="foodtype" id="foodtype-select">
        <option value="">--Please choose an option--</option>
        {foodType.map((type) => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          );
        })}
      </select>

      <p>or</p>

      <label htmlFor="diet-select">Chose a diet type:</label>
      <select name="diet" id="diet-select">
        <option value="">--Please choose an option--</option>
        {diet.map((type) => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          );
        })}
      </select>

      <input
        // className={authorise ? null : "disabled"}
        type="button"
        value="send"
        // onClick={searchIngcall}
      />
    </div>
  );
};

export default SearchRecipeLeft;
