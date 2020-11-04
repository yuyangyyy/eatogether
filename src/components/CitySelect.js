import React from 'react';

const CitySelect = (props) => {
  const citys = ['Paris', 'Lyon', 'Marseille', 'Nice', 'Lille'];

  return (
    <select onChange={props.changeCity}>
      {citys.map((city) => {
        return <option key={city}>{city}</option>;
      })}
    </select>
  );
};

export default CitySelect;
