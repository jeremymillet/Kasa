import React, { useState } from "react";
import "./Carousel.scss";
import Previous from "../../asset/previous.svg";
import Next from "../../asset/next.svg";



function Carousel({ picture }) {
  console.log(picture.length);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % picture.length;
    setCurrentImageIndex(newIndex);
  };

  const goToPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + picture.length) % picture.length;
    setCurrentImageIndex(newIndex);
  };
  
  return (
    <section className="carousel">
      <div className="carousel-overlay"></div>
      {picture.map((image, index) => (
        <img
          key={index}
          className={`carousel-img ${
            currentImageIndex === index ? "active" : ""
          }`}
          src={image}
          alt="Carousel"
        />
      ))}
      <div className={`carousel-button-container ${picture.length === 1?'none':''} `}>
        <img
          className="carousel-previous-btn"
          onClick={goToPreviousImage}
          src={Previous}
          alt=""
        />
        <p className="carousel-counter">
          {[currentImageIndex + 1]}/{picture.length}
        </p>
        <img
          className="carousel-next-btn"
          onClick={goToNextImage}
          src={Next}
          alt=""
        />
      </div>
    </section>
  );
}

export default Carousel;
