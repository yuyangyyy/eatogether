import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./SearchRecipeBlocs.scss";

const SearchRecipeRight = (props) => {
  // STATE //
  const [inputsValue, setInputsValue] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
  ]);
  const [authorise, setAuthorisation] = useState(false);
  const [autoDiv, setAutoDiv] = useState(["", "", ""]);


  // HANDLE INPUT AND AUTOCOMPLETION //
  const inputHandler = (e) => {
    const path = `food/ingredients/autocomplete?query=${e.target.value}&number=1&metaInformation=false`;
    const url = `https://api.spoonacular.com/${path}&apiKey=${props.keyApi}`;
   
    Axios(url)
      .then((res) => res.data)
      .then((data) => {
        setAutoDiv(["", "", ""]);
        if (data[0]) {
          const tempDivarr = [...autoDiv];
          tempDivarr[e.target.id] = data[0].name;
          setAutoDiv(tempDivarr);
        }
      });

    const tempState = [...inputsValue];
    tempState[e.target.id].value = e.target.value;
    setInputsValue(tempState);
  };

  // API CALL AND LIFT RESULT TO PARENT //
  const searchIngcall = () => {
    const ingredients = [...inputsValue];
    const path = `findByIngredients?ingredients=${ingredients[0].value}${
      ingredients[1].value !== "" ? ",+" + ingredients[1].value : ""
    }${
      ingredients[2].value !== "" ? ",+" + ingredients[2].value : ""
    }&number=5&addRecipeInformation=true`;
    const url = `https://api.spoonacular.com/recipes/${path}&apiKey=${props.keyApi}`;

    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        const searchRes = [];
        data.map((recipe) => searchRes.push(recipe.id));
        props.recipeResult(searchRes);
      });

    setInputsValue([{ value: "" }, { value: "" }, { value: "" }]);
    setAuthorisation(false);
    setAutoDiv(["", "", ""]);
  };

  // SEND AUTOCOMPLETION TO INPUTVALUE AND RESET STATE //
  const sendAutoC = (e) => {
    const tempAutoValue = [...inputsValue];    
    tempAutoValue[e.target.id].value = e.target.innerText.split('').splice(1,e.target.innerText.length).join('');
    setInputsValue(tempAutoValue);
    const tempAutoDiv = [...autoDiv];
    tempAutoDiv[e.target.id] = "";
    setAutoDiv(tempAutoDiv);
  };

  // LITTLE PROTECTION //
  useEffect(() => {
    const regL = /^[a-zA-Z\s]*$/;
    const testIn = inputsValue.every((ing) => {
      return regL.test(ing.value);
    });
    if (inputsValue[0].value.length > 2 && testIn) {
      setAuthorisation(true);
    } else {
      setAuthorisation(false);
    }
  });

  return (
    <div className="search-recipe-right-wrapper">
      <h2>In my fridge ...</h2>

      <p>Look for a recipe with some ingredients you got. </p>
      <p>Put at least one ingredient</p>
      
      {inputsValue.map((input, index) => {
        return (
          <div className="inputs-wraper" key={index}>
            <input
              type="text"
              id={index}
              placeholder={"Ingredients " + (index + 1)}
              value={input.value}
              onChange={inputHandler}
              autoComplete="off"
            />

            {autoDiv[index] !== "" && (
              <p id={index} onClick={sendAutoC}>
                • {autoDiv[index]}
              </p>
            )}
          </div>
        );
      })}

      <input
        className={authorise ? null : "disabled"}
        type="button"
        value="send"
        onClick={searchIngcall}
      />
    </div>
  );
};

export default SearchRecipeRight;
