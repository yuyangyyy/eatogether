import React, { useContext, useState } from "react";
import { UserContext } from "../App";

import "./RecapResult.css";

const RecapResult = ({ selectRecipe, dateCity }) => {
  const [city, date] = dateCity;
  const [anim, setAnim] = useState(false);

  const userInfo = useContext(UserContext);

  React.useEffect(() => {
    const info = {
      user: {
        firstName: userInfo.userName.firstName,
        lastName: userInfo.userName.lastName,
        email: userInfo.userName.email,
        photo: userInfo.userName.photo,
        city: city,
      },
      recipe: {
        recipeName: selectRecipe.name,
        recipeImage: selectRecipe.image,
        date: date,
        cuisine: selectRecipe.cuisine,
      },
    };
    userInfo.getInvitation(info);
  }, [userInfo.userName]);

  React.useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <div className={anim ? "recap-container rec-pop-on" : "recap-container"}>
      <div className="recap-result">
        <h3 className="recap-invit">Your Invitation</h3>

        <img
          className="Recap-img"
          src={selectRecipe.image}
          alt={selectRecipe.name}
        />

        <div className="recap-info">
          <h3 className="recapnomplat">{selectRecipe.name}</h3>
          <p>{date}</p>
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
};

export default RecapResult;
