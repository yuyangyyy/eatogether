import React from 'react';
import {city} from './Guest/cityList'

const CitySelect = (props) => {


  return (
    <select className="guest-city" onChange={props.changeCity}>
      {city.map((citys) => {
        return <option key={citys}>{citys}</option>;
      })}
    </select>
  );
};

export default CitySelect;
