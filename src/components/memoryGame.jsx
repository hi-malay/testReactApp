import React, { useEffect, useRef, useState } from "react";
import "./memoryGame.css";
import { useMemo } from "react";
import { useCallback } from "react";
const MemoryGame = ({ count }) => {
  const [randomValue, setArrayRandom] = useState([]);

  useEffect(() => {
    setArrayRandom(() => {
      const randomValueLocal = [];
      for (let i = 0; i < count; i++) {
        randomValueLocal.push({
          data: Math.floor(1 + Math.random() * 10),
          key: i,
          clicked: false,
          match: false,
        });
      }

      return randomValueLocal;
    });
  }, [count]);

  useEffect(() => {
    const filterLength = randomValue.filter((data) => data.clicked).length >= 2;
    if (filterLength) {
      setTimeout(() => {
        setArrayRandom((prevValue) => {
          return prevValue.map((data) =>
            data.clicked ? { ...data, clicked: false, match: false } : data
          );
        });
      }, 2000);
    }
    const filterValue = randomValue.filter((data) => data.clicked);
    console.log("filterValue :>> ", filterValue);
    if (filterLength && filterValue[0]?.data == filterValue[1]?.data) {
      setTimeout(() => {
        setArrayRandom((prevValue) => {
          return prevValue.map((data) =>
            data.clicked ? { ...data, clicked: true, match: true } : data
          );
        });
      }, 0);
    }
  }, [randomValue]);

  const handleClickedMe = (e) => {
    if (randomValue.filter((data) => data.clicked).length >= 2) {
      return;
    }
    const value = e.target.dataset.id;
    setArrayRandom((prevValue) => {
      const modifiedValue = prevValue.map((data) =>
        data.key == value ? { ...data, clicked: !data.clicked } : data
      );
      return modifiedValue;
    });
  };

  return (
    <div className="memory-container" onClick={handleClickedMe}>
      {randomValue.map((data) => {
        return data?.match ? (
          ""
        ) : (
          <div className={`memory-box`} data-id={data.key}>
            {data.clicked ? data.data : ""}
          </div>
        );
      })}
    </div>
  );
};

export default MemoryGame;
