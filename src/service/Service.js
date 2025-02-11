import React from "react";
import "./Service.css";
import third from "../Assets/third.png";
import fourth from "../Assets/four.png";
import five from "../Assets/five.png";
const Service = () => {
  return (
    <>
      <div class="services">
        <h2>Our Services</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          voluptatibus.
        </p>
        <div class="images">
          <div class="image-container">
            <img className="image_1" src={third} alt="" />
          </div>
          <div class="image-container">
            <img className="image_2" src={fourth} alt="" />
          </div>
          <div class="image-container">
            <img className="image_3" src={five} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
