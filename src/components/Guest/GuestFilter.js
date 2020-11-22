import React, { useState} from "react";

import GuestList from "./GuestList";
import "./Guest.css";


const GuestFilter = () => {
  const [info, setInfo] = useState({
    meal: "",
    city: "",
    date : ""
  });
  const [result, setResult] = useState("");
  


  const changeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setResult(info);
    
  };
  
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
        <label>Date</label>
         <input
          type="text"
          value={info.date}
          name="date"
         
          onChange={changeInfo}
        />
        <input type="submit" value="search" />
      </form>

      <div>
        <GuestList info={result} />
      </div>
    </div>
  );
};

export default GuestFilter;
