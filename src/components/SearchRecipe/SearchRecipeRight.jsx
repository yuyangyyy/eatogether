import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./scss/SearchRecipeBlocs.scss";

const SearchRecipeRight = (props) => {
  // STATE //
  const [inputsValue, setInputsValue] = useState({
    ing0: "",
    ing1: "",
    ing2: "",
  });
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

    setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
  };

  // API CALL AND LIFT RESULT TO PARENT //
  const searchIngcall = () => {
    const path = `findByIngredients?ingredients=${inputsValue.ing0}${
      inputsValue.ing1 !== "" ? ",+" + inputsValue.ing1 : ""
    }${
      inputsValue.ing2 !== "" ? ",+" + inputsValue.ing2 : ""
    }&number=6&addRecipeInformation=true`;
    const url = `https://api.spoonacular.com/recipes/${path}&apiKey=${props.keyApi}`;

    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        const searchRes = [];
        data.map((recipe) => searchRes.push(recipe.id));
        props.recipeResult(searchRes);
      });

    setInputsValue({
      ing0: "",
      ing1: "",
      ing2: "",
    });
    setAuthorisation(false);
    setAutoDiv(["", "", ""]);
  };

  // SEND AUTOCOMPLETION TO INPUTVALUE AND RESET STATE //
  const sendAutoC = (e) => {
    const autoValue = e.target.innerText
      .split("")
      .splice(1, e.target.innerText.length)
      .join("");
    setInputsValue({ ...inputsValue, ["ing" + [e.target.id]]: autoValue });

    const tempAutoDiv = [...autoDiv];
    tempAutoDiv[e.target.id] = "";
    setAutoDiv(tempAutoDiv);
  };

  // LITTLE PROTECTION //
  useEffect(() => {
    const regL = /^[a-zA-Z\s]*$/;
    const testIn = Object.values(inputsValue).every((ing) => {
      return regL.test(ing.value);
    });
    if (inputsValue.ing0.length > 2 && testIn) {
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

      <div className="input-container">
        {Object.keys(inputsValue).map((input, index) => {
          return (
            <div className="inputs-wraper" key={index}>
              <input
                type="text"
                id={index}
                name={"ing" + index}
                placeholder={"Ingredients " + (index + 1)}
                value={inputsValue["ing" + index]}
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
      </div>

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
