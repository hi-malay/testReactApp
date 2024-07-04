import React, { useState } from "react";
import "./dragAndDrop.css";

function DragAndDrop() {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseDown = (e) => {
    setDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="drag-anywhere">
      <div
        className="drag-anywhere-content"
        onMouseDown={handleMouseDown}
        style={{
          left: position.x,
          top: position.y,
          position: "absolute",
        }}
      >
        Drag me
      </div>
    </div>
  );
}

export default DragAndDrop;
