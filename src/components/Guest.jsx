import React, { useState} from "react";

import GuestResult from "./Guest-Result/GuestResult";
import "./Guest.css";


const Guest = () => {
  const [info, setInfo] = useState({
    meal: "",
    city: "",
  });
  const [result, setResult] = useState("");

  const changeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setResult(info);
  };
  console.log(result);
  return (
    <div>
      <form onSubmit={submit}>
        <label>Tpe de repas</label>
        <input
          type="text"
          value={info.meal}
          name="meal"
          onChange={changeInfo}
        />
        <label>Ville</label>
        <input
          type="text"
          value={info.city}
          name="city"
          onChange={changeInfo}
        />
        <input type="submit" value="send" />
      </form>

      <div>
        <GuestResult info={result} />
      </div>
    </div>
  );
};

export default Guest;
