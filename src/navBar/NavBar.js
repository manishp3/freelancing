import React from "react";
import "./NavBar.css";

// import one from "../Assets/one.png";
import CallIcon from "@mui/icons-material/Call";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Navbar() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Shilp</h1>
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Commercial</li>
            <li>Residencial</li>
            <li>Plots</li>
            <li>Silp Foundation</li>
          </ul>
        </div>
        <div class="call">
          <button>Enquiry Now</button>
          <CallIcon className="icon" style={{ cursor: "pointer" }} />
          <MenuOpenIcon className="icon" style={{ cursor: "pointer" }} />
        </div>
        <WhatsAppIcon className="whatsap_icon" />
      </div>
    </>
  );
}

export default Navbar;
