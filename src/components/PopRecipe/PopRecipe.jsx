import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { UserContext } from "../../App";

import "./PopRecipe.scss";

const PopRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    name: "",
    img: "",
    steps: [],
  });
  const navHeight = useContext(UserContext);
  const id = props.popId;

  useEffect(() => {
    const key = props.keyApi;
    const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${key}`;
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        if (data.analyzedInstructions[0]) {
          setRecipe({
            name: data.title,
            img: data.image,
            steps: data.analyzedInstructions[0].steps,
          });
        }
      });
  }, []);

  return (
    <div
      className="pop-recipe-wrapper"
      onClick={() => props.closeRecipe()}
      style={{
        top: `${window.scrollY + "px"}`,
        height: `${window.innerHeight - navHeight.navHeight + "px"}`,
      }}
    >
      <div className="pop-recipe-container">
        <input
          type="button"
          value="close"
          onClick={() => props.closeRecipe()}
        />

        <img src={recipe.img} alt={recipe.name} />

        <h2>{recipe.name}</h2>

        <div className="steps">
          {recipe.steps.map((step, index) => {
            return (
              <div className="step" key={step.number}>
                <h3>Step {step.number}</h3>
                <p>{step.step}</p>
                <h4>Ingredients :</h4>
                <p>
                  {step.ingredients.map((ing) => {
                    const liste = [];
                    return [...liste, " " + ing.name.toUpperCase()];
                  })}
                </p>
                {index !== recipe.steps.length - 1 && <hr></hr>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopRecipe;
