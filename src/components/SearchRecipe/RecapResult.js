import React from "react";

const RecapResult = ({ selectRecipe }) => {
  return (
    <div>
      <p>Your choose this recipe : {selectRecipe.name} </p>
    </div>
  );
};

export default RecapResult;
