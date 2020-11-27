import React, { useEffect, useState } from "react";

import "./Carroussel.scss";

const Caroussel = ({ children }) => {
  const [position, setPosition] = useState(0);
  const [move, setMove] = useState(0);
  const [rSize, setRsize] = useState(0);
  const [dots, setDots] = useState([]);

  const arrowChange = (e) => {
    const max = children.length - 1;
    if (e.target.id === "next" && position < max) {
      setPosition(position + 1);
      setMove(move - rSize);
    } else if (e.target.id === "previous" && position > 0) {
      setPosition(position - 1);
      setMove(move + rSize);
    }
  };

  const dotChange = (e) => {
    const dotPos = parseInt(e.target.id);
    setPosition(dotPos);
    setMove(dotPos * rSize * -1);
  };

  const dotCreate = () => {
    const dotsLength = children.length;
    let result = [];
    for (let index = 0; index < dotsLength; index++) {
      result = [
        ...result,
        {
          value: "•",
          bigger: false,
        },
      ];
    }
    return result;
  };

  const cardCreate = () => {
    let cardSize = 0;
    children.forEach((x) => {
      x.ref && (cardSize = x.ref.current.offsetWidth);
    });
    return cardSize;
  };

  useEffect(() => {
    children.length && setRsize(cardCreate());
    setDots(dotCreate());
  }, [children]);

  useEffect(() => {
    const tempDots = [...dots];
    tempDots.map((dot, index) => {
      index === position
        ? (tempDots[index].bigger = true)
        : (tempDots[index].bigger = false);
    });
    setDots(tempDots);
  }, [position]);

  return (
    <div className="carrou-all">
      <div className="carrou-wrapper">
        <div className="carrou-container">
          <div
            className="carrou-anim"
            style={{ transform: `translateX(${move}px)`, width: `${rSize}px` }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="dots-cont">
        <span id="previous" onClick={arrowChange}>
          ➣
        </span>
        {dots.map((dot, index) => {
          return (
            <p
              id={index}
              className={dot.bigger ? "big-dot" : "dot"}
              onClick={dotChange}
              key={index}
            >
              {dot.value}
            </p>
          );
        })}
        <span id="next" onClick={arrowChange}>
          ➣
        </span>
      </div>
    </div>
  );
};

export default Caroussel;
