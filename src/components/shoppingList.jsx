import React, { useState, useRef } from "react";
import "./shoppingList.css";

const ShoppingList = () => {
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef("");
  const option = [
    { value: "Malay", label: "Malay" },
    { value: "Raghu", label: "Raghu" },
    { value: "Amit", label: "Amit" },
    { value: "Mohini", label: "Mohini" },
  ];
  console.log("todoList :>> ", todoList);

  const handleClick = (e) => {
    const value = option[e.target.dataset.id].label;
    setTodoList((prevValue) => {
      return prevValue.includes(value) ? prevValue : [...prevValue, value];
    });
  };

  return (
    <div className="shopping" onBlur={() => setShowList(true)}>
      <input
        name="input"
        type="text"
        className="shopping-input"
        ref={inputRef}
        onChange={(e) => {
          setInput(e.target.value);
          setShowList(true); // Show list whenever input changes
        }}
        onFocus={() => setShowList(true)} // Show list when input is focused
      />

      {showList && (
        <div
          className="shopping-list"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {option
            .filter((item) =>
              item.value.toLowerCase().includes(input.toLowerCase())
            )
            .map((data, index) => {
              return (
                <div data-id={index} key={index}>
                  {data.label}
                </div>
              );
            })}
        </div>
      )}

      <div>
        {todoList.map((data) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setTodoList((prevValue) => {
                  return prevValue.filter((subData) => subData !== data);
                });
              }}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
