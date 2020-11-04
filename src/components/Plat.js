import React from 'react';

// class Plat extends React.Component {
//   render() {
//     return (
//       <div>
//         <label htmlFor="text">Meal</label>
//         <br></br>
//         <select name="text" id="text-select">
//           <option value=" "> --Choose a meal --</option>
//           <option value="plat">Meal french</option>
//           <option value="plat">Meal indian</option>
//           <option value="plat">Meal italian</option>
//         </select>
//       </div>
//     );
//   }
// }

const Plat = (props) => {
  console.log(props);
  const plats = ['French', 'Indien', 'Italien', 'Mexican'];
  return (
    <select onChange={props.changePlat}>
      {plats.map((plat) => {
        return <option key={plat}>{plat}</option>;
      })}
    </select>
  );
};

export default Plat;
