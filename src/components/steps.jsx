import React, { useState } from "react";
import "./steps.css";
const Steps = () => {
  const [step, setStep] = useState({ 1: { traversed: "done" } });
  const numberOfSteps = [
    { name: 1, index: 1 },
    { name: 2, index: 2 },
    { name: 3, index: 3 },
    { name: 4, index: 4 },
  ];
  console.log("step22 :>> ", step);
  return (
    <div className="steps-container">
      {numberOfSteps.map((data, index) => {
        return (
          <React.Fragment key={data.index}>
            <div className={`circle ${step[data.index] ? "done" : ""}`}>
              {step[data.index] ? "D" : data.name}
            </div>

            {index + 1 === numberOfSteps.length ? (
              ""
            ) : (
              <div className={`line ${step[data.index + 1] ? "done" : ""}`} />
            )}
          </React.Fragment>
        );
      })}

      <button
        onClick={() => {
          setStep((prev) => {
            return Object.keys(prev).length < numberOfSteps.length
              ? {
                  ...prev,
                  [Object.keys(prev).length + 1]: { traversed: true },
                }
              : { ...prev };
          });
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Steps;
