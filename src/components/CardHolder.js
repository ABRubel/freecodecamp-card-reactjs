import React from "react";
import "../App.css";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import Interest from "./Interest";
function CardHolder() {
  return (
    <div className="card-holder">
      <Card />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default CardHolder;
