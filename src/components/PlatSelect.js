import React from 'react';

import{foodType} from "./SearchRecipe/foodList"

const PlatSelect = (props) => {
 

  return (
    <select className="guest-plat" onChange={props.changePlat}>
      <option>Type of meal</option>
      {foodType.map((plat) => {
        return <option key={plat}>{plat}</option>;
      })}
    </select>
  );
};

export default PlatSelect;
