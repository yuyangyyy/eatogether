import React, { useEffect, useState } from "react";
import "./Carroussel.scss";

const Caroussel = ({ children }) => {
  const [position, setPosition] = useState(0);
  const [move, setMove] = useState(0);
  const [rSize, setRsize] = useState(312);
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

  const dotCreate = async () => {
    const dotsLength = children.length || 4;
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

  useEffect(() => {
    console.log(children.length);
    if (children) {
      children.forEach((x) => {
        console.log(x.ref.current)
        setRsize(x.ref.current.offsetWidth);
      });
    }
    dotCreate().then((res) => setDots(res));
  }, []);

  useEffect(() => {
    const tempDots = [...dots];
    tempDots.map((dot, index) => {
      if (index === position) {
        tempDots[index].bigger = true;
      } else {
        tempDots[index].bigger = false;
      }
    });
    setDots(tempDots);
  }, [position]);

  return (
    <div className="carrou-all">
      <div className="carrou-wrapper">
        <span id="previous" onClick={arrowChange}>
          ➣
        </span>
        <div className="carrou-container">
          <div
            className="carrou-anim"
            style={{ transform: `translateX(${move}px)`, width: `${rSize}px` }}
          >
            {children}
          </div>
        </div>
        <span id="next" onClick={arrowChange}>
          ➣
        </span>
      </div>
      <div className="dots-cont">
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
      </div>
    </div>
  );
};

export default Caroussel;
