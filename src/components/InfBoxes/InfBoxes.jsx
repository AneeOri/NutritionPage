import React from "react";
import "./InfBoxes.css";

export default function InfBoxes() {
  return (
    <div className="indBoxesContainer">
      <div className="foodContainer">
        <div className="title">
          <nav className="navBar">
            <p>GRASAS</p>
            <p>70%</p>
          </nav>
        </div>
        <div className="foodContent"></div>
      </div>
      <div className="foodContainer">
        <div className="title">
          <nav className="navBar">
            <p>PROTEÍNAS</p>
            <p>20%</p>
          </nav>
        </div>
        <div className="foodContent"></div>
      </div>
      <div className="foodContainer">
        <div className="title">
          <nav className="navBar">
            <p>CARBOHIDRATOS</p>
            <p>10%</p>
          </nav>
        </div>
        <div className="foodContent"></div>
      </div>
    </div>
  );
}
