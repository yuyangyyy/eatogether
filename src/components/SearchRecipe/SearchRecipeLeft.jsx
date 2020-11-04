import React, { useState, useEffect } from "react";
import Axios from "axios";

import { diet, foodType } from "./foodList";

import "./SearchRecipeBlocs.scss";

const SearchRecipeLeft = (props) => {
  const selectInit = [
    {
      name: "foodtype",
      value: "",
      option: foodType,
      label: "style of cuisine",
    },
    {
      name: "diettype",
      value: "",
      option: diet,
      label: "diet type",
    },
  ];

  // STATE //
  const [recipeName, setRecipeName] = useState("");
  const [autoDiv, setAutoDiv] = useState([]);
  const [authorise, setAuthorisation] = useState(false);
  const [selects, setSelects] = useState(selectInit);
  const [errorMessage, setErrorMessage] = useState("");

  // HANDLE INPUT AND AUTOCOMPLETION //
  const inputHandler = (e) => {
    if (recipeName.length > 1) {
      setSelects(selectInit);
    }

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
    setRecipeName(
      e.target.innerText.split("").splice(1, e.target.innerText.length).join("")
    );
    setAutoDiv([]);
  };

  // HANDLE SELECT VALUE //
  const selectHandler = (e) => {
    const tempSelect = [...selects];
    tempSelect[e.target.id].value = e.target.value;
    setSelects(tempSelect);
  };

  // API CALL AND RESET FIELD //

  const searchRecipe = () => {
    const path = `complexSearch?query=${recipeName}&number=5`;
    const url = `https://api.spoonacular.com/recipes/${path}&apiKey=${props.keyApi}`;

    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        const searchRes = [];
        console.log(data);
        props.recipeResult(searchRes);
      });

    setSelects(selectInit);
    setRecipeName("");
    setAuthorisation(false);
    setAutoDiv([]);
  };

  // LITTLE PROTECTION //
  useEffect(() => {
    const noEmptySelect = selects.some((x) => x.value !== "");
    const noMoreThanOneS = selects.every((x) => x.value !== "");
    const onlyOneTest = noEmptySelect && !noMoreThanOneS;
    const regL = /^[a-zA-Z\s]*$/;

    if (noMoreThanOneS || (noEmptySelect && recipeName.length > 0)) {
      setErrorMessage("Use only one filter");
    } else {
      setErrorMessage("");
    }

    if ((recipeName.length > 2 && regL.test(recipeName)) || onlyOneTest) {
      setAuthorisation(true);
    } else {
      setAuthorisation(false);
    }
  });

  return (
    <div className="search-recipe-right-wrapper">
      <h2>Recipe</h2>

      <p>Look for a recipe with many filters </p>
      <p>Select only one kind of filter</p>

      <label forhtml="all-select">• Recipe name:</label>
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

      {selects.map((select, index) => {
        return (
          <div className="inputs-wraper" key={select.name}>
            <label formhtml={`${select.name}-select`}>
              • Choose a {select.label}
            </label>

            <select
              name={select.name}
              id={index}
              value={select.value}
              onChange={selectHandler}
            >
              <option value="">--Please choose an option--</option>

              {select.option.map((type) => {
                return (
                  <option value={type} key={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}

      <p className="errormessage">{errorMessage}</p>

      <input
        className={authorise ? null : "disabled"}
        type="button"
        value="send"
        onClick={searchRecipe}
      />
    </div>
  );
};

export default SearchRecipeLeft;
