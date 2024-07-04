import React, { useState } from "react";
import "./randomCircle.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RandomCircle = () => {
  const [circles, setCircles] = useState([]);

  const handleClick = (event) => {
    const circleSize = Math.floor(Math.random() * 100) + 20; // Random size between 20 and 120
    const newCircle = {
      id: circles.length,
      size: circleSize,
      radius: circleSize / 2,
      left: event.clientX,
      top: event.clientY,
      color: getRandomColor(),
    };

    let intersectingCircles = [];
    const isIntersecting = circles.some((circle) => {
      const distance = Math.hypot(
        circle.top - newCircle.top,
        circle.left - newCircle.left
      );
      const intersects = distance < circle.radius + newCircle.radius;
      if (intersects) {
        intersectingCircles.push(circle.id);
      }
      return intersects;
    });

    if (isIntersecting) {
      alert("Circles intersect!");
      setCircles((prevCircles) =>
        prevCircles.map((circle) =>
          intersectingCircles.includes(circle.id)
            ? { ...circle, color: "red" }
            : circle
        )
      );
    }

    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  return (
    <div className="container" onClick={handleClick}>
      {circles.map((data, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: data.size,
            height: data.size,
            borderRadius: "50%",
            backgroundColor: data.color,
            top: data.top - data.size / 2,
            left: data.left - data.size / 2,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RandomCircle;
