import React from "react";
import "./Commerce.css";

import ten from "../Assets/ten.jpeg";
import elevan from "../Assets/eleven.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function Blog() {
  return (
    <>
      <div class="bMain">
        <div class="mleft">
          <h1>Blogs</h1>
          <hr />
          <h2>News & Updates</h2>
          <div class="arrows">
            <h2>
              {" "}
              <KeyboardBackspaceIcon />
            </h2>
            <h2>
              {" "}
              <ArrowRightAltIcon />
            </h2>
          </div>
        </div>
        <div class="mright">
          <div class="cards">
            <img src={ten} alt="" />
            <p>
              {" "}
              <CalendarMonthIcon /> 25 jul,2024
            </p>
            <h3>Decoding Rera Carpet Area...</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, qui. Doloremque provident distinctio obcaecati illum.
              Rem recusandae nostrum architecto sapiente vel cupiditate in
              asperiores eveniet quaerat a modi debitis fuga labore, quidem
              obcaecati reprehenderit!
            </p>
            <h4>
              {" "}
              <li> Read more...</li>
            </h4>
          </div>
        </div>

        <div class="mright">
          <div class="cards">
            <img src={elevan} alt="" />
            <p>
              {" "}
              <CalendarMonthIcon /> 25 jul,2024
            </p>
            <h3>Impact of AI on India Startups...</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, qui. Doloremque provident distinctio obcaecati illum.
              Rem recusandae nostrum architecto sapiente vel cupiditate in
              asperiores eveniet quaerat a modi debitis fuga labore, quidem
              obcaecati reprehenderit!
            </p>
            <h4>
              {" "}
              <li> Read more...</li>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
