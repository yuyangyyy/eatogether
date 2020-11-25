import React, { useContext } from 'react';
import { UserContext } from '../App';
import './RecapResult.css';

const RecapResult = ({ selectRecipe, dateCity}) => {
const [city,date] = dateCity
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

  return (
    <div className="recap-container">
      <div className="recap-result">
        <p className="recap-invit">Your Invitation</p>

        <img
          className="Recap-img"
          src={selectRecipe.image}
          alt={selectRecipe.name}
        />

        <div className="recap-info">
          <h3 className="recapnomplat">{selectRecipe.name}</h3>
          <p>
            Name :
            {userInfo.userName.firstName &&
              userInfo.userName.firstName + ' ' + userInfo.userName.lastName}
          </p>
          <p>Email:{userInfo.userName.email}</p>
          <p>Date:{date}</p>
          <p>City:{city}</p>
        </div>
      </div>
    </div>
  );
};

export default RecapResult;
