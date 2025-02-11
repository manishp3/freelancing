import React from "react";
import "./Service.css";
import third from "../Assets/third.png";
import fourth from "../Assets/four.png";
import five from "../Assets/five.png";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import EmailIcon from "@mui/icons-material/Email";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
const About = () => {
  return (
    <>
      <div class="mainA">
        <div class="leftA">
          <h1>SHILP</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            facilis hic corrupti in ipsam dicta totam, dolore et iusto porro.
          </p>
        </div>
        <div class="centerA">
          <p style={{ fontSize: "24px" }}>Quicks</p>
          <p>Home</p>
          <p>Commercial</p>
          <p>Residential</p>
          <p>Plots</p>
          <p>About Us</p>
        </div>
        <div class="rightA">
          <p>Contact us</p>
          <div class="cols">
          <div className="colsA">
            <EditLocationIcon />
            <p>Shilp House,Rajpath Road,Opposite rajpath,203,gift City</p>
          </div>
          <div className="colsA">
            <MobileScreenShareIcon />
            <p>+91 704360699</p>
            
            <p>+91 9657362</p>
          </div>
          <div className="colsA">
            <EmailIcon />
            <p>shilp70@gmail.com</p>
          </div>
          </div>
        </div>

      </div>
      <div class="hr">
        <hr/>
      </div>
      <div class="footer">
        <div class="leftF">
          &copy; {new Date().getFullYear()}. All Rights Reserved
        </div>
        <div class="rightF">
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default About;
