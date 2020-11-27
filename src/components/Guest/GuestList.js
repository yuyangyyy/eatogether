import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../App";

import GuestResults from "./GuestResult";
import recipeList from "./RecipeList";

import "./GuestList.css";

function GuestList({ info }) {
  const [recipes, setRecipes] = useState(recipeList);
  const userInfo = useContext(UserContext);

  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (userInfo.result) {
      if (userInfo.result.recipe.recipeName) {
        setBool(!bool);
        recipeList.push({ ...userInfo.result });
        setRecipes(recipeList);
      }
    }
  }, [userInfo]);

  return (
    <div className="recipe-list">
      {recipes
        .filter(
          (recipe) =>
            (!info.meal || recipe.recipe.cuisine.includes(info.meal)) &&
            (!info.city || recipe.user.city.includes(info.city)) &&
            (!info.date ||
              recipe.recipe.date === info.date.toLocaleDateString())
        )
        .map((recipe, index) => (
          <GuestResults info={recipe} key={index} />
        ))}
    </div>
  );
}

export default GuestList;
