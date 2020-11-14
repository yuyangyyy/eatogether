import React, { useContext } from 'react';
import { UserContext } from '../App';


import './GuestResult.css';

const GuestResult = () => {
  console.log("hi");
  const userInfo = useContext(UserContext);
  console.log(userInfo);

  return (
    <div>test</div>
    // <div className="guest-container">
    //   <div className="guest-result">
    //     <p className="guest-invit">Your Invitation</p>
    //     <img
    //       className="guest-img"
    //       src={selectRecipe.image}
    //       alt={selectRecipe.name}
    //     />

    //     <div className="guest-info">
    //       <p>
    //         Name :{' '}
    //         {userInfo.userName.firstName + ' ' + userInfo.userName.lastName}
    //       </p>
    //       <p>Email:{userInfo.userName.email}</p>
    //       <p>Date:{}</p>
    //       <p>City:{}</p>
    //     </div>
    //   </div>
    // </div>
  )
};

export default GuestResult;
