import React, { useState, useContext, useEffect } from "react";
import { UserContext } from '../../App';

import GuestResults from "./GuestResult";

import "./GuestList.css";

import recipeList from "./RecipeList";

function GuestList({ info }) {
  const [recipes, setRecipes] = useState(recipeList);
  const userInfo = useContext(UserContext);

  const [bool, setBool] = useState(false)

  useEffect(() => {
    console.log(userInfo)
    if (userInfo.result) {
      if (userInfo.result.recipe.recipeName ) {
        setBool(!bool)
        recipeList.push({ ...userInfo.result })
        setRecipes(recipeList)
      }
    }

  }, [userInfo]);

  console.log(recipes)

  return (
    <div className="recipe-list">
      {recipes
        .filter(
          (recipe) =>
            (!info.meal ||  // if condition is OK it won't read instruction after
              recipe.recipe.cuisine              
                .includes(info.meal) ) &&
            (!info.city ||
              recipe.user.city
                .toLowerCase()
                .includes(info.city.toLowerCase())) &&
            (!info.date
            || recipe.recipe.date === info.date.toLocaleDateString())
        )
        .map((recipe, index) => (
          <GuestResults info={recipe} key={index} />
        ))
      }
    </div>
  );
}

export default GuestList;
