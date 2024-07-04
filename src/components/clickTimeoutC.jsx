import React, { useEffect, useState } from "react";
import "./clickTimeoutC.css";

export const CheckTimeOutC = () => {
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
    <div className="container-box">
      <div className="row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
      <div className="row">
        <div className="column"></div>
      </div>
      <div className="row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </div>
  );
};
