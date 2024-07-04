import React, { useEffect, useRef, useState } from "react";
import "./progressBar.css";
const ProgressBar = () => {
  const [percent, setPercent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setPercent((prevValue) => {
        const nextValue = prevValue + 1;
        if (nextValue >= 100) {
          clearInterval(ref.current);
        }
        return nextValue;
      });
    }, 20);

    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div className="progress-container">
      <p className="text">{percent}%</p>
      <div className="section" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
