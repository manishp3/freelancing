import React from "react";
import "./Commerce.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Testimo() {
  return (
    <>
      <div class="mainT">
        <div className="con">
          <hr />
          <h1>Testimonials</h1>
          <hr />
          <p>What People are saying</p>
        </div>
        <div class="containerT">
          <div class="leftTT">
            <KeyboardBackspaceIcon />
          </div>
          <div class="para">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              porro quibusdam dicta est qui dolorum deserunt maiores, eum
              dolores voluptate assumenda adipisci nisi ullam quasi sed
              voluptatibus eos nam totam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur nulla quasi suscipit delectus
              perferendis quo facilis. Vel sed temporibus numquam.
            </p>
          </div>
          <div class="rightT">
            <ArrowRightAltIcon />
          </div>
        </div>
        <div class="hrds">
          <h3>Aspen Rhiel Madsen</h3>
          <p>Marketing Executive</p>
        </div>
        <div class="follow">
          <p>Follow Us on</p>
          <LinkedInIcon className="Icons" />
          <TwitterIcon className="Icons" />
          <YouTubeIcon className="Icons" />
          <InstagramIcon className="Icons" />
          <FacebookIcon className="Icons" />
        </div>
      </div>
    </>
  );
}

export default Testimo;
