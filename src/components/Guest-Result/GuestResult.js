import React, { useEffect, useState } from "react";

import axios from "axios";

import recipeList from "./RecipeList";

import style from "./GuestResult.module.css";

const GuestResult = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=3";
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        const newUsers = [];
        data.results.map((result) => {
          const infoUser = {
            randomUser: result,
            booking: false,
          };
          newUsers.push(infoUser);
        });
        setUsers(newUsers);
        console.log(users);
      });
  }, []);

  const booked = (e) => {
    const newUsers = [...users]; // use spread Operator if not it won't make new render
    newUsers[e.target.id].booking = !newUsers[e.target.id].booking;
    setUsers(newUsers);
  };

  console.log("render");
  return (
    <div className={style.guestContainer}>
      {users.map((user, index) => (
        <div className={style.guestResult} key={user.randomUser.name.last}>
          <p className={style.guestInvit}> Invitation </p>
          <div className={style.users}>
            <img
              src={user.randomUser.picture.medium}
              alt={user.randomUser.name.first}
            />
            <div>
              <p>
                Name :
                {user.randomUser.name.first + " " + user.randomUser.name.last}
              </p>
              <p>Email:{user.randomUser.email}</p>
              <p>Date: {new Date().toLocaleDateString()}</p>
              <p>City: {user.randomUser.location.city}</p>
            </div>
          </div>
          <div>
            <h3>{recipeList[index].name}</h3>
            <img
              className={style.recipeImage}
              src={recipeList[index].image}
              alt={recipeList[index].name}
            />
          </div>
          <button id={index} onClick={booked}>
            {" "}
            {user.booking ? "Booked" : "Book now"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default GuestResult;
