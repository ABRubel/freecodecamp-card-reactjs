import React from "react";
import img from "../assets/images/img.jpeg";
function Card() {
  return (
    <div className="card-wrapper">
      <img alt="business man" className="card-img" src={img}></img>
      <h1>Rubel</h1>
      <h3>Full Stack Developer</h3>
      <span>abrubel.com</span>
      <div className="card-btns">
        <button className="email">Email</button>
        <button className="linkedin">LinkedIn</button>
      </div>
    </div>
  );
}

export default Card;
