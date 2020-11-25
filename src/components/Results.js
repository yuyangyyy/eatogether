import React from 'react';
import {Link} from 'react-router-dom';

const Results = (props) => {
  return (
    <div className="guest-result">
      <div className="guest-available">Your available search</div>

      <div className="guest-result-affiche">
        <div>City : {props.city} </div>
        <div>Date : {props.date.toLocaleDateString()}</div>
        <div>Meal : {props.plat}</div>
      </div>
      <Link to="/Guest">
        <input type="button" value="See more info" />
      </Link>
    </div>
  );
};

export default Results;
