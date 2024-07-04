import React from "react";
import starIcon from "./starIcon.svg";
import "./star.css";
import { useState } from "react";
const StartRating = ({ count }) => {
  const [starGlow, setStarGlow] = useState({
    1: { value: "no", clicked: false },
    2: { value: "no", clicked: false },
    3: { value: "no", clicked: false },
    4: { value: "no", clicked: false },
  });

  return (
    <div
      className="container-star"
      onMouseLeave={() => {
        setStarGlow((prevValue) => {
          const modifiedObject = { ...prevValue };
          Object.keys(modifiedObject).map((data) => {
            modifiedObject[data] = { value: "no", clicked: false };
          });
          return modifiedObject;
        });
      }}
    >
      {[...Array(count).fill("")].map((_, index) => {
        return (
          <div>
            <img
              src={starIcon}
              width={40}
              height={40}
              onMouseEnter={() => {
                setStarGlow((prevValue) => {
                  return {
                    ...prevValue,
                    [index]: { value: "glow", clicked: false },
                  };
                });
              }}
              onMouseLeave={() => {
                setStarGlow((prevValue) => {
                  return {
                    ...prevValue,
                    [index]: { value: "no", clicked: false },
                  };
                });
              }}
              onClick={() => {
                setStarGlow((prevValue) => {
                  return {
                    ...prevValue,
                    [index]: { value: "glow", clicked: true },
                  };
                });
              }}
              className={starGlow[index]?.value === "glow" ? `glowStar` : ""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StartRating;
