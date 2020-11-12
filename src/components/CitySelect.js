import React from 'react';

const CitySelect = (props) => {
  const citys = ['Where', 'Paris', 'Lyon', 'Marseille', 'Nice', 'Lille'];

  return (
    <select className="guest-city" onChange={props.changeCity}>
      {citys.map((city) => {
        return <option key={city}>{city}</option>;
      })}
    </select>
  );
};

export default CitySelect;
