import React from "react";
import "./Chessboard.css"; // Make sure to import the CSS for styling
import { useState } from "react";

const Chessboard = () => {
  const size = 8; // Define the size of the chessboard
  let board = [];
  const [mouseDownKey, setMouseDownKeySum] = useState([]);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Alternate colors based on the sum of the current row and column indexes
      const isDark = (i + j) % 2 === 1;
      board.push(
        <div
          className={`square ${isDark ? "dark" : "light"} ${
            mouseDownKey.includes("" + i + j) ? "hoverColor" : ""
          }`}
          key={`${i}-${j}`}
          onMouseEnter={() => {
            if ((i + j) % 2 === 0) {
              setMouseDownKeySum(["" + i + j]);
            }
          }}
          onMouseLeave={() => {
            setMouseDownKeySum([]);
          }}
        >
          {i}+{j}
        </div>
      );
    }
  }

  return <div className="chessboard">{board}</div>;
};

export default Chessboard;
