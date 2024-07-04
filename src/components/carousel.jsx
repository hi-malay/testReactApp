import React from "react";
import { useState } from "react";
import "./carousel.css";
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div>
      <div className="carousel-component">
        <span
          className="arrow"
          onClick={() => {
            setCurrentImageIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );
          }}
        >
          L
        </span>
        <div className="carousel-slide">
          <img src={images[currentImageIndex]} alt="image-tag" />
        </div>
        <span
          className="arrow"
          onClick={() => {
            setCurrentImageIndex((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );
          }}
        >
          R
        </span>
      </div>
    </div>
  );
};

export default Carousel;
