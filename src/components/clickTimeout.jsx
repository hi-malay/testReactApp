import React, { useEffect, useState } from "react";
import "./clickTimeout.css";

export const ClickTimeout = () => {
  const [state, setState] = useState([]);
  const changeColor = (data) => {
    setState((prevValue) => {
      return [...prevValue].includes(data)
        ? [...prevValue].filter((subData) => subData !== data)
        : [...prevValue, data];
    });
  };

  useEffect(() => {
    if (state.length === 7) {
      const intervalId = setInterval(() => {
        setState((prevValue) => {
          prevValue.pop();
          return [...prevValue];
        });

        if (state.length === 0) {
          clearInterval(intervalId); // Clear the interval if the array is empty
          console.log("Array is empty. Stopping interval.");
        }
      }, 300);
    }
  }, [state]);
  return (
    <div className="container">
      {[...Array(7).keys()].map((data, index) => {
        return (
          <div
            onClick={() => changeColor(data)}
            className={`box ${state.includes(data) ? "green" : ""}`}
          ></div>
        );
      })}
    </div>
  );
};
