import React from "react";
import "./UndoCounter.css"; // Make sure to import the CSS for styling
import { useState } from "react";

const UndoCounter = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  const handleCounter = (data) => {
    setHistory((prevValue) => {
      return [...prevValue, `${counter} -> ${counter + data}`];
    });
    setCounter((prevValue) => prevValue + data);
  };
  return (
    <div className="undo-counter">
      <div className="left-counter">
        {[-100, -10, -1].map((data) => {
          return <button onClick={() => handleCounter(data)}>{data}</button>;
        })}
      </div>
      {counter}
      <div className="right-counter">
        {[+100, +10, +1].map((data) => {
          return <button onClick={() => handleCounter(data)}>{data}</button>;
        })}
      </div>

      <div className="history">
        {history.map((data) => {
          return <div>{data}</div>;
        })}
      </div>
    </div>
  );
};

export default UndoCounter;
