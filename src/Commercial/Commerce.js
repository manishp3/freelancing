import React from "react";
import "./Commerce.css";
import seven from "../Assets/seven.png";
import eight from "../Assets/eight.png";
import nine from "../Assets/nine.png";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import HelpIcon from "@mui/icons-material/Help";

const commercialData = [
  {
    id: "01",
    title: "Shilp Centrica",
    location: "Gift City Gandhinagar",
    size: "1326-3538 sq. ft.",
    type: "Commercial",
    img: seven,
  },
  {
    id: "02",
    title: "Shilp Twin Towers",
    location: "Gift City Gandhinagar",
    size: "1725-7835 sq. ft.",
    type: "Commercial",
    img: eight,
  },
  {
    id: "03",
    title: "Shilp Business Gateway",
    location: "Vaishno Devi, S.G Highway",
    size: "2303-5082 sq. ft.",
    type: "Commercial",
    img: nine,
  },
];

function Commerce() {
  return (
    <>
      <div className="headers">
        <h1>Commercial</h1>
        <h2>Workspaces Designed for your Success</h2>
      </div>

      <div className="main">
        {commercialData.map((item, index) => (
          <div className="card" key={index}>
            <div className={`img_card ${index === 0 ? "highlighted" : ""}`}>
              <img src={item.img} alt={item.title} />
              <div className="overlay-icons">
                <HelpIcon className="icon" />
                <ArrowCircleDownIcon className="icon" />
              </div>
            </div>
            <div className="bottom">
              <div className="left11">
                <h2>{item.title}</h2>
                <h1>{item.id}</h1>
              </div>
              <div className="right11">
                <div className="same">
                  <GpsFixedIcon />
                  <p>{item.location}</p>
                </div>
                <div className="same">
                  <HomeWorkIcon />
                  <p>{item.size}</p>
                </div>
                <div className="same">
                  <CreditCardIcon />
                  <p>{item.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Commerce;
