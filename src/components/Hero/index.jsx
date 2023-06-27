import "./Hero.scss";
import React from "react";

function Hero(props) {
  const img = props.img;
  return (
    <section className="hero">
      <div
        className={`hero-overlay ${
          img === "/static/media/background-img-2.abab3f12f4cb82f1dfa1.png"
            ? "hero-overlay-about"
            : " "
        }`}
      ></div>
      <img
        className={`hero-img ${
          img === "/static/media/background-img-2.abab3f12f4cb82f1dfa1.png"
            ? "hero-about"
            : ""
        }`}
        src={props.img}
        alt=""
      />
      <h1 className="hero-text">{props.text}</h1>
    </section>
  );
}

export default Hero;
