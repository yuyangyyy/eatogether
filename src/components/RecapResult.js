import React, { useContext } from 'react';
import { UserContext } from '../App';
import './RecapResult.css';

const RecapResult = ({ selectRecipe }) => {
  // const [result, setResult] = useState('');
  const userInfo = useContext(UserContext);
  console.log(userInfo);

  return (
    <div className="recap-container">
      <div className="recap-result">
        <p className="recap-invit">Votre invitation</p>

        <img
          className="Recap-img"
          src={selectRecipe.image}
          alt={selectRecipe.name}
        />

        <div className="recap-info">
          <p>
            Name :{' '}
            {userInfo.userName.firstName + ' ' + userInfo.userName.lastName}
          </p>
          <p>Email:{userInfo.userName.email}</p>
          <p>Date:{}</p>
          <p>City:{}</p>
        </div>
      </div>
    </div>
  );
};

export default RecapResult;
