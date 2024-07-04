import React from "react";
import { useState } from "react";

const AddSumAvatarAi = () => {
  const [addInput, setAddInput] = useState([
    { valueA: "0", valueB: "0", key: 1 },
  ]);

  return (
    <div>
      {addInput.map((data, index) => {
        const addInputRow = addInput.find(
          (subData) => subData.key === data.key
        );
        return (
          <div key={index}>
            <input
              type="number"
              value={data.valueA}
              onChange={(e) => {
                setAddInput((currentInputs) =>
                  currentInputs.map((input) =>
                    input.key === data.key
                      ? { ...input, valueA: e.target.value }
                      : input
                  )
                );
              }}
            />{" "}
            <input
              type="number"
              value={data.valueB}
              onChange={(e) => {
                setAddInput((currentInputs) =>
                  currentInputs.map((input) =>
                    input.key === data.key
                      ? { ...input, valueB: e.target.value }
                      : input
                  )
                );
              }}
            />
            {addInputRow.valueA && addInputRow.valueB
              ? parseInt(addInputRow.valueA) + parseInt(addInputRow.valueB)
              : ""}
            <br />
          </div>
        );
      })}
      <br />
      {addInput.reduce((acc, item) => {
        return acc + parseInt(item.valueA);
      }, 0)}
      <br />
      {addInput.reduce((acc, item) => {
        return acc + parseInt(item.valueB);
      }, 0)}
      <br />
      {addInput.reduce((acc, item) => {
        return acc + parseInt(item.valueA) + parseInt(item.valueB);
      }, 0)}
      <button
        onClick={() => {
          setAddInput((prevValue) => {
            return [
              ...prevValue,
              { valueA: "0", valueB: "0", key: prevValue.length + 1 },
            ];
          });
        }}
      >
        ADD Input
      </button>
    </div>
  );
};

export default AddSumAvatarAi;
